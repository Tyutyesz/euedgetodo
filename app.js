/**
 * Created by Mátyás on 2016.02.13..
 */
var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/scripts', express.static(__dirname + '/node_modules'));

var db = [];

app.get('/api/listUsers', function (req, res) {
    fs.readFile("public/data/persons.json", 'utf8', function (err, data) {
        res.end( data );
        db = data;
        console.log(db);
    });
});

app.post('/api/listUsers', function (req, res) {

    var myData = req.body;
    //db.push(myData);
    console.log(myData);

    fs.writeFileSynch("public/data/persons.json", req.body.json);
});

app.get('/', function(req,res){
    res.sendFile('public/index.html');

});

var server = app.listen(8888, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)

});