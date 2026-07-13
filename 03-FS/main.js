//-------- fs module ------------ 
const fs = require("fs"); // Importing the built-in 'fs' module for file system operations

// write a file named 'example.txt' with some content, if it doesn't exist, it will create the file
//---- Synchronous method ----- Blocking method (Pahle ye kaam hoga phir aage ka kaam hoga)
fs.writeFileSync("./testSync.txt","Hello, This is a test file created using fs module in Node.js!"); // Writing to a file synchronously

//------ Asynchronous method ----- Non-blocking method (Pahle ye kaam parallelly hoga aur aage ka kaam bhi hoga)
fs.writeFile("./testAsync.txt","Hello, This is a test file created using fs module in Node.js!",(err)=>{ // Writing to a file asynchronously
    if(err){
        console.log("Error while writing file asynchronously: ", err);  
    }else{
        console.log("File written successfully using asynchronous method!");
    }
});

//Imp point :Yaha read/write dono me Asynchronous method ek callback function leta hai jisme error handling hoti hai. Agar file write ho jati hai to callback function me error null hoga aur agar koi error aata hai to error object me details milegi. 

//------- And,  Synchronous method hamesha kuchh na kuchh return karta hai, lekin Asynchronous method me callback function me error handling hoti hai aur return value nahi hoti.

//--- Reading a file synchronously
const dataSync = fs.readFileSync("./testSync.txt","utf-8");
                                     // utf-8 ka use isliye kiya jata hai taki file ka content string me mile, agar utf-8 na likha jaye to file ka content buffer me milega.
console.log("Data read synchronously from testSync.txt: ", dataSync);

//--- Reading a file asynchronously
fs.readFile("./testAsync.txt","utf-8",(err,dataAsync)=>{
    if(err){
        console.log("Error while reading file asynchronously: ", err);
    }else{
        console.log("Data read asynchronously from testAsync.txt: ", dataAsync);
    }
});


//--------write something and append it to the file 
//---- Synchronous method
fs.appendFileSync("./testSync.txt",`\nThis is an appended line to the testSync.txt file. ${Date.now()}`); // Appending to a file synchronously

// Date.now() ka output batata hai ki 1 January 1970, 00:00:00 UTC se lekar ab tak kitne milliseconds beet chuke hain.