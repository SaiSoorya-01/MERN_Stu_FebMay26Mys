// Basic callback variations
// 1. a callback with no input data
// 2. a callback tht receives data from main function

function runTask(callback){
    console.log("Task is Running.");
    callback();
}
function runTaskWithResult(taskName,callback){
    console.log("Processing task: ",taskName);
    callback("Task" +taskName+ "finished sucessfully");
}
function showSimpleDoneMessage(){
    console.log("Simple callback executed.");
}
function showDetailedMessage(message){
    console.log(message);
}

// runTask(showSimpleDoneMessage);
runTaskWithResult("Send monthly report",showDetailedMessage);// Basic callback variations
// 1. a callback with no input data
// 2. a callback tht receives data from main function

function runTask(callback){
    console.log("Task is Running.");
    callback();
}
function runTaskWithResult(taskName,callback){
    console.log("Processing task: ",taskName);
    callback("Task" +taskName+ "finished sucessfully");
}
function showSimpleDoneMessage(){
    console.log("Simple callback executed.");
}
function showDetailedMessage(message){
    console.log(message);
}

// runTask(showSimpleDoneMessage);
runTaskWithResult("Send monthly report",showDetailedMessage);