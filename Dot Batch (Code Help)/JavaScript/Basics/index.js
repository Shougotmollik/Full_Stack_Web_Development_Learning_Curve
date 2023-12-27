// console.log("Hello shougot mollik");
// let age = 17;
// let vote = 18 <= age ? "you can vote" : "You can't vote";
// console.log(vote);

// Creatng a object

// const people = {
//   hand: 2,
//   leg: 2,
//   eye: 2,
//   nose: 1,
//   behavier: function () {
//     console.log("People eats Rice");
//   },
// };

//factory function

// function man(hand, leg, eye, nose) {
//   return (people = {
//     hand,
//     leg,
//     eye,
//     nose,
//     behavier: function () {
//       console.log("People eats Rice");
//     },
//   });
// }

// let person = man(2, 3, 4, 5);
// console.log(person.eye);

// conteuctor function

function Man() {
  (this.hand = 2), (this.eye = 2), (this.nose = 1);
  this.eat = function () {
    console.log("Eats Rice");
  };
}

let person = new Man();

// let shougot={ };

// for(let key in person){
//   shougot[key]=person[key]
// }

let shougot = Object.assign({}, person);

// console.log(shougot);

// let firstName = "shougot";
// let lastName = new String("mollik");

let message = "my name is shougot mollik";
//
let word = message.split(" ");
// console.log(word);
let joined = word.join("");
// console.log(joined);

let date = new Date("Augest 13 2002 08:13");
// console.log(date);

// let number = [1, 2, 4, 5, 6, 7, 8];

let courses = [
  { no: 1, name: "shougot" },
  { no2: 2, name: "mollik" },
];

let course = courses.find((course) => course.name === "shougot");
// console.log(course);

// combine two array

number = [1, 2, 3, 4];
number2 = [5, 6, 7, 8];
// let combine = number.concat(number2);
// console.log(combine.slice(2,4));

let combine = [...number, ...number2];
// console.log(combine);

let num = [1, 2, 3, -4, -5];

let filtered = num.filter((value) => value >= 0);

// console.log(filtered);

let numbers = [1, 2, 3, 4, 5, 6];

let student = numbers.map((value) => "number " + value);

// console.log(student);

let arr = [1, 2, 3, 4, 5, 6];
let total = 0;
for (let value of arr) {
  total += value;
  // console.log(total);
}

