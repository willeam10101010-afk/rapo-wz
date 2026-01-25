# WhatsApp Bot - Quick Start Guide

## Fitur Lengkap ✓

✅ **Login QR Code** - Scan QR untuk login seperti WhatsApp Web
✅ **Terima Pesan** - Semua pesan masuk tercatat otomatis
✅ **Balas Pesan** - Auto-reply dengan pesan yang dapat dikustomisasi
✅ **SOCKS5 Proxy** - Support proxy untuk keamanan dan privasi
✅ **Session Persistent** - Login sekali, tidak perlu scan QR lagi

## Instalasi Cepat

### Windows
1. Download/clone repository ini
2. Double-click `install.bat`
3. Jalankan dengan: `npm start`

### Linux/Mac
```bash
git clone https://github.com/willeam10101010-afk/rapo-wz.git
cd rapo-wz
chmod +x install.sh
./install.sh
npm start
```

## Konfigurasi Proxy SOCKS5

Edit file `whatsapp_bot.js`, ubah baris berikut:

```javascript
const config = {
    useProxy: true,  // ← Ubah ke true
    proxyUrl: 'socks5://127.0.0.1:1080',  // ← Ganti dengan proxy Anda
    autoReply: true,
    autoReplyMessage: 'Terima kasih atas pesan Anda. Pesan Anda telah diterima.'
};
```

Format proxy URL:
- Tanpa password: `socks5://host:port`
- Dengan password: `socks5://username:password@host:port`

Contoh:
- `socks5://localhost:1080`
- `socks5://myuser:mypass@proxy.server.com:1080`

## Cara Login

1. Jalankan: `npm start`
2. QR code akan muncul di terminal
3. Buka WhatsApp di HP
4. **Pengaturan** → **Perangkat Tertaut** → **Tautkan Perangkat**
5. Scan QR code
6. Selesai! Bot siap digunakan

## Fitur Lanjutan

Lihat file `examples.js` untuk:
- Custom auto-reply berdasarkan keyword
- Kirim pesan/gambar ke nomor tertentu
- Whitelist/blacklist nomor
- Log pesan ke file
- Dan banyak lagi!

Lihat file `config.template.js` untuk konfigurasi lengkap.

## Troubleshooting

**QR tidak muncul?**
- Install ulang: `npm install`
- Hapus folder `.wwebjs_auth` dan coba lagi

**Bot terputus terus?**
- Cek koneksi internet
- Jika pakai proxy, test proxy terlebih dahulu
- Pastikan WhatsApp di HP tidak logout

**Error saat npm install?**
```bash
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true npm install
```

## Keamanan ⚠️

- ❌ JANGAN share folder `.wwebjs_auth` (berisi session login)
- ❌ JANGAN commit file session ke git
- ✅ Gunakan proxy terpercaya
- ✅ Password proxy tidak akan terlihat di log

## Bantuan Lebih Lanjut

Baca `README.md` untuk dokumentasi lengkap!

---

**Happy messaging! 🚀**
