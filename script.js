
//REQUEST HTTP
let xhr = new XMLHttpRequest();
xhr.open('get', 'http://localhost:3000/public');
xhr.send();

xhr.onload = function() {
    files = JSON.parse(xhr.response)
    var size = files.table[0].size
    size2 = size
    loadRadios(size)
};

//LOAD IMAGES WHEN USING MATRIX
function loadImage(i){
    var index = parseInt(i) + 2
    document.getElementById("mainImage").src = files.table[index].filename;
}

//CHANGE THE DEFAULT BEHAVIOUR OF ARROW KEY WHEN USING THE RADIOBOX
document.addEventListener('keydown', (event) => {
    if (event.defaultPrevented) {
        return;
      }
    if(event.code === "ArrowDown" || event.code === "ArrowUp" || event.code === "ArrowRight" || event.code === "ArrowLeft"){
        newArrowMove(event.code)
    }
    event.preventDefault();
  }, true);


function newArrowMove(code){
    var radios = document.querySelectorAll('input[type=radio][name="myRadio"]');
    let selectedSize;
    var hascheck = false
    var n = Math.sqrt(size2)
    for (const radioButton of radios) {
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            radioButton.checked = false;
            hascheck = true
            break;
        }
    }
    if(hascheck){
        var n = Math.sqrt(size2)
        if(code === "ArrowDown"){
            radios[parseInt(selectedSize)+n].checked = true
            loadImage(parseInt(selectedSize))
        }else if(code === "ArrowUp"){
            radios[parseInt(selectedSize)-n].checked = true
            loadImage(parseInt(selectedSize))
        }else if(code === "ArrowRight"){
            radios[parseInt(selectedSize)+1].checked = true
            loadImage(parseInt(selectedSize))
        }else if(code === "ArrowLeft"){
            radios[parseInt(selectedSize)-1].checked = true
            loadImage(parseInt(selectedSize))
        }
    }
}

//CREATE THE MATRIX OF RADIOS BUTTONS
function loadRadios(size){
    var n = Math.sqrt(size)
    for(var i = 0; i< size; i++){
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
//CHANGE THE IMAGE
function changeHandler(event) {
    loadImage(this.value)            
}





//REFOCUS

/*var imgok = new Image();
imgok.src = document.getElementById("mainImage").src
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
var j = 0
for(var i = 0; i< imgData.length-3; i=i+4){
    var pixel = [imgData[i], imgData[i+1], imgData[i+2], imgData[i+3]]
    
    matrizPixels[j] = []
    matrizPixels[j].push(pixel)
}
console.log(matrizPixels[0][0])
*/

/*function refocus(){
    var Srefocus = s - 0.4
    var Trefocus = t - 0.4
    var sumS = 0;
    var sumT = 0;
    var disp = 0.3
    for(var i = 0; i< imgMatrix.length; i++){
        sumS = sumS + (i - Srefocus)
    }
    for(var j = 0; j< imgMatrix[0].length; j++){
        sumT = sumT + (j - Trefocus)
    }
    var valueS = sumS*disp
    var valueT = sumT*disp
    for(var i = 0; i< imgData.length; i++){
        imgData
    }
}*/

/*var imgMatrix = []
var s
var t
async function createMatrix(size){
    var tempSize = size-1
   // var imgMatrix = []
    var img = []
    var j = 0;
    for(var i =0; i< tempSize; i++){
        if(i % Math.sqrt(tempSize) == 0 && i != 0){
            console.log(j)
            //imgMatrix[j] = []
            imgMatrix.push(img)
            console.log(imgMatrix)
            j++
            //console.log(i)
            img = []
        }
        img.push(files.table[i+2].filename)
        //console.log(img[0][1])
        //imgMatrix[i].push(img)
        //console.log(imgMatrix[0].length)
    }
    console.log("Valor da linha da matriz")
    console.log(imgMatrix)

}*/

//REFOCUS DENTRO DO LOADIMAGE
    /*for(var i = 0; i < imgMatrix.length; i++ ){
        for(var j = 0; j< imgMatrix[0].length; j++){
            if(imgMatrix[i][j] == files.table[index].filename){
                s = i
                t = j
                console.log(s)
                console.log(t)
                break;
            }
        }
    }*/