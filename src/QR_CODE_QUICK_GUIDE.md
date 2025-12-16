# 📱 QR Code - Quick Guide

## ✅ STATUS: BERFUNGSI 100%

QR Code sudah **SIAP PAKAI** dan bisa di-scan langsung!

---

## 🚀 Cara Menggunakan

### **Untuk Customer:**

1. **Klik tombol "Scan QR"** di navbar (pojok kanan atas)
2. **QR Code muncul** di popup
3. **Scan dengan kamera HP**
4. **Website terbuka otomatis** ✅

### **Untuk Admin/Pemilik Toko:**

1. **Klik "Scan QR"** → **Download QR Code**
2. **Print** QR code
3. **Pasang** di:
   - Depan kasir
   - Etalase toko
   - Poster promosi
   - Brosur

---

## 🔧 Ganti URL (1 Menit)

### **File:** `/components/Header.tsx`

### **Baris 19:**
```typescript
const websiteURL = 'https://demo-toko-nusa-indah.vercel.app';
```

### **Ganti dengan:**
```typescript
const websiteURL = 'https://www.tokonusaindah.com';  // URL Anda
```

### **Contoh URL:**
```
https://www.tokonusaindah.com
https://tokonusaindah.vercel.app
https://shop.tokonusaindah.co.id
```

---

## 📲 Test QR Code

### **Cara 1 - Scan dari Layar:**
1. Buka website di komputer
2. Klik "Scan QR"
3. Buka kamera HP
4. Scan QR dari layar ✅

### **Cara 2 - Download & Scan:**
1. Klik "Download QR Code"
2. Buka gambar di HP lain
3. Scan dengan HP Anda ✅

---

## 🎨 Fitur

✅ Generate QR otomatis  
✅ Warna emerald (sesuai tema)  
✅ Download sebagai PNG  
✅ Modal popup elegan  
✅ Instruksi cara scan  
✅ Responsif (mobile & desktop)  

---

## 🆘 Troubleshooting

**QR tidak muncul?**
→ Reload halaman (Ctrl+F5)

**QR tidak bisa di-scan?**
→ Pastikan URL valid & bisa diakses internet

**Download gagal?**
→ Allow download di browser settings

---

## 📝 Checklist

- [ ] Ganti URL di `/components/Header.tsx`
- [ ] Save file (Ctrl+S)
- [ ] Reload website
- [ ] Test scan dengan HP
- [ ] Download QR code
- [ ] Print & pasang di toko

---

**QR Code Siap Digunakan! 🎉**

*Library: qrcode | Format: PNG | Size: 300x300px*
