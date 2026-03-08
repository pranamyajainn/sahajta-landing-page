const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/images/leaders-say');

async function analyze() {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));
    let maxDiff = 0;
    let peakOrange = [0, 0, 0];

    for (const file of files) {
        const inputPath = path.join(dir, file);
        const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });

        for (let i = 0; i < data.length; i += info.channels) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];

            const diff = r - b;
            if (diff > maxDiff) {
                maxDiff = diff;
                peakOrange = [r, g, b];
            }
        }
    }
    console.log(`Peak Orange: RGB(${peakOrange[0]}, ${peakOrange[1]}, ${peakOrange[2]}) with max R-B diff: ${maxDiff}`);
}

analyze();
