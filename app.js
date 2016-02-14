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
    });
});

app.post('/api/listUsers', function (req, res) {

    fs.readFile("public/data/persons.json", "utf-8", function(err, data) {

        var myDb = JSON.parse(data);
        var newPerson = req.body;

        myDb.push(newPerson);

        fs.writeFile("public/data/persons.json",JSON.stringify(myDb));

    });
});
app.post('/api/delete', function (req, res){

    console.log(req.body);
    var myDb = req.body;
    fs.writeFile("public/data/persons.json",JSON.stringify(myDb));
   /* fs.readFile("public/data/persons.json", "utf-8", function(err, data) {



    });*/
    /*fs.readFile("public/data/persons.json", "utf-8", function(err, data) {

        var myDb = JSON.parse(data);
        var deletePerson = req.body;
        for(var i = 0; i < myDb.length; i++){
            if(myDb[i].nick === deletePerson.nick && myDb[i].name === deletePerson.name){
                myDb.splice(i,1);
                console.log('item deleted');

            }
            console.log(i);
        }
        fs.writeFile("public/data/persons.json",JSON.stringify(myDb));
        console.log('length: ' + myDb.length);
    });*/

});

app.get('/', function(req,res){
    res.sendFile('public/index.html');

});

var server = app.listen(8888, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)

});