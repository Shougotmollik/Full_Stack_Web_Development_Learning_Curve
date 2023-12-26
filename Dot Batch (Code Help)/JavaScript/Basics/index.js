// console.log("Hello shougot mollik");
let age = 17;
let vote = 18 <= age ? "you can vote" : "You can't vote";
console.log(vote);

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
 