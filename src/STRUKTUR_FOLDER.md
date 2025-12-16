# Struktur Folder Toko Nusa Indah

## Ringkasan
Aplikasi e-commerce "Toko Nusa Indah" dengan struktur folder yang modular dan terorganisir berdasarkan fitur dan halaman.

## Struktur Direktori

```
/
├── App.tsx                        # Main application file dengan routing sederhana
│
├── types/
│   └── index.ts                   # TypeScript type definitions (Barang, Keranjang, dll)
│
├── data/
│   ├── products.ts                # Data produk awal (22 produk, 6 kategori)
│   └── imageGallery.ts            # Galeri gambar preset (22 gambar dari Unsplash)
│
├── hooks/
│   ├── useLocalStorage.ts         # Custom hook untuk localStorage
│   ├── useProducts.ts             # Custom hook untuk manajemen produk
│   └── useCart.ts                 # Custom hook untuk manajemen keranjang
│
├── utils/
│   └── constants.ts               # Konstanta aplikasi (nama, warna, password, dll)
│
├── pages/
│   ├── Beranda.tsx                # Halaman utama (promo banner + product list)
│   ├── KelolaPage.tsx             # Halaman admin dengan tabs (Protected by password)
│   ├── CartPage.tsx               # Halaman keranjang belanja
│   ├── TentangKami.tsx            # Halaman tentang toko
│   └── Kontak.tsx                 # Halaman kontak dan jam operasional
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx             # Header dengan navigation dan cart badge
│   │   └── CategoryNav.tsx        # Navigasi kategori produk
│   │
│   ├── features/
│   │   ├── ProductCard.tsx        # Card produk dengan quantity selector
│   │   ├── ProductList.tsx        # List produk dengan filter kategori
│   │   ├── PromoBanner.tsx        # Banner promo carousel otomatis
│   │   └── QRCodeModal.tsx        # Modal QR Code dengan download
│   │
│   └── ui/                        # Komponen UI generik (shadcn/ui)
│
└── features/
    └── admin/
        ├── PasswordProtection.tsx # Komponen proteksi password
        ├── ProductManagement.tsx  # Manajemen produk (CRUD dengan image picker)
        └── PromoManagement.tsx    # Manajemen banner promo
```

## Fitur Utama

### 1. **Sistem Produk**
- 22 produk dalam 6 kategori
- Filter berdasarkan kategori
- CRUD lengkap di halaman Kelola
- Upload gambar: galeri preset atau URL custom dengan preview

### 2. **Keranjang Belanja**
- Tambah/ubah/hapus item
- Update quantity dengan validasi stok
- Ringkasan pesanan dengan total harga
- Notifikasi toast saat menambah produk

### 3. **Halaman Admin (Kelola)**
- Protected dengan password: `nusaindah123`
- Tab Product Management:
  - Tambah/edit/hapus produk
  - Image picker dengan 2 mode: galeri atau URL custom
  - Form lengkap dengan validasi
- Tab Promo Management:
  - Tambah/edit/hapus banner promo
  - Color picker dengan preset
  - Toggle aktif/nonaktif banner
  - Preview real-time

### 4. **Banner Promo**
- Carousel otomatis (5 detik per banner)
- Hanya tampilkan banner aktif
- Warna dan teks customizable
- Dapat ditutup sementara

### 5. **QR Code**
- Generate QR Code dari URL website
- Bisa di-scan langsung dengan kamera HP
- Download QR Code sebagai PNG
- Petunjuk cara scan

### 6. **Penyimpanan Data**
- Semua data tersimpan di localStorage
- 3 keys:
  - `toko_nusa_products` - Data produk
  - `toko_nusa_cart` - Data keranjang
  - `toko_nusa_promo_banners` - Data banner promo

## Teknologi

- **React 18** dengan TypeScript
- **Tailwind CSS** untuk styling
- **Lucide React** untuk icons
- **Sonner** untuk toast notifications
- **QRCode** untuk generate QR Code
- **localStorage** untuk persistence

## Warna Tema

- Primary: Emerald (#10b981)
- Background: Gray-50
- Text: Gray-900
- Accent: Emerald-600

## Password Admin

Default password untuk halaman Kelola: `nusaindah123`

## Cara Menggunakan

1. **Beranda**: Browse produk, filter kategori, tambah ke keranjang
2. **Keranjang**: Lihat item, ubah quantity, checkout (coming soon)
3. **Kelola**: Login dengan password, kelola produk dan promo
4. **Tentang Kami**: Informasi tentang toko
5. **Kontak**: Informasi kontak dan jam operasional
6. **QR Code**: Klik "QR Code" di header untuk scan atau download

## Keunggulan Struktur Baru

✅ **Modular**: Komponen terpisah berdasarkan fungsi
✅ **Mudah Dibaca**: Struktur folder yang intuitif
✅ **Reusable**: Hooks dan komponen dapat digunakan ulang
✅ **Type-Safe**: TypeScript untuk semua komponen
✅ **Maintainable**: Kode yang terorganisir dan terdokumentasi
✅ **Sederhana**: Tidak over-engineered, fokus pada fungsionalitas
