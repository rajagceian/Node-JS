const url = require("url");

const mapURL = {};
function shortURL(longUrl){
    try{
        //validate URl
       // new URL(longUrl);
        //generate short code
        const shortKey = Math.random().toString(36).slice(2,8);
            // toString(36) =>Change into string on converting in base-36
            //slice(2,8) => Extract string from index 2 to index 7.
        mapURL[shortKey] = longUrl;
        return shortKey;
    } catch(err){
        console.log("Error : ",err.message);
    }
}
const orgURL = "https://www.geeksforgeeks.org/problem-of-the-day";
const parsedURL = url.parse(orgURL,true);
const hostname = parsedURL.hostname;
const pathName = parsedURL.pathname;
console.log(`Original URL : ${hostname}/${pathName}`);
console.log(`Short URL : ${hostname}/${shortURL(pathName)}`);