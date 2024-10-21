//const fs = require('fs'); // commonjs module
//import fs from 'fs'; // es module
//fs.writeFileSync('test.txt', 'Hello node!');
const common = require('./common.js');
common.hello();
const es = require('./es.js').default;
es.hello();
