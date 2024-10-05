var http = require("http");
var url=require('url')
var fs=require('fs')

http
  .createServer(function (req, res) {

    var qury=url.parse(req.url,true)
    console.log(qury.pathname);


    if(qury.pathname=='/signup'){
        fs.readFile('./sg.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data);
            res.end();
        })
    }
    else if(qury.pathname=='/'){
            res.writeHead(404,{'Content-Type':'text/html'})
            res.write('Home page');
            res.end();
    }
    else if(qury.pathname=='/submitAc'){
            console.log(qury.query);
            console.log(qury.query.email);
            res.write('<h1>'+qury.query.username+'<h1/>');
            res.end();
    }
    else{
            res.write('Error');
            res.end();
    }
  })
  .listen(8080,()=>console.log('Server Lonched')
  );
console.log("Server is running on http://localhost:8080");