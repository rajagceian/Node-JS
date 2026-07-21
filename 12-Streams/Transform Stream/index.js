//Ye ek special Duplex stream hai — jo data andar leta hai, use modify/transform 
// karta hai,aur badla hua data bahar bhejta hai.
const {Transform} = require("stream");

const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        const upper = chunk.toString().toUpperCase();
        callback(null, upper);
    }
});
// transform(chunk,encoding,callback)=>
    /**
     *1. chunk — Data ka tukda

      2. encoding — Chunk kis format mein hai
        Batata hai chunk ka encoding kya hai (jaise 'utf8') — zyada use nahi hota 
        jab tak tum manually Buffer handle na kar rahe ho. Zyadatar cases mein 
        ignore kar dete hain.

      3. callback — "Mera kaam ho gaya, agla step lo"



        callback(null, upper);
        //        ↑      ↑
        //     error   processed data
Pehla argument: agar koi error aaya toh yahan daalo (callback(new Error("kuch galat hua"))), warna null do (matlab "sab theek hai")
Doosra argument: processed/transformed data — jo bahar bhejna hai

    transform(chunk, encoding, callback) {
        const upper = chunk.toString().toUpperCase();  // Step 1
        callback(null, upper);                          // Step 2
    }


Step 2: callback(null, upper) bola — "koi error nahi (null), aur ye raha final 
        result (upper) — isse aage bhej do".



*/
process.stdin.pipe(upperCaseTransform).pipe(process.stdout);
//Input ko Caps me show karega
