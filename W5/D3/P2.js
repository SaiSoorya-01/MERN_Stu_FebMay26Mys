// Why use Async / await
function getUser (){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({id:101,name:"kiran"});
        },12000);
    });
}

function getOrders(userId){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(["Order-A","Order-B"]);
        },1200);
    });
}

async function showUserAndOrders(){
    const user = await getUser();
    console.log("User loaded: ",user.name);

    const orders = await getOrders(user.id);
    console.log("Order loaded",orders);
}

showUserAndOrders();