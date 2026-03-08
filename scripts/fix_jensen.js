const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/images/leaders-say');
const targetFile = 'Screenshot 2026-03-07 at 23.32.16.png'; // Jensen Huang

async function fixJensen() {
    try {
        const inputPath = path.join(dir, targetFile);
        const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });

        console.log(`Processing exactly Jensen Huang: ${targetFile}`);

        // We know exactly what to wipe on Jensen Huang. His shadow artifact is purely on the vertical edges.
        // We wipe x < 25 and x > info.width - 25, turning only light-mid greyscale pixels to white.
        const margin = 20;
        let wiped = 0;

        for (let y = 0; y < info.height; y++) {
            for (let x = 0; x < info.width; x++) {

                if (x < margin || x > (info.width - margin)) {
                    const pIdx = (y * info.width + x) * info.channels;
                    const r = data[pIdx];
                    const g = data[pIdx + 1];
                    const b = data[pIdx + 2];

                    // If pixel is gray/artifact (not dark jacket or anything): 
                    // Artifact gradient ranges from ~200 to 254. Jacket is < 100.
                    if (r > 100 && g > 100 && b > 100) {
                        data[pIdx] = 255;
                        data[pIdx + 1] = 255;
                        data[pIdx + 2] = 255;

                        if (info.channels === 4) {
                            data[pIdx + 3] = 255;
                        }
                        wiped++;
                    }
                }
            }
        }

        console.log(`Wiped ${wiped} gradient pixels on Jensen's photo.`);

        await sharp(data, {
            raw: { width: info.width, height: info.height, channels: info.channels }
        })
            .png()
            .toFile(inputPath);

    } catch (err) {
        console.error("Error processing:", err);
    }
}

fixJensen();
