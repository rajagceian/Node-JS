//----- Stream Why? --------
/*
-Let's suppose ki a text file 50MB ka hai aur hume use complete user ko deliver 
 karna on a specific route. 
 To, Iss scenrio me pure data ko browser ek baar me hi load kar dega...
 Jisase server par load badhega as well as memory comsuption bhi jyada hoga.
 Aur yadi ek sath bahut sara request aaya to server dead bhi ho sakta hai..
*/
//========= Without stream ==============

const http = require("http");
const fs = require("fs");
/*
const myServer = http.createServer((req,res)=>{
    fs.readFile("./sample.txt",(err,data)=>{
        res.end(data);
    })
});

*/

//------- Solution ----------------
/*
 ---> Isi Problem ko solve karne ke liye hum *stream* ka use karte hai.
      stream se data chunk wise read and deliver hota hai.
      Jisase server and memory par jyada load nhi padta hai.
*/
const myServer = http.createServer((req,res)=>{
    const stream = fs.createReadStream("./sample.txt","utf-8");
    stream.on("data",(chunk)=> res.write(chunk)); //data => jab bhi new chunk aaye to deliver hote jaaye
    stream.on("end",()=> res.end()); //end => jab file content khatm ho jaaye
        stream.on("error", (err) => {           // ye add karo
        console.log("Stream error:", err.message);
        res.writeHead(500);
        res.end("File nahi mili ya error aaya: " + err.message);
    });
});
myServer.listen("8000",()=>{
    console.log("Server started");
});