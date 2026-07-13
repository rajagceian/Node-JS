//os module => os ka built-in module hai jo operating system ke baare me 
// information provide karta hai (jaise ki CPU, memory, architecture, etc.).

const os = require('os'); // Importing the built-in 'os' module for operating system-related information

//1. Getting the architecture of the operating system
const architecture = os.arch();
console.log("Architecture:", architecture); // Output: x64 (depends on your system)

//2. Getting the platform of the operating system
const platform = os.platform();
console.log("Platform:", platform); // Output: win32 (depends on your system)

//3. Getting the total amount of RAM in bytes
const totalMemory = os.totalmem();
console.log("Total RAM:", (totalMemory/1024/1024/1024).toFixed(2), "GB"); // Output: 16.0 (depends on your system)

//4. Getting the free amount of RAM in bytes
const freeMemory = os.freemem();
console.log("Free RAM:", (freeMemory/1024/1024/1024).toFixed(2), "GB"); // Output: 8.0 (depends on your system)

//5. Getting the hostname of the operating system
const hostname = os.hostname();
console.log("Hostname:", hostname); // Output: DESKTOP-ABC123 (depends on your system)

//6. Getting the release of the operating system
const release = os.release();
console.log("Release:", release); // Output: 10.0.19041 (depends on your system)
//Release ka matlab hai ki operating system ka version number kya hai. Ye information aapko bata sakti hai ki aapke system me kaunsa version of OS installed hai.

//7. Getting no. of CPU cores
const cpuCores = os.cpus().length;
console.log("Number of CPU cores:", cpuCores); // Output: 8 (depends on your system)