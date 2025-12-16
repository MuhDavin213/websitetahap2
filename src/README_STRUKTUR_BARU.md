# Toko Nusa Indah - Versi Modular

## 🎉 Selamat! Website Telah Direfactor

Website e-commerce "Toko Nusa Indah" telah selesai direfactor dengan struktur folder yang lebih modular, sederhana, dan mudah dipelihara.

## ✨ Apa yang Baru?

### Struktur Folder yang Lebih Baik
```
📁 Sebelumnya: Semua komponen di /components
📁 Sekarang: Terorganisir berdasarkan fungsi
   ├── /pages        → Halaman-halaman utama
   ├── /features     → Fitur khusus (admin)
   ├── /components   → Komponen reusable
   ├── /hooks        → Custom React hooks
   ├── /data         → Data dan konstanta
   ├── /types        → TypeScript types
   └── /utils        → Utility functions
```

### Kode yang Lebih Sederhana
- ✅ App.tsx hanya 90 baris (vs 500+ baris sebelumnya)
- ✅ Setiap komponen fokus pada satu tanggung jawab
- ✅ Hooks untuk logic yang reusable
- ✅ Type-safe dengan TypeScript
- ✅ Mudah di-maintain dan dikembangkan

## 🚀 Quick Start

### Fitur Utama

#### 1️⃣ **Beranda**
- Browse 22 produk dalam 6 kategori
- Filter berdasarkan kategori
- Tambah ke keranjang dengan quantity selector
- Banner promo carousel otomatis

#### 2️⃣ **Keranjang**
- Lihat semua item yang ditambahkan
- Update quantity (dengan validasi stok)
- Hapus item
- Ringkasan total belanja

#### 3️⃣ **Kelola (Admin)**
- **Password**: `nusaindah123`
- **Tab Produk**:
  - Tambah/edit/hapus produk
  - Upload gambar: pilih dari 22 galeri atau URL custom
  - Preview gambar real-time
- **Tab Promo**:
  - Tambah/edit/hapus banner promo
  - Color picker dengan preset warna
  - Toggle aktif/nonaktif

#### 4️⃣ **QR Code**
- Generate QR Code website
- Scan langsung dengan kamera HP
- Download sebagai PNG

#### 5️⃣ **Tentang Kami & Kontak**
- Informasi toko
- Kontak dan jam operasional
- Link WhatsApp langsung

## 📦 Komponen Utama

### Pages (`/pages`)
| File | Fungsi |
|------|--------|
| `Beranda.tsx` | Halaman utama dengan promo dan produk |
| `KelolaPage.tsx` | Halaman admin dengan password protection |
| `CartPage.tsx` | Halaman keranjang belanja |
| `TentangKami.tsx` | Halaman tentang toko |
| `Kontak.tsx` | Halaman kontak |

### Features (`/features/admin`)
| File | Fungsi |
|------|--------|
| `PasswordProtection.tsx` | Form login admin |
| `ProductManagement.tsx` | CRUD produk dengan image picker |
| `PromoManagement.tsx` | CRUD banner promo |

### Components (`/components`)
| Folder | File | Fungsi |
|--------|------|--------|
| `layout/` | `Header.tsx` | Navigation dan cart badge |
| | `CategoryNav.tsx` | Filter kategori |
| `features/` | `ProductCard.tsx` | Card produk individual |
| | `ProductList.tsx` | List produk dengan filter |
| | `PromoBanner.tsx` | Banner promo carousel |
| | `QRCodeModal.tsx` | Modal QR Code |

### Hooks (`/hooks`)
| File | Fungsi |
|------|--------|
| `useLocalStorage.ts` | Generic hook untuk localStorage |
| `useProducts.ts` | Manajemen state produk |
| `useCart.ts` | Manajemen state keranjang |

### Data (`/data`)
| File | Fungsi |
|------|--------|
| `products.ts` | 22 produk initial + kategori |
| `imageGallery.ts` | 22 gambar preset dari Unsplash |

## 🎨 Tema & Branding

- **Nama**: Toko Nusa Indah
- **Tagline**: Belanja Mudah, Harga Terjangkau
- **Warna Primary**: Emerald (#10b981)
- **Font**: Menggunakan typography default dari globals.css

## 💾 Data Storage

Semua data tersimpan di **localStorage**:

```javascript
// Keys
STORAGE_KEYS = {
  PRODUCTS: 'toko_nusa_products',
  CART: 'toko_nusa_cart',
  PROMO_BANNERS: 'toko_nusa_promo_banners'
}
```

## 🔐 Admin Access

**Password Default**: `nusaindah123`

Dapat diubah di `/utils/constants.ts`:
```typescript
export const ADMIN_PASSWORD = 'nusaindah123';
```

## 🖼️ Upload Gambar Produk

Saat menambah/edit produk, Anda punya 2 pilihan:

### Opsi 1: Pilih dari Galeri (22 gambar preset)
- Klik tab "Pilih dari Galeri"
- Pilih gambar yang sesuai
- Gambar sudah ter-optimasi dari Unsplash

### Opsi 2: Input URL Custom
- Klik tab "URL Custom"
- Paste URL gambar
- Preview akan muncul otomatis
- Cocok untuk gambar spesifik

## 📱 QR Code

Klik "QR Code" di header untuk:
- Lihat QR Code website
- Scan dengan kamera HP
- Download QR Code (PNG)
- Bagikan ke pelanggan

QR Code dapat di-scan langsung dan akan membuka website di browser HP.

## 🛠️ Teknologi

| Tech | Versi | Fungsi |
|------|-------|--------|
| React | 18 | UI Framework |
| TypeScript | Latest | Type Safety |
| Tailwind CSS | 4.0 | Styling |
| Lucide React | Latest | Icons |
| Sonner | 2.0.3 | Toast Notifications |
| QRCode | Latest | Generate QR Code |

## 📚 Keuntungan Struktur Baru

### ✅ Developer Experience
- Mudah menemukan file yang dicari
- Struktur folder yang intuitif
- Kode yang lebih readable
- Type-safe dengan TypeScript

### ✅ Maintainability
- Komponen terpisah berdasarkan fungsi
- Hooks untuk logic yang reusable
- Mudah menambah fitur baru
- Mudah di-debug

### ✅ Performance
- Komponen lebih kecil = render lebih cepat
- Custom hooks untuk optimize re-render
- Lazy loading siap diterapkan

### ✅ Scalability
- Mudah menambah halaman baru
- Mudah menambah kategori produk
- Mudah extend fitur admin
- Siap untuk integrasi backend (Supabase)

## 🔄 Migrasi dari Versi Lama

Jika Anda punya data di localStorage dari versi lama:
1. Data akan otomatis terbaca (menggunakan key yang sama)
2. Struktur data tidak berubah
3. Semua fitur tetap berfungsi

## 📝 Catatan Penting

1. **Password Admin**: Jangan lupa ganti password di production
2. **Gambar Produk**: Gunakan URL yang reliable dan fast
3. **localStorage**: Data akan hilang jika user clear browser data
4. **Mobile**: Sudah responsive, test di berbagai device

## 🎯 Next Steps (Opsional)

Untuk pengembangan lebih lanjut:

### Backend Integration
- [ ] Integrasi Supabase untuk database
- [ ] User authentication
- [ ] Order management
- [ ] Payment gateway

### Features
- [ ] Fitur checkout yang lengkap
- [ ] Search produk
- [ ] Product detail page
- [ ] Order history
- [ ] Wishlist

### Optimization
- [ ] Image lazy loading
- [ ] Infinite scroll
- [ ] Service worker untuk PWA
- [ ] Analytics integration

## 💡 Tips

1. **Tambah Produk**: Gunakan galeri preset untuk hasil terbaik
2. **Banner Promo**: Max 3-4 banner aktif untuk UX optimal
3. **Kategori**: Gunakan kategori yang sudah ada atau tambah di `data/products.ts`
4. **Warna**: Sesuaikan di `utils/constants.ts` untuk rebrand

## 🐛 Troubleshooting

**Q: Data produk hilang?**
A: Check localStorage atau refresh halaman

**Q: Gambar tidak muncul?**
A: Pastikan URL gambar valid dan accessible

**Q: Password tidak berfungsi?**
A: Default password: `nusaindah123`

**Q: QR Code tidak bisa di-scan?**
A: Pastikan QR Code tidak blur dan website accessible

## 📞 Support

Untuk pertanyaan atau bantuan:
- Baca dokumentasi lengkap di `STRUKTUR_FOLDER.md`
- Check kode di masing-masing komponen
- Semua komponen sudah memiliki TypeScript types

---

**Toko Nusa Indah** - Belanja Mudah, Harga Terjangkau 🛒✨
