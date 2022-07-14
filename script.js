/*var imgArray = new Array();
        
        //imgArray[0] = new Image();
        //imgArray[0].src = 'img/00.png';
var eof = false;
var i = 0;*/
        /*const fs = require('fs');
        filenames = fs.readdirSync(__dirname);
        console.log("\nCurrent directory filenames:");
        filenames.forEach(file => {
            console.log(file);
        });*/
        
/*while(i<64){
    try {
        var j = i + 1;
                var file = 'img/airplane/' + j + '.png';
                imgArray[i] = new Image();
                imgArray[i].src = file;
                i++;
                //throw "myException"; // gera uma exceção
            }
            catch (e) {
                // declarações para manipular quaisquer exceções
                eof = true; // passa o objeto de exceção para o manipulador de erro
            }

        }*/

        /*
        var matrixArray = new Array();
        var j = 0;
        for(var i=0; i<3;i++){
            matrixArray[i] = new Array();
            goal = true;
            while(goal == true && j < 9){
                matrixArray[i].push(imgArray[j]);
                j++;
                if(j%3 == 0){
                    goal = false;
                }
            }
        }*/

/*function loadImage(i, j, matrixArray){
    document.getElementById("mainImage").src = matrixArray[i][j].src;
}

function loadImage2(i, imgArray){
    document.getElementById("mainImage").src = imgArray[i].src;
}*/

/*var total = imgArray.length;
var n = Math.sqrt(total);
        //var radioArray = new Array();
var container = document.getElementById('container');

for(var i = 0; i< total; i++){
    var radiobox = document.createElement('input');
    radiobox.type = 'radio';
    radiobox.name = "myRadio";
            //radiobox.id = 'myRadio';
    radiobox.value = i;
            //radiobox.onchange = getImage(radiobox);
    if(i != 0 && i%n == 0){
        var newline = document.createElement('br');
        container.appendChild(newline);
    }
    container.appendChild(radiobox);
            //radiobox.onchange = "getImage()"
            //radioArray.push(radiobox);        
}

var radios = document.querySelectorAll('input[type=radio][name="myRadio"]');

function changeHandler(event) {
    console.log(this.value);
    loadImage2(this.value, imgArray)            
}

Array.prototype.forEach.call(radios, function(radio) {
    radio.addEventListener('change', changeHandler);
});*/

/*const Http = new XMLHttpRequest();
const url='/';
Http.open("POST", url);
Http.send();
var file = Http.response;
Http.onreadystatechange = (e) => {
  console.log(file)
}*/


//var exampleModule = require('./index');
//var value = exampleModule.exportedVar;
//console.log(i);



let xhr = new XMLHttpRequest();
xhr.open('get', 'http://localhost:3000/public');
xhr.send();
var files;

xhr.onload = async function() {
    //console.log(xhr.response);
    files = JSON.parse(xhr.response)
    var size = files.table[0].size
    await loadRadios(size)

    //var radios = document.querySelectorAll('input[type=radio][name="myRadio"]');

    //var files2 = JSON.parse(files);
    //console.log(files.table[2].filename);
    
};

async function loadImage2(i){
    var index = parseInt(i) + 2
    console.log(index)
    console.log(files.table[index])
    document.getElementById("mainImage").src = files.table[index].filename;
}

async function loadRadios(size, files){
    var n = Math.sqrt(size-1)
    //console.log(n)
    for(var i = 0; i< size-1; i++){
        var radiobox = document.createElement('input');
        radiobox.type = 'radio';
        radiobox.name = "myRadio";
        radiobox.value = i;
        if(i != 0 && i%n == 0){
            var newline = document.createElement('br');
            container.appendChild(newline);
        }
        container.appendChild(radiobox);       
    }
    var radios = document.querySelectorAll('input[type=radio][name="myRadio"]');
    Array.prototype.forEach.call(radios, function(radio) {
        radio.addEventListener('change', changeHandler);
    });
}

function changeHandler(event) {
    console.log(this.value);
  //  console.log(files);
    loadImage2(this.value)            
}

var imgok = new Image();
imgok.src = document.getElementById("mainImage").src
//const img = document.getElementById("mainImage"); 
const canvas = document.createElement('canvas'); 
const ctx = canvas.getContext('2d'); 
 
canvas.width = imgok.width; 
console.log(canvas.width);
canvas.height = imgok.height; 
console.log(canvas.height);
 
ctx.drawImage(imgok, 0, 0); 
 
const imgData = ctx.getImageData( 
  0, 0, imgok.width, imgok.height 
).data; 
console.log(imgData.length);

var matrizPixels = []
for(var i = 0; i< imgData.length-3; i=i+4){
    var pixel = []
    pixel.push([imgData[i], imgData[i+1], imgData[i+2], imgData[i+3]])
    //console.log(pixel)
    matrizPixels.push(pixel)
}
console.log(matrizPixels[0])

