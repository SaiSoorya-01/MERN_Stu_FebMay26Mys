const btn = document.getElementById("compareBtn");
btn.addEventListener("click",function(e){
    console.log("REGULAR FUNCTION");
    console.log("this === btn",this===btn);
    console.log("current target === btn",e.currentTarget===btn);
    console.log("e.target === btn",e.target === btn);
});

btn.addEventListener("click",(e) =>{
    console.log("ARROW FUNCTION");
    console.log("this === btn",this===btn);
    console.log("current target === btn",e.currentTarget===btn);
    console.log("e.target === btn",e.target === btn);
});