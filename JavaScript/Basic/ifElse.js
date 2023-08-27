//user input 
const prompt =require('prompt-sync')();

let weather=prompt("What about teh weather today? ")

//apply condition 
if (weather=="sunny") {
    console.log("Get your sunglass");
} else {
    console.log("Get your umberellla");
}