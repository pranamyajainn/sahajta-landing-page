const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/images/leaders-say');

function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) {
        h = s = 0; // achromatic
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return [h, s, l];
}

function hslToRgb(h, s, l) {
    let r, g, b;
    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        }
        let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        let p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

async function recolorImages() {
    try {
        const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

        for (const file of files) {
            const inputPath = path.join(dir, file);
            const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });

            console.log(`Processing: ${file}`);

            let replaced = 0;
            for (let i = 0; i < data.length; i += info.channels) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];

                const [h, s, l] = rgbToHsl(r, g, b);

                // Target: Orange/Red h is around 0.0 - 0.12 or 0.9 - 1.0
                // S > 0.15 excludes grays/whites
                if (s > 0.15 && (h < 0.15 || h > 0.85)) {
                    // Set Hue to Forest Green (~96 deg = 0.266)
                    const newH = 96 / 360;

                    // Forest green is dark (lightness ~0.20), Orange is bright (~0.60)
                    // We smoothly shift the luminance down so anti-aliasing edges stay soft
                    // We compress the L spectrum towards the darker green
                    const newL = l * 0.4; // Darken it by mapping 0.6 -> ~0.24

                    const [nr, ng, nb] = hslToRgb(newH, s, newL);

                    data[i] = nr;
                    data[i + 1] = ng;
                    data[i + 2] = nb;
                    replaced++;
                }
            }

            console.log(`Replaced ${replaced} pixels.`);

            await sharp(data, {
                raw: { width: info.width, height: info.height, channels: info.channels }
            })
                .png()
                .toFile(inputPath);
        }

        console.log("Success! All testimonials hue-shifted via HSL safely.");
    } catch (err) {
        console.error("Error processing images:", err);
    }
}

recolorImages();
