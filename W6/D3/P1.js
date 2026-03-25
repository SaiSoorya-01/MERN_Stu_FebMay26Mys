// Introduction to the NodeJS Fill System (fs) built-in module

const fs = require("fs");
const fsPromises = require("");
// callback
console.log("type of fs.readfile: ",typeof fs.readFile);
console.log("type of fs.writeFile: ",typeof fs.writeFile);
// fs/promises
console.log("type of fspromises.readfile: ",typeof fsPromises.readFile);
console.log("type of fspromises.writefile: ",typeof fsPromises.writeFile);