const fs = require("fs");

/** Pure data ko ek hi sath hi likh dena----
 fs.writeFile('notes.txt', 'Hello Raja!', (err) => {
    if (err) throw err;
    console.log('File likh di gayi!');
});
 */

//----- Thoda-thoda karke likhna (chunks mein) --------------
const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Hello ');
writeStream.write('Raja\n');
writeStream.write('From\n');
writeStream.write('GCE\n');
writeStream.write('Gaya\n');
writeStream.end(); // batata hai ki likhna khatam