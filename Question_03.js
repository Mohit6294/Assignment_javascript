const prompt = require("prompt-sync")({ sigint: true });
const n = prompt("Enter the number: ");

let ans = 1;
for(let i=1;i<=n;i++){
  ans *= i;
}

console.log(`The factorial of number ${n} is : ${ans}`);