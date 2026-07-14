// url => Uniform Resource Locator
const http = require("http");
const url = require("url");

const myServer = http.createServer((req,res)=>{
    console.log("New Request received..");
    const myUrl = url.parse(req.url,true);
    if(myUrl.path == "/favicon.ico") return res.end();
    console.log(myUrl);
    res.end(`<h1>URL details:-</h1>
              <ul> 
                    ${JSON.stringify(myUrl)}
                </ul>
            `);
});

myServer.listen(8000,()=>{ 
    console.log("Server started...");
})