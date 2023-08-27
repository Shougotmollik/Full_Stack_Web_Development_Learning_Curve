const prompt = require('prompt-sync')();

foodbill=Number(prompt("Enter your Bill : "))
tipPercnetace=Number(prompt("Enter your tips percentace "))/100
tipAmount=foodbill*tipPercnetace
TotalAmount=foodbill+tipAmount

console.log("Your Food bill is "+foodbill)
console.log("Your tips ammount " +tipAmount)
console.log("Your total bill amount is "+TotalAmount)