const name="Shougot Mollik  "
const repoCount=50
// console.log(name + repoCount+"value");
console.log(`Hi my name is ${name}and my repo count is ${repoCount}`);

const gameName=new String("Shougot")
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length );
console.log(gameName.toLocaleLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("u"));

const newStrings=gameName.substring(0,4)
console.log(newStrings);

// indexing using negative value
const anotherStrings=gameName.slice(-7,3)
console.log(anotherStrings);

// delete extra spaces
const newStrings1="   shougot   "
console.log(newStrings1);
console.log(newStrings1.trim());

const url="https://www.shougotmollik.github.io"
console.log(url.replace("io","com"));