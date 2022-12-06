const input = require('../common/input');
const assert = require('node:assert/strict');

const instructions = input.get('dec-5', 'input.txt');

let i = 0;
const binRegex = /\[[A-Z]\]/;
const moveRegex = /move ([0-9]*) from ([0-9]*) to ([0-9]*)/;
const numberOfBins = Math.ceil(instructions[i].length/4);
let bins = [];
let positions = [];
for (let x = 0; x < numberOfBins; x++) {
    positions.push(x*4+1);
}
instructions.forEach((item, i) => {
    if(binRegex.test(item)) {
        positions.forEach((location, locIndex) => {
            if(i === 0) {
                if(item[location].trim() !== '') {
                    bins.push([item[location].trim()])
                } else {
                    bins.push([]);
                }
            } else {
                if(item[location].trim() !== '') {
                    bins[locIndex].push(item[location].trim());
                }
            }
        });
    }
    if(moveRegex.test(item)) {
        let [match, move, from, to] = moveRegex.exec(item);
        move = parseInt(move);
        let moving = bins[parseInt(from) - 1].splice(0, move).reverse();
        bins[parseInt(to)-1].unshift(...moving);
    }
});

let answer = '';
bins.forEach((bin) => {
    answer += bin[0];
});

console.log(answer);

