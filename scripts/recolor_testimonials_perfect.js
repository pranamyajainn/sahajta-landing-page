const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/images/leaders-say');
const O = [255, 74, 0];
const G = [45, 80, 22];

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

                // Noise threshold: gray portraits usually have R-B < 10
                if (r > b + 15 && r > g + 5) {
                    // Calculate pixel's orange "Alpha" ink density
                    let alpha = (r - b) / 255.0;
                    if (alpha > 1) alpha = 1;

                    // P_new = P + alpha * (Green_target - Orange_source)
                    // This perfectly preserves the (1-alpha) * White_background
                    let nr = r + alpha * (G[0] - O[0]);
                    let ng = g + alpha * (G[1] - O[1]);
                    let nb = b + alpha * (G[2] - O[2]);

                    data[i] = Math.max(0, Math.min(255, Math.round(nr)));
                    data[i + 1] = Math.max(0, Math.min(255, Math.round(ng)));
                    data[i + 2] = Math.max(0, Math.min(255, Math.round(nb)));
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

        console.log("Success! Perfect mathematical alpha substitution completed.");
    } catch (err) {
        console.error("Error processing images:", err);
    }
}

recolorImages();
