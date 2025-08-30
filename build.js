const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const isWatchMode = process.argv.includes('--watch');
const isDev = process.argv.includes('--dev');

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Files to include in the plugin
const filesToCopy = [
  'manifest.json',
  'bootstrap.js',
  'updates.json'
];

// Copy files to dist
function copyFiles() {
  console.log('Copying files to dist...');
  
  filesToCopy.forEach(file => {
    const srcPath = path.join(__dirname, file);
    const destPath = path.join(distDir, file);
    
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`✓ Copied ${file}`);
    } else {
      console.log(`⚠ File not found: ${file}`);
    }
  });
}

// Create XPI package
function createXPI() {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(path.join(__dirname, 'keyword-generator.xpi'));
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', () => {
      console.log(`✓ XPI created: ${archive.pointer()} total bytes`);
      resolve();
    });

    archive.on('error', (err) => {
      console.error('Error creating XPI:', err);
      reject(err);
    });

    archive.pipe(output);

    // Add files from dist directory
    filesToCopy.forEach(file => {
      const filePath = path.join(distDir, file);
      if (fs.existsSync(filePath)) {
        archive.file(filePath, { name: file });
      }
    });

    archive.finalize();
  });
}

// Build function
async function build() {
  try {
    copyFiles();
    
    if (!isDev) {
      await createXPI();
    }
    
    console.log('✓ Build completed!');
    
    if (isDev) {
      console.log('\nDevelopment build - XPI not created.');
      console.log('To install for development:');
      console.log('1. Open Zotero');
      console.log('2. Go to Tools > Add-ons');
      console.log('3. Click gear icon > Install Add-on From File');
      console.log('4. Select the keyword-generator.xpi file');
    }
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

// Watch mode
if (isWatchMode) {
  console.log('Watching for changes...');
  
  filesToCopy.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
      fs.watchFile(filePath, () => {
        console.log(`\nFile changed: ${file}`);
        build();
      });
    }
  });
} else {
  build();
}