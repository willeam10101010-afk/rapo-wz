const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { SocksProxyAgent } = require('socks-proxy-agent');

// Configuration
const config = {
    // Set to true to enable SOCKS5 proxy
    useProxy: false,
    // SOCKS5 proxy URL format: socks5://username:password@host:port or socks5://host:port
    proxyUrl: 'socks5://127.0.0.1:1080',
    
    // Auto-reply settings
    autoReply: true,
    autoReplyMessage: 'Terima kasih atas pesan Anda. Pesan Anda telah diterima.'
};

// Initialize WhatsApp client
const clientOptions = {
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--disable-gpu'
        ]
    }
};

// Add proxy configuration if enabled
if (config.useProxy) {
    const agent = new SocksProxyAgent(config.proxyUrl);
    clientOptions.puppeteer.args.push(`--proxy-server=${config.proxyUrl}`);
    console.log(`SOCKS5 Proxy enabled: ${config.proxyUrl}`);
}

const client = new Client(clientOptions);

// QR Code event - Display QR code for login
client.on('qr', (qr) => {
    console.log('\n========================================');
    console.log('Scan QR code ini dengan WhatsApp Anda:');
    console.log('========================================\n');
    qrcode.generate(qr, { small: true });
    console.log('\n========================================');
    console.log('Buka WhatsApp > Perangkat Tertaut > Tautkan Perangkat');
    console.log('========================================\n');
});

// Ready event - Client is ready
client.on('ready', () => {
    console.log('\n========================================');
    console.log('✓ WhatsApp Client siap!');
    console.log('Bot sudah terhubung dan siap menerima pesan.');
    console.log('========================================\n');
});

// Authenticated event
client.on('authenticated', () => {
    console.log('✓ Autentikasi berhasil!');
});

// Authentication failure event
client.on('auth_failure', (msg) => {
    console.error('✗ Autentikasi gagal:', msg);
});

// Message event - Handle incoming messages
client.on('message', async (message) => {
    const contact = await message.getContact();
    const chat = await message.getChat();
    
    // Log received message
    console.log('\n----------------------------------------');
    console.log('Pesan Diterima:');
    console.log(`Dari: ${contact.pushname || contact.number}`);
    console.log(`Nomor: ${message.from}`);
    console.log(`Pesan: ${message.body}`);
    console.log(`Waktu: ${new Date().toLocaleString('id-ID')}`);
    console.log('----------------------------------------\n');
    
    // Don't reply to group messages or status updates
    if (chat.isGroup || message.from === 'status@broadcast') {
        return;
    }
    
    // Auto-reply functionality
    if (config.autoReply && !message.fromMe) {
        try {
            await message.reply(config.autoReplyMessage);
            console.log(`✓ Balasan otomatis terkirim ke ${contact.pushname || contact.number}`);
        } catch (error) {
            console.error('✗ Error mengirim balasan:', error);
        }
    }
});

// Message creation event - Log sent messages
client.on('message_create', async (message) => {
    if (message.fromMe) {
        const chat = await message.getChat();
        if (!chat.isGroup && message.to !== 'status@broadcast') {
            console.log('\n----------------------------------------');
            console.log('Pesan Terkirim:');
            console.log(`Ke: ${message.to}`);
            console.log(`Pesan: ${message.body}`);
            console.log(`Waktu: ${new Date().toLocaleString('id-ID')}`);
            console.log('----------------------------------------\n');
        }
    }
});

// Disconnected event
client.on('disconnected', (reason) => {
    console.log('\n========================================');
    console.log('✗ Client terputus:', reason);
    console.log('========================================\n');
});

// Error event
client.on('error', (error) => {
    console.error('\n✗ Error terjadi:', error);
});

// Initialize the client
console.log('Memulai WhatsApp Bot...');
console.log('========================================\n');

client.initialize();

// Handle process termination
process.on('SIGINT', async () => {
    console.log('\n\nMenghentikan bot...');
    await client.destroy();
    process.exit(0);
});
