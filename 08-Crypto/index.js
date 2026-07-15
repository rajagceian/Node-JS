//---- Crypto in Node js ----
// Crypto module ka use kar ke hum data ko encrypt aur decrypt kar sakte hai. 
// Ye module hume secure data transfer aur storage ke liye help karta hai.


const crypto = require('crypto');

//1. Random Bytes: Random bytes matlab ki random data generate karna. 
// Ye data hum encryption ke liye use kar sakte hai.
const id = crypto.randomBytes(16).toString('hex');
// Ye code 16 bytes ka random data generate karega aur usko 
// hexadecimal format me convert karega.
console.log(id);

//2. Hashing: Hashing ka use kar ke hum data ko secure kar sakte hai.
// Hashing ka matlab hai ki hum data ko ek fixed size ke string me convert karte hai.
// Ye string unique hoti hai aur original data ko wapas nahi la sakte.

const hash = crypto.createHash('sha256').update('Hello World').digest('hex');
// Ye code 'Hello World' string ko sha256 algorithm ka use kar ke hash karega aur 
// usko hexadecimal format me convert karega.
//Note : hash ka value same input ke liye hamesha same hota hai. 
console.log(hash);

