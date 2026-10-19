/* Dashboard Rangkuman Belajar — Akademi Marketer (penggunaan pribadi) */

/* ============ UTIL ============ */
function esc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ============ TAB ============ */
document.querySelectorAll('.tab').forEach(t => {
  t.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    document.querySelectorAll('.tabpanel').forEach(p => p.classList.add('hidden'));
    document.getElementById('tab-' + t.dataset.tab).classList.remove('hidden');
    if (t.dataset.tab === 'project') renderProjects();
  });
});

/* ============ MATERI ============ */
const LIB_NAMES = {
  '321766': 'Digital Marketing Fundamental',
  '321773': 'Landing Page & Copywriting',
  '321776': 'Meta Ads Inti',
  '367001': 'Fast Track Produk Digital',
  '367194': 'Produk Digital',
  '426839': 'Fast Track Dropship',
  '457137': 'Ads Content Praktik',
  '597307': 'Lainnya'
};
let activeLib = 'all', query = '';
function libName(id) { return LIB_NAMES[id] || ('Library ' + id); }

function renderMateri() {
  const data = (window.RINGKASAN || []);
  const chips = document.getElementById('chips');
  const libs = [...new Set(data.map(d => d.library))].sort();
  chips.innerHTML =
    `<button class="chip${activeLib === 'all' ? ' active' : ''}" data-lib="all">Semua</button>` +
    libs.map(l => `<button class="chip${activeLib === l ? ' active' : ''}" data-lib="${l}">${esc(libName(l))}</button>`).join('');
  chips.querySelectorAll('.chip').forEach(c => c.addEventListener('click', () => {
    activeLib = c.dataset.lib; renderMateri();
  }));
  const q = query.toLowerCase();
  const filtered = data.filter(d =>
    (activeLib === 'all' || d.library === activeLib) &&
    (!q || (d.judul + ' ' + d.ringkasan + ' ' + (d.poin_penting || []).join(' ')).toLowerCase().includes(q))
  );
  document.getElementById('stats').textContent =
    `Menampilkan ${filtered.length} dari ${data.length} rangkuman video. Klik kartu untuk penjelasan detail.`;
  document.getElementById('list').innerHTML = filtered.map((d, i) => {
    const idx = data.indexOf(d);
    return `
    <div class="card clickable" data-idx="${idx}">
      <h3>${esc(d.judul)}</h3>
      <div class="lib">${esc(libName(d.library))}</div>
      <p class="ringkasan preview">${esc(d.ringkasan)}</p>
      <span class="more">Lihat detail →</span>
    </div>`;
  }).join('') || '<p class="muted">Tidak ada hasil.</p>';
  document.querySelectorAll('.card.clickable').forEach(c =>
    c.addEventListener('click', () => openDetail(data[Number(c.dataset.idx)])));
}
document.getElementById('search').addEventListener('input', e => { query = e.target.value; renderMateri(); });

/* ---- infografik sederhana (SVG) untuk konsep kunci ---- */
function infografikUntuk(judul) {
  const j = judul.toLowerCase();
  if (j.includes('ctwa 1-1-5') || (j.includes('kampanye') && j.includes('ctwa'))) {
    return `<div class="infografik"><h4>📊 Struktur CTWA 1-1-5</h4>
      <svg viewBox="0 0 400 220" class="ig">
        <rect x="150" y="10" width="100" height="40" rx="8" class="ig-box"/><text x="200" y="35" class="ig-t">1 Campaign</text>
        <line x1="200" y1="50" x2="200" y2="75" class="ig-line"/>
        <rect x="150" y="75" width="100" height="40" rx="8" class="ig-box"/><text x="200" y="100" class="ig-t">1 Adset</text>
        <line x1="200" y1="115" x2="200" y2="140" class="ig-line"/>
        ${[0,1,2,3,4].map(i => `<rect x="${20 + i * 74}" y="140" width="66" height="36" rx="8" class="ig-box2"/><text x="${53 + i * 74}" y="163" class="ig-t">Ad ${i+1}</text>`).join('')}
      </svg><p class="muted">1 Campaign → 1 Adset → 5 Ads (beda angle tiap ad)</p></div>`;
  }
  if (j.includes('alur') || j.includes('dropship') || j.includes('gudang')) {
    return `<div class="infografik"><h4>📦 Alur Semi-Dropship</h4>
      <svg viewBox="0 0 460 90" class="ig">
        ${['Riset di\nShopee', 'Iklan\nMeta Ads', 'Chat\nWhatsApp', 'Order ke\nMengantar', 'Kirim &\nCair'].map((t, i) => `
          <rect x="${10 + i * 90}" y="15" width="80" height="60" rx="8" class="ig-box"/>
          <text x="${50 + i * 90}" y="42" class="ig-t">${t.split('\n')[0]}</text>
          <text x="${50 + i * 90}" y="60" class="ig-t">${t.split('\n')[1]}</text>
          ${i < 4 ? `<text x="${95 + i * 90}" y="50" class="ig-arrow">→</text>` : ''}`).join('')}
      </svg></div>`;
  }
  if (j.includes('roas') || j.includes('laba rugi') || j.includes('bep') || j.includes('impas')) {
    return `<div class="infografik"><h4>🧮 Rumus ROAS Impas</h4>
      <div class="rumus">ROAS Impas = Harga Jual ÷ Margin per Order</div>
      <p class="muted">Iklan profit jika ROAS aktual &gt; ROAS impas. Coba di tab Tools → Kalkulator.</p></div>`;
  }
  return '';
}

/* ---- modal detail ---- */
const CAT_IMG = {
  '321776': 'img/cat-meta-ads.webp',
  '426839': 'img/cat-dropship.webp',
  '321773': 'img/cat-landing.webp',
  '367194': 'img/cat-landing.webp',
  '321766': 'img/cat-fundamental.webp'
};
function openDetail(d) {
  if (!d) return;
  const ig = infografikUntuk(d.judul);
  const img = CAT_IMG[d.library] ? `<img src="${CAT_IMG[d.library]}" class="detail-img" alt="${esc(libName(d.library))}">` : '';
  document.getElementById('modal-content').innerHTML = `
    ${img}
    <div class="lib">${esc(libName(d.library))}</div>
    <h2>${esc(d.judul)}</h2>
    <h4>📝 Ringkasan</h4>
    <p class="detail-text">${esc(d.ringkasan)}</p>
    ${ig}
    <h4>⭐ Poin Penting</h4>
    <ul class="detail-list">${(d.poin_penting || []).map(p => `<li>${esc(p)}</li>`).join('')}</ul>
    ${(d.langkah_praktis && d.langkah_praktis.length) ? `
    <h4>👣 Langkah Praktis</h4>
    <ol class="detail-list">${d.langkah_praktis.map(p => `<li>${esc(p)}</li>`).join('')}</ol>` : ''}`;
  document.getElementById('modal').classList.remove('hidden');
}
document.getElementById('modal-close').addEventListener('click', () =>
  document.getElementById('modal').classList.add('hidden'));
document.getElementById('modal').addEventListener('click', e => {
  if (e.target.id === 'modal') e.target.classList.add('hidden');
});

renderMateri();

/* ============ PROJECT ============ */
const PKEY = 'am_projects_v1';
function loadProjects() {
  try { return JSON.parse(localStorage.getItem(PKEY)) || []; }
  catch { return []; }
}
function saveProjects(p) {
  localStorage.setItem(PKEY, JSON.stringify(p));
  if (window.amScheduleBackup) window.amScheduleBackup();
}
function uid() { return 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

function projectProgress(p) {
  let total = 0, done = 0;
  p.levels.forEach(l => l.tasks.forEach(t => { total++; if (t.done) done++; }));
  return { total, done, pct: total ? Math.round(done / total * 100) : 0 };
}

function renderProjects() {
  const ps = loadProjects();
  const el = document.getElementById('project-list');
  if (!ps.length) {
    el.innerHTML = `<div class="card"><h3>Belum ada project</h3>
      <p class="muted">Buat project baru dari nol, atau mulai dari template yang sudah disesuaikan dengan materi.</p></div>`;
    return;
  }
  el.innerHTML = ps.map(p => {
    const pr = projectProgress(p);
    return `<div class="card">
      <h3>${esc(p.nama)}</h3>
      <p class="muted">${esc(p.deskripsi || '')}</p>
      <div class="progress"><div class="pbar" style="width:${pr.pct}%"></div></div>
      <p class="muted">${pr.done}/${pr.total} tugas • ${pr.pct}%</p>
      <div class="row">
        <button class="btn primary btn-sm" data-act="open" data-id="${p.id}">Buka</button>
        <button class="btn ghost btn-sm" data-act="edit" data-id="${p.id}">✏️ Edit</button>
        <button class="btn danger btn-sm" data-act="del" data-id="${p.id}">🗑️ Hapus</button>
      </div>
    </div>`;
  }).join('');
  el.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
    const { act, id } = b.dataset;
    if (act === 'open') openProject(id);
    if (act === 'edit') editProject(id);
    if (act === 'del' && confirm('Hapus project ini?')) {
      saveProjects(loadProjects().filter(p => p.id !== id));
      renderProjects();
    }
  }));
}

function openProject(id) {
  const p = loadProjects().find(x => x.id === id);
  if (!p) return;
  const pr = projectProgress(p);
  document.getElementById('pmodal-content').innerHTML = `
    <h2>${esc(p.nama)}</h2>
    <p class="muted">${esc(p.deskripsi || '')}</p>
    <div class="progress"><div class="pbar" style="width:${pr.pct}%"></div></div>
    <p class="muted">${pr.done}/${pr.total} tugas selesai (${pr.pct}%)</p>
    ${p.levels.map((l, li) => {
      const ldone = l.tasks.filter(t => t.done).length;
      return `<div class="level">
        <h4>🎚️ ${esc(l.nama)} <span class="muted">(${ldone}/${l.tasks.length})</span></h4>
        ${l.deskripsi ? `<p class="muted">${esc(l.deskripsi)}</p>` : ''}
        ${l.tasks.map((t, ti) => `
          <div class="task ${t.done ? 'done' : ''}" data-li="${li}" data-ti="${ti}">
            <span class="task-check">${t.done ? '✅' : '⬜'}</span>
            <span>${esc(t.text)}</span>
          </div>`).join('')}
      </div>`;
    }).join('')}`;
  document.getElementById('pmodal').classList.remove('hidden');
  // klik task → tampilkan panduan, bukan langsung coret
  document.getElementById('pmodal-content').querySelectorAll('.task').forEach(el =>
    el.addEventListener('click', () => openTaskGuide(id, Number(el.dataset.li), Number(el.dataset.ti))));
}
/* ---- cari panduan dari template berdasarkan teks task (untuk project lama) ---- */
function cariPanduan(text) {
  const ts = window.PROJECT_TEMPLATES || [];
  for (const t of ts)
    for (const l of t.levels)
      for (const tk of l.tasks)
        if (tk.text === text && tk.panduan && tk.panduan.length) return tk.panduan;
  return null;
}

/* ---- panduan per task: klik task → panduan + tombol tandai selesai ---- */
function openTaskGuide(pid, li, ti) {
  const ps = loadProjects();
  const p = ps.find(x => x.id === pid);
  if (!p) return;
  const t = p.levels[li].tasks[ti];
  let panduan = (t.panduan && t.panduan.length) ? t.panduan : cariPanduan(t.text);
  if (!panduan || !panduan.length)
    panduan = ['Ikuti materi terkait di tab 📖 Materi untuk panduan langkah demi langkah.'];
  // simpan panduan yang ditemukan agar tidak dicari ulang
  if ((!t.panduan || !t.panduan.length) && panduan.length > 1) {
    t.panduan = panduan;
    saveProjects(ps);
  }
  document.getElementById('pmodal-content').innerHTML = `
    <button class="btn ghost btn-sm" id="guide-back">← Kembali</button>
    <h2 style="margin-top:10px">${t.done ? '✅' : '📌'} ${esc(t.text)}</h2>
    <p class="muted">${esc(p.levels[li].nama)}</p>
    <h4>👣 Langkah Praktik</h4>
    <ol class="detail-list">${panduan.map(s => `<li>${esc(s)}</li>`).join('')}</ol>
    <div class="row" style="margin-top:16px">
      ${t.done
        ? `<button class="btn ghost" id="guide-undone">↩️ Batalkan selesai</button>`
        : `<button class="btn primary" id="guide-done">✅ Tandai Selesai</button>`}
    </div>`;
  document.getElementById('guide-back').addEventListener('click', () => openProject(pid));
  const doneBtn = document.getElementById('guide-done');
  if (doneBtn) doneBtn.addEventListener('click', () => {
    const ps2 = loadProjects();
    ps2.find(x => x.id === pid).levels[li].tasks[ti].done = true;
    saveProjects(ps2);
    openProject(pid); renderProjects();
  });
  const undoneBtn = document.getElementById('guide-undone');
  if (undoneBtn) undoneBtn.addEventListener('click', () => {
    const ps2 = loadProjects();
    ps2.find(x => x.id === pid).levels[li].tasks[ti].done = false;
    saveProjects(ps2);
    openProject(pid); renderProjects();
  });
}
document.getElementById('pmodal-close').addEventListener('click', () =>
  document.getElementById('pmodal').classList.add('hidden'));
document.getElementById('pmodal').addEventListener('click', e => {
  if (e.target.id === 'pmodal') e.target.classList.add('hidden');
});

function projectForm(p) {
  const isNew = !p;
  p = p || { id: uid(), nama: '', deskripsi: '', levels: [{ nama: 'Level 1', deskripsi: '', tasks: [{ text: '', done: false }] }] };
  document.getElementById('pmodal-content').innerHTML = `
    <h2>${isNew ? '＋ Project Baru' : '✏️ Edit Project'}</h2>
    <label>Nama project <input id="pf-nama" type="text" value="${esc(p.nama)}"></label>
    <label>Deskripsi <input id="pf-desc" type="text" value="${esc(p.deskripsi || '')}"></label>
    <div id="pf-levels">${p.levels.map((l, li) => `
      <div class="pf-level" data-li="${li}">
        <h4>Level ${li + 1} <button class="btn danger btn-sm" data-pf="del-level">hapus</button></h4>
        <label>Nama level <input type="text" data-pf="lname" value="${esc(l.nama)}"></label>
        <label>Deskripsi level <input type="text" data-pf="ldesc" value="${esc(l.deskripsi || '')}"></label>
        <div data-pf="tasks">${l.tasks.map((t, ti) => `
          <div class="pf-task"><input type="text" data-pf="ttext" value="${esc(t.text)}" placeholder="Tugas...">
          <button class="btn danger btn-sm" data-pf="del-task">✕</button></div>`).join('')}</div>
        <button class="btn ghost btn-sm" data-pf="add-task">＋ tugas</button>
      </div>`).join('')}</div>
    <button class="btn ghost btn-sm" id="pf-add-level">＋ level</button>
    <div class="row" style="margin-top:14px"><button class="btn primary" id="pf-save">💾 Simpan</button></div>`;
  document.getElementById('pmodal').classList.remove('hidden');

  const box = document.getElementById('pmodal-content');
  box.addEventListener('click', e => {
    const act = e.target.dataset.pf;
    if (!act) return;
    const lv = e.target.closest('.pf-level');
    if (act === 'add-task') {
      const tw = lv.querySelector('[data-pf=tasks]');
      const d = document.createElement('div');
      d.className = 'pf-task';
      d.innerHTML = `<input type="text" data-pf="ttext" placeholder="Tugas..."><button class="btn danger btn-sm" data-pf="del-task">✕</button>`;
      tw.appendChild(d);
    }
    if (act === 'del-task') e.target.closest('.pf-task').remove();
    if (act === 'del-level') lv.remove();
  });
  document.getElementById('pf-add-level').addEventListener('click', () => {
    const d = document.createElement('div');
    d.className = 'pf-level';
    d.innerHTML = `<h4>Level baru <button class="btn danger btn-sm" data-pf="del-level">hapus</button></h4>
      <label>Nama level <input type="text" data-pf="lname" value=""></label>
      <label>Deskripsi level <input type="text" data-pf="ldesc" value=""></label>
      <div data-pf="tasks"></div><button class="btn ghost btn-sm" data-pf="add-task">＋ tugas</button>`;
    document.getElementById('pf-levels').appendChild(d);
  });
  document.getElementById('pf-save').addEventListener('click', () => {
    const nama = document.getElementById('pf-nama').value.trim();
    if (!nama) { alert('Nama project wajib diisi'); return; }
    const levels = [...box.querySelectorAll('.pf-level')].map(lv => ({
      nama: lv.querySelector('[data-pf=lname]').value.trim() || 'Level',
      deskripsi: lv.querySelector('[data-pf=ldesc]').value.trim(),
      tasks: [...lv.querySelectorAll('[data-pf=ttext]')].map(i => ({ text: i.value.trim(), done: false })).filter(t => t.text)
    })).filter(l => l.tasks.length);
    if (!levels.length) { alert('Minimal 1 level dengan 1 tugas'); return; }
    const ps = loadProjects();
    const ex = ps.findIndex(x => x.id === p.id);
    // pertahankan status done saat edit
    if (ex >= 0) {
      const old = ps[ex];
      levels.forEach((l, li) => l.tasks.forEach((t, ti) => {
        const ot = old.levels[li] && old.levels[li].tasks[ti];
        if (ot && ot.text === t.text) t.done = ot.done;
      }));
      ps[ex] = { ...p, nama, deskripsi: document.getElementById('pf-desc').value.trim(), levels };
    } else {
      ps.push({ ...p, nama, deskripsi: document.getElementById('pf-desc').value.trim(), levels });
    }
    saveProjects(ps);
    document.getElementById('pmodal').classList.add('hidden');
    renderProjects();
  });
}
document.getElementById('btn-new-project').addEventListener('click', () => projectForm(null));
function editProject(id) {
  const p = loadProjects().find(x => x.id === id);
  if (p) projectForm(JSON.parse(JSON.stringify(p)));
}
document.getElementById('btn-from-template').addEventListener('click', () => {
  const ts = window.PROJECT_TEMPLATES || [];
  document.getElementById('pmodal-content').innerHTML = `
    <h2>📋 Pilih Template</h2>
    <p class="muted">Template disusun dari materi kursus. Bisa diedit setelah ditambahkan.</p>
    ${ts.map((t, i) => `<div class="card"><h3>${esc(t.nama)}</h3>
      <p class="muted">${esc(t.deskripsi)}</p>
      <p class="muted">${t.levels.length} level • ${t.levels.reduce((a, l) => a + l.tasks.length, 0)} tugas</p>
      <button class="btn primary btn-sm" data-tpl="${i}">Gunakan template ini</button></div>`).join('')}`;
  document.getElementById('pmodal').classList.remove('hidden');
  document.getElementById('pmodal-content').querySelectorAll('[data-tpl]').forEach(b =>
    b.addEventListener('click', () => {
      const t = ts[Number(b.dataset.tpl)];
      const ps = loadProjects();
      ps.push({
        id: uid(), nama: t.nama, deskripsi: t.deskripsi,
        levels: t.levels.map(l => ({ nama: l.nama, deskripsi: l.deskripsi, tasks: l.tasks.map(tk => ({ text: tk.text, panduan: tk.panduan || [], done: false })) }))
      });
      saveProjects(ps);
      document.getElementById('pmodal').classList.add('hidden');
      renderProjects();
    }));
});

/* ============ TOOLS (kalkulator, checklist, template, kamus) ============ */
document.getElementById('k-hitung').addEventListener('click', () => {
  const v = id => Number(document.getElementById(id).value) || 0;
  const harga = v('k-harga'), modal = v('k-modal'), ongkir = v('k-ongkir'),
        budget = v('k-budget'), order = v('k-order');
  const margin = harga - modal - ongkir;
  const profit = margin * order - budget;
  const roas = budget > 0 ? (harga * order) / budget : 0;
  const roasImpas = margin > 0 ? harga / margin : 0;
  document.getElementById('k-hasil').innerHTML = `
    Margin per order: <b>Rp ${margin.toLocaleString('id-ID')}</b><br>
    Total margin (${order} order): <b>Rp ${(margin * order).toLocaleString('id-ID')}</b><br>
    Profit setelah iklan: <b class="${profit >= 0 ? 'ok' : 'bad'}">Rp ${profit.toLocaleString('id-ID')}</b><br>
    ROAS aktual: <b>${roas.toFixed(2)}</b> • ROAS impas: <b>${roasImpas.toFixed(2)}</b><br>
    <span class="muted">${profit >= 0 ? '✅ Profit selama ROAS di atas ' + roasImpas.toFixed(2) + '.' : '⚠️ Rugi. Turunkan budget atau cari margin lebih besar.'}</span>`;
});
const CHECKS = [
  'Cek produk di Shopee — ada yang laris (ribuan terjual)?',
  'Cek Ad Library Meta — ada kompetitor iklankan produk sejenis?',
  'Produk punya "killing offer" potensial (diskon, bonus, garansi)?',
  'Margin cukup: harga jual − modal − ongkir − budget iklan masih plus?',
  'Konten iklan tersedia / bisa dibuat (foto, video, testimoni)?',
  'Supplier / gudang (Mengantar) siap kirim cepat?',
  'Sudah siapkan 5 angle iklan berbeda untuk testing?'
];
const checklistEl = document.getElementById('checklist');
CHECKS.forEach(c => {
  const lab = document.createElement('label');
  lab.innerHTML = `<input type="checkbox"><span>${c}</span>`;
  checklistEl.appendChild(lab);
});
checklistEl.addEventListener('change', () => {
  const boxes = checklistEl.querySelectorAll('input[type=checkbox]');
  const done = [...boxes].filter(b => b.checked);
  boxes.forEach(b => b.closest('label').classList.toggle('done', b.checked));
  const pct = Math.round(done.length / boxes.length * 100);
  document.getElementById('check-bar').style.width = pct + '%';
  document.getElementById('check-label').textContent =
    `${done.length}/${boxes.length} selesai (${pct}%)` + (pct === 100 ? ' — siap gas iklan! 🚀' : '');
});
document.getElementById('t-buat').addEventListener('click', () => {
  const v = id => document.getElementById(id).value.trim();
  const produk = v('t-produk') || '(nama produk)', budget = v('t-budget') || '100000';
  const angles = [v('t-a1'), v('t-a2'), v('t-a3'), v('t-a4'), v('t-a5')].map((a, i) => a || `Angle ${i + 1} (belum diisi)`);
  document.getElementById('t-hasil').innerHTML = `
    <b>Produk:</b> ${esc(produk)}<br><b>Struktur:</b> 1 Campaign (CTWA) → 1 Adset → 5 Ads<br>
    <b>Budget:</b> Rp ${Number(budget).toLocaleString('id-ID')}/hari<br><br>
    ${angles.map((a, i) => `<b>Ad ${i + 1}:</b> ${esc(a)}<br>`).join('')}
    <br><span class="muted">Jalankan 2–3 hari, matikan yang boncos, scale yang profit.</span>`;
});
const KAMUS = [
  ['Pecah telor', 'Dapat order pertama. Target utama Fast Track 15 hari.'],
  ['Boncos', 'Iklan rugi — pengeluaran lebih besar dari profit.'],
  ['CTWA', 'Click to WhatsApp Ads — iklan yang tombolnya membuka chat WhatsApp.'],
  ['Killing offer', 'Penawaran yang susah ditolak: diskon besar, bonus, garansi.'],
  ['ROAS', 'Return on Ad Spend — pendapatan dibagi biaya iklan.'],
  ['BM', 'Business Manager — dasbor pengelola aset iklan Meta.'],
  ['Whitelist', 'Akun iklan khusus yang disediakan, bebas sewa.'],
  ['Ad Library', 'Perpustakaan iklan Meta untuk riset kompetitor.'],
  ['Pixel', 'Kode pelacak di website untuk ukur konversi & retargeting.'],
  ['Adset', 'Level targeting & budget di struktur campaign Meta Ads.'],
  ['Scale up', 'Naikkan budget/scope iklan yang sudah profit.'],
  ['Angle', 'Sudut pandang konten iklan (masalah, testimoni, promo, dll).'],
  ['Closing', 'Teknik mengubah chat jadi order via WhatsApp.'],
  ['Mengantar', 'Jasa gudang & pengiriman untuk dropship.'],
  ['Landing page', 'Halaman khusus jualan, fokus satu penawaran.']
];
document.getElementById('kamus').innerHTML =
  KAMUS.map(([t, d]) => `<div class="kamus-item"><b>${t}</b><p>${d}</p></div>`).join('');

/* ============ AI ASSISTANT (lokal, berbasis 143 rangkuman) ============ */
function tokens(s) {
  return s.toLowerCase().replace(/[^a-z0-9\u00c0-\u024f\s]/gi, ' ')
    .split(/\s+/).filter(w => w.length > 2);
}
const STOP = new Set(['apa', 'itu', 'yang', 'dan', 'dengan', 'untuk', 'dari', 'bagaimana', 'gimana', 'cara', 'agar', 'biar', 'saya', 'kamu', 'tanya', 'tolong', 'jelaskan', 'adalah', 'ini', 'the', 'bisa', 'tidak', 'nggak']);
function answerQuestion(q) {
  const data = (window.RINGKASAN || []);
  const qt = tokens(q).filter(w => !STOP.has(w));
  if (!qt.length) return { text: 'Coba tanya dengan kata kunci, misalnya "cara riset produk" atau "apa itu ROAS".', sources: [] };
  const scored = data.map(d => {
    const hay = (d.judul + ' ' + d.ringkasan + ' ' + (d.poin_penting || []).join(' ') + ' ' + (d.langkah_praktis || []).join(' ')).toLowerCase();
    let score = 0;
    qt.forEach(w => {
      const n = hay.split(w).length - 1;
      score += n * (d.judul.toLowerCase().includes(w) ? 3 : 1);
    });
    return { d, score };
  }).filter(x => x.score > 0).sort((a, b) => b.score - a.score).slice(0, 4);
  if (!scored.length) return {
    text: 'Saya tidak menemukan materi yang cocok. Coba kata kunci lain seperti "iklan", "produk", "closing", "pixel", atau "landing page".',
    sources: []
  };
  const top = scored[0].d;
  let text = `Berdasarkan materi **"${top.judul}"**:\n\n${top.ringkasan}\n`;
  if (top.poin_penting && top.poin_penting.length)
    text += `\n**Poin penting:**\n` + top.poin_penting.map(p => `• ${p}`).join('\n');
  if (top.langkah_praktis && top.langkah_praktis.length)
    text += `\n\n**Langkah praktis:**\n` + top.langkah_praktis.map((p, i) => `${i + 1}. ${p}`).join('\n');
  if (scored.length > 1)
    text += `\n\n**Materi terkait:** ${scored.slice(1).map(x => `"${x.d.judul}"`).join(', ')}`;
  return { text, sources: scored.map(x => x.d.judul) };
}
function md(t) {
  return esc(t)
    .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
    .replace(/\n/g, '<br>');
}
function addMsg(who, html) {
  const c = document.getElementById('chat');
  const d = document.createElement('div');
  d.className = 'msg ' + who;
  d.innerHTML = html;
  c.appendChild(d);
  c.scrollTop = c.scrollHeight;
}
function ask(q) {
  q = q.trim();
  if (!q) return;
  addMsg('user', esc(q));
  document.getElementById('q').value = '';
  addMsg('ai', '<span class="muted">Mengetik…</span>');
  setTimeout(() => {
    const chat = document.getElementById('chat');
    chat.removeChild(chat.lastChild);
    const a = answerQuestion(q);
    addMsg('ai', md(a.text));
  }, 400);
}
document.getElementById('btn-ask').addEventListener('click', () => ask(document.getElementById('q').value));
document.getElementById('q').addEventListener('keydown', e => { if (e.key === 'Enter') ask(e.target.value); });
document.querySelectorAll('.q-suggest').forEach(b => b.addEventListener('click', () => ask(b.textContent)));
addMsg('ai', 'Halo! 👋 Saya asisten materi Akademi Marketer. Tanya apa saja seputar iklan, produk, closing, landing page — saya jawab berdasarkan 143 rangkuman video.');
