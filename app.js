/**
 * Created by Mátyás on 2016.02.13..
 */
var express = require('express');
var app = express();
var fs = require("fs");

app.use(express.static('public'));
app.use('/scripts', express.static(__dirname + '/node_modules'));

app.get('/listUsers', function (req, res) {
    fs.readFile("public/data/persons.json", 'utf8', function (err, data) {
        res.end( data );
    });
});

app.get('/', function(req,res){
    res.sendFile('public/index.html');

});

var server = app.listen(8888, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)

});