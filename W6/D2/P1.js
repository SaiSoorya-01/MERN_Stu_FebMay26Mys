// Understanding the event loop 
console.log("1.Sunchronous task started.");

// setTimeout schdules a callback for later.
setTimeout(() => {
    console.log("3. Time callback execution.");
}, 0);

console.log("2. Synchronous task finished.");