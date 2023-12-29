// document.addEventListener("click", function () {
//  document
// });

let links = document.querySelectorAll("a");
let linkthird = links[2];

linkthird.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("just Kidding");
});
