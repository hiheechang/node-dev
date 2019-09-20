const fs = require('fs');
require('./utils.js')
const exportname = require("./utils.js");

fs.writeFileSync('notes.txt', 'testing'); //
fs.appendFileSync('./notes.txt', '\ntesting-3');

console.log(exportname); 