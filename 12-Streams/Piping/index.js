/*
Piping — "Streams ko jodna"
.pipe() ek Readable stream ka output seedha Writable stream ke input mein bhej deta
 hai — manually data/write handle karne ki zaroorat nahi.
 */
const fs = require('fs');

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);
// Bas ek line — file copy ho gayi, chunk-by-chunk, memory-efficient