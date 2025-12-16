# 🏪 Website Toko Nusa Indah

## 📌 Deskripsi

Website e-commerce modern untuk **Toko Nusa Indah** - toko kelontong lengkap yang menjual berbagai produk kebutuhan sehari-hari.

**Tagline:** Belanja Mudah, Harga Terjangkau

---

## ✨ Fitur Lengkap

### 🛍️ Halaman Publik

1. **Beranda/Produk**
   - 22 produk dalam 6 kategori
   - Filter kategori interaktif
   - Sistem keranjang belanja
   - Badge stok terbatas
   - Gambar produk dari Unsplash

2. **Promo** 🎁
   - 6 promo menarik dengan desain card modern
   - Informasi diskon dan masa berlaku
   - Kategori promo yang jelas
   - Syarat & ketentuan

3. **Kontak** 📞
   - Alamat toko lengkap
   - Telepon & WhatsApp
   - Email kontak
   - Jam operasional detail
   - Info fasilitas toko
   - Metode pembayaran
   - Link social media (Instagram, Facebook, WhatsApp)
   - **TANPA data pegawai/pemilik pribadi**

4. **Keranjang** 🛒
   - Daftar produk yang dipilih
   - Update jumlah otomatis
   - Kalkulasi total harga
   - Hapus item dari keranjang

### 🔒 Halaman Terproteksi

5. **Kelola Barang**
   - **Password protected** untuk keamanan
   - Tambah produk baru
   - Edit produk existing
   - Hapus produk
   - Kelola stok dan kategori

### 🎯 Fitur Tambahan

- **QR Code Scanner** 📱
  - Generate QR code otomatis
  - Modal popup yang elegan
  - Scan untuk akses website dari HP

- **Design Modern** 🎨
  - Tema warna emerald/hijau
  - Gradient buttons & cards
  - Hover effects & animations
  - Fully responsive (mobile & desktop)
  - Clean & professional UI

---

## 🔐 PASSWORD DEFAULT

```
Password: admin123
```

⚠️ **WAJIB DIGANTI SEBELUM PRODUCTION!**

---

## 🚀 CARA PENGGUNAAN

### 1. Mengakses Halaman Kelola

1. Klik menu **"Kelola"** di navbar
2. Masukkan password: `admin123`
3. Klik "Buka Kunci"
4. Anda bisa menambah, edit, atau hapus produk

### 2. Menggunakan QR Code

1. Klik tombol **"Scan QR"** di navbar
2. QR code akan muncul dalam popup
3. Scan dengan kamera smartphone
4. Website akan terbuka di browser HP

---

## ⚙️ CARA KUSTOMISASI

### 🔑 1. MENGGANTI PASSWORD

**File:** `/components/PasswordProtection.tsx`

**Langkah:**
1. Buka file `/components/PasswordProtection.tsx`
2. Cari baris 11:
   ```typescript
   const ADMIN_PASSWORD = 'admin123';
   ```
3. Ganti dengan password baru:
   ```typescript
   const ADMIN_PASSWORD = 'PasswordBaruAnda123';
   ```
4. Simpan file

**Rekomendasi Password:**
- Minimal 8 karakter
- Kombinasi huruf besar & kecil
- Tambahkan angka
- Tambahkan simbol (!@#$%^&*)

**Contoh Password Kuat:**
```typescript
const ADMIN_PASSWORD = 'TokoNusaIndah@2024';
const ADMIN_PASSWORD = 'NI#Secure789!';
const ADMIN_PASSWORD = 'Admin!Toko2024';
```

---

### 🔗 2. MENGGANTI URL QR CODE

**File:** `/components/Header.tsx`

**Langkah:**
1. Buka file `/components/Header.tsx`
2. Cari baris 14:
   ```typescript
   const websiteURL = 'https://toko-nusa-indah.com';
   ```
3. Ganti dengan URL website Anda:
   ```typescript
   const websiteURL = 'https://www.websiteanda.com';
   ```
4. Simpan file

**Contoh URL:**
```typescript
// URL dengan domain sendiri
const websiteURL = 'https://www.tokonusaindah.co.id';

// URL dengan subdomain
const websiteURL = 'https://shop.tokonusaindah.com';

// URL marketplace
const websiteURL = 'https://tokopedia.com/tokonusaindah';

// URL untuk testing (localhost)
const websiteURL = 'http://localhost:3000';
```

⚠️ **Penting:**
- URL harus dimulai dengan `http://` atau `https://`
- Pastikan URL bisa diakses dari internet
- Test QR code setelah mengganti URL

---

### 📞 3. MENGEDIT INFORMASI KONTAK

**File:** `/components/Kontak.tsx`

#### Alamat Toko:
**Lokasi:** Baris ~30-35
```typescript
<p className="text-gray-600 leading-relaxed">
  Jl. Raya Merdeka No. 123<br />
  Kelurahan Sejahtera, Kecamatan Bahagia<br />
  Jakarta Selatan 12345<br />
  DKI Jakarta, Indonesia
</p>
```

#### Nomor Telepon:
**Lokasi:** Baris ~50-55
```typescript
<a href="tel:+622112345678">(021) 1234-5678</a>
```

#### WhatsApp:
**Lokasi:** Baris ~56-58
```typescript
<a href="https://wa.me/6281234567890">+62 812-3456-7890</a>
```

**Format WhatsApp:** `https://wa.me/[nomor]`
- Contoh: `https://wa.me/628123456789`
- Tanpa tanda `+`, `-`, atau spasi
- Awali dengan 62 (kode Indonesia)

#### Email:
**Lokasi:** Baris ~70-78
```typescript
<a href="mailto:info@tokonusaindah.com">
  info@tokonusaindah.com
</a>
```

#### Jam Operasional:
**Lokasi:** Baris ~95-112
```typescript
<div className="flex justify-between items-center py-3">
  <span>Senin - Jumat</span>
  <span>08:00 - 21:00 WIB</span>
</div>
```

#### Social Media:
**Lokasi:** Baris ~165-192
```typescript
// Instagram
href="https://www.instagram.com/tokonusaindah"

// Facebook
href="https://www.facebook.com/tokonusaindah"

// WhatsApp Chat
href="https://wa.me/6281234567890?text=Halo..."
```

---

### 🏷️ 4. MENAMBAH/EDIT PROMO

**File:** `/components/Promo.tsx`

**Langkah:**
1. Buka file `/components/Promo.tsx`
2. Cari array `promos` (sekitar baris 6)
3. Tambahkan promo baru:

```typescript
{
  id: 7,  // ID unik, increment dari yang terakhir
  title: 'Promo Tahun Baru 2024',
  description: 'Dapatkan diskon spesial menyambut tahun baru!',
  discount: '40%',  // Bisa angka atau teks (contoh: "Beli 2 Gratis 1")
  validUntil: '31 Januari 2024',
  category: 'Semua Kategori',
  color: 'from-red-500 to-pink-500',  // Gradient color
  icon: <Gift className="w-8 h-8" />
}
```

**Pilihan Warna Gradient:**
```typescript
'from-red-500 to-pink-500'      // Merah-Pink
'from-blue-500 to-cyan-500'     // Biru-Cyan
'from-purple-500 to-pink-500'   // Ungu-Pink
'from-green-500 to-teal-500'    // Hijau-Teal
'from-orange-500 to-yellow-500' // Orange-Kuning
```

---

### 🎨 5. MENGUBAH NAMA TOKO & TAGLINE

**File:** `/components/Header.tsx`

**Lokasi:** Baris ~28-29
```typescript
<h1 className="text-xl text-gray-900">Toko Nusa Indah</h1>
<p className="text-xs text-gray-500">Belanja Mudah, Harga Terjangkau</p>
```

**File:** `/App.tsx`

**Lokasi:** Baris ~43
```typescript
document.title = 'Toko Nusa Indah - Belanja Mudah, Harga Terjangkau';
```

---

## 📁 STRUKTUR FILE

```
/
├── App.tsx                          # Main application
├── components/
│   ├── Header.tsx                   # Navbar (Nama toko, menu, QR code)
│   ├── ProductList.tsx              # Halaman produk
│   ├── Promo.tsx                    # Halaman promo
│   ├── Kontak.tsx                   # Halaman kontak
│   ├── ProductManagement.tsx        # Kelola produk (password)
│   ├── PasswordProtection.tsx       # Password login
│   ├── QRCodeModal.tsx              # QR code popup
│   ├── Cart.tsx                     # Keranjang belanja
│   └── CategoryNav.tsx              # Filter kategori
├── styles/
│   └── globals.css                  # Global styles
└── Dokumentasi/
    ├── PANDUAN_LENGKAP.md           # Panduan detail lengkap
    ├── QUICK_GUIDE.md               # Quick reference
    └── README_TOKO_NUSA_INDAH.md    # File ini
```

---

## 🎯 KATEGORI PRODUK

1. **Makanan & Minuman** - Mie instan, susu, roti, kopi, dll
2. **Snack & Permen** - Keripik, cokelat, permen, biskuit
3. **Kebutuhan Rumah Tangga** - Sabun, detergen, tisu, pembersih
4. **Mainan & Boneka** - Boneka, puzzle, mobil-mobilan
5. **Alat Tulis** - Pensil, buku, pulpen
6. **Perawatan Pribadi** - Pasta gigi, shampo

Total: **22 Produk**

---

## 📱 TEKNOLOGI

- **React** - Library UI
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **QRCode.js** - QR code generator
- **localStorage** - Data persistence

---

## 🌈 DESIGN SYSTEM

### Warna Utama:
- **Primary:** Emerald/Hijau (#10B981)
- **Gradient:** from-emerald-500 to-emerald-600
- **Text:** Gray-900 (dark), Gray-600 (medium), Gray-500 (light)
- **Accent:** Red-500 (badge habis), Amber-500 (stok terbatas)

### Typography:
- **Heading:** Font weight medium, line height 1.5
- **Body:** Font weight normal, line height 1.5
- **Default size:** 16px

### Spacing:
- Container: `mx-auto px-4`
- Section: `py-8`
- Cards: `p-6` atau `p-8`

---

## ✅ CHECKLIST SEBELUM GO LIVE

- [ ] ✏️ Ganti password dari `admin123`
- [ ] 🔗 Update URL QR Code dengan domain real
- [ ] 📍 Update alamat toko
- [ ] ☎️ Update nomor telepon & WhatsApp
- [ ] ✉️ Update email kontak
- [ ] ⏰ Update jam operasional
- [ ] 📱 Update link Instagram
- [ ] 👍 Update link Facebook
- [ ] 🏷️ Update promo sesuai penawaran real
- [ ] 🗑️ Hapus note "Password default" di halaman login
- [ ] 🧪 Test semua fitur (produk, cart, kelola)
- [ ] 📱 Test QR Code dengan smartphone
- [ ] 💾 Backup data produk

---

## 🛠️ TROUBLESHOOTING

### Password tidak berfungsi?
- Pastikan file tersimpan dengan benar
- Periksa tidak ada typo
- Gunakan tanda kutip yang benar: `'password'`

### QR Code tidak muncul?
- Periksa koneksi internet
- Library QRCode.js dimuat dari CDN
- Pastikan browser tidak block script

### Menu tidak berfungsi?
- Periksa semua import komponen sudah benar
- Clear cache browser
- Reload halaman

---

## 📚 DOKUMENTASI LENGKAP

Untuk panduan lebih detail, baca:

1. **PANDUAN_LENGKAP.md** - Dokumentasi lengkap semua fitur
2. **QUICK_GUIDE.md** - Quick reference untuk edit cepat

---

## 💡 TIPS PENGGUNAAN

### Untuk Admin:
1. Ganti password secara berkala
2. Update stok produk setiap hari
3. Hapus promo yang sudah expired
4. Monitor pertanyaan dari WhatsApp/email

### Untuk Pelanggan:
1. Gunakan filter kategori untuk cari produk
2. Scan QR code untuk akses mudah dari HP
3. Cek halaman Promo untuk diskon terbaru
4. Hubungi via WhatsApp untuk respon cepat

---

## 🎉 FITUR UNGGULAN

✅ **Design Modern** - UI/UX clean dan profesional
✅ **Fully Responsive** - Tampil sempurna di HP & desktop
✅ **Password Protection** - Kelola barang aman
✅ **QR Code** - Akses mudah via smartphone
✅ **Filter Kategori** - Cari produk lebih cepat
✅ **Real-time Cart** - Update keranjang langsung
✅ **Info Lengkap** - Kontak & promo jelas
✅ **Easy to Customize** - Mudah diedit sesuai kebutuhan

---

## 📞 KONTAK DEFAULT

**Alamat:**
```
Jl. Raya Merdeka No. 123
Kelurahan Sejahtera, Kecamatan Bahagia
Jakarta Selatan 12345
DKI Jakarta, Indonesia
```

**Telepon:** (021) 1234-5678
**WhatsApp:** +62 812-3456-7890
**Email:** info@tokonusaindah.com

**Jam Operasional:**
- Senin - Jumat: 08:00 - 21:00 WIB
- Sabtu: 08:00 - 22:00 WIB
- Minggu: 09:00 - 20:00 WIB
- Hari Libur Nasional: Tutup

⚠️ **Ganti semua info di atas dengan data real Anda!**

---

## 🚀 NEXT STEPS

1. ✏️ **Kustomisasi** - Ganti password, URL, info kontak
2. 🧪 **Testing** - Test semua fitur sebelum launch
3. 📱 **Mobile Test** - Pastikan responsif di berbagai device
4. 🎯 **Go Live** - Deploy website ke hosting
5. 📣 **Promosi** - Share QR code & link ke pelanggan

---

## 📝 CATATAN PENTING

1. **Data Produk** tersimpan di localStorage browser
2. **Password** tersimpan di kode (bukan database)
3. **QR Code** di-generate client-side menggunakan library
4. **Responsif** untuk semua ukuran layar
5. **No Backend** - Pure frontend application

Untuk fitur backend (database, payment gateway, dll), perlu development tambahan.

---

## 🎊 SELAMAT!

Website **Toko Nusa Indah** Anda sudah siap digunakan!

Semoga sukses dengan bisnis online Anda! 🚀

---

**© 2024 Toko Nusa Indah**
**Belanja Mudah, Harga Terjangkau**

Made with ❤️ using React + TypeScript + Tailwind CSS
