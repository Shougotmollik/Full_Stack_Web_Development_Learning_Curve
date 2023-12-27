// function decleartion

function hello(String) {
  console.log(`Hello ${String} `);
}
// hello("Shougot");

// assingment function
let greetting = function greet(String) {
  console.log(`Hello ${String}`);
};
// greetting("Shougot");

// Arguments function

function sum() {
  let total = 0;
  for (let value of arguments) {
    total = total + value;
    return total;
  }
}
let ans = sum(1, 2, 3, 4);

// console.log(ans);

// Greatter setter

let person = {
  fName: "Shougot",
  lName: "Mollik",
  get fullName() {
    return `${fName} ${lName}`;
  },

  set fullName(value) {
    let parts = value.split(" ");

    (this.fName = parts[0]), (this.lName = parts[1]);
  },
};
person.fullName = "Jonny deep ";
console.log(person.fullName);
