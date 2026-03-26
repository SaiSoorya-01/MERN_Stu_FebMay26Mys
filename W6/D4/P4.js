//Handling different GET routes
const http = require("http");

const server = http.createServer(function(req,res){
    if(req.method ==="GET" && req.url==="/"){
        res.writeHead(200,{"Content-type":"text/plan"});
        res.end("Hpme page / Dashboard");
        return;
    }

    if(req.method ==="GET" && req.url==="/about"){
        res.writeHead(200,{"Content-type":"text/plan"});
        res.end("About Route. Welcome to About us Page.");
        return;
    }

    if(req.method ==="GET" && req.url==="/products"){
        res.writeHead(200,{"Content-type":"text/plan"});
        res.end("products Route. Welcome to products Page.");
        return;
    }

    if(req.method ==="GET" && req.url==="/users"){
        res.writeHead(200,{"Content-type":"text/plan"});
        res.end("Retuning all users.");
        return;
    }
    // POST = create
    // curl-X POST http://localhost:3001/user
    // curl: Claint URL: free,open src cli tool user to transfer data to or
    //  from a server using various network portocal.

    if(req.method ==="POST" && req.url==="/users"){
        res.writeHead(201,{"Content-type":"text/plan"});
        res.end("New User Created.");
        return;
    }

    // Unknown route fallback
    res.writeHead(404,{"Content-type":"text/plan"});
    res.end("Route not found.");
});

server.listen(3001,function(){
    console.log("Server is running at http://localhost:3001");
});