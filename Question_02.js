const prompt = require("prompt-sync")({ sigint: true });
const i = prompt("Enter the temprature in celcius: ");

const x = (9/5) * i + 32;

console.log(`The respective temparture for ${i} in farrenhite is : ${x}`);

const j= prompt("Enter the temprature in Farrenhite ");

const y = (j-32) * (5/9);

console.log(`The respective temprature for ${j} in celcius is  : ${y} `);