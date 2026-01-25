/**
 * Configuration Template untuk WhatsApp Bot
 * 
 * Copy file ini ke whatsapp_bot.js dan sesuaikan dengan kebutuhan Anda
 */

// ============================================
// KONFIGURASI DASAR
// ============================================

const config = {
    // ============================================
    // PROXY SETTINGS
    // ============================================
    
    // Set true untuk menggunakan SOCKS5 proxy
    useProxy: false,
    
    // Format: socks5://host:port atau socks5://username:password@host:port
    // Contoh tanpa auth: 'socks5://127.0.0.1:1080'
    // Contoh dengan auth: 'socks5://myuser:mypass@proxy.example.com:1080'
    proxyUrl: 'socks5://127.0.0.1:1080',
    
    // ============================================
    // AUTO-REPLY SETTINGS
    // ============================================
    
    // Set true untuk mengaktifkan auto-reply
    autoReply: true,
    
    // Pesan balasan otomatis
    autoReplyMessage: 'Terima kasih atas pesan Anda. Pesan Anda telah diterima.',
    
    // Jangan balas pesan grup (recommended: true)
    ignoreGroupMessages: true,
    
    // Jangan balas status/broadcast (recommended: true)
    ignoreStatusMessages: true,
    
    // ============================================
    // LOGGING SETTINGS
    // ============================================
    
    // Tampilkan log pesan yang diterima
    logReceivedMessages: true,
    
    // Tampilkan log pesan yang dikirim
    logSentMessages: true,
    
    // Format waktu log (locale)
    logTimeFormat: 'id-ID', // 'en-US', 'id-ID', dll
    
    // ============================================
    // WHITELIST/BLACKLIST (Optional)
    // ============================================
    
    // Gunakan whitelist (hanya balas nomor tertentu)
    useWhitelist: false,
    
    // Daftar nomor yang diizinkan (format: kode negara + nomor + @c.us)
    whitelist: [
        // '6281234567890@c.us',
        // '6289876543210@c.us',
    ],
    
    // Gunakan blacklist (blokir nomor tertentu)
    useBlacklist: false,
    
    // Daftar nomor yang diblokir
    blacklist: [
        // '6281111111111@c.us',
    ],
    
    // ============================================
    // ADVANCED SETTINGS
    // ============================================
    
    // Delay sebelum membalas (dalam milidetik)
    replyDelay: 1000, // 1 detik
    
    // Maximum panjang pesan yang akan ditampilkan di log (0 = unlimited)
    maxLogMessageLength: 100,
};

// ============================================
// CUSTOM REPLY RULES (Optional)
// ============================================

// Fungsi untuk menentukan balasan berdasarkan kata kunci
function getCustomReply(messageBody) {
    const msg = messageBody.toLowerCase();
    
    // Tambahkan aturan custom di sini
    if (msg.includes('halo') || msg.includes('hai') || msg.includes('hello')) {
        return 'Halo! Ada yang bisa saya bantu?';
    }
    
    if (msg.includes('harga') || msg.includes('price')) {
        return 'Untuk informasi harga, silakan hubungi admin kami.';
    }
    
    if (msg.includes('jam') || msg.includes('buka')) {
        return 'Kami buka setiap hari Senin-Jumat, jam 09:00-17:00 WIB.';
    }
    
    if (msg.includes('lokasi') || msg.includes('alamat')) {
        return 'Alamat kami: [ISI ALAMAT ANDA]';
    }
    
    // Return null untuk menggunakan auto-reply default
    return null;
}

// ============================================
// SCHEDULED MESSAGES (Optional)
// ============================================

// Array untuk pesan terjadwal
const scheduledMessages = [
    // {
    //     time: '09:00',  // Format HH:MM (24 jam)
    //     days: [1, 2, 3, 4, 5],  // 0=Minggu, 1=Senin, ..., 6=Sabtu
    //     recipients: ['6281234567890@c.us'],
    //     message: 'Selamat pagi! Kami sudah buka.'
    // },
    // {
    //     time: '17:00',
    //     days: [1, 2, 3, 4, 5],
    //     recipients: ['6281234567890@c.us'],
    //     message: 'Terima kasih! Kami akan tutup sebentar lagi.'
    // }
];

// ============================================
// EXPORTS
// ============================================

module.exports = {
    config,
    getCustomReply,
    scheduledMessages
};
