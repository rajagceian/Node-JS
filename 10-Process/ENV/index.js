require('dotenv').config();

console.log(process.env.API_KEY);      // "sk-1234567890abcdef"
console.log(process.env.DB_PASSWORD);   // "myPassword123"
console.log(process.env.PORT);          // "3000"