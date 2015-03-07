/**
 * Created by brianbest on 15-03-07.
 */
var express = require('express');
var app = express();
var http = require('http').Server(app);


app.use(express.static(__dirname + '/app')); // Folder for files


app.get('/', function(req,res){

    res.send('index.html');
});

app.listen(3000,function(){
    console.log('listening on 3,000 !!!!!!!!! VEGETA!!!')
});

