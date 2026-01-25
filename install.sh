#!/bin/bash

# Script instalasi WhatsApp Bot
# Jalankan: chmod +x install.sh && ./install.sh

echo "========================================="
echo "WhatsApp Bot - Installation Script"
echo "========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js tidak ditemukan!"
    echo "Silakan install Node.js terlebih dahulu:"
    echo "https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js version: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "❌ npm tidak ditemukan!"
    echo "Silakan install npm terlebih dahulu"
    exit 1
fi

echo "✓ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "Installing dependencies..."
echo ""

# Try with puppeteer skip first
export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "========================================="
    echo "✓ Installation complete!"
    echo "========================================="
    echo ""
    echo "Untuk menjalankan bot:"
    echo "  npm start"
    echo ""
    echo "Atau:"
    echo "  node whatsapp_bot.js"
    echo ""
else
    echo ""
    echo "❌ Installation failed!"
    echo "Silakan cek error di atas atau install manual dengan: npm install"
    exit 1
fi
