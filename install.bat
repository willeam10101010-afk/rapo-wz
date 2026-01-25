@echo off
REM Script instalasi WhatsApp Bot untuk Windows
REM Double-click file ini untuk menjalankan

echo =========================================
echo WhatsApp Bot - Installation Script
echo =========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo X Node.js tidak ditemukan!
    echo Silakan install Node.js terlebih dahulu:
    echo https://nodejs.org/
    pause
    exit /b 1
)

echo + Node.js ditemukan
node --version

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo X npm tidak ditemukan!
    echo Silakan install npm terlebih dahulu
    pause
    exit /b 1
)

echo + npm ditemukan
npm --version
echo.

REM Install dependencies
echo Installing dependencies...
echo.

set PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
call npm install

if %ERRORLEVEL% EQU 0 (
    echo.
    echo =========================================
    echo + Installation complete!
    echo =========================================
    echo.
    echo Untuk menjalankan bot:
    echo   npm start
    echo.
    echo Atau:
    echo   node whatsapp_bot.js
    echo.
) else (
    echo.
    echo X Installation failed!
    echo Silakan cek error di atas atau install manual dengan: npm install
    pause
    exit /b 1
)

pause
