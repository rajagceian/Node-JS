//Process module capstone project ("System Health & File Manager CLI") ke liye sabse important module hai, kyunki CLI arguments lena, system info nikalna, exit codes handle karna — sab yahin se hota hai.

//console.log(process); // directly available, kahin bhi

//Ye Node.js runtime ne provide kiya hai taaki Humare code current running Node process ke baare mein info le sake aur usse interact kar sake — jaise CLI arguments, environment variables, memory usage, exit karna, etc.

//1.------------- process.argv ------------
console.log("Raja");
console.log(process.argv);
/*
    Run : node index.js 
    Output : Raja
            [
            'C:\\Program Files\\nodejs\\node.exe',
            'C:\\Users\\Raja\\OneDrive\\Desktop\\Node JS\\10-Process\\index.js',
            ]

    if we Run : node index.js hello Raja kumar
       Output : Raja
                [
                'C:\\Program Files\\nodejs\\node.exe',
                'C:\\Users\\Raja\\OneDrive\\Desktop\\Node JS\\10-Process\\index.js',
                'hello',
                'Raja',
                'kumar'
                ] 
 */
console.log(process.argv.slice(2)); //Output : [ 'hello', 'Raja', 'kumar' ]

const args = process.argv.slice(2);
const field = args[0];  // "college"
const value = args[1];   // "GCE"

console.log(`${field} = ${value}`);