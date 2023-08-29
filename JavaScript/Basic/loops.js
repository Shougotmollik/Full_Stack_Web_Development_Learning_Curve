//count 1 to 10
for(let i=1;i<=10;i++){
   // console.log(i);
}

const numbers=[1,2,3,4,5,6,7,8,9]
for(const number of numbers){
   // console.log(number);
   // console.log(number*2);
}

//Get double value array from given value 

const numericals=[1,2,3,4,5,6,7,8,9]
let result=[]
let resultPower=[]
for(const numerical of numericals){
    result.push(numerical*2)
    resultPower.push(numerical**2)
}
console.log(result);
console.log(resultPower);
