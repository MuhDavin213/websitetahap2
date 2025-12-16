# 📘 PANDUAN LENGKAP - Toko Nusa Indah

## 🎉 Selamat Datang!

Website **Toko Nusa Indah** telah berhasil dibuat dengan fitur-fitur lengkap untuk mengelola toko online Anda. Panduan ini akan membantu Anda memahami dan mengkustomisasi website.

---

## 📋 Daftar Isi

1. [Fitur Website](#fitur-website)
2. [Cara Mengganti Password Halaman Kelola](#cara-mengganti-password)
3. [Cara Mengganti URL QR Code](#cara-mengganti-url-qr-code)
4. [Cara Mengedit Informasi Kontak](#cara-mengedit-informasi-kontak)
5. [Cara Menambah/Edit Promo](#cara-menambah-edit-promo)
6. [Struktur Halaman](#struktur-halaman)
7. [FAQ & Troubleshooting](#faq--troubleshooting)

---

## 🚀 Fitur Website

### 1. **Halaman Beranda/Produk**
- ✅ Menampilkan semua produk toko
- ✅ Filter berdasarkan 6 kategori
- ✅ Sistem tambah ke keranjang
- ✅ Kartu produk dengan gambar dan harga
- ✅ Badge stok terbatas

### 2. **Halaman Promo**
- ✅ Menampilkan 6 promo menarik
- ✅ Card dengan gradient warna berbeda
- ✅ Info diskon dan masa berlaku
- ✅ Syarat & ketentuan promo

### 3. **Halaman Kelola** 🔒
- ✅ **Dilindungi PASSWORD**
- ✅ Tambah produk baru
- ✅ Edit produk existing
- ✅ Hapus produk
- ✅ Kelola kategori dan stok

### 4. **Halaman Kontak**
- ✅ Alamat toko lengkap
- ✅ Nomor telepon & WhatsApp
- ✅ Email kontak
- ✅ Jam operasional detail
- ✅ Link social media
- ✅ Info fasilitas & metode pembayaran

### 5. **Keranjang Belanja**
- ✅ Daftar produk yang dipilih
- ✅ Update jumlah barang
- ✅ Hapus item
- ✅ Total harga otomatis
- ✅ Button checkout

### 6. **Fitur QR Code** 📱
- ✅ Generate QR code otomatis
- ✅ Modal popup elegan
- ✅ Scan untuk akses website

---

## 🔐 Cara Mengganti Password

### Password Default:
```
admin123
```

### Langkah-langkah Mengganti Password:

1. **Buka File:**
   ```
   /components/PasswordProtection.tsx
   ```

2. **Cari Baris Ini (sekitar baris 11):**
   ```typescript
   const ADMIN_PASSWORD = 'admin123';
   ```

3. **Ganti dengan Password Baru:**
   ```typescript
   const ADMIN_PASSWORD = 'PasswordBaruAnda123';
   ```

4. **Simpan File**

### ⚠️ Tips Keamanan:
- Gunakan password yang kuat (minimal 8 karakter)
- Kombinasi huruf besar, kecil, angka, dan simbol
- Jangan gunakan kata yang mudah ditebak
- Contoh password kuat: `Nusa@Indah2024!`

### 📝 Contoh Password yang Baik:
```typescript
// Password lemah (JANGAN digunakan)
const ADMIN_PASSWORD = '123456';
const ADMIN_PASSWORD = 'admin';

// Password kuat (DIREKOMENDASIKAN)
const ADMIN_PASSWORD = 'TokoNusaIndah@2024';
const ADMIN_PASSWORD = 'NI#Secure789';
const ADMIN_PASSWORD = 'Admin!Toko2024';
```

---

## 🔗 Cara Mengganti URL QR Code

### URL Default:
```
https://toko-nusa-indah.com
```

### Langkah-langkah Mengganti URL:

1. **Buka File:**
   ```
   /components/Header.tsx
   ```

2. **Cari Baris Ini (sekitar baris 14):**
   ```typescript
   const websiteURL = 'https://toko-nusa-indah.com';
   ```

3. **Ganti dengan URL Website Anda:**
   ```typescript
   const websiteURL = 'https://www.websiteanda.com';
   ```

4. **Simpan File**

### 📝 Contoh URL yang Benar:

```typescript
// Format URL lengkap
const websiteURL = 'https://www.tokonusaindah.co.id';

// Dengan subdomain
const websiteURL = 'https://shop.tokonusaindah.com';

// Dengan path tertentu
const websiteURL = 'https://www.marketplace.com/toko-nusa-indah';

// URL lokal untuk testing (ganti sebelum production)
const websiteURL = 'http://localhost:3000';
```

### ⚠️ Catatan Penting:
- Pastikan URL dimulai dengan `http://` atau `https://`
- URL harus dapat diakses dari internet
- Test QR code setelah mengganti URL

---

## 📞 Cara Mengedit Informasi Kontak

### Langkah-langkah:

1. **Buka File:**
   ```
   /components/Kontak.tsx
   ```

2. **Edit Bagian yang Diinginkan:**

#### A. Alamat Toko (Baris ~30-35):
```typescript
<p className="text-gray-600 leading-relaxed">
  Jl. Raya Merdeka No. 123<br />              {/* ← Edit alamat */}
  Kelurahan Sejahtera, Kecamatan Bahagia<br /> {/* ← Edit kelurahan */}
  Jakarta Selatan 12345<br />                  {/* ← Edit kota & kode pos */}
  DKI Jakarta, Indonesia                       {/* ← Edit provinsi */}
</p>
```

#### B. Nomor Telepon (Baris ~50-58):
```typescript
<a href="tel:+622112345678">(021) 1234-5678</a>  {/* ← Edit telepon */}
<a href="https://wa.me/6281234567890">           {/* ← Edit WhatsApp */}
  +62 812-3456-7890
</a>
```

**Format WhatsApp:**
- Format: `https://wa.me/[kode_negara][nomor]`
- Contoh: `https://wa.me/628123456789` (tanpa +, tanpa -, tanpa spasi)

#### C. Email (Baris ~70-78):
```typescript
<a href="mailto:info@tokonusaindah.com">     {/* ← Edit email umum */}
  info@tokonusaindah.com
</a>

<a href="mailto:cs@tokonusaindah.com">        {/* ← Edit email CS */}
  cs@tokonusaindah.com
</a>
```

#### D. Jam Operasional (Baris ~95-112):
```typescript
<div className="flex justify-between items-center py-3">
  <span>Senin - Jumat</span>
  <span>08:00 - 21:00 WIB</span>  {/* ← Edit jam buka */}
</div>
```

#### E. Social Media (Baris ~165-192):
```typescript
// Instagram
href="https://www.instagram.com/tokonusaindah"  {/* ← Edit username */}

// Facebook
href="https://www.facebook.com/tokonusaindah"   {/* ← Edit page name */}

// WhatsApp (untuk chat langsung)
href="https://wa.me/6281234567890?text=Halo%20Toko%20Nusa%20Indah..."
```

---

## 🏷️ Cara Menambah/Edit Promo

### Langkah-langkah:

1. **Buka File:**
   ```
   /components/Promo.tsx
   ```

2. **Cari Array `promos` (Baris ~6):**
   ```typescript
   const promos = [
     // List promo ada di sini
   ];
   ```

3. **Tambah Promo Baru:**
   ```typescript
   {
     id: 7,  // ← ID unik, increment dari promo terakhir
     title: 'Promo Tahun Baru 2024',  // ← Judul promo
     description: 'Dapatkan diskon spesial menyambut tahun baru!',
     discount: '40%',  // ← Bisa angka atau teks
     validUntil: '31 Januari 2024',  // ← Masa berlaku
     category: 'Semua Kategori',  // ← Kategori produk
     color: 'from-red-500 to-pink-500',  // ← Warna gradient
     icon: <Gift className="w-8 h-8" />  // ← Ikon (pilih dari lucide-react)
   }
   ```

4. **Pilihan Warna Gradient:**
   ```typescript
   'from-red-500 to-pink-500'      // Merah-Pink
   'from-blue-500 to-cyan-500'     // Biru-Cyan
   'from-purple-500 to-pink-500'   // Ungu-Pink
   'from-green-500 to-teal-500'    // Hijau-Teal
   'from-orange-500 to-yellow-500' // Orange-Kuning
   'from-indigo-500 to-purple-500' // Indigo-Ungu
   ```

5. **Pilihan Icon:**
   ```typescript
   <Tag className="w-8 h-8" />
   <Gift className="w-8 h-8" />
   <TrendingDown className="w-8 h-8" />
   <Percent className="w-8 h-8" />
   <Clock className="w-8 h-8" />
   ```

### Menghapus Promo:
Cukup hapus/comment salah satu object promo dalam array.

---

## 📁 Struktur Halaman

```
Toko Nusa Indah Website
│
├── 🏠 Beranda/Produk
│   ├── Filter Kategori
│   ├── Grid Produk
│   └── Tambah ke Keranjang
│
├── 🏷️ Promo
│   ├── Banner Promo Utama
│   ├── Grid 6 Promo
│   └── Syarat & Ketentuan
│
├── 🔒 Kelola (Password Protected)
│   ├── Login dengan Password
│   ├── Tambah Produk
│   ├── Edit Produk
│   └── Hapus Produk
│
├── 📞 Kontak
│   ├── Alamat & Telepon
│   ├── Email & WhatsApp
│   ├── Jam Operasional
│   ├── Info Toko
│   └── Social Media Links
│
└── 🛒 Keranjang
    ├── Daftar Item
    ├── Update Jumlah
    ├── Hapus Item
    └── Total & Checkout
```

---

## 🎨 Customisasi Tambahan

### 1. Mengubah Nama Toko:

**File:** `/components/Header.tsx` (Baris ~28)
```typescript
<h1 className="text-xl text-gray-900">Toko Nusa Indah</h1>  {/* ← Edit nama */}
<p className="text-xs text-gray-500">Belanja Mudah, Harga Terjangkau</p>  {/* ← Edit tagline */}
```

### 2. Mengubah Title Browser:

**File:** `/App.tsx` (Baris ~43)
```typescript
document.title = 'Toko Nusa Indah - Belanja Mudah, Harga Terjangkau';  {/* ← Edit title */}
```

### 3. Mengganti Warna Tema:

Cari dan replace semua `emerald` dengan warna lain di seluruh file:
- `emerald` → `blue` (biru)
- `emerald` → `purple` (ungu)
- `emerald` → `indigo` (nila)
- `emerald` → `rose` (merah muda)

---

## ❓ FAQ & Troubleshooting

### Q: Password tidak berfungsi setelah diganti?
**A:** Pastikan Anda:
1. Menyimpan file dengan benar
2. Tidak ada typo dalam string password
3. Gunakan tanda kutip yang benar: `'password'` bukan `'password'`

### Q: QR Code tidak muncul?
**A:** QR Code menggunakan library eksternal dari CDN. Pastikan:
1. Koneksi internet aktif
2. Browser tidak memblokir script dari CDN
3. URL yang dimasukkan valid

### Q: Bagaimana cara menambah kategori produk?
**A:** Edit file `/components/CategoryNav.tsx`, tambahkan kategori di array `categories`.

### Q: Produk tidak muncul di halaman?
**A:** Periksa:
1. Data produk di `/App.tsx`
2. Kategori produk sesuai dengan filter
3. Stok produk tidak kosong (jika ada filter)

### Q: Cara mengubah layout grid produk?
**A:** Edit file `/components/ProductList.tsx`, cari:
```typescript
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
```
Ubah angka sesuai kebutuhan (contoh: `lg:grid-cols-4` untuk 4 kolom)

---

## 🔧 File Penting untuk Dikustomisasi

| File | Fungsi | Edit Untuk |
|------|--------|------------|
| `/components/Header.tsx` | Navbar | Nama toko, URL QR Code |
| `/components/PasswordProtection.tsx` | Login Kelola | Password admin |
| `/components/Kontak.tsx` | Info Kontak | Alamat, telepon, email, jam buka |
| `/components/Promo.tsx` | Halaman Promo | Tambah/edit promo |
| `/App.tsx` | Main App | Title browser, data produk |

---

## 📝 Checklist Sebelum Go Live

- [ ] Ganti password default
- [ ] Update URL QR Code dengan domain real
- [ ] Update informasi kontak (alamat, telepon, email)
- [ ] Update jam operasional
- [ ] Update link social media
- [ ] Hapus note "Password default: admin123" di halaman login
- [ ] Test semua fitur (tambah produk, cart, dll)
- [ ] Test QR Code dengan smartphone
- [ ] Update promo sesuai penawaran aktual
- [ ] Backup data produk

---

## 🎯 Tips Penggunaan

1. **Kelola Produk Secara Berkala**
   - Update stok setiap hari
   - Hapus produk yang sudah tidak dijual
   - Tambah produk baru secara rutin

2. **Update Promo**
   - Ganti promo yang sudah expired
   - Buat promo menarik setiap bulan
   - Sesuaikan diskon dengan margin keuntungan

3. **Responsif terhadap Pertanyaan**
   - Monitor WhatsApp business
   - Balas email dengan cepat
   - Update info kontak jika ada perubahan

4. **Keamanan**
   - Jangan share password ke sembarang orang
   - Ganti password secara berkala
   - Logout setelah selesai kelola produk

---

## 📞 Butuh Bantuan?

Jika ada pertanyaan atau kesulitan dalam menggunakan website:

1. Baca dokumentasi ini dengan teliti
2. Periksa kembali langkah-langkah yang dilakukan
3. Pastikan semua file tersimpan dengan benar
4. Hubungi developer untuk bantuan lebih lanjut

---

## 🎉 Selamat!

Website **Toko Nusa Indah** Anda sudah siap digunakan! 

Fitur-fitur yang tersedia:
✅ Halaman Produk dengan filter kategori
✅ Halaman Promo menarik
✅ Halaman Kelola dengan password protection
✅ Halaman Kontak lengkap
✅ QR Code untuk akses mudah
✅ Keranjang belanja fungsional
✅ Design modern & responsif

**Semoga sukses dengan bisnis online Anda! 🚀**

---

**© 2024 Toko Nusa Indah - Belanja Mudah, Harga Terjangkau**
