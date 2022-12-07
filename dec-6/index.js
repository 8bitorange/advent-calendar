const fs = require('fs');
const txt = fs.readFileSync(`./input.txt`, 'utf8');
const text = String(txt);
const marker = [];
let position = 0;
let markerLength = 14;

for (let x = 0; x < text.length; x++) {
    let marker = text.substring(x, markerLength + x);
    if (new Set(marker).size === markerLength) {
        position = x + markerLength;
        break;
    }
}

console.log(position);