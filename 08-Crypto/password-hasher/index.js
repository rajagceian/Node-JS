const crypto = require("crypto");

const password = "Ramesh@57765$";
const hash = crypto.createHash("Sha256").update(password).digest("hex");

console.log("Password : ",password);
console.log("Hashed Password : ",hash);