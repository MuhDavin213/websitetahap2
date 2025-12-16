# 🔗 Cara Mengganti URL QR Code

## 📱 Fitur QR Code Sudah Berfungsi!

QR Code sekarang sudah **BERFUNGSI PENUH** dan bisa di-scan langsung dengan kamera smartphone!

### ✅ Cara Kerja:

1. **Klik tombol "Scan QR"** di navbar (kanan atas)
2. **QR Code muncul** dalam modal popup yang elegan
3. **Scan dengan kamera HP** - QR code akan langsung berfungsi
4. **Download QR Code** - tombol download tersedia untuk save gambar

---

## 🔧 Cara Mengganti URL

### **URL Contoh Saat Ini:**
```
https://demo-toko-nusa-indah.vercel.app
```

### **Langkah Mengganti:**

#### 1. **Buka File:**
```
/components/Header.tsx
```

#### 2. **Cari Baris 14-19:**
```typescript
// URL CONTOH untuk QR Code - Ganti dengan URL website Anda yang sebenarnya
// Contoh URL yang bisa digunakan:
// - https://www.tokonusaindah.com
// - https://tokonusaindah.vercel.app
// - https://shop.tokonusaindah.co.id
const websiteURL = 'https://demo-toko-nusa-indah.vercel.app';
```

#### 3. **Ganti URL:**
```typescript
// Ganti dengan URL website Anda
const websiteURL = 'https://www.tokonusaindah.com';
```

#### 4. **Simpan File** (Ctrl+S)

#### 5. **Reload Website** - QR Code otomatis update!

---

## 📋 Contoh URL yang Benar

```typescript
// ✅ Domain sendiri
const websiteURL = 'https://www.tokonusaindah.com';
const websiteURL = 'https://tokonusaindah.co.id';

// ✅ Subdomain
const websiteURL = 'https://shop.tokonusaindah.com';
const websiteURL = 'https://store.tokonusaindah.com';

// ✅ Platform hosting
const websiteURL = 'https://tokonusaindah.vercel.app';
const websiteURL = 'https://tokonusaindah.netlify.app';
const websiteURL = 'https://tokonusaindah.github.io';

// ✅ Dengan path
const websiteURL = 'https://www.marketplace.com/toko-nusa-indah';

// ✅ Testing (localhost)
const websiteURL = 'http://localhost:3000';
const websiteURL = 'http://localhost:5173';
```

---

## 🎨 Fitur QR Code

### **Apa yang Sudah Tersedia:**

✅ **Generate QR Code Otomatis**
- Menggunakan library `qrcode` 
- QR code langsung bisa di-scan
- Format PNG berkualitas tinggi

✅ **Design Profesional**
- Warna emerald sesuai tema
- Border hijau yang menarik
- Modal popup elegan dengan backdrop blur

✅ **Fitur Lengkap**
- Display URL yang di-encode
- Instruksi cara scan (4 langkah mudah)
- Tombol download QR code
- Branding "Toko Nusa Indah"

✅ **Responsif**
- Bekerja di desktop & mobile
- Tombol berbeda untuk desktop (text) & mobile (icon)
- Modal responsive

✅ **User-Friendly**
- Klik backdrop untuk close
- Tombol X untuk close
- Animasi smooth (fade-in, zoom-in)

---

## 📲 Cara Test QR Code

### **Desktop:**
1. Klik tombol **"Scan QR"** di navbar
2. QR Code muncul di popup
3. Buka kamera smartphone
4. Scan QR code dari layar komputer
5. Tap notifikasi di HP
6. Website terbuka di browser HP ✅

### **Mobile:**
1. Klik icon **QR** di navbar (kanan atas)
2. QR Code muncul
3. Screenshot QR code
4. Buka app scanner atau Google Lens
5. Scan dari screenshot
6. Website terbuka ✅

### **Download & Print:**
1. Klik **"Download QR Code"** di modal
2. QR code tersimpan sebagai PNG
3. Print untuk:
   - Poster di toko
   - Brosur promosi
   - Kartu nama
   - Stiker meja kasir

---

## 🚀 Tips Penggunaan

### **1. Untuk Toko Fisik:**
```
Print QR Code dan pasang di:
✅ Depan kasir
✅ Etalase toko
✅ Meja pelanggan
✅ Area parkir
```

### **2. Untuk Promosi:**
```
Bagikan QR Code di:
✅ Instagram Stories
✅ Facebook Post
✅ WhatsApp Business Status
✅ Brosur fisik
✅ Kartu nama digital
```

### **3. Untuk Event:**
```
Gunakan QR Code untuk:
✅ Promo spesial event
✅ Lucky draw (scan = entry)
✅ Membership registration
✅ Feedback form
```

---

## 🔒 Keamanan

### **URL Validation:**
- Pastikan URL menggunakan `https://` untuk keamanan
- Jangan gunakan URL pendek yang mencurigakan
- Test QR code sebelum print massal

### **Best Practices:**
```typescript
// ✅ BAIK - HTTPS
const websiteURL = 'https://www.tokonusaindah.com';

// ⚠️ KURANG BAIK - HTTP (tidak aman)
const websiteURL = 'http://www.tokonusaindah.com';

// ❌ SALAH - Format tidak valid
const websiteURL = 'www.tokonusaindah.com';  // Missing protocol
const websiteURL = 'tokonusaindah.com';       // Missing protocol
```

---

## 📊 QR Code Stats

**Teknologi:**
- Library: `qrcode` (npm package)
- Format: PNG Canvas
- Size: 300x300px
- Error Correction: Level H (30% recovery)
- Color: Emerald (#059669)

**Compatibility:**
- ✅ iOS Camera App
- ✅ Android Camera App
- ✅ Google Lens
- ✅ QR Scanner Apps
- ✅ WeChat Scanner
- ✅ Line Scanner

---

## 🆘 Troubleshooting

### **Q: QR Code tidak muncul?**
**A:** 
- Check console browser (F12)
- Pastikan library `qrcode` terinstall
- Reload halaman (Ctrl+F5)

### **Q: QR Code tidak bisa di-scan?**
**A:**
- Pastikan URL valid (https://)
- URL harus bisa diakses dari internet
- Coba scan dari jarak berbeda
- Pastikan lighting cukup

### **Q: Download QR Code gagal?**
**A:**
- Browser mungkin block download
- Allow download di browser settings
- Coba klik kanan > Save Image

### **Q: Ingin custom warna QR Code?**
**A:**
Edit file `/components/QRCodeModal.tsx` baris 18-21:
```typescript
color: {
  dark: '#059669',  // ← Ganti warna ini (hex color)
  light: '#FFFFFF'  // ← Background QR
}
```

---

## ✨ Kesimpulan

QR Code sudah **BERFUNGSI 100%** dan siap digunakan! 

**Tinggal:**
1. ✏️ Ganti URL di `/components/Header.tsx` (baris 19)
2. 💾 Save file
3. 🔄 Reload website
4. 📱 Test dengan scan dari HP
5. ⬇️ Download QR code
6. 🖨️ Print & pasang di toko!

**QR Code siap membantu customer akses website Anda dengan mudah! 🎉**

---

**© 2024 Toko Nusa Indah**

*Made with ❤️ using React + QRCode Library*
