// path module => ye Node ka built-in module hai jo file/folder paths ke saath
//  kaam karna easy banata hai (chahe tum Windows pe ho ya Linux/Mac, 
// alag-alag slash / vs \ ka jhanjhat khud handle kar leta hai).

const path = require('path'); // Importing the built-in 'path' module for handling file and directory paths

//1. Getting the base name of a file path
const filePath = '/home/user/docs/file.txt';
const baseName = path.basename(filePath);
console.log("Base name of the file:", baseName); // Output: file.txt

//2. Getting the directory name of a file path
const dirName = path.dirname(filePath);
console.log("Directory name of the file:", dirName); // Output: /home/user/docs

//3. Getting the file extension of a file path
const fileExtension = path.extname(filePath);
console.log("File extension:", fileExtension); // Output: .txt

//4. Joining multiple path segments into a single path
const joinedPath = path.join('/home/user', 'docs', 'file.txt');
console.log("Joined path:", joinedPath); // Output: /home/user/docs/file.txt

const resolvedPath = path.join('folder1', '../folder2', 'file.txt');
console.log("Resolved path:", resolvedPath);  // Output: folder2/file.txt  (.. ko resolve kar deta hai) => folder1/../folder2/file.txt => folder2/file.txt

//5. Normalizing a path (removes redundant slashes and resolves '..' and '.')
const normalizedPath = path.normalize('/home/user//docs/../file.txt');
console.log("Normalized path:", normalizedPath); // Output: /home/user/file.txt

//6. Getting the absolute path of a file
const absolutePath = path.resolve('main.js'); // Resolves the absolute path of 'main.js' based on the current working directory
console.log("Absolute path:", absolutePath); // Output: C:/Users/Raja/OneDrive/Desktop/Node JS/04-path/main.js (depends on where the script is run)

