// Modules ka use karne ke liye humein do cheezein chahiye hoti hain:
// 1. Export karna (jahan se hum data ya function ko export karte hain)
// 2. Import karna (jahan hum exported data ya function ko use karte hain)

//Import me do cheeze aate hai :-
// 1. Import inbuilt modules (jo ki Node.js ke sath aate hain)
// 2. Import current directory modules (jo ki humne khud banaye hain) --
//       Jis hum './' ka use karke import karte hain.

const fs = require("fs"); // Importing inbuilt module 'fs' for file system operations

const {add,sub} = require("./math"); // Importing custom module 'math.js' from the current directory

console.log(add(5, 3)); 
console.log(sub(5, 3));