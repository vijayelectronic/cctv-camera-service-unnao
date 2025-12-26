const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'products.js');

try {
    let content = fs.readFileSync(filePath, 'utf8');
    // Check if already replaced to avoid double prefixing
    if (!content.includes('/cctv-camera-service-unnao/images/')) {
        content = content.replace(/\/images\//g, '/cctv-camera-service-unnao/images/');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Successfully updated image paths in products.js');
    } else {
        console.log('Paths already updated.');
    }
} catch (err) {
    console.error('Error updating file:', err);
    process.exit(1);
}
