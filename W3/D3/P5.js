//Basics of objects
const person = {
    name:"Soorya",
    age:22,
    isStudent: false
};
// console.log("person",person);
console.log("name",person.name);
console.log("Age:",person["age"]);

//add a new property
person.city = "Mysore";
console.log("person",person);

// Modify
person.age = 23;
//Delete
delete person.isStudent;
console.log("person",person);

//Object constructor
const car = new Object();
car.make = "toyota";
car.model = "Fortuner";
car.year = 2004;
console.log("car:",car);