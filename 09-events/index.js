// NOde JS me events module ke help se hum asynchronous programming kar sakte hai.
//  Event module ke through hum custom events create kar sakte hai aur unhe 
// trigger kar sakte hai.

const eventEmitter = require("events");

const emitter = new eventEmitter();

//------ event creation -------
emitter.on("greet",(args)=>{
    console.log(`Hello, ${args.username}. You are a ${args.prof}.`);
});

//------- fire event -------
emitter.emit("greet",{username : "Raja",prof : "Backend developer"});
emitter.emit("greet",{username : "Sumit",prof : "Frontend developer"});

//-------------------------------------------------
emitter.once('firstLogin', () => {
  console.log("Welcome bonus mila!");
});

emitter.emit('firstLogin'); // Welcome bonus mila!
emitter.emit('firstLogin'); // kuch nahi hoga, dobara nahi chalega