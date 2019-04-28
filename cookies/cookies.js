var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var https = require('https');
var fs = require('fs');

var app = express();

var options = {
    key: fs.readFileSync('../aditiprivatekey.pem'),
    cert: fs.readFileSync('../cert.pem')
}

https.createServer(options, app).listen(8000, function(err){
    if (err) throw err;
    console.log('Server started on port 8000');
});

app.use(cookieParser());
app.use(session({
    secret: "secret!",
    cookie: {
        secure: true,
        httpOnly: true
    }
}));

app.get('/', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});