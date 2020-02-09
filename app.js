// app.js
const path = require('path');



import {add} from './data';
console.log(add(2, 3));

import {increase} from './modules/module';
let pathObj = path.parse(__filename);
// console.log(pathObj);
console.log(increase());

const os = require('os');
let totalMemory =os.totalmem();
let freeMem = os.freemem();

let tea =99;
let ob={totalMemory,freeMem,tea};

for (let oof in ob)
{
    console.log(Object.keys(ob));
}

console.log('Total Memory'+totalMemory);
console.log(increase());

console.log(`total memory:${totalMemory}`);
console.log(`total memory:${freeMem}`);
console.log(increase());

const fs = require('fs');
const files=fs.readdirSync('./');
console.log(files);
fs.readdir('./',function(err,files){
    if(err)
        console.log('Error',err);
    else
        console.log('Result - ',files);
});
