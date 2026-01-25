# rapo-wz - Messaging Bot Automation Suite

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org/)
[![Python](https://img.shields.io/badge/python-3.x-blue)](https://www.python.org/)

A comprehensive messaging bot automation project featuring WhatsApp and Telegram bots with advanced features like QR authentication, message tracking, and proxy support.

[🇮🇩 Bahasa Indonesia](#bahasa-indonesia) | [🇬🇧 English](#english)

---

## English

### 📋 Overview

**rapo-wz** is a multi-platform messaging bot suite that includes:
- **WhatsApp Bot**: Automated messaging with QR login and SOCKS5 proxy support
- **Telegram Bot**: Message tracking and validation with Excel storage

### ✨ Features

#### WhatsApp Bot
- ✅ QR Code Login (like WhatsApp Web)
- ✅ Real-time message reception
- ✅ Automated message replies
- ✅ SOCKS5 Proxy support
- ✅ Message logging (incoming/outgoing)
- ✅ Session persistence (no need to scan QR every time)

#### Telegram Bot
- ✅ Message tracking to Excel file
- ✅ Duplicate message detection
- ✅ User and timestamp logging
- ✅ GitHub integration (optional)

### 🛠️ Technology Stack

- **JavaScript/Node.js**: WhatsApp bot implementation
- **Python 3.x**: Telegram bot implementation
- **Shell Script**: Linux/Mac installation automation
- **Batchfile**: Windows installation automation

**Key Dependencies:**
- `whatsapp-web.js`: WhatsApp Web API wrapper
- `python-telegram-bot`: Telegram Bot API wrapper
- `openpyxl`: Excel file handling
- `qrcode-terminal`: Terminal QR code display

### 📦 Installation

#### Prerequisites

**For WhatsApp Bot:**
- Node.js version 14 or higher
- npm (Node Package Manager)
- Google Chrome or Chromium browser

**For Telegram Bot:**
- Python 3.x
- pip (Python package manager)

#### Quick Install

**Linux/Mac:**
```bash
git clone https://github.com/willeam10101010-afk/rapo-wz.git
cd rapo-wz
chmod +x install.sh
./install.sh
```

**Windows:**
1. Clone or download the repository
2. Navigate to `rapo-wz` folder
3. Double-click `install.bat`

#### Manual Installation

**WhatsApp Bot:**
```bash
npm install
```

If Puppeteer download fails:
```bash
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true npm install
```

**Telegram Bot:**
```bash
pip install python-telegram-bot openpyxl requests
```

### 🚀 Usage

#### WhatsApp Bot

**Basic Usage:**
```bash
npm start
# or
node whatsapp_bot.js
```

**With SOCKS5 Proxy:**

Edit `whatsapp_bot.js`:
```javascript
const config = {
    useProxy: true,  // Enable proxy
    proxyUrl: 'socks5://127.0.0.1:1080',  // Your proxy URL
    autoReply: true,
    autoReplyMessage: 'Thank you for your message!'
};
```

Proxy URL formats:
- Without auth: `socks5://host:port`
- With auth: `socks5://username:password@host:port`

**QR Code Login:**
1. Run `npm start`
2. QR code appears in terminal
3. Open WhatsApp on your phone
4. Go to: **Settings** → **Linked Devices** → **Link a Device**
5. Scan the QR code
6. Bot is now connected!

#### Telegram Bot

**Configuration:**

Edit `telegram_bot.py`:
```python
TOKEN = 'YOUR_BOT_TOKEN_HERE'          # Your Telegram bot token
GITHUB_TOKEN = 'YOUR_GITHUB_TOKEN_HERE' # Optional: for GitHub integration
```

**Run:**
```bash
python telegram_bot.py
```

### 📚 Documentation

- **[QUICKSTART.md](QUICKSTART.md)**: Quick start guide (Indonesian)
- **[MODULES.md](MODULES.md)**: Detailed module documentation
- **[config.template.js](config.template.js)**: Advanced configuration options
- **[examples.js](examples.js)**: Usage examples and patterns

### 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

#### Contribution Guidelines

- Follow existing code style and conventions
- Keep user-facing messages in Indonesian for consistency
- Test your changes thoroughly before submitting
- Update documentation if adding new features
- Don't commit sensitive data (tokens, credentials)

### 🔒 Security

**Important Security Notes:**

⚠️ **Do NOT commit:**
- `.wwebjs_auth` folder (WhatsApp session data)
- `data.xlsx` file (Telegram data)
- Actual bot tokens or API credentials
- `.env` files with secrets

✅ **Best Practices:**
- Use environment variables for sensitive data
- Keep tokens as placeholders in source code
- Review `.gitignore` before committing
- Use trusted proxies only
- Regularly update dependencies

### 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### 📞 Support

For issues and questions:
- Open an issue on GitHub
- Check existing documentation in `MODULES.md`
- Review troubleshooting section below

### 🐛 Troubleshooting

**QR Code Not Showing:**
- Reinstall dependencies: `npm install`
- Check Node.js version (>= 14)
- Delete `.wwebjs_auth` and `.wwebjs_cache` folders

**Bot Disconnects:**
- Check internet connection
- Verify proxy settings (if using proxy)
- Ensure WhatsApp on phone is not logged out

**Proxy Not Working:**
- Verify proxy URL format
- Test proxy with other applications first
- Ensure proxy supports SOCKS5

---

## Bahasa Indonesia

### WhatsApp Bot - Login QR & SOCKS5 Proxy Support

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

Proyek ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail lengkap.

**Ringkasan MIT License:**
- ✅ Bebas digunakan untuk tujuan komersial dan pribadi
- ✅ Bebas dimodifikasi dan didistribusikan
- ✅ Bebas digunakan secara pribadi
- ⚠️ Harus menyertakan pemberitahuan hak cipta dan lisensi
- ⚠️ Tanpa jaminan

## Kontribusi

Kontribusi sangat diterima! Berikut cara berkontribusi:

1. **Fork repositori ini**
2. **Buat branch fitur**: `git checkout -b fitur/fitur-keren`
3. **Commit perubahan**: `git commit -m 'Menambahkan fitur keren'`
4. **Push ke branch**: `git push origin fitur/fitur-keren`
5. **Buka Pull Request**

### Panduan Kontribusi

- Ikuti gaya kode yang ada
- Gunakan bahasa Indonesia untuk pesan yang menghadap pengguna
- Test perubahan Anda dengan teliti
- Update dokumentasi jika menambahkan fitur baru
- Jangan commit data sensitif (token, kredensial)

Silakan buat issue atau pull request jika ingin berkontribusi!

---

**Dokumentasi Lengkap:** Lihat [MODULES.md](MODULES.md) untuk dokumentasi teknis detail tentang semua modul dan komponen.