# ⚡ QUICK GUIDE - Toko Nusa Indah

## 🔐 Cara Mengganti Password

**File:** `/components/PasswordProtection.tsx`

**Baris 11:**
```typescript
const ADMIN_PASSWORD = 'admin123';  // ← Ganti password di sini
```

**Contoh:**
```typescript
const ADMIN_PASSWORD = 'TokoNusaIndah2024';
```

---

## 🔗 Cara Mengganti URL QR Code

**File:** `/components/Header.tsx`

**Baris 14:**
```typescript
const websiteURL = 'https://toko-nusa-indah.com';  // ← Ganti URL di sini
```

**Contoh:**
```typescript
const websiteURL = 'https://www.tokoanda.com';
```

---

## 📞 Cara Edit Informasi Kontak

**File:** `/components/Kontak.tsx`

### Alamat (Baris ~30-35):
```typescript
Jl. Raya Merdeka No. 123  // ← Edit alamat
Jakarta Selatan 12345      // ← Edit kota
```

### Telepon (Baris ~50-58):
```typescript
tel:+622112345678          // ← Edit nomor telepon
wa.me/6281234567890        // ← Edit WhatsApp (tanpa +, -, spasi)
```

### Email (Baris ~70-78):
```typescript
info@tokonusaindah.com     // ← Edit email
```

### Jam Operasional (Baris ~95-112):
```typescript
08:00 - 21:00 WIB          // ← Edit jam buka
```

---

## 🏷️ Cara Menambah Promo

**File:** `/components/Promo.tsx`

**Baris ~6, tambahkan:**
```typescript
{
  id: 7,
  title: 'Promo Spesial Anda',
  description: 'Deskripsi promo',
  discount: '30%',
  validUntil: '31 Des 2024',
  category: 'Semua Kategori',
  color: 'from-red-500 to-pink-500',
  icon: <Gift className="w-8 h-8" />
}
```

---

## 🎨 Cara Mengubah Nama Toko

**File:** `/components/Header.tsx` (Baris ~28)
```typescript
<h1>Toko Nusa Indah</h1>  // ← Edit nama toko
<p>Belanja Mudah, Harga Terjangkau</p>  // ← Edit tagline
```

**File:** `/App.tsx` (Baris ~43)
```typescript
document.title = 'Toko Nusa Indah - ...';  // ← Edit title browser
```

---

## 📂 File-File Penting

| File | Edit Untuk |
|------|------------|
| `/components/PasswordProtection.tsx` | Password |
| `/components/Header.tsx` | Nama toko & URL QR Code |
| `/components/Kontak.tsx` | Info kontak |
| `/components/Promo.tsx` | Promo |
| `/App.tsx` | Title & data produk |

---

## ✅ Checklist Sebelum Go Live

- [ ] Ganti password dari `admin123`
- [ ] Update URL QR Code
- [ ] Update alamat, telepon, email
- [ ] Update jam operasional
- [ ] Update social media links
- [ ] Test semua fitur
- [ ] Test QR Code dengan HP

---

## 🔑 Info Login

**Password Default:** `admin123` (WAJIB DIGANTI!)

**Halaman:** Klik menu "Kelola" → Masukkan password

---

## 💡 Tips Cepat

1. **Format WhatsApp:** `https://wa.me/628123456789` (tanpa +, -, spasi)
2. **Password Kuat:** Minimal 8 karakter, huruf+angka+simbol
3. **URL QR Code:** Harus pakai `https://` atau `http://`
4. **Warna Gradient:** Cari "emerald" → ganti dengan warna lain (blue, purple, red)

---

Baca **PANDUAN_LENGKAP.md** untuk detail lebih lengkap!
