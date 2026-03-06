// array map
let numArray = [1,2,3,4];
let squared = numArray.map(num =>num*num);
console.log(squared);

let prices = [100,200,300,400];
// array map
let priceWithGST = prices.map(price => price+price*0.18);
console.log("price w/o tax",prices);
console.log("price with tax ",priceWithGST);

// Using map , how to extract files in an object
let users = [
    {name: "Arjun", age:24},
    {name:"Krishna", age: 28}
];

let names = users.map(user => user.name);
console.log(" ",names);