const assert = require('assert');
const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');

const elves = input.split('\n\n').map((items) => {
    let list = (items.indexOf('\n') > -1)? items.split('\n') : [items];
    list = list.filter(n => n);
    return list.map((i) => {
        return parseInt(i);
    });
});

const summedElves = elves.map(item => item.reduce((p,c) => p+c));

summedElves.sort((a, b) => a - b);
console.log(summedElves.slice(-3).reduce((p,c) => p+c));
