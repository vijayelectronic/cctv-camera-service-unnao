const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'products.js');
const domain = 'https://vijayelectronic.github.io/cctv-camera-service-unnao';

// We want to replace ANY current path format with the full domain URL
// Patterns to match:
// 1. "/images/"
// 2. "/cctv-camera-service-unnao/images/"
// 3. "https://vijayelectronic.github.io/cctv-camera-service-unnao/images/" (idempotent)

try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Reset to relative simple first to unify
    content = content.replace(/https:\/\/vijayelectronic.github.io\/cctv-camera-service-unnao\/images\//g, '/images/');
    content = content.replace(/\/cctv-camera-service-unnao\/images\//g, '/images/');

    // Now replace unified '/images/' with full URL
    content = content.replace(/\/images\//g, domain + '/images/');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated products.js to use absolute domain URLs.');
} catch (err) {
    console.error(err);
}
