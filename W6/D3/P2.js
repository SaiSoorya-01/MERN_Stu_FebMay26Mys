// reading and writing files synchronously

const fs = require("fs");
const path = require("path");

// const filePath =  path.join

const filePath = path.join(__dirname,"sync-note.txt");

// System for function usage in a module
// moduleName.functionName()

// fs.writeFileSync(filePath,"This file was written using writefilesync().\nSynchronous operation block exection");
// Append to a file
fs.appendFile(filePath,"New text added using fs.appendFile.",
    function(error){
        if(error){
            console.log("Append error:",error.message);
            return;
        }
        console.log("File contant appended:");
    }
);

console.log("file written synchronously. ");

const content = fs.readFileSync(filePath,"utf-8");

console.log("file read synchronously.");
console.log("File  content; ",content);