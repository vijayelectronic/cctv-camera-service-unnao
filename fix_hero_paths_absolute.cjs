const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'Hero.jsx');
const domain = 'https://vijayelectronic.github.io/cctv-camera-service-unnao';

try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Regex to match: image: "/images/..." or image: "https://..."
    // We want to force absolute URLs.

    // First, normalize any existing absolute URLs back to relative if needed (or just skip).
    // Easiest is to replace "/images/" with proper domain path.

    // Note: Hero.jsx uses 'image: "/images/1.png"'

    // Replace: "/images/ -> "https://.../cctv.../images/
    // But strictly inside quotes to avoid logic errors?
    // The content is: image: "/images/1.png"

    content = content.replace(/"\/images\//g, `"${domain}/images/`);

    // Also handle if I ran it before (idempotency check not strictly needed if regex matches /images/)
    // But if I run it twice, "https://.../images/..." doesn't match "/images/".
    // Because domain starts with "https://", not "/".
    // So "/images/" is safe target.

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated Hero.jsx to use absolute domain URLs.');
} catch (err) {
    console.error(err);
}
