// document.addEventListener("click", function () {
//  document
// });

// let links = document.querySelectorAll("a");
// let linkthird = links[2];

// linkthird.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("just Kidding");
// });

// adding 100 para

// const t1 = performance.now();
// for (let i = 1; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "this is para " + i;
//   document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log(t2 - t1);
// optimising the code

// let myDiv = document.createElement("div");

// for (let i = 1; i <= 100; i++) {
//   let myElement = document.createElement("p");
//   myElement.textContent = "This is a para " + i;
//   myDiv.appendChild(myElement);
// }

// document.body.appendChild(myDiv);

// the call stack

function addPara() {
  let para = document.createElement("p");
  para.textContent = "Add para example";
  document.body.appendChild(para);
}

function addMessage() {
  let para = document.createElement("p");
  para.textContent = "add message example";
  document.body.appendChild(para);
}

addPara();
addMessage();
