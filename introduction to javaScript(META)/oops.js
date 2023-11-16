// var purchase1 = {
//   shoesPrice: 120,
//   sateTax: 1.2,
//   totalPrice: function () {
//    var calculation=purchase1.shoesPrice*purchase1.sateTax;
//    console.log("Total price is "+calculation);
//   },
// };

// purchase1.totalPrice();

// class Cake {
//  constructor(lyr) {
//      this.layers = lyr + 1;
//  }
// }

// var result = new Cake(1);
// console.log(result.layers);

// class Animal {
//  constructor(lg) {
//      this.legs = lg;
//  }
// }

// class Dog extends Animal {
//  constructor() {
//      super(4);
//  }
// }

// var result = new Dog();
// console.log(result.legs);

// class Animal {

// }

// class Cat extends Animal {
//   constructor() {
//     super();
//     this.noise = "meow";
//   }
// }

// var result = new Animal();
// console.log(result.noise);

// class Person {
//  sayHello() {
//      console.log("Hello");
//  }
// }

// class Friend extends Person {
//  sayHello() {
//      console.log("Hey");
//  }
// }

// var result = new Friend();
// result.sayHello();

// //Task 1
// var dairy = [
//   "cheese",
//   "sour cream",
//   "milk",
//   "yogurt",
//   "ice cream",
//   "milkshake",
// ];
// function logDairy() {
//   for (const item of dairy) {
//     console.log(item);
//   }
// }
// logDairy();
// //Task2
// const animal = { canJump: true };
// const bird = Object.create(animal);
// bird.canFly = true;
// bird.hasFeathers = true;
// function birdCan() {
//   for (action of Object.keys(bird)) {
//     console.log(`${action}: ${bird[action]}`);
//   }
// }
// birdCan();
// //Task 3
// function animalCan() {
//   for (action of Object.keys(bird)) {
//     console.log(`${action}: ${bird[action]}`);
//   }
//   for (action of Object.keys(Object.getPrototypeOf(bird))) {
//     console.log(`${action}: ${bird[action]}`);
//   }
// }
// animalCan();



// const meal = ["soup", "steak", "ice cream"]
// let [starter] = meal;
// console.log(starter);



// let food = "Chocolate";
// console.log(`My favourite food is ${food}`);



// let set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(2);
// set.add(1);
// console.log(set);



let obj = {
    key: 1,
    value: 4
};

let output = { ...obj };
output.value -= obj.key;

console.log(output.value);



// function count(...basket) {
//     console.log(basket.length)
// }

// count(10, 9, 8, 7, 6);


