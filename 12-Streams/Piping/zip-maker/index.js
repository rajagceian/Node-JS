const zlib = require('zlib');
const fs = require("fs");
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())        // Transform: compress karo
  .pipe(fs.createWriteStream('input.zip')); // Writable: save karo

// Ek line mein: file padho → compress karo → save karo