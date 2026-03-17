// Callback Nesting
console.log("Starting nested callback flow");

setTimeout(function(){
    console.log("Step1 : user loaded.");

    setTimeout(function(){
        console.log("Step2 : Orders loaded.");

        setTimeout(function(){
            console.log("Step3: Payments Loaded.");

            setTimeout(function(){
                console.log("Step4 : shipment loaded.");
                console.log("We are in Callback Hell!!!!");
            },1000);
        },800);
    },600);
},400);