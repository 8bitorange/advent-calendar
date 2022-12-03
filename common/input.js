const fs = require('fs');

const get = (caller, filename) => {
    const txt = fs.readFileSync(`${__dirname}/../${caller}/${filename}`, 'utf8');
    return txt.split('\n').filter(n=>n);
};

module.exports = {
    get
}