// Handling asynchronous error with callbacks
const express = require("express");
const fs = require("fs");
const path = require ("path");
const app = express();

app.get("/file",function(req,res,next){
    const filePath = path.join(__dirname,"newFile.txt");
    fs.readFile(filePath,"utf8",function(error,data){
        if(error){
            // Forward the async error
            return next(error);
        }
        res.send(data);
    });
});

//centralized error handling middleware
app.use(function(error,req,res,next){
    res.status(400).json({
        success:false,
        // to give a prety mesage
        message:"File/Folder does not exist.",
        // originalmessage:error.message
    });
});

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});