// Server kya hota hai => Server ek aisa software ya hardware hai jo client 
// ke requests ko receive karke unka response de deta hai.

// http module => http ka built-in module hai jo server create karne me help 
// karta hai.

const http = require("http");
const fs = require("fs"); 
const os = require("os");

function getLocalIP() {
  const interfaces = os.networkInterfaces();

  for (const name in interfaces) {
    for (const iface of interfaces[name]) {
      // hum sirf IPv4 aur non-internal (real network) address chahte hain
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return '127.0.0.1'; // agar kuch na mile
}
const myServer = http.createServer((req,res)=>{
    const file = "requestLog.txt";
    //---- Use async file write ----
    fs.appendFile(file,`${new Date(Date.now())} - New Request received at ${req.url} from IP : ${getLocalIP()}\n`,(err,currLog)=>{
            if(err){
                console.log("Error : ",err.message);
            } else{
                console.log("New request receiced....");
                if(req.url === "/"){
                    res.end("Home Page");
                } else if(req.url === "/about"){
                    res.end("I am Raja Kumar.");
                } else if(req.url === "/contact"){
                    res.end("Mo : +91 6211111111");
                } else{
                    res.end("404 : Not found");
                }
            }
    });
});

const PORT = 8000;
myServer.listen(PORT,()=>{
    console.log("Server started....");
});