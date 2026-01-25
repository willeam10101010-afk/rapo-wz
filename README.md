# WhatsApp Bot - Login QR & SOCKS5 Proxy Support

Aplikasi WhatsApp bot yang dapat login menggunakan QR code, menerima pesan, membalas pesan, dan mendukung SOCKS5 proxy.

## Fitur

- ✅ Login menggunakan QR Code (seperti WhatsApp Web)
- ✅ Menerima pesan secara realtime
- ✅ Membalas pesan otomatis
- ✅ Support SOCKS5 Proxy
- ✅ Log pesan masuk dan keluar
- ✅ Simpan sesi login (tidak perlu scan QR setiap kali)

## Persyaratan

- Node.js versi 14 atau lebih tinggi
- npm (Node Package Manager)
- Google Chrome atau Chromium browser (untuk puppeteer)
  - Linux: `sudo apt-get install chromium-browser` atau `google-chrome-stable`
  - Mac: Chrome biasanya sudah terinstall, atau install via `brew install chromium`
  - Windows: Download dan install Google Chrome dari website resmi

## Instalasi

### Metode 1: Instalasi Otomatis (Recommended)

**Linux/Mac:**
```bash
git clone https://github.com/willeam10101010-afk/rapo-wz.git
cd rapo-wz
chmod +x install.sh
./install.sh
```

**Windows:**
1. Clone atau download repository
2. Masuk ke folder `rapo-wz`
3. Double-click file `install.bat`

### Metode 2: Instalasi Manual

1. Clone repository ini:
```bash
git clone https://github.com/willeam10101010-afk/rapo-wz.git
cd rapo-wz
```

2. Install dependencies:
```bash
npm install
```

**Catatan:** Jika instalasi gagal karena masalah puppeteer/Chrome download, jalankan:
```bash
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true npm install
```

Atau set environment variable secara permanen (Linux/Mac):
```bash
export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
npm install
```

Windows (PowerShell):
```powershell
$env:PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="true"
npm install
```

Puppeteer akan menggunakan Chrome/Chromium yang sudah terinstall di sistem Anda.

## Penggunaan

### 1. Menjalankan Bot Tanpa Proxy

```bash
npm start
```

Atau:
```bash
node whatsapp_bot.js
```

### 2. Menjalankan Bot Dengan SOCKS5 Proxy

Edit file `whatsapp_bot.js` dan ubah konfigurasi berikut:

```javascript
const config = {
    useProxy: true,  // Ubah ke true
    proxyUrl: 'socks5://127.0.0.1:1080',  // Ganti dengan URL proxy Anda
    autoReply: true,
    autoReplyMessage: 'Terima kasih atas pesan Anda. Pesan Anda telah diterima.'
};
```

Format URL proxy:
- Tanpa autentikasi: `socks5://host:port`
- Dengan autentikasi: `socks5://username:password@host:port`

Contoh:
```javascript
proxyUrl: 'socks5://127.0.0.1:1080'
proxyUrl: 'socks5://user:pass@proxy.example.com:1080'
```

### 3. Login dengan QR Code

Saat menjalankan bot pertama kali:

1. Jalankan `npm start`
2. QR code akan muncul di terminal
3. Buka WhatsApp di HP Anda
4. Pergi ke: **Pengaturan** → **Perangkat Tertaut** → **Tautkan Perangkat**
5. Scan QR code yang muncul di terminal
6. Bot akan tersambung dan siap digunakan!

Sesi login akan disimpan, jadi Anda tidak perlu scan QR code setiap kali menjalankan bot.

### 4. Konfigurasi Auto-Reply

Edit file `whatsapp_bot.js` untuk mengubah pengaturan balasan otomatis:

```javascript
const config = {
    useProxy: false,
    proxyUrl: 'socks5://127.0.0.1:1080',
    autoReply: true,  // Set false untuk menonaktifkan auto-reply
    autoReplyMessage: 'Pesan Anda sudah diterima!'  // Ubah pesan balasan
};
```

### 5. Konfigurasi Lanjutan

Untuk konfigurasi lebih lengkap (whitelist, blacklist, custom reply, dll), lihat file `config.template.js` yang berisi berbagai opsi konfigurasi.

Contoh fitur lanjutan di `examples.js`:
- Balasan kustom berdasarkan kata kunci
- Log pesan ke file
- Kirim pesan/gambar ke nomor tertentu
- Whitelist/blacklist nomor
- Dan banyak lagi

## Cara Kerja

1. **Login QR Code**: Bot menggunakan WhatsApp Web API dengan autentikasi QR code
2. **Menerima Pesan**: Semua pesan yang masuk akan tercatat di console dengan detail pengirim dan waktu
3. **Membalas Pesan**: Bot dapat membalas pesan secara otomatis (jika diaktifkan)
4. **SOCKS5 Proxy**: Koneksi dapat dialihkan melalui SOCKS5 proxy untuk privasi/keamanan

## Struktur File

```
rapo-wz/
├── whatsapp_bot.js      # File utama aplikasi bot
├── package.json         # Dependencies dan konfigurasi npm
├── .gitignore          # File yang diabaikan git
├── install.sh          # Script instalasi untuk Linux/Mac
├── install.bat         # Script instalasi untuk Windows
├── config.template.js  # Template konfigurasi lanjutan
├── examples.js         # Contoh penggunaan fitur lanjutan
├── telegram_bot.py     # Bot Telegram (legacy)
└── README.md           # Dokumentasi ini
```

## Log Pesan

Bot akan menampilkan log untuk:
- Pesan yang diterima (dari kontak lain)
- Pesan yang dikirim (dari Anda)
- Status koneksi
- Error (jika ada)

Contoh output:
```
----------------------------------------
Pesan Diterima:
Dari: John Doe
Nomor: 6281234567890@c.us
Pesan: Halo, apa kabar?
Waktu: 19/1/2026 10:30:45
----------------------------------------

✓ Balasan otomatis terkirim ke John Doe
```

## Troubleshooting

### QR Code tidak muncul
- Pastikan Node.js sudah terinstall dengan benar
- Jalankan `npm install` ulang
- Coba hapus folder `.wwebjs_auth` dan `.wwebjs_cache`

### Bot terputus terus
- Cek koneksi internet
- Jika menggunakan proxy, pastikan proxy berfungsi dengan baik
- Pastikan WhatsApp di HP tidak logout

### Proxy tidak bekerja
- Pastikan format URL proxy benar
- Test proxy dengan aplikasi lain terlebih dahulu
- Cek apakah proxy mendukung SOCKS5

## Keamanan

⚠️ **Penting:**
- Jangan share folder `.wwebjs_auth` karena berisi sesi login Anda
- Jangan commit file sesi ke git (sudah ada di .gitignore)
- Gunakan proxy terpercaya saja

## Lisensi

MIT License

## Kontribusi

Silakan buat issue atau pull request jika ingin berkontribusi!