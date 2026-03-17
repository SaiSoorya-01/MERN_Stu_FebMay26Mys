// callback handling with named function
function loadUser(next){
    setTimeout(function(){
        console.log("Step 1:User loaded.");
        next();
    },400);

}
function loadOrders(next){
    setTimeout(function(){
        console.log("Step2: Orders loaded");
    next();
    },400);
}
 function loadPayments(next){
    setTimeout(function(){
        console.log("Step3: Payments loaded");
        next();
    },400);
 }
 function loadShipment(){
    setTimeout(function(){
        console.log("Step4:Shipment loaded ");
        console.log("Same flow but easier to read");
    },400);
 }
 loadUser(function(){
    loadOrders(function(){
        loadPayments(function(){
            loadShipment();
        })
    })
 })