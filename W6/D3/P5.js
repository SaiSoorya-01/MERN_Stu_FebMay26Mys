// Renaming ,deleting checking the file existence 

const fs = require("fs");
const path = require("path");

const originalPath = path.join(__dirname,"draft-report.txt");
const renamedPath = path.join(__dirname,"final-report.txt");

fs.writeFileSync(originalPath,"Draft report Content");
console.log("Does draft-report.txt exists?",fs.existsSync(originalPath));