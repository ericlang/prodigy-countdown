var express = require('express');

var app = express();
var router = require('./config/router');

app.use(router);


app.listen(9001, function(){
    console.log("@9001");
})