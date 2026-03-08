const sharp = require('sharp');
const path = require('path');

const dir = path.join(__dirname, '../public/images/leaders-say');
const targetFile = 'Screenshot 2026-03-07 at 23.31.20.png';

// 100xEngineers dark olive green: usually around (75, 85, 55)
const G_target = [45, 80, 22]; // Sahajta Forest Green

async function fixMaedaGreen() {
    try {
        const inputPath = path.join(dir, targetFile);
        const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });

        // Find the peak olive green ink color in the newly uploaded image.
        let peakOlive = [0, 0, 0];
        let maxGDiff = 0;

        for (let i = 0; i < data.length; i += info.channels) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];

            // Look for pixels biased toward green (but dark)
            if (g > r + 5 && g > b + 5 && g < 150) {
                let diff = (g - r) + (g - b);
                if (diff > maxGDiff) {
                    maxGDiff = diff;
                    peakOlive = [r, g, b];
                }
            }
        }

        console.log(`Peak Olive found: rgb(${peakOlive[0]}, ${peakOlive[1]}, ${peakOlive[2]})`);

        let replaced = 0;
        // Do alpha substitution from Olive to Forest Green
        for (let i = 0; i < data.length; i += info.channels) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];

            // Assume the quote marker is the only dark greenish thing
            if (g > b + 5 && g > r + 2 && g < 180) {
                // Approximate density of olive on a white/off-white background
                // We'll just do a subtle shift since it's already green.
                // Or simpler: map the hue to Forest Green.

                // P_new = P + alpha * (G_target - G_orig)
                // This time we use Green minus Blue to estimate alpha
                let alpha = (g - b) / Math.max(1, (peakOlive[1] - peakOlive[2]));
                if (alpha > 1) alpha = 1;
                if (alpha < 0) alpha = 0;

                let nr = r + alpha * (G_target[0] - peakOlive[0]);
                let ng = g + alpha * (G_target[1] - peakOlive[1]);
                let nb = b + alpha * (G_target[2] - peakOlive[2]);

                data[i] = Math.max(0, Math.min(255, Math.round(nr)));
                data[i + 1] = Math.max(0, Math.min(255, Math.round(ng)));
                data[i + 2] = Math.max(0, Math.min(255, Math.round(nb)));
                replaced++;
            }
        }

        console.log(`Substituted ${replaced} pixels on John Maeda's quote block from Olive to Forest Green.`);

        await sharp(data, {
            raw: { width: info.width, height: info.height, channels: info.channels }
        })
            .png()
            .toFile(inputPath);

    } catch (err) {
        console.error("Error processing images:", err);
    }
}

fixMaedaGreen();
