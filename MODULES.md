# Module Documentation

This document provides detailed information about the modules and components in the rapo-wz project.

## Table of Contents

1. [Project Overview](#project-overview)
2. [WhatsApp Bot Module](#whatsapp-bot-module)
3. [Telegram Bot Module](#telegram-bot-module)
4. [Installation Scripts](#installation-scripts)
5. [Configuration System](#configuration-system)
6. [Examples and Templates](#examples-and-templates)

---

## Project Overview

**rapo-wz** is a messaging bot automation project that includes:
- WhatsApp bot with QR code authentication
- Telegram bot for message tracking
- Cross-platform installation support
- Proxy support for enhanced privacy

### Technology Stack

- **JavaScript/Node.js**: WhatsApp bot implementation
- **Python 3.x**: Telegram bot implementation
- **Shell Script**: Linux/Mac installation automation
- **Batch Script**: Windows installation automation

---

## WhatsApp Bot Module

### File: `whatsapp_bot.js`

Main WhatsApp bot application using `whatsapp-web.js` library.

#### Features

1. **QR Code Authentication**
   - Scan QR code to login (like WhatsApp Web)
   - Session persistence (no need to scan QR every time)
   - Uses `LocalAuth` strategy for storing credentials

2. **Message Handling**
   - Receives and logs all incoming messages
   - Auto-reply functionality with customizable messages
   - Supports filtering (ignore groups, status updates)

3. **SOCKS5 Proxy Support**
   - Optional proxy configuration
   - Supports authenticated and non-authenticated proxies
   - Credential masking in logs for security

4. **Logging System**
   - Logs received messages with sender info and timestamp
   - Logs sent messages
   - Indonesian locale for timestamps

#### Configuration Options

```javascript
const config = {
    useProxy: false,              // Enable/disable proxy
    proxyUrl: 'socks5://...',     // Proxy URL
    autoReply: true,              // Enable/disable auto-reply
    autoReplyMessage: '...'       // Custom reply message
};
```

#### Events Handled

- `qr`: QR code generation for authentication
- `ready`: Client is ready and connected
- `authenticated`: Successful authentication
- `auth_failure`: Authentication failed
- `message`: Incoming message received
- `message_create`: Message sent
- `disconnected`: Client disconnected
- `error`: Error occurred

#### Dependencies

- `whatsapp-web.js`: WhatsApp Web API wrapper
- `qrcode-terminal`: QR code display in terminal

---

## Telegram Bot Module

### File: `telegram_bot.py`

Telegram bot for message tracking and validation using Excel storage.

#### Features

1. **Message Tracking**
   - Saves messages to Excel file (`data.xlsx`)
   - Tracks message text, sender, and timestamp
   - Checks for duplicate messages

2. **Excel Data Storage**
   - Uses `openpyxl` library
   - Stores data with columns: Message, User, DateTime
   - Auto-creates file if not exists

3. **GitHub Integration** (Optional)
   - Function to commit Excel file to GitHub repository
   - Base64 encoding for file upload
   - SHA-based file update detection

4. **Duplicate Detection**
   - Checks if message was sent before
   - Returns original sender and timestamp
   - Allows or rejects based on history

#### Configuration

```python
TOKEN = 'YOUR_BOT_TOKEN_HERE'          # Telegram bot token
XLSX_FILE = 'data.xlsx'                # Excel file path
GITHUB_TOKEN = 'YOUR_GITHUB_TOKEN_HERE' # GitHub API token
REPO_OWNER = 'willeam10101010-afk'     # Repository owner
REPO_NAME = 'rapo-wz'                  # Repository name
```

#### Functions

- `load_existing_data()`: Load messages from Excel
- `save_data(message, user, dt)`: Save new message to Excel
- `commit_file_to_github(file_path, commit_message)`: Commit file to GitHub
- `message_handler(update, context)`: Handle incoming messages

#### Dependencies

- `python-telegram-bot`: Telegram Bot API wrapper
- `openpyxl`: Excel file handling
- `requests`: HTTP client for GitHub API

---

## Installation Scripts

### Linux/Mac: `install.sh`

Bash script for automated installation on Unix-like systems.

#### Features

- Checks for Node.js and npm installation
- Sets `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true` environment variable
- Installs npm dependencies
- Provides usage instructions after successful installation

#### Usage

```bash
chmod +x install.sh
./install.sh
```

### Windows: `install.bat`

Batch script for automated installation on Windows.

#### Features

- Checks for Node.js and npm installation
- Sets `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true` environment variable
- Installs npm dependencies
- Pauses for user to read output
- Provides usage instructions after successful installation

#### Usage

Double-click the `install.bat` file or run from command prompt:
```cmd
install.bat
```

---

## Configuration System

### File: `config.template.js`

Comprehensive configuration template for WhatsApp bot with advanced features.

#### Configuration Sections

1. **Proxy Settings**
   - Enable/disable proxy
   - Proxy URL configuration
   - Support for authenticated proxies

2. **Auto-Reply Settings**
   - Enable/disable auto-reply
   - Custom reply messages
   - Group and status message filtering

3. **Logging Settings**
   - Toggle received/sent message logging
   - Time format configuration
   - Log message length limits

4. **Whitelist/Blacklist**
   - Contact filtering system
   - Allow or block specific numbers
   - Format: `6281234567890@c.us`

5. **Advanced Settings**
   - Reply delay configuration
   - Maximum log message length
   - Custom reply rules

#### Custom Reply Rules

Function to determine replies based on keywords:

```javascript
function getCustomReply(messageBody) {
    const msg = messageBody.toLowerCase();
    
    if (msg.includes('halo')) {
        return 'Halo! Ada yang bisa saya bantu?';
    }
    
    return null; // Use default auto-reply
}
```

#### Scheduled Messages

Configure time-based automated messages:

```javascript
const scheduledMessages = [
    {
        time: '09:00',
        days: [1, 2, 3, 4, 5],
        recipients: ['6281234567890@c.us'],
        message: 'Selamat pagi!'
    }
];
```

---

## Examples and Templates

### File: `examples.js`

Advanced usage examples and implementation patterns.

#### Examples Included

1. **Custom Reply Bot**
   - Keyword-based responses
   - Different replies for different messages
   - Group and status filtering

2. **Multiple Proxy Configuration**
   - Proxy list management
   - Random proxy selection
   - Failover support

3. **Message Logging to File**
   - Log messages to daily text files
   - Timestamp and direction tracking
   - Automatic log directory creation

4. **Whitelist Implementation**
   - Number filtering system
   - Only reply to authorized contacts
   - Security enhancement

#### Usage

Copy relevant code from `examples.js` to your `whatsapp_bot.js` and customize as needed.

---

## Security Considerations

### WhatsApp Bot

- ⚠️ Never commit `.wwebjs_auth` folder (contains session data)
- ⚠️ Use trusted proxies only
- ⚠️ Proxy credentials are masked in logs
- ✅ Session data is ignored in `.gitignore`

### Telegram Bot

- ⚠️ Never commit actual bot tokens to repository
- ⚠️ Keep placeholders in source code
- ⚠️ Use environment variables for production
- ✅ `data.xlsx` is ignored in `.gitignore`

### General

- Store sensitive credentials in environment variables
- Use `.env` files (ignored by git)
- Review `.gitignore` before committing
- Follow the principle of least privilege for tokens

---

## File Structure

```
rapo-wz/
├── whatsapp_bot.js       # Main WhatsApp bot application
├── telegram_bot.py       # Telegram bot for message tracking
├── config.template.js    # Configuration template with all options
├── examples.js           # Advanced usage examples
├── install.sh            # Installation script for Linux/Mac
├── install.bat           # Installation script for Windows
├── package.json          # Node.js dependencies and scripts
├── README.md             # Main documentation (bilingual)
├── QUICKSTART.md         # Quick start guide (Indonesian)
├── MODULES.md            # This file - detailed module documentation
├── LICENSE               # MIT License
└── .gitignore           # Git ignore rules

Auto-generated (ignored by git):
├── node_modules/         # Node.js dependencies
├── .wwebjs_auth/        # WhatsApp session data
├── .wwebjs_cache/       # WhatsApp cache
└── data.xlsx            # Telegram bot data storage
```

---

## Development Guide

### Adding New Features to WhatsApp Bot

1. Add configuration to `config.template.js`
2. Implement feature in `whatsapp_bot.js`
3. Add example usage to `examples.js`
4. Update `README.md` with feature description
5. Test thoroughly before committing

### Modifying Telegram Bot

1. Update data structure if needed in `load_existing_data()` and `save_data()`
2. Modify message handler logic in `message_handler()`
3. Keep Indonesian language for user-facing messages
4. Test with both new and duplicate messages
5. Verify Excel file integrity

### Testing

#### WhatsApp Bot Testing
```bash
# Run the bot
npm start

# Or directly
node whatsapp_bot.js

# Test with proxy
# Edit whatsapp_bot.js: set useProxy: true
node whatsapp_bot.js
```

#### Telegram Bot Testing
```bash
# Install dependencies
pip install python-telegram-bot openpyxl requests

# Run the bot
python telegram_bot.py

# Send test messages via Telegram
```

---

## Troubleshooting

### Common Issues

#### WhatsApp Bot

**Issue**: QR code not displaying
- **Solution**: Run `npm install` again, check Node.js version (>= 14)

**Issue**: Puppeteer download fails
- **Solution**: Set `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true` and install Chrome manually

**Issue**: Bot disconnects frequently
- **Solution**: Check internet connection, verify proxy settings, ensure WhatsApp on phone is not logged out

#### Telegram Bot

**Issue**: `data.xlsx` permission errors
- **Solution**: Check file permissions, ensure directory is writable

**Issue**: Bot not responding
- **Solution**: Verify TOKEN is correct, check bot is not blocked, test internet connection

---

## Contributing

See main README.md for contribution guidelines.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) file for details.
