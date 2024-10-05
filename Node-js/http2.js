var http = require("http");
var url = require("url");

const ser=http.createServer(function (req, res) {
    const rurl=url.parse(req.url,true).pathname;
    if(rurl=='/'){
        res.write("hello this a Home  sever using HTTP");
        res.end(); 
    }
    else if(rurl=='/ab'){
        res.write("hello this a  About sever using HTTP");
        res.end(); 
    }
    
});
ser.listen(8080)

console.log("Server is running on http://localhost:8080");