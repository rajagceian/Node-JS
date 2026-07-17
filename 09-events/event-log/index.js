const fs = require("fs");
const eventEmitter = require("events");

const emitter = new eventEmitter();
let count = 0;
emitter.on("login",(user)=>{
    count++;
    console.log(`${user} is logged in successfully`);
    fs.appendFileSync("Activity-log.txt",`${count} : User - ${user} log in at ${new Date(Date.now())}\n`);
});
emitter.on("logout",(user)=>{
    count++;
    console.log(`${user} is logged out successfully`);
    fs.appendFileSync("Activity-log.txt",`${count} : User - ${user} log out at ${new Date(Date.now())}\n`);

});
emitter.on("purchase",(args)=>{
    count++;
    console.log(`${args.user} purchased summary : -`);
    console.log(args.items);
    fs.appendFileSync("Activity-log.txt",`${count} : User - ${args.user} purchased ${args.items} at ${new Date(Date.now())}\n`);
});
emitter.on("profileUpdate",(args)=>{
    count++;
    console.log(`${args.user} updated his ${args.action}`);
    fs.appendFileSync("Activity-log.txt",`${count} : User - ${args.user} updated his ${args.action} at ${new Date(Date.now())}\n`);
});

//--------- Fire event ------------
emitter.emit("login","Raja kumar");
emitter.emit("purchase",{user:"Raja kumar",items:["Shoes","Soap","Body wash"]});
emitter.emit("profileUpdate",{user:"Raja kumar",action : "Profile"});
emitter.emit("purchase",{user:"Raja kumar",items:["Fruits","Dates"]});
emitter.emit("profileUpdate",{user:"Raja kumar",action : "DOB"});
emitter.emit("logout","Raja kumar");