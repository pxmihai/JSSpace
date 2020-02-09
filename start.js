require('babel-register')({
    presets: ['env']
});

module.exports = require('./app.js');

const os=require('os');

console.log(__filename);

