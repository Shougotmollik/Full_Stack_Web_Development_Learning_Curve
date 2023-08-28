//print name using function 

function sayMyName(){
    console.log("Shougot mollik");
}
//sayMyName()

// greeting function 

function greeting(name){
    greet=`Hi ${name} nice to meet you`
    console.log(greet);
}
//greeting("shougot")

//Addition of 2 number 
function sum(a,b){
    return a+b
}
//console.log(sum(10,20));

//tip calculator using function 

function calculateFood(food,tip){
    tipPercentace=tip/100
    tipAmount=food*tipPercentace
    totalAmount=tipAmount+food
    return totalAmount
}

console.log(calculateFood(200,18));