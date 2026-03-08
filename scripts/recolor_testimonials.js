const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/images/leaders-say');
const targetR = 45; // #2D
const targetG = 80; // #50
const targetB = 22; // #16

async function recolorImages() {
    try {
        const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

        for (const file of files) {
            const inputPath = path.join(dir, file);
            // Read image into raw buffer
            const { data, info } = await sharp(inputPath)
                .raw()
                .toBuffer({ resolveWithObject: true });

            console.log(`Processing: ${file}`);

            // Iterate over pixels. Assuming 4 channels (RGBA) or 3 (RGB)
            let replaced = 0;
            for (let i = 0; i < data.length; i += info.channels) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];

                // Quote mark color is roughly RGB(220, 175, 84) to RGB(240, 190, 100)
                // Let's use a broad heuristic for orange/golden-yellow:
                // Red > 180, Green > 120 and Green < Red, Blue < 150
                // Also some darker anti-aliased edges might be ~ (150, 100, 50)
                if (r > 100 && g > 60 && g < r && b < 120 && (r - b > 50)) {
                    // It's a gold/orange pixel. Recolor to Forest Green

                    // Simple lightness matching to keep anti-aliasing smooth:
                    // calculate relative luminance of the original pixel compared to base gold
                    const origLuma = (r + g + b) / 3;
                    const baseGoldLuma = (220 + 175 + 84) / 3; // ~160
                    const ratio = origLuma / baseGoldLuma;

                    data[i] = Math.min(255, Math.floor(targetR * ratio));
                    data[i + 1] = Math.min(255, Math.floor(targetG * ratio));
                    data[i + 2] = Math.min(255, Math.floor(targetB * ratio));
                    replaced++;
                }
            }

            console.log(`Replaced ${replaced} pixels.`);

            // Save over the file
            await sharp(data, {
                raw: {
                    width: info.width,
                    height: info.height,
                    channels: info.channels
                }
            })
                .png()
                .toFile(inputPath); // Overwrites original
        }

        console.log("Success! All testimonials recolored.");

    } catch (err) {
        console.error("Error processing images:", err);
    }
}

recolorImages();
