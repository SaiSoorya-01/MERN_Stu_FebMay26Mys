// Chaining Promises with Returned promises
function getOrderId(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(501);
        },500);
    });
}
function getOrderDetailes(orderId){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({
                id:orderId,
                product:"laptop",
                quantity:2
            });
        },700);
    });
}
getOrderId()
.then(function(orderId){
    console.log("order Id recived:",orderId);
    return getOrderDetailes(orderId);
})
.then(function(OrderDetailes){
    console.log("Order Detailes loaded.");
    console.log("Product:",OrderDetailes.products);
    console.log("Quantity:",OrderDetailes.quantity);
})