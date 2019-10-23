// requestServer.js file
const http = require('http');
const request = require('request');
const PORT = 8080;
http.createServer((req, res) => {
    var args = process.argv.slice(2)
    var url = args[0] ? args[0] : "https://github.com/SemajB";
    const plain = args[1] ? args[1] : "y";

    request(url, (error, response, body) => {
        if(error){
            console.log('Didn\'t Work')
            console.error(error);
            res.writeHead(400, {'Content-Type': 'text/html'});
        }
        if(response.statusCode === 200){
            console.log('WOrked')
            if(plain === 'y'){
                res.writeHead(200, {'Content-Type': 'text/plain'});
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
            }
            res.write(body);
            res.end();
        }
        console.log(response.statusCode)
    })


}).listen(PORT);