Zotero Keyword Generator Plugin
A Zotero plugin that generates keywords for PDFs using Google Gemini AI.
Features

Right-click context menu for PDF items
AI-powered keyword generation using Google Gemini
Automatic tagging of PDF items
Simple and intuitive interface

Development Setup
Prerequisites

Node.js (v16 or higher)
Zotero 7.0 or higher
Google Gemini API key (for keyword generation)

Installation for Development

Clone and Setup
bashgit clone https://github.com/yourusername/zotero-keyword-generator
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
You'll see a "Hello World" message confirming the plugin is working

Next Steps
The plugin currently shows a "Hello World" message. The next development phases will include:

PDF Content Extraction - Extract text from the first page of PDFs
Gemini API Integration - Send content to Google Gemini for keyword generation
Tag Management - Add generated keywords as tags to Zotero items
User Interface - Add configuration options and progress indicators

Development Notes
Plugin Architecture
The plugin uses Zotero's legacy extension system with these key components:

manifest.json: Defines plugin metadata and permissions
bootstrap.js: Contains the main plugin logic and lifecycle functions
Context menu integration for right-click functionality
Zotero API integration for item management

Key Functions

startup(): Initialize the plugin and add menu items
addMenuItems(): Create context menu entries
updateMenuVisibility(): Show/hide menu based on selection
generateKeywords(): Main keyword generation function (placeholder)

Debugging

Enable Zotero debug mode: Help > Debug Output Logging
Check the debug log for plugin messages
Use browser developer tools for JavaScript debugging

Configuration
Currently no configuration is needed for the Hello World version.
Future versions will support:

Gemini API key configuration
Keyword generation settings
Tag formatting options

Contributing

Fork the repository
Create a feature branch
Make your changes
Test with Zotero
Submit a pull request

License
MIT License - see LICENSE file for details