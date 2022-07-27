var express = require('express');
const path = require('path');
var folder = "";
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

//create the object with file names and size to be passed as json
function createObject(files, folder){
  var data = {}
  data.table = []
  var i = 0;
  var obj2
  if(files[0] == ".DS_Store"){
    obj2 = {size: files.length-1}
  }else{
    obj2 = {size: files.length}
  }
  data.table.push(obj2)
  files.forEach(file => {
    if(file != ".DS_Store"){
      console.log(file);
      var obj = {
        id: i,
        filename: folder + "/" + file
      }
      data.table.push(obj)
      i++;
    }
  });
  return data;
}

//reponse of http requests and routes
app.get('/public/greek', async (req, res) => {
  folder = './public/greek';
  var files = await readdir(folder);
  var data = createObject(files, folder);
  console.log(data);
  res.json(data);
});

app.get('/public/tarot', async (req, res) => {
  folder = './public/tarot'
  var files = await readdir(folder);
  var data = createObject(files, folder);
  console.log(data);
  res.json(data);
});

app.get('/public/bikes', async (req, res) => {
  folder = './public/bikes'
  var files = await readdir(folder);
  var data = createObject(files, folder);
  console.log(data);
  res.json(data);
});

app.get('/public/sideboard', async (req, res) => {
  folder = './public/sideboard'
  var files = await readdir(folder);
  var data = createObject(files, folder);
  console.log(data);
  res.json(data);
});
