Zotero Keyword Generator Plugin
A Zotero plugin that generates keywords for PDFs using Google Gemini AI.

Install in Zotero

Open Zotero
Go to Tools > Add-ons
Click the gear icon and select "Install Add-on From File"
Select the keyword-generator.xpi file
Restart Zotero if prompted


Features

Right-click context menu for PDF items
AI-powered keyword generation using Google Gemini / ChatGPT
Automatic tagging of PDF items
Simple and intuitive interface

Development Setup
Prerequisites

Node.js (v16 or higher)
Zotero 7.0 or higher
Google Gemini API key (for keyword generation)

Installation for Development

Clone and Setup
bashgit clone https://github.com/sudhirvr23/zotero-keyword-generator
cd zotero-keyword-generator
npm install

Build the Plugin
bash# Development build (creates files in dist/ folder)
npm run dev

# Production build (creates XPI file)
npm run build

# Watch mode (rebuilds on file changes)
npm run watch

Install in Zotero

Open Zotero
Go to Tools > Add-ons
Click the gear icon and select "Install Add-on From File"
Select the keyword-generator.xpi file
Restart Zotero if prompted



Project Structure
zotero-keyword-generator/
├── manifest.json          # Plugin manifest
├── bootstrap.js          # Main plugin logic
├── updates.json          # Update configuration
├── package.json          # Node.js dependencies
├── build.js             # Build script
├── dist/                # Built files
└── README.md            # This file
Usage
Current (Version 1.0) Version

Select any item with a PDF attachment in Zotero
Right-click to open the context menu
Click "Generate Keywords"

License
MIT License - see LICENSE file for details
