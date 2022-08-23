const prompt = require("prompt-sync")({ sigint: true });
const i = prompt("Enter the year you want to check ");





if(i%4==0 && i%100!=0){
  console.log(`${i} is a leap year`);
}else if(i%400==0){
  console.log(`${i} is a leap year`);
}else{
  console.log(`${i} is not a leap year`);
}