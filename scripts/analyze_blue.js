const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/images/leaders-say');

async function analyzeBlue() {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

    for (const file of files) {
        const inputPath = path.join(dir, file);
        const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });

        let maxBlueDiff = 0;
        let peakBlue = [0, 0, 0];

        for (let i = 0; i < data.length; i += info.channels) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];

            // Look for pixels where Blue is significantly higher than Red and Green
            const diff = b - Math.max(r, g);
            if (diff > maxBlueDiff && b > 150) {
                maxBlueDiff = diff;
                peakBlue = [r, g, b];
            }
        }

        if (maxBlueDiff > 50) {
            console.log(`File: ${file} | Peak Blue found: RGB(${peakBlue[0]}, ${peakBlue[1]}, ${peakBlue[2]}) with diff: ${maxBlueDiff}`);
        } else {
            console.log(`File: ${file} | No significant blue dots found.`);
        }
    }
}

analyzeBlue();
