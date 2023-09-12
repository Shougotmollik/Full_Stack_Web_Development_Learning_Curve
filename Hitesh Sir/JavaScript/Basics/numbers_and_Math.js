const score=300
// console.log(score);

const balance = new Number(5000);
// console.log(balance);

// convert to strings
// console.log(balance.toString());

// Check length of strings
// console.log(balance.toString().length);

// fixed value after .two 
// console.log(balance.toFixed(2));

// precision value 
const floatNumber=123.44
// console.log(floatNumber.toPrecision(4));

// number convert to localStrings
const money=10000000000
// console.log(money.toLocaleString("en-IN"));



// $$$$$$$$$$$$$$$$$$$$$$$$$$ Math $$$$$$$$$$$$$$$$$$$

// console.log(Math);
// console.log(Math.abs(-10));
// console.log(Math.round(9.6));
// console.log(Math.ceil(9.45));
// console.log(Math.floor(10.57));

// Find maximun and Minimun from given array 
let numbers=[1,3,5,7,8,9,5,77,88,6,7,78,90]
let maxValue=Math.max(...numbers)
let minValue=Math.min(...numbers)

console.log(maxValue);
console.log(minValue);