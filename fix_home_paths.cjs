const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'Home.jsx');
const domain = 'https://vijayelectronic.github.io/cctv-camera-service-unnao';

try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Regex to match: image: "/images/..." or src="/images/..." inside the categories array or JSX
    // In Home.jsx, it's likely an array of objects for categories like:
    // image: "/images/1.png"

    // We want to force absolute URLs for /images/

    // Replace: "/images/ -> "https://.../cctv.../images/
    // But be careful not to double prefix if I run it again (regex matches "/images/")
    // If text is "https://.../images/", regex matches "/images/".
    // So replace "https://.../images/" with "/images/" first to normalize? No, risky.

    // Safer: Match strictly `"/images/` or `'\/images/` (start of string in quotes)
    // content = content.replace(/"\/images\//g, `"${domain}/images/`);
    // content = content.replace(/'\/images\//g, `'${domain}/images/`);

    // Let's verify file content first but I'll write the replacement assuming standard "/images/"

    // Resetting existing absolute to relative just in case I am re-running (safety)
    // content = content.replace(new RegExp(domain + '/images/', 'g'), '/images/');

    content = content.replace(/"\/images\//g, `"${domain}/images/`);
    content = content.replace(/'\/images\//g, `'${domain}/images/`);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated Home.jsx to use absolute domain URLs.');
} catch (err) {
    console.error(err);
}
