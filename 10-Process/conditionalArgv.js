const args = process.argv.slice(2);
const command = args[0]; // pehla argument = "command"
const value = args[1];    // dusra argument = uska data

if (command === "greet") {
    console.log(`Hello, ${value}!`);
} else if (command === "college") {
    console.log(`Your college is: ${value}`);
} else {
    console.log("Unknown command. Try: greet, college");
}