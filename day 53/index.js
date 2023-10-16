var http = require ("http");

const server = http.createServer((req, res) => {
    if (req.url=="/" || req.url == "/home"){
        res.write("<h1>Home Page<h1>");
        res.end();
    }else if (req.url=="/filter"){
        res.write("<h1>About page</h1>");
        res.end();
    }else if(req.url=="/Details"){
        res.write("<h1>Details page</h1>");
        res.end();
    }else{
        res.write("<h1>Page not found</h1>");
        res.end();
    }
});

server.listen(8709,() => {
    console.log("server listening on port 8709");
});