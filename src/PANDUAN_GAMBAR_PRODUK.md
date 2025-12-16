# Panduan Sistem Gambar Produk - Toko Nusa Indah

## Ringkasan
Sistem gambar produk telah disederhanakan untuk memudahkan pengelolaan dan migrasi di masa depan.

## Cara Kerja Saat Ini

### 1. Penyimpanan Gambar
- **Produk menyimpan KEY gambar**, bukan URL lengkap
- Contoh: `'noodles'`, `'chips'`, `'candy'`
- Semua data tersimpan di localStorage dengan key `toko_nusa_products`

### 2. Struktur Data Produk
```typescript
{
  id_barang: 1,
  nama_barang: 'Indomie Goreng',
  gambar: 'noodles', // ← Key gambar, bukan URL
  kategori: 'Makanan & Minuman',
  ...
}
```

### 3. Resolusi Gambar
File: `/utils/imageHelper.ts`

```typescript
// Fungsi untuk mengubah key menjadi URL
getImageUrl('noodles') 
// → 'https://images.unsplash.com/photo-...'
```

## Menambah Produk

1. Buka halaman **Kelola** (password: `nusaindah123`)
2. Klik tombol **Tambah Produk**
3. Isi formulir:
   - Nama Produk
   - Deskripsi
   - Kategori
   - Harga
   - Stok
4. **Pilih Gambar**: Klik salah satu gambar dari galeri preset
5. Klik **Tambah Produk**

## Untuk Sementara: Gambar dari URL Unsplash

Saat ini gambar diambil dari Unsplash melalui file:
- `/data/imageGallery.ts` - Mapping key → URL Unsplash

## Migrasi ke Gambar Lokal (Panduan untuk Nanti)

### Langkah 1: Edit `/utils/imageHelper.ts`
```typescript
export function getImageUrl(imageKey: string): string {
  // Jika sudah berupa URL (legacy support)
  if (imageKey.startsWith('http://') || imageKey.startsWith('https://')) {
    return imageKey;
  }
  
  // UBAH INI: Ambil dari localStorage
  const images = JSON.parse(localStorage.getItem('toko_nusa_images') || '{}');
  
  if (images[imageKey]) {
    return images[imageKey]; // Base64 atau Blob URL
  }
  
  // Fallback ke gallery default
  return imageGallery[imageKey] || imageGallery.noodles;
}
```

### Langkah 2: Upload Gambar Baru
Tidak perlu ubah code ProductManagement, cukup:
1. Simpan gambar dengan key yang sama ke localStorage
2. Format: `{ 'noodles': 'data:image/png;base64,...' }`

## Keuntungan Sistem Ini

✅ **Mudah Ganti Sumber Gambar**: Tinggal edit 1 file (`imageHelper.ts`)
✅ **Data Ringan**: Database hanya simpan key, bukan URL panjang
✅ **Fleksibel**: Support URL, localStorage, atau cloud storage
✅ **Backward Compatible**: Tetap bisa baca URL lama yang full path

## File yang Terlibat

| File | Fungsi |
|------|--------|
| `/utils/imageHelper.ts` | **UTAMA**: Konversi key → URL |
| `/data/imageGallery.ts` | Mapping key → URL Unsplash (sementara) |
| `/features/admin/ProductManagement.tsx` | Form tambah/edit produk |
| `/components/features/ProductCard.tsx` | Tampilan kartu produk |
| `/pages/CartPage.tsx` | Tampilan keranjang belanja |
| `/data/products.ts` | Data produk awal |

## Troubleshooting

### Gambar tidak muncul setelah tambah produk baru
1. Periksa di localStorage: `localStorage.getItem('toko_nusa_products')`
2. Pastikan field `gambar` berisi key yang valid (misal: `'noodles'`)
3. Refresh browser

### Ingin reset ke data awal
```javascript
localStorage.removeItem('toko_nusa_products');
// Refresh halaman
```

### Produk baru tidak muncul di daftar
1. Cek console browser untuk error
2. Pastikan semua field form terisi
3. Coba clear localStorage dan coba lagi

## Galeri Gambar Tersedia (22 Key)

- **Makanan**: noodles, bread, milk, coffee
- **Snack**: chips, candy, cookies, chocolate
- **Rumah Tangga**: soap, tissue, cleaner, detergent
- **Mainan**: teddy, toy, puzzle, doll
- **Alat Tulis**: pencil, notebook, pen
- **Perawatan**: toothpaste, shampoo
- **Minuman**: drink

---

**Catatan**: Sistem ini dirancang untuk mudah diperluas. Tidak ada kode yang hard-coded ke Unsplash, semua melalui abstraksi `getImageUrl()`.
