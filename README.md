# Rapo-WZ: Multi-Platform Bot Suite

A comprehensive bot automation suite supporting WhatsApp and Telegram platforms with message tracking, auto-reply, and proxy support.

## 📋 Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Troubleshooting](#troubleshooting)

## 🌟 Overview

This repository contains two independent bot applications:

1. **WhatsApp Bot** - A JavaScript/Node.js bot with QR code authentication, real-time message handling, auto-reply, and SOCKS5 proxy support
2. **Telegram Bot** - A Python bot for message validation and tracking using Excel file storage

---

## 🛠️ Technologies Used

- **JavaScript** (Node.js) - WhatsApp bot implementation
- **Python 3.x** - Telegram bot implementation
- **Shell** - Linux/Mac installation scripts
- **Batchfile** - Windows installation scripts

### Key Dependencies

**WhatsApp Bot:**
- `whatsapp-web.js` - WhatsApp Web API wrapper
- `qrcode-terminal` - QR code generation for terminal
- `puppeteer` - Headless browser automation

**Telegram Bot:**
- `python-telegram-bot` - Telegram Bot API wrapper
- `openpyxl` - Excel file handling
- `requests` - HTTP client for GitHub API integration

---

## ✨ Features

### WhatsApp Bot

- ✅ **QR Code Authentication** - Login like WhatsApp Web
- ✅ **Real-time Message Reception** - Receive and log all incoming messages
- ✅ **Auto-Reply** - Customizable automatic message responses
- ✅ **SOCKS5 Proxy Support** - Route traffic through SOCKS5 proxy for privacy
- ✅ **Message Logging** - Track incoming and outgoing messages
- ✅ **Persistent Session** - Save login session (no need to scan QR every time)
- ✅ **Custom Reply Rules** - Keyword-based automated responses
- ✅ **Whitelist/Blacklist** - Filter allowed/blocked contacts

### Telegram Bot

- ✅ **Message Tracking** - Save messages to Excel file with metadata
- ✅ **Duplicate Detection** - Check if a message was sent before
- ✅ **User Information** - Track username and timestamp
- ✅ **GitHub Integration** - Optional GitHub API integration for file commits
- ✅ **Excel Storage** - Persistent data storage using XLSX format

---

## 📦 Prerequisites

### For WhatsApp Bot

- **Node.js** version 14 or higher
- **npm** (Node Package Manager)
- **Google Chrome or Chromium** browser (for puppeteer)
  - **Linux**: `sudo apt-get install chromium-browser` or `google-chrome-stable`
  - **macOS**: Install via `brew install chromium` or download Chrome
  - **Windows**: Download and install Google Chrome from the official website

### For Telegram Bot

- **Python 3.x**
- **pip** (Python package manager)
- **Telegram Bot Token** (obtain from [@BotFather](https://t.me/BotFather))
- **GitHub Token** (optional, for GitHub integration)

---

## 🚀 Installation

### WhatsApp Bot Installation

#### Method 1: Automated Installation (Recommended)

**Linux/macOS:**
```bash
git clone https://github.com/willeam10101010-afk/rapo-wz.git
cd rapo-wz
chmod +x install.sh
./install.sh
```

**Windows:**
1. Clone or download the repository
2. Navigate to the `rapo-wz` folder
3. Double-click the `install.bat` file

#### Method 2: Manual Installation

1. Clone the repository:
```bash
git clone https://github.com/willeam10101010-afk/rapo-wz.git
cd rapo-wz
```

2. Install dependencies:
```bash
npm install
```

**Note:** If installation fails due to puppeteer/Chrome download issues, run:
```bash
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true npm install
```

Or set the environment variable permanently:

**Linux/macOS:**
```bash
export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
npm install
```

**Windows (PowerShell):**
```powershell
$env:PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="true"
npm install
```

Puppeteer will use the Chrome/Chromium already installed on your system.

### Telegram Bot Installation

1. Install required Python packages:
```bash
pip install python-telegram-bot openpyxl requests
```

2. Configure the bot by editing `telegram_bot.py`:
   - Set `TOKEN` to your Telegram bot token
   - (Optional) Set GitHub credentials for auto-commit feature:
     - `GITHUB_TOKEN` - Your GitHub personal access token
     - `REPO_OWNER` - GitHub repository owner
     - `REPO_NAME` - GitHub repository name

---

## 🎯 Usage

### WhatsApp Bot

#### 1. Running the Bot Without Proxy

```bash
npm start
```

Or:
```bash
node whatsapp_bot.js
```

#### 2. Running the Bot With SOCKS5 Proxy

Edit `whatsapp_bot.js` and modify the configuration:

```javascript
const config = {
    useProxy: true,  // Change to true
    proxyUrl: 'socks5://127.0.0.1:1080',  // Replace with your proxy URL
    autoReply: true,
    autoReplyMessage: 'Thank you for your message. Your message has been received.'
};
```

Proxy URL formats:
- Without authentication: `socks5://host:port`
- With authentication: `socks5://username:password@host:port`

Examples:
```javascript
proxyUrl: 'socks5://127.0.0.1:1080'
proxyUrl: 'socks5://user:pass@proxy.example.com:1080'
```

#### 3. QR Code Login

When running the bot for the first time:

1. Run `npm start`
2. A QR code will appear in the terminal
3. Open WhatsApp on your phone
4. Go to: **Settings** → **Linked Devices** → **Link a Device**
5. Scan the QR code displayed in the terminal
6. The bot will be connected and ready to use!

The login session will be saved, so you don't need to scan the QR code every time you run the bot.

#### 4. Auto-Reply Configuration

Edit `whatsapp_bot.js` to change auto-reply settings:

```javascript
const config = {
    useProxy: false,
    proxyUrl: 'socks5://127.0.0.1:1080',
    autoReply: true,  // Set to false to disable auto-reply
    autoReplyMessage: 'Your message has been received!'  // Change reply message
};
```

#### 5. Advanced Configuration

For more comprehensive configuration (whitelist, blacklist, custom replies, etc.), see the `config.template.js` file which contains various configuration options.

Example advanced features in `examples.js`:
- Custom replies based on keywords
- Log messages to file
- Send messages/images to specific numbers
- Whitelist/blacklist numbers
- And much more

### Telegram Bot

#### 1. Running the Telegram Bot

```bash
python telegram_bot.py
```

#### 2. How It Works

1. Send a text message to your bot on Telegram
2. The bot checks if the message has been sent before
3. If it's a new message:
   - Bot replies: "Data dapat digunakan." (Data can be used)
   - Saves the message to `data.xlsx` with user info and timestamp
4. If it's a duplicate message:
   - Bot replies with who sent it previously and when

#### 3. Data Storage

The bot stores messages in an Excel file (`data.xlsx`) with the following structure:
- **Message**: The text content
- **User**: Username or first name of the sender
- **DateTime**: Timestamp when the message was sent

#### 4. GitHub Integration (Optional)

The bot includes a `commit_file_to_github()` function that can automatically commit the Excel file to your GitHub repository. To enable this feature:

1. Set your GitHub credentials in `telegram_bot.py`
2. Call the function after saving data in the `message_handler()` function
3. The Excel file will be automatically committed to your repository

**Note:** This feature is currently not enabled in the default message flow.

---

## ⚙️ Configuration

### WhatsApp Bot Configuration Files

- **`whatsapp_bot.js`** - Main bot file with basic configuration
- **`config.template.js`** - Template with all available configuration options
- **`examples.js`** - Example implementations of advanced features

### Telegram Bot Configuration

Edit `telegram_bot.py` to configure:
- `TOKEN` - Your Telegram bot token (required)
- `GITHUB_TOKEN` - Your GitHub personal access token (optional)
- `REPO_OWNER` - Repository owner username (optional)
- `REPO_NAME` - Repository name (optional)
- `BRANCH` - Git branch name (optional, default: 'main')

---

## 📁 Project Structure

```
rapo-wz/
├── whatsapp_bot.js      # Main WhatsApp bot application
├── telegram_bot.py      # Main Telegram bot application
├── package.json         # Node.js dependencies and npm configuration
├── .gitignore          # Git ignore file
├── install.sh          # Installation script for Linux/macOS
├── install.bat         # Installation script for Windows
├── config.template.js  # Advanced configuration template for WhatsApp bot
├── examples.js         # Advanced feature examples for WhatsApp bot
├── QUICKSTART.md       # Quick start guide (Indonesian)
└── README.md           # This documentation file
```

### Generated Files (not in repository)

- `.wwebjs_auth/` - WhatsApp session data (automatically created)
- `.wwebjs_cache/` - WhatsApp cache data (automatically created)
- `data.xlsx` - Telegram bot Excel data file (automatically created)
- `node_modules/` - Node.js dependencies (created after npm install)

---

## 🤝 Contributing

Contributions are welcome! Here are some ways you can contribute to this project:

1. **Report bugs** - Open an issue describing the bug and steps to reproduce
2. **Suggest features** - Open an issue with your feature request
3. **Submit pull requests** - Fork the repository, make your changes, and submit a PR

### Contribution Guidelines

- Follow the existing code style and conventions
- Test your changes thoroughly before submitting
- Update documentation if you're adding new features
- Keep commits focused and write clear commit messages
- For Python code, maintain the Indonesian language for user-facing messages
- Ensure no sensitive data (tokens, credentials) is committed

### Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/rapo-wz.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Make your changes and test them
5. Commit your changes: `git commit -m "Add your feature"`
6. Push to your fork: `git push origin feature/your-feature-name`
7. Open a Pull Request

---

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

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔧 Troubleshooting

### WhatsApp Bot Issues

#### QR Code Not Appearing
- Ensure Node.js is installed correctly
- Run `npm install` again
- Try deleting the `.wwebjs_auth` and `.wwebjs_cache` folders and retry

#### Bot Keeps Disconnecting
- Check your internet connection
- If using a proxy, ensure the proxy is working properly
- Make sure WhatsApp on your phone hasn't logged out

#### Proxy Not Working
- Verify the proxy URL format is correct
- Test the proxy with another application first
- Check if the proxy supports SOCKS5 protocol

#### npm Install Fails
- Try running with: `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true npm install`
- Ensure you have Chrome or Chromium installed on your system
- Check your Node.js and npm versions

### Telegram Bot Issues

#### Bot Not Responding
- Verify your bot token is correct
- Check that the bot is running (`python telegram_bot.py`)
- Ensure you have started a conversation with the bot on Telegram

#### Excel File Errors
- Ensure you have write permissions in the directory
- Check that `openpyxl` is installed: `pip install openpyxl`
- If the file is corrupted, delete `data.xlsx` and let it regenerate

#### GitHub Integration Not Working
- Verify your GitHub token has the necessary permissions
- Check that the repository owner and name are correct
- Ensure the GitHub API is accessible from your network

---

## 📊 Message Logging (WhatsApp Bot)

The bot will display logs for:
- **Received messages** (from other contacts)
- **Sent messages** (from you)
- **Connection status**
- **Errors** (if any)

Example output:
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

---

## 🔐 Security

⚠️ **Important Security Notes:**

### WhatsApp Bot
- **DO NOT** share the `.wwebjs_auth` folder as it contains your login session
- **DO NOT** commit session files to git (already in .gitignore)
- Use **trusted proxies only**
- Proxy credentials are not visible in logs for security

### Telegram Bot
- **NEVER** commit actual tokens or credentials to the repository
- Keep placeholder values as-is in the code
- Use environment variables or secure configuration for production
- **DO NOT** expose sensitive data in logs or error messages

### General Security Best Practices
- Regularly update dependencies to patch security vulnerabilities
- Monitor bot activity for unusual behavior
- Implement rate limiting if deploying for production use
- Follow the principle of least privilege for API tokens

---

## 📞 Support

- Open an [issue](https://github.com/willeam10101010-afk/rapo-wz/issues) for bug reports or feature requests
- Check existing issues before opening a new one
- For quick help, see the [QUICKSTART.md](QUICKSTART.md) guide

---

## 📝 Additional Resources

- **WhatsApp Web.js Documentation**: [whatsapp-web.js](https://wwebjs.dev/)
- **python-telegram-bot Documentation**: [python-telegram-bot](https://python-telegram-bot.readthedocs.io/)
- **Node.js**: [nodejs.org](https://nodejs.org/)
- **Python**: [python.org](https://www.python.org/)

---

**Happy messaging! 🚀**

Made with ❤️ by the Rapo-WZ team