var http = require("http"); //server http
var url  =  require("url"); // lire les url
var fs   = require("fs"); //file system lire les fichier system

const PORT = "8080";
var server  = http.createServer(traitReq);
server.listen(PORT);

function traitReq(req, res){
    res.writeHead(200,{"Content-type":"text/html"});
    res.write("<h1>phaser game</h1>");
    res.end();
    

}