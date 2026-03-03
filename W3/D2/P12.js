//Higher order function
// A function which takes another function as parameter
//or
// a function returns another function

function createMultiple(factor){
    return function(number){
        return number*factor;
    }
}
let double = createMultiple(2);
console.log("double(10):" ,double(10));
let triple = createMultiple(3);
console.log("triple(30):",triple(30))
