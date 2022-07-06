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
}

var total = imgArray.length;
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
console.log(i);
