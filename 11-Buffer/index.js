//---------- Buffer Module in Node.JS -------------
//Buffer ek global object hai jo ki Node.js me available hota hai. 
// Ye binary data ko handle karne ke liye use hota hai. Buffer ka use tab hota hai
//  jab hume raw binary data ke sath kaam karna hota hai, jaise ki file system
//  operations, network communications, etc.

// Buffer data store RAM me karta hai, Jo ki temporary hota hai..
// that's why => we should use small peace of data.

//-------- Example --------------
let buf = Buffer.from("I am Raja From GCE Gaya");
console.log(buf); //<Buffer 49 20 61 6d 20 52 61 6a 61 20 46 72 6f 6d 20 47 43 45 20 47 61 79 61>

//------ Change to original string ---------
console.log(buf.toString()); // I am Raja From GCE Gaya

//---------------------------------------------------//
//---------- Buffer's property and method ---------------
//*** 1. Buffer.alloc() *****/
let newBuf = Buffer.alloc(10); // 10 bytes ka buffer allocate kiya
console.log(newBuf); //<Buffer 00 00 00 00 00 00 00 00 00 00> // ye default value hai

//*** 2. Buffer.allocUnsafe() *****/
let newBuf1 = Buffer.allocUnsafe(10);
console.log(newBuf1); //<Buffer 00 00 00 00 00 00 00 00 00 00> // ye default value hai

// difference between alloc and allocUnsafe is that allocUnsafe is faster than alloc but it may contain old data. So, we should use allocUnsafe only when we are sure that we will overwrite the data.

//*** 3. Buffer length */
const str = "café";
console.log(str.length);              // 4  (characters count)
console.log(Buffer.from(str).length); // 5  (bytes count — 'é' 2 bytes leta hai UTF-8 mein)

//------ Access specific byte in buffer ---------
const buff = Buffer.from('Hi');
console.log(buff[0]); // 72  (H ka byte value)
buff[0] = 74;          // change kar diya (J ka value)
console.log(buff.toString()); // Ji

//------Note => String = "insaan ke padhne layak text" | Buffer = "computer ke andar ka raw, actual data (bytes)"