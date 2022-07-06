var express = require('express');
const path = require('path');
const testFolder = './public/assets';
const fs = require('fs');
var app = express();

var PORT = 3000;

app.use(express.static(__dirname))
app.engine('html', require('ejs').renderFile);

console.log(path.join(__dirname, '/index.html'));
var nome = 7;
app.get('/', function(req, res) {
    //res.status(200).send('Hello world');
    res.render(path.join(__dirname, '/index.html'), {nome:nome});
});

app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});

//
var i = 0;
var imgArray = new Array();
fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
    imgArray[i] = file;
    i++;
  });
});

app.post('/', function(req, res){
    res.send(imgArray[0]);
});

exports.exportedVar = i;