// Handling error with try/catch

function loadCustomerProfile(){
    return new Promise(function(resolve,reject){
        const isServiceAvailable = true;

        if(isServiceAvailable){
            resolve("Success! Costomer profile loaded.");
        }
        else{
            reject("Unsuccessfull!! Customer profile unavailable");
        }
    });
}

async function showCustomerProfile(){
    try{
        const message = await loadCustomerProfile();
        console.log(message);
    }
    catch(error){
        console.error("Error:",error);
    }
}
showCustomerProfile();