var express = require('express');
const path = require('path');
const testFolder = './public/sideboard';
const fs = require('fs');
var app = express();

var PORT = 3000;

app.use(express.static(__dirname))
app.engine('html', require('ejs').renderFile);

console.log(path.join(__dirname, '/index.html'));
app.get('/', function(req, res) {
    res.render(path.join(__dirname, '/index.html'), {nome:nome});
});

app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});

var data = {}
data.table = []
var i = 0;
fs.readdir(testFolder, (err, files) => {
  var obj2 = {size: files.length}
  data.table.push(obj2)
  files.forEach(file => {
    var obj = {
      id: i,
      filename: testFolder + "/" + file
    }
    data.table.push(obj)
    i++;
  });
});

app.get('/public', (req, res) => {
  res.json(data);
});
