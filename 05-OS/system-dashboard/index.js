//"System Dashboard" — CPU, RAM, uptime terminal mein har 2 second refresh ho
const os = require("os");

setInterval(()=>{
    console.log("------------------------------");
    console.log("CPU Cores : "+os.cpus().length)
    console.log("Total RAM : "+(os.totalmem()/1024/1024/1024).toFixed(2)+"GB");
    console.log("Free RAM : "+(os.freemem()/1024/1024/1024).toFixed(2)+"GB");
    console.log("Uptime : "+(os.uptime()/3600).toFixed(2)+"h");
    console.log("------------------------------");
},2000);