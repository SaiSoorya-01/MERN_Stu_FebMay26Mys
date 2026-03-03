//Immediately Invoked Function Expression(IIFE)
// Parameters
(function(){
    console.log("Basic IIfe exected Immediately");
})();   
//with Parameters
(function(appName,version){
    console.log("App:",appName,"Version: ",version);
})("NodeJs","V22.22.0");   

//with return value
const result = (function(){
    const a = 10, b= 20;
    return a+b;
})();
console.log("sum is ",result);