// JS handles asynchronous tasks in NodeJS
function fetchReport(callback){
    console.log("Fetching report data...");

    setTimeout(() => {
        const report = "Monthly report is redy";
        callback(report);
    }, 1000);
}
fetchReport(function(reportMssage){
    console.log(reportMssage);
});

console.log("Application continues to execute further");