let name1 = age > 10 ? "Pedro" : "Jack";

const person = {
  name1,
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
