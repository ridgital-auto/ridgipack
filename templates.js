/* Template project berbasis materi Akademi Marketer.
   Setiap template: levels[], setiap level: {nama, deskripsi, tasks[{text, panduan}]} */

window.PROJECT_TEMPLATES = [
  {
    "id": "tpl-fasttrack",
    "nama": "🚀 Fast Track 15 Hari — Pecah Telor",
    "deskripsi": "Ikuti jalur cepat 15 hari dari nol sampai dapat order pertama. Cocok untuk pemula yang baru mulai dropship.",
    "levels": [
      {
        "nama": "Level 1 — Persiapan Akun",
        "deskripsi": "Siapkan semua akun sebelum mulai iklan.",
        "tasks": [
          {
            "text": "Bikin Fanpage Facebook untuk jualan",
            "panduan": [
              "Buka facebook.com/pages dari HP atau laptop, klik tombol 'Buat Halaman'.",
              "Pilih kategori Bisnis atau Brand, lalu isi nama halaman dengan nama tokomu (contoh: Berkah Store).",
              "Upload foto profil (logo toko) dan foto sampul yang terlihat profesional.",
              "Isi deskripsi singkat: jualan apa, untuk siapa, dan cara order.",
              "Tambahkan tombol aksi 'Kirim Pesan' atau 'WhatsApp' di halaman.",
              "Buat 2-3 postingan awal (foto produk + info toko) agar halaman tidak terlihat kosong."
            ]
          },
          {
            "text": "Bikin & setting Business Manager (BM)",
            "panduan": [
              "Buka business.facebook.com, klik 'Buat Akun'.",
              "Isi nama bisnis, namamu, dan email aktif yang sering dibuka.",
              "Buka email verifikasi dan klik link konfirmasi dari Meta.",
              "Masuk ke Pengaturan Bisnis → tambahkan Fanpage tokomu ke dalam BM.",
              "Tambahkan akun iklan ke dalam BM (atau buat akun iklan baru di sini).",
              "Di Pengaturan → Orang, pastikan dirimu berstatus Admin agar punya akses penuh."
            ]
          },
          {
            "text": "Daftar akun iklan whitelist",
            "panduan": [
              "Minta link/formulir pendaftaran whitelist ke penyedia atau mentormu.",
              "Isi data dengan benar: nama lengkap, email, nomor WA aktif, dan nama bisnis.",
              "Tunggu proses verifikasi, biasanya 1-2 hari kerja — jangan daftar berulang-ulang.",
              "Setelah disetujui, hubungkan akun whitelist tersebut ke Business Manager-mu.",
              "Catat ID akun iklan di tempat aman untuk dipakai saat setting campaign nanti."
            ]
          },
          {
            "text": "Install & setting WhatsApp Business (katalog, auto-reply)",
            "panduan": [
              "Download aplikasi WhatsApp Business di Play Store, daftar dengan nomor khusus jualan (bukan nomor pribadi).",
              "Isi Profil Bisnis: nama toko, kategori, alamat, jam operasional, dan deskripsi singkat.",
              "Buka menu Katalog → tambah produk satu per satu dengan foto jelas, harga, dan deskripsi.",
              "Aktifkan Pesan Sapaan (greeting message) untuk setiap chat baru yang masuk.",
              "Aktifkan Pesan di Luar Jam Kerja agar calon pembeli tetap terlayani.",
              "Buat Label chat: 'Chat Baru', 'Follow Up', dan 'Sudah Order' untuk kerapian.",
              "Test dengan chat dari nomor lain untuk memastikan sapaan otomatis berjalan."
            ]
          },
          {
            "text": "Daftar akun Mengantar & setting gudang",
            "panduan": [
              "Buka situs Mengantar, klik Daftar dan isi nama, email, nomor HP, serta alamat lengkap.",
              "Verifikasi akun melalui email atau kode OTP yang dikirim.",
              "Lengkapi profil gudang: alamat penjemputan barang dan nomor HP yang bisa dihubungi kurir.",
              "Isi data rekening bank dengan benar — ini tempat dana COD dicairkan.",
              "Coba tambah 1 produk percobaan untuk memastikan semua setting berfungsi."
            ]
          }
        ]
      },
      {
        "nama": "Level 2 — Riset Produk",
        "deskripsi": "Temukan produk yang layak diiklankan.",
        "tasks": [
          {
            "text": "Riset di Shopee: cari produk dengan ribuan terjual",
            "panduan": [
              "Buka Shopee, ketik kata kunci niche incaranmu (misal: kipas angin leher).",
              "Urutkan hasil pencarian dengan filter 'Terlaris'.",
              "Catat 10 produk teratas: nama, harga, jumlah terjual, dan rating.",
              "Prioritaskan produk dengan 1.000+ terjual dan rating minimal 4.8.",
              "Hindari produk brand besar yang modalnya tinggi dan susah bersaing.",
              "Simpan hasilnya di spreadsheet agar mudah dibandingkan."
            ]
          },
          {
            "text": "Cek Ad Library: ada kompetitor iklankan produk sejenis?",
            "panduan": [
              "Buka facebook.com/ads/library, pilih negara Indonesia.",
              "Ketik kata kunci produk (coba 2-3 variasi kata kunci).",
              "Lihat berapa banyak iklan aktif untuk produk sejenis — catat nama kompetitornya.",
              "Perhatikan iklan yang sudah berjalan lama (berbulan-bulan): itu tanda kemungkinan profit.",
              "Simpan screenshot contoh iklan sebagai referensi angle, bukan untuk dicopy mentah."
            ]
          },
          {
            "text": "Validasi dengan 3-5 kandidat produk",
            "panduan": [
              "Dari hasil riset, pilih 3-5 kandidat terkuat.",
              "Buat tabel perbandingan: nama, harga Shopee, estimasi modal, jumlah kompetitor iklan.",
              "Uji tiap kandidat: apakah menyelesaikan masalah yang jelas? Apakah mudah dipahami dalam 5 detik?",
              "Eliminasi yang bermasalah: margin terlalu tipis, terlalu berat (ongkir mahal), atau terlalu teknis.",
              "Sisakan minimal 2 kandidat final untuk dihitung marginnya."
            ]
          },
          {
            "text": "Hitung margin: harga jual − modal − ongkir minimal Rp45rb",
            "panduan": [
              "Cari tahu modal/HPP: tanya supplier atau estimasi 30-40% dari harga jual.",
              "Estimasi ongkir rata-rata ke kota besar (biasanya Rp10-20rb).",
              "Hitung: Harga jual − modal − ongkir = margin kotor per order.",
              "Pastikan margin kotor minimal Rp45.000 per order.",
              "Gunakan Kalkulator Laba-Rugi di tab Tools untuk simulasi angka.",
              "Kalau margin kurang: naikkan harga jual, cari modal lebih murah, atau ganti produk."
            ]
          },
          {
            "text": "Pilih 1 produk winning untuk fokus",
            "panduan": [
              "Bandingkan kandidat final: margin terbesar + kompetitor paling sedikit + masalah paling jelas.",
              "Pilih SATU produk untuk fokus penuh selama 15 hari ke depan.",
              "Komitmen: jangan gonta-ganti produk di tengah jalan sebelum dapat data.",
              "Catat alasan memilihnya agar tidak goyah saat iklan belum langsung profit.",
              "Siapkan mental: 15 hari ini adalah fase belajar + testing, bukan langsung kaya."
            ]
          }
        ]
      },
      {
        "nama": "Level 3 — Siapkan Offer & Produk",
        "deskripsi": "Bikin penawaran yang susah ditolak.",
        "tasks": [
          {
            "text": "Bikin killing offer (diskon / bonus / gratis ongkir)",
            "panduan": [
              "Tentukan harga normal, lalu buat harga promo dengan diskon 20-30%.",
              "Pilih SATU offer utama: gratis ongkir, beli 1 gratis 1, bonus produk, atau garansi.",
              "Hitung ulang: pastikan setelah offer, margin masih minimal Rp45rb.",
              "Tambahkan urgensi: batasi waktu (promo 3 hari) atau stok (100 pcs pertama).",
              "Tulis offer dalam 1 kalimat sederhana, contoh: 'Beli hari ini, gratis ongkir + bonus pouch!'",
              "Tempel kalimat offer ini di semua materi iklan dan chat WA agar konsisten."
            ]
          },
          {
            "text": "Siapkan konten iklan (foto/video, minimal 5 angle)",
            "panduan": [
              "Tentukan 5 angle berbeda: masalah, solusi, testimoni, unboxing, dan promo.",
              "Siapkan foto produk: minimal 3 foto jelas (tampak depan, detail, dan sedang dipakai).",
              "Buat video pendek 15-30 detik per angle — cukup pakai HP, yang penting jelas.",
              "Untuk tiap angle, tulis 1 kalimat hook pembuka yang bikin orang berhenti scroll.",
              "Pastikan teks di gambar/video tidak lebih dari 20% area agar lolos review iklan.",
              "Simpan rapi: 1 folder per angle agar mudah dipasang ke 5 ads nanti."
            ]
          },
          {
            "text": "Setting produk di Mengantar",
            "panduan": [
              "Login ke dashboard Mengantar, klik 'Tambah Produk'.",
              "Isi nama dan deskripsi produk dengan bahasa yang menjual tapi jujur.",
              "Upload foto produk yang SAMA dengan yang dipakai di iklan.",
              "Isi harga jual sesuai killing offer yang sudah dihitung.",
              "Isi berat dan dimensi produk agar ongkir terhitung akurat.",
              "Atur stok awal, simpan, dan pastikan status produk 'Aktif'."
            ]
          },
          {
            "text": "Setting halaman checkout",
            "panduan": [
              "Buka menu checkout/form order di Mengantar.",
              "Pastikan nama produk, harga, dan offer yang tampil sudah benar.",
              "Tambahkan pilihan ekspedisi pengiriman yang tersedia.",
              "Lengkapi instruksi pembayaran jika memakai transfer manual.",
              "Test sendiri: isi form sebagai pembeli dan pastikan order masuk ke dashboard.",
              "Perbaiki error apa pun SEBELUM iklan dijalankan."
            ]
          }
        ]
      },
      {
        "nama": "Level 4 — Launch Iklan CTWA 1-1-5",
        "deskripsi": "Jalankan iklan pertama.",
        "tasks": [
          {
            "text": "Setting campaign CTWA: 1 campaign, 1 adset, 5 ads",
            "panduan": [
              "Buka Ads Manager, klik 'Buat', pilih objective yang mengarah ke pesan/WhatsApp.",
              "Level campaign: beri nama yang jelas, misal 'CTWA-NamaProduk-Tanggal'.",
              "Level adset: buat 1 adset saja, atur target lokasi, umur, dan jenis kelamin.",
              "Level ads: buat 5 ads, masing-masing memakai 1 angle konten yang berbeda.",
              "Pastikan tombol CTA setiap ad mengarah ke nomor WhatsApp Business-mu.",
              "Cek ulang: 1 campaign → 1 adset → 5 ads, tidak lebih tidak kurang."
            ]
          },
          {
            "text": "Tentukan budget harian sesuai kalkulator",
            "panduan": [
              "Buka Kalkulator Laba-Rugi di tab Tools aplikasi ini.",
              "Masukkan harga jual, modal, ongkir, dan target order per hari.",
              "Lihat rekomendasi budget harian dan ROAS impasnya.",
              "Untuk pemula: mulai dari Rp50-100rb per hari.",
              "Siapkan budget total untuk minimal 3 hari jalan tanpa diutak-atik.",
              "Jangan ubah budget di 2 hari pertama — biarkan algoritma belajar dulu."
            ]
          },
          {
            "text": "Exclude lokasi yang tidak diinginkan",
            "panduan": [
              "Di setting adset, buka bagian Lokasi/Targeting geografis.",
              "Pastikan target utama adalah Indonesia.",
              "Klik 'Kecualikan' dan masukkan daerah yang tidak terjangkau ekspedisi.",
              "Umumnya kecualikan daerah 3T yang ongkirnya sangat mahal atau tidak terlayani.",
              "Simpan setting dan pastikan tidak ada lokasi aneh yang ikut tertarget."
            ]
          },
          {
            "text": "Publish dan biarkan jalan 2-3 hari",
            "panduan": [
              "Cek final: nama campaign, budget, targeting, 5 ads, dan link WhatsApp semuanya benar.",
              "Klik 'Tinjau dan Publikasikan'.",
              "Tunggu status berubah dari 'Dalam Peninjauan' menjadi 'Aktif' (bisa beberapa jam).",
              "JANGAN mengubah apa pun selama 2-3 hari pertama.",
              "Sambil menunggu: siapkan template jawaban cepat untuk chat WA yang masuk."
            ]
          }
        ]
      },
      {
        "nama": "Level 5 — Closing & Evaluasi",
        "deskripsi": "Ubah chat jadi order, baca data, scale.",
        "tasks": [
          {
            "text": "Praktikkan teknik closing di WhatsApp",
            "panduan": [
              "Balas setiap chat maksimal 5 menit setelah masuk — kecepatan = closing.",
              "Sapa ramah dan sebut nama calon pembeli jika terlihat.",
              "Tanyakan kebutuhan spesifik: 'Mau yang warna apa kak?' agar obrolan jalan.",
              "Jelaskan offer dengan singkat dan jelas, jangan bertele-tele.",
              "Berikan urgensi yang jujur: 'Stok promo tinggal 5 kak'.",
              "Minta keputusan langsung: 'Saya bantu proses ordernya sekarang ya?'",
              "Yang belum jadi: follow up di H+1 dan H+3 dengan bahasa sopan."
            ]
          },
          {
            "text": "Catat semua chat masuk & order",
            "panduan": [
              "Buat spreadsheet atau buku catatan sederhana.",
              "Buat kolom: tanggal, nama, chat masuk, sudah follow up?, order/tidak, alasan batal.",
              "Update catatan setiap hari, jangan menumpuk.",
              "Hitung closing rate: jumlah order ÷ jumlah chat masuk × 100%.",
              "Catatan ini jadi bahan utama evaluasi iklan di langkah berikutnya."
            ]
          },
          {
            "text": "Baca data: CTR, CPC, cost per chat",
            "panduan": [
              "Buka Ads Manager, tampilkan kolom metrik per ad.",
              "CTR (link click): standar sehat di atas 1% — di bawah itu kontennya bermasalah.",
              "CPC: bandingkan antar 5 ads, yang termurah berarti paling efisien.",
              "Cost per chat: total spend ÷ jumlah chat WhatsApp yang masuk.",
              "Simpulkan: CTR rendah = masalah konten; chat mahal = masalah targeting atau offer."
            ]
          },
          {
            "text": "Matikan ad yang boncos, scale yang profit",
            "panduan": [
              "Setelah 2-3 hari data terkumpul, matikan ad dengan CTR di bawah 0,5% atau tanpa chat.",
              "Sisakan 1-2 ad terbaik yang menghasilkan chat termurah.",
              "Jika sudah ada order dan profit: naikkan budget 20-30% per hari, jangan langsung 2x lipat.",
              "Buat variasi baru dari ad pemenang (ganti hook atau visualnya).",
              "Ulangi siklus: test → matikan yang jelek → scale yang bagus."
            ]
          },
          {
            "text": "Rayakan pecah telor pertama! 🎉",
            "panduan": [
              "Order pertama = bukti sistemmu berjalan. Rayakan!",
              "Catat tanggal pecah telor sebagai milestone perjalananmu.",
              "Hitung total spend iklan sampai pecah telor untuk bahan evaluasi.",
              "Putuskan langkah berikut: scale produk ini ATAU ulangi riset untuk produk ke-2.",
              "Ceritakan ke mentor/komunitas untuk dapat feedback dan semangat lanjut."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-riset",
    "nama": "🔍 Riset Produk Winning",
    "deskripsi": "Framework sistematis menemukan produk yang laku sebelum keluar budget iklan.",
    "levels": [
      {
        "nama": "Level 1 — Observasi Pasar",
        "deskripsi": "Lihat apa yang sedang laku.",
        "tasks": [
          {
            "text": "Buka Shopee, catat 10 produk dengan penjualan tertinggi di niche incaran",
            "panduan": [
              "Tentukan 1 niche dulu (misal: peralatan dapur, bukan 'semua barang').",
              "Buka Shopee, ketik kata kunci niche, lalu urutkan dengan filter 'Terlaris'.",
              "Catat 10 produk teratas: nama, harga, jumlah terjual, dan rating.",
              "Fokus pada produk dengan 1.000+ terjual sebagai tanda demand nyata.",
              "Tulis semuanya di spreadsheet agar mudah dibandingkan.",
              "Abaikan produk yang jelas-jelas butuh modal besar untuk pemula."
            ]
          },
          {
            "text": "Cek tren: apakah produk musiman atau evergreen?",
            "panduan": [
              "Untuk tiap produk, tanya: dipakai sepanjang tahun atau hanya musim tertentu?",
              "Contoh musiman: jas hujan, parsel lebaran. Contoh evergreen: peralatan dapur, ATK.",
              "Untuk pemula: pilih evergreen agar iklan bisa jalan terus tanpa mati musiman.",
              "Cek Google Trends untuk kata kunci produk: trennya naik, stabil, atau turun?",
              "Hindari produk yang trennya sedang jatuh meski penjualannya masih tinggi."
            ]
          },
          {
            "text": "Catat rentang harga kompetitor",
            "panduan": [
              "Dari 10 produk tadi, catat harga termurah dan termahal.",
              "Hitung harga rata-rata sebagai acuan pasar.",
              "Waspadai segmen harga terlalu murah: biasanya perang harga dan margin tipis.",
              "Ideal: ada ruang menjual 20-30% di atas harga Shopee lewat value offer.",
              "Catat juga variasi harga antar varian/warna sebagai referensi pricing."
            ]
          }
        ]
      },
      {
        "nama": "Level 2 — Validasi Kompetitor",
        "deskripsi": "Pastikan ada demand via iklan.",
        "tasks": [
          {
            "text": "Buka Meta Ad Library, cari produk sejenis",
            "panduan": [
              "Buka facebook.com/ads/library, pilih negara Indonesia.",
              "Ketik kata kunci produk (coba 2-3 variasi kata kunci berbeda).",
              "Aktifkan filter agar hanya tampil iklan yang sedang aktif.",
              "Catat semua kompetitor yang muncul beserta nama halamannya.",
              "Ulangi untuk tiap kandidat produk yang sedang divalidasi."
            ]
          },
          {
            "text": "Hitung berapa kompetitor yang aktif beriklan",
            "panduan": [
              "Hitung jumlah kompetitor UNIK, bukan jumlah iklan.",
              "0 kompetitor: waspada — bisa jadi tidak ada demand, atau justru peluang biru.",
              "1-5 kompetitor: kondisi ideal, ada demand tapi belum terlalu ramai.",
              "10+ kompetitor: pasar ramai, butuh angle dan offer yang sangat berbeda.",
              "Catat juga sejak kapan iklan mereka berjalan: yang tahan berbulan-bulan kemungkinan profit."
            ]
          },
          {
            "text": "Analisis angle iklan mereka (masalah apa yang diangkat?)",
            "panduan": [
              "Buka 3-5 iklan kompetitor dan tonton/perhatikan baik-baik.",
              "Catat: masalah apa yang diangkat di 3 detik pertama?",
              "Catat offer yang mereka tawarkan (diskon? bonus? garansi?).",
              "Perhatikan CTA-nya mengarah ke mana: WA, website, atau marketplace?",
              "Cari pola: angle mana yang paling sering dipakai kompetitor?",
              "Jadikan referensi inspirasi — jangan copy mentah-mentah."
            ]
          },
          {
            "text": "Cari celah: apa yang bisa kamu tawarkan lebih baik?",
            "panduan": [
              "Bandingkan offer kompetitor dengan yang kamu mampu buat.",
              "Celah bisa dari: harga, bonus, garansi, kecepatan kirim, testimoni, atau bundling.",
              "Tulis 3 ide diferensiasi yang konkret dan spesifik.",
              "Pilih 1 yang paling kuat DAN realistis untuk kamu eksekusi.",
              "Contoh: kompetitor tanpa garansi → kamu berani kasih garansi 30 hari."
            ]
          }
        ]
      },
      {
        "nama": "Level 3 — Hitung & Putuskan",
        "deskripsi": "Angka tidak bohong.",
        "tasks": [
          {
            "text": "Hitung HPP + ongkir + budget iklan estimasi",
            "panduan": [
              "HPP: tanya langsung ke supplier, atau estimasi 30-40% dari harga jual.",
              "Ongkir: cek tarif ekspedisi ke beberapa kota besar, ambil rata-ratanya.",
              "Budget iklan per order: untuk awal estimasi Rp15-25rb per chat/order.",
              "Jumlahkan: HPP + ongkir + budget iklan = total biaya per order.",
              "Gunakan Kalkulator Laba-Rugi di tab Tools aplikasi ini agar akurat.",
              "Simpan hasil hitungan untuk tiap kandidat produk."
            ]
          },
          {
            "text": "Pastikan margin bersih masih menarik",
            "panduan": [
              "Margin bersih = harga jual − total biaya per order.",
              "Patokan minimal: Rp45.000 per order (standar Fast Track).",
              "Ideal: Rp60-100rb agar ada ruang untuk testing dan scale.",
              "Margin tipis? Opsi: naikkan harga jual, cari HPP lebih murah, atau ganti produk.",
              "Jangan paksakan produk dengan margin di bawah Rp30rb — rawan boncos."
            ]
          },
          {
            "text": "Cek ketersediaan supplier/stok",
            "panduan": [
              "Pastikan supplier bisa pasok konsisten, bukan stok sisa yang sekali habis.",
              "Tanyakan: minimal order berapa? Berapa lama waktu restock?",
              "Untuk dropship via Mengantar: pastikan produk bisa dititip di gudang mereka.",
              "Hindari produk yang ketersediaan stoknya tidak pasti.",
              "Kalau bisa, siapkan 1 supplier cadangan untuk jaga-jaga."
            ]
          },
          {
            "text": "Putuskan: GAS atau cari produk lain",
            "panduan": [
              "Review semua data: demand Shopee, kompetitor iklan, margin, dan stok.",
              "Semua checklist hijau → GAS, lanjut ke tahap setup offer dan iklan.",
              "Ada 1-2 yang merah → timbang: masih bisa diperbaiki atau lebih baik cari lain?",
              "Batasi waktu riset maksimal 3-5 hari — jangan terjebak analisis terus.",
              "Tulis keputusan final + tanggalnya, lalu komitmen jalan minimal 15 hari."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-metaads",
    "nama": "📣 Master Meta Ads dari Nol",
    "deskripsi": "Kuasai Meta Ads dari mindset sampai strategi scale up.",
    "levels": [
      {
        "nama": "Level 1 — Mindset & Fundamental",
        "deskripsi": "Pondasi berpikir yang benar.",
        "tasks": [
          {
            "text": "Pahami: Meta Ads bukan judi, tapi sistem",
            "panduan": [
              "Sadari bahwa iklan Meta bekerja dengan sistem lelang dan pembelajaran mesin, bukan keberuntungan.",
              "Beri waktu setiap campaign baru untuk belajar (learning phase) sebelum menilai hasilnya, biasanya 2-3 hari.",
              "Ambil semua keputusan berdasarkan data di dashboard, bukan berdasarkan perasaan.",
              "Set ekspektasi sejak awal: fase testing biasanya rugi (boncos), anggap itu biaya belajar.",
              "Catat semua data penting sejak hari pertama: budget keluar, klik, chat, dan order.",
              "Saat hasil jelek, perbaiki satu hal dalam satu waktu, jangan ubah semuanya sekaligus agar tahu apa yang berpengaruh."
            ]
          },
          {
            "text": "Pahami cara kerja algoritma Meta",
            "panduan": [
              "Pahami bahwa algoritma membaca minat pengguna dari aktivitas mereka di Facebook dan Instagram.",
              "Ketahui bahwa riwayat belanja seseorang memengaruhi iklan seharga apa yang ditampilkan ke dia.",
              "Manfaatkan kemampuan Meta mencari orang yang mirip dengan pelangganmu (lookalike audience).",
              "Jangan membuat targeting terlalu sempit di awal, beri ruang agar algoritma bisa belajar.",
              "Fokus bikin konten iklan yang menarik, karena konten bagus membantu algoritma menemukan pembeli.",
              "Pasang pixel sejak awal agar data terkumpul dan algoritma makin pintar seiring waktu."
            ]
          },
          {
            "text": "Pahami objective campaign yang tepat",
            "panduan": [
              "Ketahui bahwa objective adalah tujuan yang kita minta ke Meta: awareness, traffic, engagement, leads, atau sales.",
              "Sadari risiko salah pilih objective: iklan bisa murah tapi tidak menghasilkan penjualan.",
              "Untuk jualan produk fisik, pilih objective Sales atau Engagement (CTWA) sesuai journey yang dipakai.",
              "Hindari objective Engagement jika tujuanmu penjualan, karena audiensnya suka interaksi bukan beli.",
              "Sesuaikan objective dengan aksi yang kamu inginkan dari pengunjung.",
              "Jangan ganti objective di tengah campaign berjalan, karena algoritma harus belajar dari nol lagi."
            ]
          },
          {
            "text": "Bedakan Campaign, Adset, dan Ads",
            "panduan": [
              "Pahami Campaign sebagai level tujuan: di sinilah objective ditentukan.",
              "Pahami Adset sebagai level targeting: di sinilah diatur siapa targetnya, berapa budgetnya, dan kapan tayang.",
              "Pahami Ads sebagai level konten: gambar/video dan teks iklan ada di sini.",
              "Ingat strukturnya: 1 campaign bisa berisi banyak adset, tiap adset bisa berisi banyak ads.",
              "Atur budget di level adset, kecuali memakai CBO yang budgetnya di level campaign.",
              "Saat testing, ubah hanya satu level dalam satu waktu agar hasilnya bisa dibaca dengan jelas."
            ]
          }
        ]
      },
      {
        "nama": "Level 2 — Setup Teknis",
        "deskripsi": "Siapkan infrastruktur iklan.",
        "tasks": [
          {
            "text": "Bikin BM & Fanpage dengan benar",
            "panduan": [
              "Buka business.facebook.com dan buat Business Manager dengan data bisnis yang benar dan lengkap.",
              "Buat Fanpage dari dalam Business Manager, bukan dari akun Facebook pribadi.",
              "Lengkapi profil Fanpage: foto, cover, deskripsi, dan tombol aksi (misal: Kirim Pesan).",
              "Tambahkan admin atau tim dengan peran yang sesuai kebutuhannya saja.",
              "Verifikasi domain website jika kamu punya, agar aset lebih aman.",
              "Jangan memakai akun abal-abal atau akun baru tanpa aktivitas untuk BM.",
              "Simpan akses BM dengan rapi, karena kehilangan akses BM berarti kehilangan semua aset iklan."
            ]
          },
          {
            "text": "Install Pixel (manual atau via partner)",
            "panduan": [
              "Buka Events Manager di business.facebook.com.",
              "Klik Hubungkan Sumber Data, pilih Web, lalu beri nama dataset yang jelas (misal: Toko Saya).",
              "Pilih cara install: manual dengan menyalin kode ke website, atau via partner jika memakai platform seperti Shopify.",
              "Jika manual, tempel kode dasar pixel di bagian head semua halaman website.",
              "Pasang event standar: PageView, ViewContent, AddToCart, dan Purchase di halaman yang sesuai.",
              "Install extension Meta Pixel Helper di Chrome untuk mengecek pixel terpasang dengan benar.",
              "Buka Events Manager dan pastikan event-event tercatat masuk dalam beberapa menit setelah testing."
            ]
          },
          {
            "text": "Kenali dashboard: kolom, metrik, filter",
            "panduan": [
              "Buka Ads Manager dan kenali kolom bawaan: impresi, jangkauan, dan jumlah belanja.",
              "Tambahkan kolom penting lewat Customize Columns: CTR Link Click, CPC, dan cost per result.",
              "Buat custom metric OCLP dengan rumus landing page views dibagi link clicks untuk memantau kecepatan halaman.",
              "Susun urutan kolom mengikuti alur baca: dari impresi, klik, sampai ke hasil akhir.",
              "Gunakan fitur filter untuk fokus ke campaign atau adset tertentu saat analisis.",
              "Simpan tampilan kolom sebagai preset agar tidak perlu setting ulang setiap buka dashboard.",
              "Luangkan 15 menit tiap hari untuk membaca dashboard sampai terbiasa."
            ]
          },
          {
            "text": "Siapkan Custom Audience dasar",
            "panduan": [
              "Pastikan pixel sudah terpasang dan merekam data pengunjung website.",
              "Buka menu Audiences di Ads Manager, klik Buat Audience, pilih Custom Audience.",
              "Pilih sumber Website, lalu tentukan rentang waktu misalnya pengunjung 30 hari terakhir.",
              "Buat beberapa variasi: semua pengunjung, yang AddToCart tapi belum beli, dan yang sudah beli.",
              "Tunggu sampai audience terisi data, prosesnya bisa memakan waktu beberapa jam.",
              "Ketahui syarat lookalike: butuh minimal 1000 orang di custom audience.",
              "Audience ini adalah bahan dasar untuk retargeting di level berikutnya."
            ]
          },
          {
            "text": "Pahami kenapa akun kena ban & cara hindari",
            "panduan": [
              "Ketahui penyebab paling umum: akun baru yang langsung dipakai beriklan tanpa aktivitas wajar.",
              "Sadari bahwa Facebook menganggap akun tanpa aktivitas like, komen, dan posting sebagai spam.",
              "Lakukan warming up: gunakan akun secara natural beberapa hari sebelum mulai beriklan.",
              "Hindari klaim berlebihan di materi iklan, misalnya janji pasti sembuh atau pasti kaya.",
              "Jangan pakai gambar sebelum-sesudah yang ekstrem atau menakutkan.",
              "Jika butuh cepat, gunakan akun whitelist yang memang disediakan untuk beriklan.",
              "Selalu patuhi kebijakan iklan Meta dan baca alasan penolakan jika iklan di-reject."
            ]
          }
        ]
      },
      {
        "nama": "Level 3 — Strategi & Scale",
        "deskripsi": "Dari testing sampai scale up.",
        "tasks": [
          {
            "text": "Jalankan framework Test to Scale",
            "panduan": [
              "Mulai fase Testing Creative: buat 1 campaign dengan budget 100 ribu berisi 3 produk berbeda.",
              "Siapkan 3 sampai 6 konten iklan untuk tiap produk yang diuji.",
              "Jalankan 2-3 hari tanpa diutak-atik agar data terkumpul.",
              "Nilai dengan kriteria winning: cost per klik di bawah 2000, budget terserap habis, dan ada penjualan.",
              "Matikan produk dan konten yang tidak lolos kriteria, jangan dipertahankan karena sayang.",
              "Lanjutkan hanya produk winning ke fase scale.",
              "Dokumentasikan hasil tiap testing agar jadi bekal untuk produk berikutnya."
            ]
          },
          {
            "text": "Praktikkan Orthodox Matrix untuk baca data",
            "panduan": [
              "Hafalkan 4 metrik baku: CTR Link Click standar 1 persen, OCLP 70 persen, LP Convert 25 persen, dan closing rate.",
              "Baca data dari hulu ke hilir: mulai dari konten, kecepatan halaman, isi halaman, sampai skill CS.",
              "Jika CTR di bawah 1 persen, masalahnya di konten: ganti angle atau kreatif iklan.",
              "Jika OCLP di bawah 70 persen, masalahnya kecepatan landing page: kompres gambar dan ringankan halaman.",
              "Jika LP convert di bawah 25 persen, masalahnya isi halaman atau offer: perbaiki copywriting dan penawaran.",
              "Jika closing rendah, masalahnya di CS: latih kecepatan balas dan teknik closing.",
              "Jangan menaikkan budget sebelum tahu bagian mana yang bermasalah."
            ]
          },
          {
            "text": "Coba scale up vs scale out",
            "panduan": [
              "Pastikan campaign sudah winning dan stabil minimal 4 sampai 7 hari sebelum scale.",
              "Untuk scale up: naikkan budget campaign yang sudah ada secara bertahap sekitar 20 persen.",
              "Tunggu 2-3 hari setelah naik budget untuk melihat apakah performa tetap stabil.",
              "Untuk scale out: buat campaign baru dengan struktur berbeda, misalnya ASC broad atau interest baru.",
              "Coba juga scale out dengan lookalike audience dari data pembeli yang terkumpul.",
              "Jangan lakukan scale up dan scale out bersamaan, kerjakan satu per satu.",
              "Jika performa anjlok setelah scale, kembalikan budget ke semula dan evaluasi dulu."
            ]
          },
          {
            "text": "Terapkan retargeting untuk yang belum beli",
            "panduan": [
              "Tentukan targetnya: orang yang sudah lihat iklan atau kunjungi website tapi belum membeli.",
              "Siapkan konten yang BERBEDA dari iklan sebelumnya, misalnya offer baru seperti gratis ongkir atau bundling.",
              "Jangan pakai konten yang sama karena audiens akan bosan dan mengabaikannya.",
              "Buat struktur: 1 campaign CBO budget 50 ribu dengan audience custom gabungan.",
              "Pakai budget kecil karena ukuran audiens retargeting memang terbatas.",
              "Jalankan 3-5 hari lalu evaluasi cost per result-nya.",
              "Jika berhasil, jadikan retargeting sebagai campaign yang selalu jalan."
            ]
          },
          {
            "text": "Setting rule otomatis untuk efisiensi",
            "panduan": [
              "Buka menu Automated Rules di Ads Manager.",
              "Buat rule pengaman: misalnya campaign dimatikan otomatis jika sudah belanja 30 ribu tanpa menghasilkan lead.",
              "Buat rule bertingkat: semakin banyak lead masuk, semakin longgar batas budget yang ditoleransi.",
              "Buat juga rule scale: naikkan budget otomatis jika ROAS di atas target selama beberapa hari.",
              "Terapkan rule ke satu campaign dulu sebagai percobaan sebelum ke semua campaign.",
              "Aktifkan notifikasi agar kamu tahu setiap kali rule berjalan.",
              "Cek dan sesuaikan rule secara berkala mengikuti perubahan performa."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-lp",
    "nama": "🌐 Landing Page yang Konversi",
    "deskripsi": "Bikin landing page yang mengubah pengunjung jadi pembeli.",
    "levels": [
      {
        "nama": "Level 1 — Fondasi",
        "deskripsi": "Pahami dulu sebelum bikin.",
        "tasks": [
          {
            "text": "Pahami beda landing page vs website biasa",
            "panduan": [
              "Pahami bahwa landing page fokus pada satu produk dan satu aksi saja.",
              "Pahami bahwa website mempresentasikan brand dengan banyak halaman dan banyak tujuan.",
              "Sadari bahwa landing page memudahkan pemasangan pixel dan pelacakan konversi.",
              "Gunakan landing page untuk produk penetrasi agar mudah mendapatkan customer baru.",
              "Ketahui bahwa pembeli dari landing page lebih serius karena sudah membaca penjelasan dulu.",
              "Jangan arahkan iklan ke homepage website yang umum dan membingungkan pengunjung.",
              "Prinsipnya: satu halaman, satu penawaran, satu tombol aksi."
            ]
          },
          {
            "text": "Tentukan 1 tujuan utama halaman",
            "panduan": [
              "Pilih satu aksi yang diinginkan: beli sekarang, chat WhatsApp, atau isi form.",
              "Tulis tujuan tersebut di kertas sebelum mulai mendesain halaman.",
              "Pastikan semua elemen halaman mendukung aksi tersebut, tidak ada yang mengganggu.",
              "Jangan mencampur banyak ajakan: tombol beli plus tombol download plus link sosmed.",
              "Tentukan satu metrik keberhasilan, yaitu conversion rate dari aksi tersebut.",
              "Jika ragu memilih, pilih aksi yang paling dekat dengan terjadinya uang masuk."
            ]
          },
          {
            "text": "Kenali target audience dengan jelas",
            "panduan": [
              "Gali tiga hal tentang calon pembeli: apa masalah mereka, solusi seperti apa yang diharapkan, dan apa ketakutan terbesar mereka.",
              "Bedakan pembeli yang membeli karena butuh dengan yang membeli karena ingin, cara pendekatannya berbeda.",
              "Lakukan riset sederhana: baca review produk kompetitor dan tanya pembeli yang sudah pernah beli.",
              "Buat satu persona tertulis: nama, umur, masalah, dan keinginannya.",
              "Gunakan bahasa sehari-hari mereka di halaman, bukan bahasa formal atau bahasa penjual.",
              "Semakin spesifik kamu mengenali mereka, semakin nancep pesan di halamanmu."
            ]
          }
        ]
      },
      {
        "nama": "Level 2 — Struktur & Copywriting",
        "deskripsi": "Susun halaman yang menjual.",
        "tasks": [
          {
            "text": "Pilih framework: 9 section / 6 section / 3 section",
            "panduan": [
              "Kenali framework 9 section untuk produk mahal atau butuh edukasi: goal terbesar, masalah, solusi, keuntungan, testimoni, fitur, promo, FAQ, dan kerugian jika tidak beli.",
              "Kenali framework 6 section versi ringkas: headline pertanyaan, solusi, masalah target, benefit, testimoni, dan promo.",
              "Kenali framework 3 section paling singkat: produk, benefit, dan promo, cocok untuk dropshipper yang sering ganti produk.",
              "Pilih framework berdasarkan kompleksitas produk, bukan berdasarkan selera pribadi.",
              "Untuk produk fungsional sederhana seperti alat rumah tangga, 3 atau 6 section sudah cukup.",
              "Untuk produk mahal atau produk digital, gunakan 9 section agar penjelasan tuntas.",
              "Tulis kerangka section di kertas sebelum mulai menulis isi tiap bagian."
            ]
          },
          {
            "text": "Tulis headline yang nancep",
            "panduan": [
              "Gunakan rumus tiga elemen: problem, solusi, dan fear (ketakutan) dalam satu kalimat.",
              "Contoh pola: bagaimana cara mendapatkan [solusi] tanpa [ketakutan], atau atasi [problem] sebelum [fear] datang.",
              "Bisa juga memakai headline berbentuk pertanyaan yang langsung menyentuh masalah calon pembeli.",
              "Luangkan waktu terbanyak untuk headline, karena ini menentukan pengunjung bertahan atau langsung pergi.",
              "Pastikan headline selaras dengan isi iklan yang mengarahkan ke halaman ini.",
              "Buat 2-3 variasi headline lalu uji mana yang menghasilkan konversi terbaik.",
              "Hindari headline yang terlalu umum dan bisa dipakai produk apa saja."
            ]
          },
          {
            "text": "Susun penawaran & bukti sosial",
            "panduan": [
              "Susun penawaran dengan jelas: apa yang didapat pembeli, harga coret, dan harga promo.",
              "Tambahkan bonus atau garansi untuk menaikkan nilai yang dirasakan calon pembeli.",
              "Kumpulkan bukti sosial: testimoni pembeli, jumlah yang sudah beli, dan rating produk.",
              "Letakkan testimoni setelah penjelasan benefit agar alurnya meyakinkan.",
              "Testimoni berupa foto atau video lebih meyakinkan daripada teks saja.",
              "Boleh membuat testimoni awal tapi jangan overclaim yang tidak bisa dibuktikan.",
              "Tampilkan penawaran terbaik di dekat tombol beli agar keputusan makin mudah."
            ]
          },
          {
            "text": "Tambahkan CTA yang jelas di tiap section",
            "panduan": [
              "Pahami CTA sebagai tombol ajakan: Beli Sekarang, Chat WhatsApp, atau Klaim Promo.",
              "Pasang tombol CTA di setiap section, jangan hanya di bagian paling bawah halaman.",
              "Tulis teks tombol berupa aksi yang spesifik, bukan sekadar Klik di Sini.",
              "Buat warna tombol kontras dengan background agar langsung terlihat.",
              "Untuk funnel LPWA, arahkan semua tombol ke link WhatsApp yang sudah dibuat.",
              "Pasang pixel event AddToCart pada tombol agar setiap klik bisa dilacak datanya.",
              "Test semua tombol dari HP untuk memastikan semuanya berfungsi dan mengarah dengan benar."
            ]
          }
        ]
      },
      {
        "nama": "Level 3 — Teknis & Optimasi",
        "deskripsi": "Publish dan ukur.",
        "tasks": [
          {
            "text": "Bikin LP di page builder (Weebly/OrderOnline/Berdu)",
            "panduan": [
              "Coba beberapa platform page builder lalu pilih yang paling nyaman dipakai.",
              "Ketahui kelebihan Berdu: opsi desain lebih kaya dan drag and drop mudah, cocok untuk brand.",
              "Ketahui cara OrderOnline: buat section terlebih dahulu sebelum bisa mengisi elemen ke dalamnya.",
              "Susun section halaman mengikuti framework yang sudah dipilih di level sebelumnya.",
              "Isi tiap section dengan teks, gambar, dan tombol sesuai rancangan.",
              "Pastikan tampilan di HP rapi dan enak dibaca, karena mayoritas pengunjung dari HP.",
              "Publish halaman dan simpan URL-nya untuk dipakai di iklan."
            ]
          },
          {
            "text": "Pasang Pixel untuk tracking",
            "panduan": [
              "Salin Pixel ID dari Events Manager di Business Manager.",
              "Tempel Pixel ID di kolom pengaturan yang disediakan page builder.",
              "Pastikan event PageView terpasang di semua halaman.",
              "Pasang event AddToCart atau ViewContent pada tombol utama halaman.",
              "Pasang event Purchase di halaman terima kasih setelah order berhasil.",
              "Test dengan extension Meta Pixel Helper di Chrome untuk memastikan pixel aktif.",
              "Buka Events Manager dan verifikasi bahwa event-event tercatat masuk."
            ]
          },
          {
            "text": "Test kecepatan loading",
            "panduan": [
              "Buka halaman dari HP dengan koneksi internet biasa, bukan wifi kencang.",
              "Targetkan halaman terbuka penuh dalam waktu di bawah 3 detik.",
              "Kompres semua gambar sebelum diupload agar ukurannya kecil.",
              "Kurangi elemen yang berat seperti video autoplay atau animasi berlebihan.",
              "Ingat patokan OCLP: di bawah 70 persen biasanya karena halaman lambat.",
              "Hapus section atau elemen yang tidak penting demi kecepatan.",
              "Test ulang kecepatan setelah setiap optimasi yang dilakukan."
            ]
          },
          {
            "text": "Evaluasi konversi, optimasi yang lemah",
            "panduan": [
              "Hitung conversion rate: jumlah order dibagi jumlah pengunjung halaman.",
              "Bandingkan dengan standar LP convert 25 persen dari framework Orthodox Matrix.",
              "Jika di bawah standar, periksa satu per satu: kecepatan, headline, offer, lalu CTA.",
              "Screenshot seluruh halaman lalu minta AI menganalisis dan memberi skor kualitas.",
              "Ambil saran perbaikan yang relevan saja, abaikan yang tidak sesuai target market.",
              "Eksekusi perbaikan satu per satu, jangan semuanya sekaligus.",
              "Ukur lagi setelah perbaikan, ulangi siklus ini terus sampai konversi naik."
            ]
          }
        ]
      }
    ]
  }
];