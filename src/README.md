# 🛒 Toko Nusa Indah - E-Commerce Website

> **Belanja Mudah, Harga Terjangkau**

Website e-commerce lengkap dengan sistem keranjang, manajemen produk, upload gambar, dan penyimpanan offline yang siap migrasi ke database.

---

## ✨ Fitur Utama

### 🏠 Untuk Pelanggan
- ✅ **Browse Produk** - 22+ produk dalam 6 kategori
- ✅ **Filter Kategori** - Cari produk berdasarkan kategori
- ✅ **Keranjang Belanja** - Tambah, edit, hapus item
- ✅ **Promo Banner** - Carousel promo otomatis
- ✅ **QR Code** - Share website via QR Code
- ✅ **Responsive** - Mobile & desktop friendly

### 🔧 Untuk Admin
- ✅ **Kelola Produk** - CRUD produk lengkap
- ✅ **Upload Gambar** - 3 opsi:
  - Pilih dari galeri (22 gambar preset)
  - Input URL custom
  - **Upload file lokal** ⭐ BARU!
- ✅ **Kelola Promo** - Tambah/edit banner promo
- ✅ **Password Protection** - Akses admin aman

### 💾 Teknologi
- ✅ **React + TypeScript** - Type-safe development
- ✅ **Tailwind CSS 4.0** - Modern styling
- ✅ **LocalStorage** - Penyimpanan offline
- ✅ **Base64 Images** - Upload & simpan gambar lokal
- ✅ **Database Abstraction** - Siap migrasi ke server

---

## 🚀 Quick Start

### Akses Admin
1. Klik **"Kelola"** di navigation
2. Password: `nusaindah123`
3. Mulai kelola produk & promo!

### Upload Gambar Produk
1. **Tambah/Edit Produk**
2. **Pilih tab "Unggah Gambar"**
3. **Drag & drop** gambar atau klik untuk pilih file
4. Gambar otomatis dikompres dan disimpan!

---

## 📂 Struktur Project

```
/
├── /services/           → Database & image processing
│   ├── database.ts      → Abstraction layer (localStorage → server)
│   └── imageService.ts  → Image upload, compress, validate
│
├── /hooks/              → Custom React hooks
│   ├── useProducts.ts   → Manage products
│   ├── useCart.ts       → Manage cart
│   ├── useImages.ts     → Manage uploaded images ⭐ BARU
│   └── useLocalStorage.ts
│
├── /pages/              → Main pages
│   ├── Beranda.tsx      → Homepage
│   ├── CartPage.tsx     → Shopping cart
│   ├── KelolaPage.tsx   → Admin dashboard
│   ├── TentangKami.tsx  → About us
│   └── Kontak.tsx       → Contact
│
├── /features/admin/     → Admin features
│   ├── ProductManagement.tsx  → CRUD products
│   ├── PromoManagement.tsx    → CRUD promos
│   └── PasswordProtection.tsx → Admin login
│
├── /components/
│   ├── /layout/         → Layout components
│   │   ├── Header.tsx   → Navigation
│   │   └── CategoryNav.tsx
│   └── /features/       → Feature components
│       ├── ProductCard.tsx
│       ├── ProductList.tsx
│       ├── PromoBanner.tsx
│       ├── QRCodeModal.tsx
│       └── ImageUploader.tsx  ⭐ BARU
│
├── /data/               → Static data
│   ├── products.ts      → Initial 22 products
│   └── imageGallery.ts  → Preset images
│
├── /types/              → TypeScript types
│   └── index.ts
│
└── /utils/              → Utilities
    └── constants.ts     → App constants
```

---

## 📦 LocalStorage Keys

```javascript
'toko_nusa_products'       // Products
'toko_nusa_cart'           // Shopping cart
'toko_nusa_promo_banners'  // Promo banners
'toko_nusa_images'         // Uploaded images ⭐ BARU
```

---

## 🎨 Customization

### Ganti Password Admin
```typescript
// /utils/constants.ts
export const ADMIN_PASSWORD = 'nusaindah123'; // ← Ganti ini
```

### Ganti Warna Tema
```typescript
// /utils/constants.ts
export const THEME_COLORS = {
  primary: 'emerald',     // ← Tailwind color
  primaryHex: '#10b981'   // ← Hex color
};
```

### Tambah Kategori Produk
```typescript
// /data/products.ts
export const categories = [
  'Semua',
  'Makanan & Minuman',
  'Snack & Permen',
  'Kebutuhan Rumah Tangga',
  'Mainan & Boneka',
  'Alat Tulis',
  'Perawatan Pribadi',
  'Kategori Baru' // ← Tambah di sini
];
```

---

## 🔄 Migrasi ke Database Server

Website ini dirancang untuk **mudah migrasi** ke database server:

### Option 1: Supabase
```typescript
// /services/database.ts
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(URL, KEY);

export const db = {
  get: async (table, query) => {
    const { data } = await supabase.from(table).select().match(query);
    return data;
  },
  set: async (table, data) => {
    await supabase.from(table).insert(data);
  }
};
```

### Option 2: Firebase
```typescript
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export const db = {
  get: async (collectionName) => {
    const snap = await getDocs(collection(firestore, collectionName));
    return snap.docs.map(doc => doc.data());
  }
};
```

### Option 3: Custom Backend
```typescript
export const db = {
  get: async (endpoint) => {
    const res = await fetch(`/api/${endpoint}`);
    return res.json();
  },
  set: async (endpoint, data) => {
    await fetch(`/api/${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
};
```

**Tidak perlu ubah komponen lain!** Semua komponen sudah menggunakan abstraction layer. 🎉

---

## 📝 Dokumentasi Lengkap

- 📘 **[PANDUAN_DATABASE_OFFLINE.md](PANDUAN_DATABASE_OFFLINE.md)** - Panduan lengkap database & migrasi
- 📗 **[README_STRUKTUR_BARU.md](README_STRUKTUR_BARU.md)** - Dokumentasi struktur modular
- 📙 **[STRUKTUR_FOLDER.md](STRUKTUR_FOLDER.md)** - Detail struktur folder

---

## ⚙️ Fitur Teknis

### Image Upload System
- **Drag & drop** file support
- **Validasi** format & ukuran (max 5MB)
- **Auto compression** (800px, 80% quality)
- **Convert to base64** untuk localStorage
- **Preview** real-time

### Database Abstraction
- **Generic CRUD** operations
- **Type-safe** dengan TypeScript
- **Easy migration** path
- **localStorage** untuk offline
- **Ready for** Supabase/Firebase/Backend

### State Management
- **Custom hooks** untuk semua data
- **LocalStorage** persistence
- **Optimistic updates**
- **No external state library** needed

---

## 🎯 Cara Kerja Upload Gambar

```
1. User pilih file
   ↓
2. Validasi (format & size)
   ↓
3. Convert to base64
   ↓
4. Compress gambar (opsional)
   ↓
5. Simpan ke useImages hook
   ↓
6. Save ke localStorage
   ↓
7. Gunakan base64 sebagai src image
   ↓
8. Display di ProductCard
```

---

## 💡 Tips & Best Practices

### 1. Kompres Gambar Sebelum Upload
- Gambar dikompres otomatis ke 800px
- Quality default 80%
- Bisa adjust di props component

### 2. Monitor Storage Usage
```javascript
// Check berapa storage terpakai
const usage = Object.keys(localStorage)
  .reduce((total, key) => total + localStorage[key].length, 0);
console.log(`${(usage / 1024 / 1024).toFixed(2)} MB`);
```

### 3. Backup Data Berkala
```javascript
// Export semua data
const backup = {
  products: localStorage.getItem('toko_nusa_products'),
  images: localStorage.getItem('toko_nusa_images'),
  // ...
};
console.log(JSON.stringify(backup));
```

### 4. Clear Storage Jika Penuh
```javascript
// Jika localStorage penuh, clear old images
localStorage.removeItem('toko_nusa_images');
```

---

## ⚠️ Limitations

### LocalStorage
- **Max 5-10 MB** per domain
- **Base64 ~33% larger** than original
- **Data hilang** jika user clear browser
- **Tidak multi-device** sync

### Solusi
- ✅ Kompres gambar sebelum save
- ✅ Migrasi ke cloud storage untuk production
- ✅ Gunakan Supabase/Firebase untuk sync

---

## 🐛 Troubleshooting

**Q: Gambar tidak muncul?**
- Check browser console
- Pastikan file < 5MB
- Pastikan format JPG/PNG/GIF/WebP

**Q: Error "QuotaExceededError"?**
- LocalStorage penuh
- Hapus gambar lama
- Kompres dengan quality lebih rendah
- Migrasi ke database server

**Q: Data hilang saat refresh?**
- Check browser Private/Incognito mode
- LocalStorage mungkin disabled
- Clear cache mungkin tercentang

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Deploy ke Vercel
npm install -g vercel
vercel
```

### Netlify
```bash
# Build untuk production
npm run build

# Deploy folder build/ ke Netlify
```

### GitHub Pages
```bash
# Set homepage di package.json
"homepage": "https://username.github.io/toko-nusa-indah"

# Deploy
npm run build
npm run deploy
```

---

## 📊 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

**Features Used:**
- localStorage API
- FileReader API
- Canvas API (untuk compress)
- Base64 encoding
- Drag & drop API

---

## 🤝 Contributing

Ingin contribute? Pull request welcome!

1. Fork repo
2. Create feature branch
3. Commit changes
4. Push ke branch
5. Create Pull Request

---

## 📄 License

MIT License - bebas digunakan untuk project apapun!

---

## 💬 Support

Ada pertanyaan? Check dokumentasi:
- [PANDUAN_DATABASE_OFFLINE.md](PANDUAN_DATABASE_OFFLINE.md)
- [README_STRUKTUR_BARU.md](README_STRUKTUR_BARU.md)

---

## 🎉 Changelog

### v2.0.0 (Latest)
- ⭐ Upload gambar lokal (drag & drop)
- ⭐ Database abstraction layer
- ⭐ Image compression & optimization
- ⭐ useImages hook
- ⭐ ImageUploader component
- ⭐ Siap migrasi ke Supabase/Firebase

### v1.0.0
- ✅ Sistem keranjang lengkap
- ✅ 22 produk dalam 6 kategori
- ✅ Filter kategori
- ✅ CRUD produk & promo
- ✅ QR Code generator
- ✅ LocalStorage persistence

---

**Toko Nusa Indah** - Belanja Mudah, Harga Terjangkau 🛒✨

*Build with ❤️ using React + TypeScript + Tailwind CSS*
