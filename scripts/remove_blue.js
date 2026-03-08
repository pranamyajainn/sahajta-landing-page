const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/images/leaders-say');

async function removeBlueDots() {
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
                const a = info.channels === 4 ? data[i + 3] : 255;

                // Since the images are Black & White portraits + Green/Orange text, 
                // any pixel with a distinct blue dominance is guaranteed to be the mistaken selection dot.
                // We overwrite it natively to white (255, 255, 255) to blend with the card background.
                if ((b - r) > 20 && (b - g) > 10 && b > 80 && a > 0) {
                    data[i] = 255;
                    data[i + 1] = 255;
                    data[i + 2] = 255;
                    replaced++;
                }
            }

            console.log(`Replaced ${replaced} blue pixels with white.`);

            await sharp(data, {
                raw: { width: info.width, height: info.height, channels: info.channels }
            })
                .png()
                .toFile(inputPath);
        }

        console.log("Success! Extraneous blue selection dots removed from all screenshots.");
    } catch (err) {
        console.error("Error processing images:", err);
    }
}

removeBlueDots();
