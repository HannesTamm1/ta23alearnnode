//const fs = require('fs'); // commonjs module
//import fs from 'fs'; // es module
//fs.writeFileSync('test.txt', 'Hello node!');
const common = require('./common.js');
common.hello();
import es from './es.js';
es.hello();