const arg = process.argv.slice(2);
const num1 = Number(arg[0]);
const num2 = Number(arg[2]);
let result;
switch(arg[1]){
    case "+":
        result = num1+num2;
        break;
    case "-":
        result = num1-num2;
        break;
    case "*":
        result = num1*num2;
        break;
    case "/":
        if(num2=="0"){
            throw new Error("Can't be divided by 0");
        }
        result = (num1/num2).toFixed(3);
        break;
    default:
        console.log("Wrong operator : *Choose only +|-|*|/ and Separate operator and operands by space\n");
        process.exit(1);
}
console.log(`Result : ${result}`);