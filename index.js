var express = require('express');
const path = require('path');
const testFolder = './public/airplane';
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
var data = {}
data.table = []
var i = 0;
//var imgArray = new Array();
fs.readdir(testFolder, (err, files) => {
  var obj2 = {size: files.length}
  data.table.push(obj2)
  files.forEach(file => {
    console.log(file);
    var obj = {
      id: i,
      filename: testFolder + "/" + file
    }
    //imgArray[i] = file;
    data.table.push(obj)
    i++;
  });
});

app.get('/public', (req, res) => {
  res.json(data);
});
