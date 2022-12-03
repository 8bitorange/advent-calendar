const assert = require('node:assert/strict');
const input = require('../common/input');

const findIntersection = (str1, str2) => {
    const array1 = str1.split('');
    const array2 = str2.split('');
    let intersections = array1.filter(item => array2.includes(item));
    return [...new Set(intersections)];
}

const processRucksack = (bag) => {
    let comp1 = bag.substring(0,bag.length/2);
    let comp2 = bag.substring(bag.length/2);
    return [comp1, comp2];
}

const getPriority = (item) => {
    let code = item.charCodeAt() - 97;
    return code > -1? code + 1 : code + 59;
}

// run tests
try {
    const tests = 'aaabbb';
    const testRucksacks = processRucksack(tests);
    const expected = ['aaa', 'bbb'];
    assert.deepEqual(testRucksacks, expected);
    console.log('First test passed');
} catch (err) {
    throw(err);
}

try {
    const tests = ['AbC', 'cBA'];
    const testIntersetion = findIntersection(...tests);
    const expected = ['A'];
    assert.deepEqual(testIntersetion, expected);
    console.log('Second test passed');
} catch (err) {
    throw(err);
}

try {
    const test1 = getPriority('a');
    const test2 = getPriority('A');
    const test3 = getPriority('z');
    const test4 = getPriority('Z');
    assert.deepEqual(test1, 1);
    console.log('test 3 passed');
    assert.deepEqual(test2, 27);
    console.log('test 4 passed');
    assert.deepEqual(test3, 26);
    console.log('test 5 passed');
    assert.deepEqual(test4, 52);
    console.log('test 6 passed');
} catch (err) {
    throw(err);
}

const rucksacks = input.get('dec-3', 'input.txt');
let totalPriority = 0;
rucksacks.forEach((rucksack) => {
    const bags = processRucksack(rucksack);
    const intersection = findIntersection(...bags);
    totalPriority += getPriority(intersection.pop());
});

console.log(totalPriority);