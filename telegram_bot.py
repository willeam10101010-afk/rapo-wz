import os
import datetime
import base64
import requests
import openpyxl
from telegram import Update
from telegram.ext import ApplicationBuilder, ContextTypes, MessageHandler, filters

# Ganti dengan token bot Telegram Anda
TOKEN = 'YOUR_BOT_TOKEN_HERE'

# Path ke file XLSX
XLSX_FILE = 'data.xlsx'

# GitHub credentials untuk commit
GITHUB_TOKEN = 'YOUR_GITHUB_TOKEN_HERE'
REPO_OWNER = 'willeam10101010-afk'
REPO_NAME = 'rapo-wz'
BRANCH = 'main'

def load_existing_data():
    """Memuat data dari XLSX jika file ada."""
    if os.path.exists(XLSX_FILE):
        wb = openpyxl.load_workbook(XLSX_FILE)
        sheet = wb.active
        data = {}
        for row in sheet.iter_rows(min_row=2, values_only=True):
            if row[0]:
                data[row[0]] = {'user': row[1], 'datetime': row[2]}
        return data
    return {}

def save_data(message, user, dt):
    """Menyimpan pesan baru ke XLSX."""
    if not os.path.exists(XLSX_FILE):
        wb = openpyxl.Workbook()
        sheet = wb.active
        sheet['A1'] = 'Message'
        sheet['B1'] = 'User'
        sheet['C1'] = 'DateTime'
    else:
        wb = openpyxl.load_workbook(XLSX_FILE)
        sheet = wb.active
    
    sheet.append([message, user, str(dt)])
    wb.save(XLSX_FILE)

def commit_file_to_github(file_path, commit_message):
    """Commit file ke GitHub repo."""
    try:
        with open(file_path, 'rb') as f:
            content = base64.b64encode(f.read()).decode('utf-8')
        
        url = f'https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/contents/{file_path}'
        headers = {'Authorization': f'token {GITHUB_TOKEN}'}
        
        # Cek apakah file sudah ada
        response = requests.get(url, headers=headers)
        data = {
            'message': commit_message,
            'content': content,
            'branch': BRANCH
        }
        if response.status_code == 200:
            data['sha'] = response.json()['sha']
        
        response = requests.put(url, headers=headers, json=data)
        if response.status_code in [200, 201]:
            return "File berhasil di-commit ke repo."
        else:
            return f"Gagal commit: {response.json()}"
    except Exception as e:
        return f"Error: {str(e)}"

async def message_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_message = update.message.text
    user = update.message.from_user.username or update.message.from_user.first_name
    dt = datetime.datetime.now()
    existing_data = load_existing_data()
    
    if user_message in existing_data:
        info = existing_data[user_message]
        reply = f"Pesan data pernah dikirim oleh {info['user']} pada {info['datetime']}"
        await update.message.reply_text(reply)
    else:
        await update.message.reply_text("Data dapat digunakan.")
        save_data(user_message, user, dt)

def main():
    application = ApplicationBuilder().token(TOKEN).build()
    application.add_handler(MessageHandler(filters.TEXT, message_handler))
    application.run_polling()

if __name__ == '__main__':
    main()