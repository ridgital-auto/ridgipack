/* Sinkronisasi otomatis ke Google Drive + login.
   - Login sekali via Google → email tersimpan sebagai pemilik/admin
   - Data project + checklist otomatis di-backup ke Drive (debounce 5 detik)
   - Saat login di perangkat lain, data dimuat dari Drive jika lebih baru
   Butuh CLIENT_ID dari Google Cloud Console (disimpan di localStorage). */

(function () {
  const LS_KEY = 'am_drive_cfg_v1';      // {client_id, email, folder_id, file_id}
  const BACKUP_NAME = 'akademi-marketer-backup.json';

  function cfg() {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; }
    catch { return {}; }
  }
  function setCfg(c) { localStorage.setItem(LS_KEY, JSON.stringify(c)); }

  let tokenClient = null;
  let accessToken = null;
  let syncTimer = null;

  /* ---------- UI ---------- */
  function renderAuth() {
    const c = cfg();
    const el = document.getElementById('auth-area');
    if (!el) return;
    if (c.email) {
      el.innerHTML = `<span class="auth-email" title="Login sebagai admin">👤 ${esc(c.email)}</span>
        <button class="btn ghost btn-sm" id="btn-sync">☁️ Sinkron</button>
        <button class="btn ghost btn-sm" id="btn-logout">Keluar</button>
        <span id="sync-status" class="muted" style="font-size:12px"></span>`;
      document.getElementById('btn-sync').onclick = () => backup(true);
      document.getElementById('btn-logout').onclick = () => {
        localStorage.removeItem(LS_KEY);
        accessToken = null;
        renderAuth();
      };
    } else {
      el.innerHTML = `<button class="btn ghost btn-sm" id="btn-login">🔑 Login Google</button>`;
      document.getElementById('btn-login').onclick = startLogin;
    }
  }

  function status(msg) {
    const el = document.getElementById('sync-status');
    if (el) el.textContent = msg;
  }

  /* ---------- LOGIN ---------- */
  function startLogin() {
    const c = cfg();
    if (!c.client_id) {
      const id = prompt('Masukkan Google OAuth Client ID (dari Google Cloud Console).\n\nCara dapat: console.cloud.google.com → buat project → aktifkan Drive API → Credentials → Create OAuth client ID (Web) → tambahkan https://ridgital-auto.github.io sebagai Authorized origin.');
      if (!id || !id.trim()) return;
      c.client_id = id.trim();
      setCfg(c);
    }
    if (typeof google === 'undefined' || !google.accounts || !google.accounts.oauth2) {
      alert('Library Google belum termuat. Cek koneksi internet lalu coba lagi.');
      return;
    }
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: c.client_id,
      scope: 'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/userinfo.email',
      callback: async (resp) => {
        if (resp.error) { alert('Login gagal: ' + resp.error); return; }
        accessToken = resp.access_token;
        try {
          const me = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: { Authorization: 'Bearer ' + accessToken }
          }).then(r => r.json());
          const cc = cfg();
          cc.email = me.email || '';
          setCfg(cc);
          renderAuth();
          status('Login berhasil. Memuat backup…');
          await restore();
        } catch (e) {
          alert('Gagal ambil info akun: ' + e.message);
        }
      }
    });
    tokenClient.requestAccessToken({ prompt: 'consent' });
  }

  /* ---------- DRIVE API ---------- */
  async function driveFetch(path, opts) {
    opts = opts || {};
    opts.headers = Object.assign({ Authorization: 'Bearer ' + accessToken }, opts.headers || {});
    const r = await fetch('https://www.googleapis.com' + path, opts);
    if (!r.ok) throw new Error('Drive API ' + r.status);
    return r.json();
  }

  async function ensureFolder() {
    const c = cfg();
    if (c.folder_id) return c.folder_id;
    const q = encodeURIComponent("name='Akademi Marketer' and mimeType='application/vnd.google-apps.folder' and trashed=false");
    const res = await driveFetch('/drive/v3/files?q=' + q + '&fields=files(id)');
    if (res.files && res.files.length) {
      c.folder_id = res.files[0].id;
    } else {
      const f = await driveFetch('/drive/v3/files?fields=id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Akademi Marketer', mimeType: 'application/vnd.google-apps.folder' })
      });
      c.folder_id = f.id;
    }
    setCfg(c);
    return c.folder_id;
  }

  function collectData() {
    return {
      v: 1,
      saved_at: new Date().toISOString(),
      projects: JSON.parse(localStorage.getItem('am_projects_v1') || '[]')
    };
  }

  function applyData(d) {
    if (!d) return;
    if (d.projects) localStorage.setItem('am_projects_v1', JSON.stringify(d.projects));
    if (typeof renderProjects === 'function') renderProjects();
  }

  async function backup(manual) {
    const c = cfg();
    if (!c.email || !accessToken) {
      if (manual) alert('Login dulu untuk sinkron ke Drive.');
      return;
    }
    try {
      if (manual) status('Menyimpan…');
      const folderId = await ensureFolder();
      const data = JSON.stringify(collectData());
      const cc = cfg();
      if (cc.file_id) {
        // update file yang ada
        const meta = new Blob([JSON.stringify({})], { type: 'application/json' });
        const body = new FormData();
        body.append('metadata', meta, 'x');
        body.append('file', new Blob([data], { type: 'application/json' }));
        await fetch('https://www.googleapis.com/upload/drive/v3/files/' + cc.file_id + '?uploadType=multipart', {
          method: 'PATCH',
          headers: { Authorization: 'Bearer ' + accessToken },
          body
        });
      } else {
        const q = encodeURIComponent(`name='${BACKUP_NAME}' and '${folderId}' in parents and trashed=false`);
        const found = await driveFetch(`/drive/v3/files?q=${q}&fields=files(id,modifiedTime)`);
        let fileId = found.files && found.files[0] && found.files[0].id;
        const metadata = new Blob([JSON.stringify({ name: BACKUP_NAME, parents: [folderId] })], { type: 'application/json' });
        const body = new FormData();
        body.append('metadata', metadata, 'x');
        body.append('file', new Blob([data], { type: 'application/json' }));
        if (fileId) {
          await fetch('https://www.googleapis.com/upload/drive/v3/files/' + fileId + '?uploadType=multipart', {
            method: 'PATCH', headers: { Authorization: 'Bearer ' + accessToken }, body
          });
        } else {
          const up = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id', {
            method: 'POST', headers: { Authorization: 'Bearer ' + accessToken }, body
          }).then(r => r.json());
          fileId = up.id;
        }
        cc.file_id = fileId;
        setCfg(cc);
      }
      status('✅ Tersimpan ' + new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }));
    } catch (e) {
      status('❌ Gagal: ' + e.message);
    }
  }

  async function restore() {
    const c = cfg();
    if (!c.email || !accessToken) return;
    try {
      const folderId = await ensureFolder();
      const cc = cfg();
      let fileId = cc.file_id;
      if (!fileId) {
        const q = encodeURIComponent(`name='${BACKUP_NAME}' and '${folderId}' in parents and trashed=false`);
        const found = await driveFetch(`/drive/v3/files?q=${q}&fields=files(id)`);
        fileId = found.files && found.files[0] && found.files[0].id;
        if (fileId) { cc.file_id = fileId; setCfg(cc); }
      }
      if (!fileId) { status('Belum ada backup.'); return; }
      const data = await driveFetch(`/drive/v3/files/${fileId}?alt=media`).catch(() =>
        fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`, {
          headers: { Authorization: 'Bearer ' + accessToken }
        }).then(r => r.json()));
      const local = collectData();
      const remoteTime = new Date(data.saved_at || 0).getTime();
      const localCount = (local.projects || []).length;
      const remoteCount = (data.projects || []).length;
      // pakai yang lebih baru / lebih lengkap
      if (remoteTime > 0 && (remoteCount >= localCount)) {
        applyData(data);
        status('✅ Dimuat dari Drive');
      } else {
        status('Data lokal dipakai');
      }
    } catch (e) {
      status('❌ Gagal muat: ' + e.message);
    }
  }

  /* ---------- auto-sync: panggil setiap ada perubahan data ---------- */
  window.amScheduleBackup = function () {
    const c = cfg();
    if (!c.email || !accessToken) return;
    clearTimeout(syncTimer);
    syncTimer = setTimeout(() => backup(false), 5000);
    status('⏳ Menyimpan…');
  };

  /* ---------- init ---------- */
  window.addEventListener('load', () => {
    renderAuth();
    // coba silent: jika sudah pernah login, token perlu refresh manual via tombol
  });
  // render ulang setelah DOM siap (script di akhir body)
  if (document.getElementById('auth-area')) renderAuth();
})();
