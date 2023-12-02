let name1 = age > 10 ? "Pedro" : "Jack";

const person = {
  nameer,
  age: 20,
  isMarried: false,
};

const person2 = { ...person, name: "Jack" };

let names = ["Pedro", "Jessica", "Carol", "Carol"];
names2 = [...names, "Aman"]; //Adds Aman

names.map((fname) => {
  return fname;
});

names.filter((fname) => {
  return fname !== "Carol";
});

// var is hoisted (it is initialized at the top of its containing function or global scope with undefined and stays undefined until the initialization line)
//let and const are also hoisted but are in the temporal dead zone. It is the time between the start of scope where declared to the actual initialization
// They are not initialized with undefined!

console.log(a); // Outputs: undefined
var a = 5;

console.log(b); // Throws a ReferenceError
let b = 10;

console.log(c); // Throws a ReferenceError
const c = 15;

//Shadowing
var x = 10;

function outer() {
  var x = 5; // This 'x' shadows the outer 'x' within this function's scope
  console.log(x); // Outputs: 5
}

outer();
console.log(x); // Outputs: 10 (refers to the outer 'x')

let y = 20;

function inner() {
  let y = 15; // This 'y' shadows the outer 'y' within this function's scope
  console.log(y); // Outputs: 15
}

inner();
console.log(y); // Outputs: 20 (refers to the outer 'y')
