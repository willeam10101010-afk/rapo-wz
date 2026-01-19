/**
 * Contoh penggunaan lanjutan WhatsApp Bot
 * 
 * File ini berisi contoh-contoh konfigurasi dan penggunaan fitur lanjutan
 */

const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { SocksProxyAgent } = require('socks-proxy-agent');

// ============================================
// CONTOH 1: Bot dengan Balasan Kustom
// ============================================

// Konfigurasi dengan pesan balasan berbeda berdasarkan kata kunci
const config1 = {
    useProxy: false,
    proxyUrl: 'socks5://127.0.0.1:1080',
    autoReply: false, // Nonaktifkan auto-reply default
};

function handleCustomReply(client) {
    client.on('message', async (message) => {
        const chat = await message.getChat();
        
        // Jangan balas pesan grup atau status
        if (chat.isGroup || message.from === 'status@broadcast' || message.fromMe) {
            return;
        }
        
        const messageBody = message.body.toLowerCase();
        
        // Balasan berdasarkan kata kunci
        if (messageBody.includes('halo') || messageBody.includes('hai')) {
            await message.reply('Halo! Ada yang bisa saya bantu?');
        } else if (messageBody.includes('harga') || messageBody.includes('price')) {
            await message.reply('Untuk info harga, silakan hubungi: 0812-3456-7890');
        } else if (messageBody.includes('jam') || messageBody.includes('buka')) {
            await message.reply('Kami buka setiap hari Senin-Jumat, jam 09:00-17:00');
        } else {
            await message.reply('Terima kasih atas pesan Anda. Tim kami akan segera merespons.');
        }
    });
}

// ============================================
// CONTOH 2: Bot dengan Multiple Proxy
// ============================================

const proxyList = [
    'socks5://proxy1.example.com:1080',
    'socks5://proxy2.example.com:1080',
    'socks5://proxy3.example.com:1080'
];

// Pilih proxy secara acak
const randomProxy = proxyList[Math.floor(Math.random() * proxyList.length)];

// ============================================
// CONTOH 3: Log Pesan ke File
// ============================================

const fs = require('fs');
const path = require('path');

function logMessageToFile(message, direction) {
    const logDir = path.join(__dirname, 'logs');
    
    // Buat folder logs jika belum ada
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
    }
    
    const timestamp = new Date().toISOString();
    const logFile = path.join(logDir, `messages_${new Date().toISOString().split('T')[0]}.txt`);
    
    const logEntry = `[${timestamp}] ${direction}: ${message.from} - ${message.body}\n`;
    
    fs.appendFileSync(logFile, logEntry);
}

function setupMessageLogging(client) {
    client.on('message', async (message) => {
        if (!message.fromMe) {
            logMessageToFile(message, 'RECEIVED');
        }
    });
    
    client.on('message_create', async (message) => {
        if (message.fromMe) {
            logMessageToFile(message, 'SENT');
        }
    });
}

// ============================================
// CONTOH 4: Bot dengan Whitelist Nomor
// ============================================

const allowedNumbers = [
    '6281234567890@c.us',  // Format: kode negara + nomor + @c.us
    '6289876543210@c.us',
];

function handleWhitelistReply(client) {
    client.on('message', async (message) => {
        const chat = await message.getChat();
        
        if (chat.isGroup || message.from === 'status@broadcast' || message.fromMe) {
            return;
        }
        
        // Hanya balas pesan dari nomor yang diizinkan
        if (allowedNumbers.includes(message.from)) {
            await message.reply('Pesan Anda diterima dari nomor terdaftar.');
        } else {
            console.log(`Pesan dari nomor tidak terdaftar: ${message.from}`);
        }
    });
}

// ============================================
// CONTOH 5: Kirim Pesan ke Nomor Tertentu
// ============================================

async function sendMessageToNumber(client, number, messageText) {
    try {
        // Format nomor: kode negara + nomor (tanpa +, -, atau spasi)
        // Contoh: 6281234567890 untuk +62 812-3456-7890
        const chatId = number.includes('@c.us') ? number : `${number}@c.us`;
        
        await client.sendMessage(chatId, messageText);
        console.log(`Pesan terkirim ke ${chatId}`);
    } catch (error) {
        console.error('Error mengirim pesan:', error);
    }
}

// Contoh penggunaan:
// client.on('ready', () => {
//     sendMessageToNumber(client, '6281234567890', 'Halo, ini pesan dari bot!');
// });

// ============================================
// CONTOH 6: Kirim Media (Gambar, Video, Dokumen)
// ============================================

const { MessageMedia } = require('whatsapp-web.js');

async function sendImageFromUrl(client, number, imageUrl, caption) {
    try {
        const media = await MessageMedia.fromUrl(imageUrl);
        const chatId = number.includes('@c.us') ? number : `${number}@c.us`;
        
        await client.sendMessage(chatId, media, { caption: caption });
        console.log(`Gambar terkirim ke ${chatId}`);
    } catch (error) {
        console.error('Error mengirim gambar:', error);
    }
}

async function sendImageFromFile(client, number, filePath, caption) {
    try {
        const media = MessageMedia.fromFilePath(filePath);
        const chatId = number.includes('@c.us') ? number : `${number}@c.us`;
        
        await client.sendMessage(chatId, media, { caption: caption });
        console.log(`File terkirim ke ${chatId}`);
    } catch (error) {
        console.error('Error mengirim file:', error);
    }
}

// ============================================
// CONTOH 7: Monitoring Status Online/Offline
// ============================================

function setupPresenceMonitoring(client) {
    client.on('message', async (message) => {
        const contact = await message.getContact();
        
        console.log(`Status ${contact.pushname}:`, {
            isBlocked: contact.isBlocked,
            isMyContact: contact.isMyContact,
            isWAContact: contact.isWAContact
        });
    });
}

// ============================================
// EXPORT untuk digunakan di file lain
// ============================================

module.exports = {
    handleCustomReply,
    setupMessageLogging,
    handleWhitelistReply,
    sendMessageToNumber,
    sendImageFromUrl,
    sendImageFromFile,
    setupPresenceMonitoring
};
