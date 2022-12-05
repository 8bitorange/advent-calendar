const input = require('../common/input');
const assert = require('node:assert/strict');

const pairs = input.get('dec-4', 'input.txt');

const findOverlap = (array1, array2) => {
    let [bottom1, top1] = array1.split('-').map(n => parseInt(n));
    let [bottom2, top2] = array2.split('-').map(n => parseInt(n));

    if(bottom1 <= bottom2 && top1 >= top2) {
        let range = top2 - bottom2 + 1;
        return {
            range: [...Array(range)].map((item, index) => index + bottom2),
            fullyContained: true
        }
    } else if (bottom2 <= bottom1 && top2 >= top1) {
        let range = top1 - bottom1 + 1;
        return {
            range: [...Array(range)].map((item, index) => index + bottom1),
            fullyContained: true
        }
    } else {
        return {
            range: [],
            fullyContained: false
        }
    }
};

try {
    const [test1, test2] = ['1-10', '4-8'];
    assert.deepEqual(findOverlap(test1, test2).range, [4,5,6,7,8]);
    console.log(`test 1 is successful.`);
} catch (err) {
    throw(err);
}

try {
    const [test1, test2] = ['1-10', '11-15'];
    assert.deepEqual(findOverlap(test1, test2).range, []);
    console.log(`test 2 is successful.`);
} catch (err) {
    throw(err);
}

try {
    const [test1, test2] = ['3-7', '1-15'];
    assert.deepEqual(findOverlap(test1, test2).range, [3,4,5,6,7]);
    console.log(`test 3 is successful.`);
} catch (err) {
    throw(err);
}

let totalContained = 0;
pairs.forEach((pair) => {
    let [group1,group2] = pair.split(',');
    let overlap = findOverlap(group1, group2);
    if (overlap.fullyContained) {
        totalContained += 1;
    }
});

console.log(totalContained);

