# 📸 Panduan Upload Gambar & Kelola Kategori

## Fitur Terbaru

### 1. Upload Gambar ke LocalStorage
Sekarang Anda bisa mengupload gambar produk langsung dari komputer dan disimpan di localStorage browser!

#### Cara Upload Gambar:
1. Buka **Halaman Kelola** (password: `nusaindah123`)
2. Klik tab **Kelola Produk**
3. Klik tombol **Tambah Produk** atau **Edit** produk yang ada
4. Di bagian "Gambar Produk", klik tombol **"Unggah Gambar dari Komputer"**
5. Pilih gambar dari komputer Anda (format: JPG, PNG, GIF, dll)
6. Gambar akan otomatis dikonversi ke base64 dan disimpan di localStorage
7. Gambar yang di-upload akan muncul di galeri dan otomatis terpilih
8. Klik **Simpan** untuk menyimpan produk dengan gambar baru

#### Kelebihan Sistem Ini:
✅ **Tidak perlu URL eksternal** - Gambar disimpan langsung di browser  
✅ **Cepat** - Tidak perlu upload ke server  
✅ **Persisten** - Gambar tersimpan di localStorage  
✅ **Mudah** - Cukup pilih file dari komputer  

#### Catatan Penting:
⚠️ **Ukuran gambar**: Usahakan ukuran file tidak terlalu besar (< 500KB) untuk performa optimal  
⚠️ **localStorage limit**: Browser memiliki batasan ~5-10MB untuk localStorage  
⚠️ **Clear data**: Jika Anda clear browser data/cache, gambar custom akan hilang  

---

### 2. Kelola Kategori Dinamis

#### Cara Menambah Kategori Baru:
1. Buka **Halaman Kelola**
2. Klik tab **Kelola Kategori**
3. Klik tombol **Tambah Kategori**
4. Masukkan nama kategori baru
5. Klik **Simpan**
6. Kategori baru akan langsung tersedia di:
   - Form tambah/edit produk
   - Filter kategori di halaman Beranda
   - Navbar kategori

#### Cara Menghapus Kategori:
1. Buka tab **Kelola Kategori**
2. Klik ikon **Trash** di kategori yang ingin dihapus
3. Konfirmasi penghapusan
4. **Catatan**: Kategori default tidak bisa dihapus

#### Kategori Default (Tidak Bisa Dihapus):
- Makanan & Minuman
- Snack & Permen
- Kebutuhan Rumah Tangga
- Mainan & Boneka
- Alat Tulis
- Perawatan Pribadi

---

## Struktur Penyimpanan

### LocalStorage Keys:

#### 1. Custom Images
```
Key: toko_nusa_indah_custom_images
Format: JSON
{
  "custom_1734349200000_abc123": "data:image/jpeg;base64,/9j/4AAQ...",
  "custom_1734349201000_def456": "data:image/png;base64,iVBORw0KG..."
}
```

#### 2. Categories
```
Key: toko_nusa_indah_categories
Format: JSON Array
[
  "Makanan & Minuman",
  "Snack & Permen",
  "Kategori Custom 1",
  "Kategori Custom 2"
]
```

#### 3. Products
```
Key: toko_nusa_indah_products
Format: JSON Array
[
  {
    "id_barang": 1,
    "nama_barang": "Produk Test",
    "gambar": "custom_1734349200000_abc123", // bisa key preset atau custom
    "kategori": "Kategori Custom 1",
    ...
  }
]
```

---

## Technical Details

### File yang Diubah/Ditambahkan:

#### 1. `/utils/imageHelper.ts`
Menambahkan fungsi:
- `getCustomImages()` - Ambil semua custom images dari localStorage
- `uploadCustomImage(base64Data)` - Upload dan simpan gambar, return key
- `saveCustomImage(key, base64Data)` - Simpan gambar dengan key tertentu
- `deleteCustomImage(key)` - Hapus custom image
- `fileToBase64(file)` - Convert File object ke base64

#### 2. `/hooks/useCategories.ts` (Baru)
Custom hook untuk manage kategori:
- `categories` - Array kategori
- `addCategory(name)` - Tambah kategori baru
- `removeCategory(name)` - Hapus kategori
- `resetCategories()` - Reset ke default
- `isDefaultCategory(name)` - Cek apakah kategori default

#### 3. `/features/admin/CategoryManagement.tsx` (Baru)
Komponen UI untuk kelola kategori dengan:
- List semua kategori
- Form tambah kategori baru
- Tombol hapus kategori (kecuali default)
- Visual indicator untuk kategori default

#### 4. `/features/admin/ProductManagement.tsx`
Update:
- Integrasi dengan `useCategories` hook
- Upload button untuk gambar custom
- Menampilkan galeri gabungan (preset + custom)
- **Menghilangkan preview gambar** sesuai permintaan
- Loading state saat upload gambar

#### 5. `/pages/KelolaPage.tsx`
Update:
- Menambah tab "Kelola Kategori"
- Import dan integrasi CategoryManagement component

---

## Tips & Best Practices

### Upload Gambar:
1. **Kompres gambar** sebelum upload untuk hasil optimal
2. **Gunakan rasio 1:1** (square) untuk tampilan terbaik di product card
3. **Format yang direkomendasikan**: JPG atau PNG
4. **Resolusi yang direkomendasikan**: 500x500px hingga 1000x1000px

### Kelola Kategori:
1. **Buat kategori yang spesifik** tapi tidak terlalu detail
2. **Konsisten dengan penamaan** (gunakan format yang sama)
3. **Jangan buat terlalu banyak kategori** (maksimal 10-15 untuk UX terbaik)

### Backup Data:
Untuk backup gambar custom dan kategori:
1. Buka Developer Console (F12)
2. Pergi ke Application/Storage > Local Storage
3. Copy data dari key `toko_nusa_indah_custom_images` dan `toko_nusa_indah_categories`
4. Simpan di file text untuk backup

---

## Troubleshooting

### Gambar tidak muncul setelah upload
- **Penyebab**: File terlalu besar
- **Solusi**: Kompres gambar dan upload ulang

### Kategori tidak muncul di filter
- **Penyebab**: Browser cache
- **Solusi**: Refresh halaman (F5)

### LocalStorage penuh
- **Penyebab**: Terlalu banyak gambar custom
- **Solusi**: Hapus gambar yang tidak terpakai atau gunakan gambar preset

### Gambar hilang setelah clear browser data
- **Penyebab**: Clear localStorage
- **Solusi**: Upload ulang atau restore dari backup

---

## Migration dari Sistem Lama

Jika Anda masih memiliki produk dengan URL gambar lama:
1. Sistem tetap support URL eksternal (backward compatible)
2. Edit produk tersebut dan upload gambar baru untuk migrasi
3. Atau biarkan menggunakan galeri preset yang sudah ada

---

**Selamat menggunakan fitur baru! 🎉**

Jika ada pertanyaan atau masalah, silakan hubungi developer.
