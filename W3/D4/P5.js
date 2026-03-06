//Reduce method
let nums = [5,10,15];

let Average = nums.reduce((intermedianteSum,current) => intermedianteSum + current,0)/nums.length;
// console.log(Average);


// Reduce to object count by category
let items = ["pen","pencil","pen","eraser"];
let count = items.reduce((a,b)=>{
    a[b] = (a[b] || 0) + 1;
    return a;
},{});
console.log("items count: ",count);