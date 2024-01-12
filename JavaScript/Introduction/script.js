// const nameChange = document.querySelector("#name");

// nameChange.innerHTML = "Hello World";

// document.write("Hi javaScript !");

// prompt();

// let animal = ["cat", "cow", "Dog", "Rabbit", "Snake"];

// for (let y in animal) {
//   console.log(y);
// }
// for (let x of animal) {
//   console.log(x);
// }

// let person = {
//   fName: "shougot",
//   lName: "mollik",
//   age: 21,
//   fullName: function () {
//     console.log(`${this.fName} ${this.lName}`);
//   },
// };

// console.log(person);

class Person {
  constructor(fName, lName, nage) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = nage;
  }
}

let person1 = new Person("Shougot", "mollik", 21);
// console.log(person1);

let person2 = new Person("Jhon", "Snow", 23);
// console.log(person2);

class People extends Person {
  constructor(fName, lName, nage, edu, sec) {
    super(fName, lName, nage);
    this.education = edu;
    this.section = sec;
  }
}

let person3 = new People("smith", "Kaliiy", 24, "Bsc", "Cse");
console.log(person3);
