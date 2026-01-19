# Copilot Instructions for rapo-wz

## Repository Purpose
Telegram bot that tracks and validates messages by saving them to an Excel file and committing the data to GitHub. The bot checks if a message has been sent before and responds accordingly.

## Tech Stack
- **Language**: Python 3.x
- **Main Dependencies**:
  - `python-telegram-bot` - Telegram Bot API wrapper
  - `openpyxl` - Excel file handling
  - `requests` - HTTP client for GitHub API
- **Data Storage**: Excel file (`data.xlsx`)
- **Version Control**: GitHub API integration

## Project Structure
```
rapo-wz/
├── telegram_bot.py      # Main bot application
├── data.xlsx           # Excel data file (generated at runtime)
└── README.md           # Project documentation
```

## Key Components
- **Message Handler**: Processes incoming Telegram messages
- **Data Persistence**: Saves messages with user info and timestamp to Excel
- **GitHub Integration**: Automatically commits data file to repository
- **Duplicate Detection**: Checks if messages were previously sent

## Setup and Installation
```bash
# Install dependencies
pip install python-telegram-bot openpyxl requests

# Configure environment
# Edit telegram_bot.py and set:
# - TOKEN: Your Telegram bot token
# - GITHUB_TOKEN: Your GitHub personal access token
# - REPO_OWNER: GitHub repository owner
# - REPO_NAME: GitHub repository name
```

## Running the Bot
```bash
python telegram_bot.py
```

## Coding Style Guidelines
- **Language**: Use Indonesian for user-facing messages (already established in code)
- **Naming**: Use descriptive function names with snake_case
- **Documentation**: Include docstrings for functions explaining their purpose
- **Error Handling**: Use try-except blocks for external API calls
- **Configuration**: Keep credentials at the top of the file for easy access

## Security Boundaries
- **CRITICAL**: Do NOT commit actual tokens or credentials to the repository
- **NEVER** modify placeholder values:
  - `YOUR_BOT_TOKEN_HERE` - must remain as placeholder
  - `YOUR_GITHUB_TOKEN_HERE` - must remain as placeholder
- **Protect**: Any changes involving tokens should use environment variables or secure configuration methods
- **Do NOT**: Expose sensitive data in logs or error messages

## Development Guidelines
- **Dependencies**: Only add new dependencies if absolutely necessary; prefer Python standard library when possible
- **Excel File**: The `data.xlsx` file is generated at runtime; do not create it manually
- **GitHub API**: Respect rate limits and handle API errors gracefully
- **Message Format**: Maintain current data structure (Message, User, DateTime)

## Acceptance Criteria for Changes
- Code must maintain compatibility with existing data.xlsx structure
- All external API calls must have error handling
- User-facing messages should remain in Indonesian
- No hardcoded credentials or tokens
- Changes must not break existing message handling logic

## Testing Approach
- Manual testing with Telegram bot required for message handling
- Test with both new and duplicate messages
- Verify Excel file creation and updates
- Test GitHub commit functionality (ensure credentials are configured)

## What NOT to Change
- Do NOT modify the Excel file structure (columns: Message, User, DateTime)
- Do NOT change the GitHub repository configuration variables
- Do NOT remove or modify credential placeholders
- Do NOT alter the core message validation logic without careful consideration

## Common Tasks
- **Adding features**: Extend message_handler function or add new handlers
- **Modifying responses**: Update reply text in message_handler
- **Changing storage**: Modify save_data function
- **GitHub integration**: Update commit_file_to_github function
