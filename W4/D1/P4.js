// Logging

// console.log("Console logging");

console.warn("Warning Message");

console.error("Error message");

let users = [
{id:1,name:"Amit"},
{id:2,name:"Santhosh"},
];

console.log(users);
console.table(users);

// Group related logs
console.group("Group logs");
console.log("Log 1");
console.log("Log 2");
console.log("Log 3");
console.groupEnd();

// Measure execution time
console.time("LoopTimer");
for(let i=0; i<1000; i++){}
console.timeEnd("LoopTimer");