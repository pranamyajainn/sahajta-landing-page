const sharp = require('sharp');
const path = require('path');

async function recolorImage() {
    const inputPath = path.join(__dirname, '../public/curve.avif');
    const outputPath = path.join(__dirname, '../public/curve.png'); // write to png first

    try {
        console.log(`Loading image from ${inputPath}`);

        // Load image to raw buffer
        const { data, info } = await sharp(inputPath)
            .raw()
            .toBuffer({ resolveWithObject: true });

        console.log(`Loaded ${info.width}x${info.height} with ${info.channels} channels.`);

        // Loop through pixels
        for (let i = 0; i < data.length; i += info.channels) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const a = info.channels === 4 ? data[i + 3] : 255;

            // Similar heuristic: 
            if (r > 150 && g < 150 && b < 100 && a > 0) {
                // Orange -> #2D5016 (45, 80, 22)
                data[i] = 45;
                data[i + 1] = 80;
                data[i + 2] = 22;
            } else if (r > 200 && g > 150 && b > 150 && a > 0) {
                // Light pale fill area -> #EBF2EE (235, 242, 238) roughly matches
                data[i] = 235;
                data[i + 1] = 242;
                data[i + 2] = 238;
            }
        }

        // Write the new raw buffer out as AVIF
        await sharp(data, {
            raw: {
                width: info.width,
                height: info.height,
                channels: info.channels
            }
        })
            .avif({ effort: 6 }) // Convert back to AVIF efficiently
            .toFile(path.join(__dirname, '../public/curve_green.avif'));

        console.log("Success! Saved as /public/curve_green.avif");

    } catch (err) {
        console.error("Error recoloring image:", err);
    }
}

recolorImage();
