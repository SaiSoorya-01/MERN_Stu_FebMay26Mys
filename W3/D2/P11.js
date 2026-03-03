//Recursive function
// A function which calls itslf

function factorial(n){
    if(n<=1){
        return 1;
    }
    return n*factorial(n-1);
}