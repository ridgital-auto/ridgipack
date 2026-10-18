/* Dashboard Rangkuman Belajar — Akademi Marketer (penggunaan pribadi) */

/* ---------- tab ---------- */
document.querySelectorAll('.tab').forEach(t => {
  t.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    document.querySelectorAll('.tabpanel').forEach(p => p.classList.add('hidden'));
    document.getElementById('tab-' + t.dataset.tab).classList.remove('hidden');
  });
});

/* ---------- materi ---------- */
const LIB_NAMES = {
  '321766': 'Digital Marketing Fundamental',
  '321773': 'Meta Ads',
  '321776': 'Fast Track & Dropship',
  '367001': 'Fast Track',
  '367194': 'Landing Page',
  '426839': 'Fast Track',
  '457137': 'Ads Content',
  '597307': 'Lainnya'
};
let activeLib = 'all';
let query = '';

function libName(id) { return LIB_NAMES[id] || ('Library ' + id); }

function renderMateri() {
  const data = (window.RINGKASAN || []);
  const chips = document.getElementById('chips');
  const libs = [...new Set(data.map(d => d.library))].sort();
  chips.innerHTML =
    `<button class="chip${activeLib === 'all' ? ' active' : ''}" data-lib="all">Semua</button>` +
    libs.map(l => `<button class="chip${activeLib === l ? ' active' : ''}" data-lib="${l}">${libName(l)}</button>`).join('');
  chips.querySelectorAll('.chip').forEach(c => c.addEventListener('click', () => {
    activeLib = c.dataset.lib; renderMateri();
  }));

  const q = query.toLowerCase();
  const filtered = data.filter(d =>
    (activeLib === 'all' || d.library === activeLib) &&
    (!q || (d.judul + ' ' + d.ringkasan + ' ' + (d.poin_penting || []).join(' ')).toLowerCase().includes(q))
  );
  document.getElementById('stats').textContent =
    `Menampilkan ${filtered.length} dari ${data.length} rangkuman video.`;
  document.getElementById('list').innerHTML = filtered.map(d => `
    <div class="card">
      <h3>${esc(d.judul)}</h3>
      <div class="lib">${esc(libName(d.library))}</div>
      <p class="ringkasan">${esc(d.ringkasan)}</p>
      <ul>${(d.poin_penting || []).map(p => `<li>${esc(p)}</li>`).join('')}</ul>
    </div>`).join('') || '<p class="muted">Tidak ada hasil.</p>';
}
function esc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
document.getElementById('search').addEventListener('input', e => { query = e.target.value; renderMateri(); });
renderMateri();

/* ---------- kalkulator laba-rugi ---------- */
document.getElementById('k-hitung').addEventListener('click', () => {
  const v = id => Number(document.getElementById(id).value) || 0;
  const harga = v('k-harga'), modal = v('k-modal'), ongkir = v('k-ongkir'),
        budget = v('k-budget'), order = v('k-order');
  const margin = harga - modal - ongkir;
  const totalMargin = margin * order;
  const profit = totalMargin - budget;
  const roas = budget > 0 ? (harga * order) / budget : 0;
  const roasImpas = margin > 0 ? harga / margin : 0;
  const el = document.getElementById('k-hasil');
  el.innerHTML = `
    Margin per order: <b>Rp ${margin.toLocaleString('id-ID')}</b><br>
    Total margin (${order} order): <b>Rp ${totalMargin.toLocaleString('id-ID')}</b><br>
    Profit setelah iklan: <b class="${profit >= 0 ? 'ok' : 'bad'}">Rp ${profit.toLocaleString('id-ID')}</b><br>
    ROAS aktual: <b>${roas.toFixed(2)}</b> &nbsp;•&nbsp; ROAS impas (BEP): <b>${roasImpas.toFixed(2)}</b><br>
    <span class="muted">${profit >= 0
      ? '✅ Iklan profit selama ROAS di atas ' + roasImpas.toFixed(2) + '.'
      : '⚠️ Rugi. Turunkan budget, naikkan harga, atau cari produk margin lebih besar.'}</span>`;
});

/* ---------- checklist riset produk ---------- */
const CHECKS = [
  'Cek produk di Shopee — ada yang laris (ribuan terjual)?',
  'Cek Ad Library Meta — ada kompetitor yang iklankan produk sejenis?',
  'Produk punya "killing offer" potensial (diskon, bonus, garansi)?',
  'Margin cukup: harga jual − modal − ongkir − budget iklan masih plus?',
  'Konten iklan tersedia / bisa dibuat (foto, video, testimoni)?',
  'Supplier / gudang (Mengantar) siap kirim cepat?',
  'Sudah siapkan 5 angle iklan berbeda untuk testing?'
];
const checklistEl = document.getElementById('checklist');
CHECKS.forEach((c, i) => {
  const lab = document.createElement('label');
  lab.innerHTML = `<input type="checkbox" data-i="${i}"><span>${c}</span>`;
  checklistEl.appendChild(lab);
});
checklistEl.addEventListener('change', () => {
  const boxes = checklistEl.querySelectorAll('input[type=checkbox]');
  const done = [...boxes].filter(b => b.checked);
  boxes.forEach(b => b.closest('label').classList.toggle('done', b.checked));
  const pct = Math.round(done.length / boxes.length * 100);
  document.getElementById('check-bar').style.width = pct + '%';
  document.getElementById('check-label').textContent =
    `${done.length}/${boxes.length} selesai (${pct}%)` +
    (pct === 100 ? ' — siap gas iklan! 🚀' : '');
});

/* ---------- template CTWA 1-1-5 ---------- */
document.getElementById('t-buat').addEventListener('click', () => {
  const v = id => document.getElementById(id).value.trim();
  const produk = v('t-produk') || '(nama produk)', budget = v('t-budget') || '100000';
  const angles = [v('t-a1'), v('t-a2'), v('t-a3'), v('t-a4'), v('t-a5')].map((a, i) => a || `Angle ${i + 1} (belum diisi)`);
  document.getElementById('t-hasil').innerHTML = `
    <b>Produk:</b> ${esc(produk)}<br>
    <b>Struktur:</b> 1 Campaign (CTWA) → 1 Adset (broad / interest) → 5 Ads<br>
    <b>Budget:</b> Rp ${Number(budget).toLocaleString('id-ID')}/hari<br><br>
    ${angles.map((a, i) => `<b>Ad ${i + 1}:</b> ${esc(a)}<br>`).join('')}
    <br><span class="muted">Jalankan 2–3 hari, matikan ad yang boncos, scale yang profit.</span>`;
});

/* ---------- kamus ---------- */
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
