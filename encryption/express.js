var express = require('express');
var https = require('https');
var fs = require('fs');
var app = express();

var options = {
    key: fs.readFileSync('aditiprivatekey.pem'),
    cert: fs.readFileSync('cert.pem')
}

https.createServer(options, app).listen(8000, function(err){
    if (err) throw err;
    console.log('Server started on port 8000');
});

app.get('/', function (req, res) {
    res.header('Content-type', 'text/html');
    return res.end('<h1>Securely served over HTTPS!!</h1>');
});