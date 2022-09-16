
//REQUEST HTTP

var buttonGreek = document.getElementById("greek")
var buttonSideboard = document.getElementById("sideboard")
var buttonBike = document.getElementById("bike")
var buttonTarot = document.getElementById("tarot")

var files;
var size;
var s = 0
var t = 0
var shift = 0.2;
var disp = 0.1;

var rangeslider = document.getElementById("sliderRange");
rangeslider.addEventListener('change', rangeChange)
var shiftSlider = document.getElementById("shiftSlider");
shiftSlider.addEventListener('change', shiftChange)

function rangeChange(){
    disp = this.value;
    console.log(disp);
    console.log("oi");
    refocus()
}

function shiftChange(){
    shift = this.value;
    refocus()
}
var myInit = { method: 'GET',
               mode: 'cors',
               cache: 'default' };

buttonGreek.onclick = function(){
    //fetch('http://192.168.5.102:3000/src/public/greek',myInit)
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://192.168.5.102:3000/src/public/greek', true);
    xhr.send();

    xhr.onload = async function() {
        files = JSON.parse(xhr.response)
        size = files.table[0].size
        loadRadios(size)
        loadImage(0)
        createMatrix(size)
        rangeslider.max = 3.1
        rangeslider.min = -3.5
    };
};

buttonSideboard.onclick = function(){
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost:3000/src/public/sideboard');
    xhr.send();

    xhr.onload = function() {
        files = JSON.parse(xhr.response)
        size = files.table[0].size
        loadRadios(size)
        loadImage(0)
        createMatrix(size)
        rangeslider.max = 1.7
        rangeslider.min = -2
    };
};

buttonBike.onclick = function(){
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost:3000/src/public/bikesResized');
    xhr.send();

    xhr.onload = function() {
        files = JSON.parse(xhr.response)
        size = files.table[0].size
        loadRadios(size)
        loadImage(0)
        createMatrix(size)
        rangeslider.max = 1
        rangeslider.min = -1
    };
};

buttonTarot.onclick = function(){
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost:3000/src/public/tarotResized');
    xhr.send();

    xhr.onload = function() {
        files = JSON.parse(xhr.response)
        size = files.table[0].size
        loadRadios(size)
        loadImage(0)
        createMatrix(size)
        rangeslider.max = 2
        rangeslider.min = -4
    };
};

//LOAD IMAGES WHEN USING MATRIX
function loadImage(i){
    var index = parseInt(i) + 1

        document.getElementById("mainImage").src = files.table[index].filename;
        var lastindexFiles = files.table[index].filename.lastIndexOf('/');
        var fileNumber = files.table[index].filename.substr(lastindexFiles+1);
        //console.log(fileNumber);
        //console.log(files.table[index].filename)
        
        for(var i = 0; i< imgMatrix.length; i++){
            for(var j = 0; j<imgMatrix[0].length; j++){
                var lastindexSrc = imgMatrix[i][j].src.lastIndexOf('/');
                var imgNumber = imgMatrix[i][j].src.substr(lastindexSrc+1);
                if(imgNumber == fileNumber){
                    s = i;
                    t = j;
                    //console.log("encontrei s: %d e t: %d", s, t);
                }
            }
        }
        console.log(" s: %d e t: %d", s, t);  

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
    var n = Math.sqrt(size)
    for (const radioButton of radios) {
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            radioButton.checked = false;
            hascheck = true
            break;
        }
    }
    if(hascheck){
        //var n = Math.sqrt(size)
        if(code === "ArrowDown"){
            radios[parseInt(selectedSize)+n].checked = true
            loadImage(parseInt(selectedSize)+n)
        }else if(code === "ArrowUp"){
            radios[parseInt(selectedSize)-n].checked = true
            loadImage(parseInt(selectedSize)-n)
        }else if(code === "ArrowRight"){
            radios[parseInt(selectedSize)+1].checked = true
            loadImage(parseInt(selectedSize)+1)
        }else if(code === "ArrowLeft"){
            radios[parseInt(selectedSize)-1].checked = true
            loadImage(parseInt(selectedSize)-1)
        }
    }
}

//CREATE THE MATRIX OF RADIOS BUTTONS
var firstTime = true;
function loadRadios(size){
    if(!firstTime){
        var parent = document.getElementById("pov").parentNode;
        var boxArea = document.getElementById("matrixPlace")
        parent.removeChild(boxArea)
    }
    var n = Math.sqrt(size)
    var box = document.createElement('div');
    box.id = "matrixPlace"
    for(var i = 0; i< size; i++){
        var radiobox = document.createElement('input');
        radiobox.type = 'radio';
        radiobox.name = "myRadio";
        radiobox.value = i;
        if(i != 0 && i%n == 0){
            var newline = document.createElement('br');
            box.appendChild(newline);
        }
        box.appendChild(radiobox);       
    }
    var parent = document.getElementById("pov").parentNode;
    var original = document.getElementById("pov")
    parent.insertBefore(box, original)
    var containing = document.getElementById("povContainer");
    var dimensionW = n*21;
    var dimensionH = n*(19.5);

    containing.style.width = dimensionW.toString() + "px";
    containing.style.height = dimensionH.toString() + "px";

    var radios = document.querySelectorAll('input[type=radio][name="myRadio"]');
    Array.prototype.forEach.call(radios, function(radio) {
        radio.addEventListener('change', changeHandler);
    });
    firstTime = false;
}

//CHANGE THE IMAGE
function changeHandler(event) {
    loadImage(this.value, false)         
}

//MODAL BEHAVIOUR
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("help");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//REFOCUS
var matrixSubImages = []
function CreatePixelMatrix(){
    matrixSubImages = []
    const canvas = document.createElement('canvas'); 
    const ctx = canvas.getContext('2d'); 
    var img;
    for(var i = 0; i<imgMatrix.length; i++){
        matrixSubImages[i] = []
        for(var j = 0; j<imgMatrix[0].length; j++){
            //img = new Image()
            img = imgMatrix[i][j]
            //console.log(img.width)
            //console.log(img.height)
            canvas.width = img.width; 
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0)
            const imgData =  ctx.getImageData( 
                0, 0, img.width, img.height 
            ).data; 
            var matrizPixels = []
            var p = 0;
            matrizPixels[p] = []
            for(var k = 0; k< imgData.length-3; k=k+4){
                if(k%(4*img.width) == 0 && k != 0){
                    p++
                    matrizPixels[p] = []
                }
                var pixel = [imgData[k], imgData[k+1], imgData[k+2], imgData[k+3]]
                matrizPixels[p].push(pixel)
            }
            matrixSubImages[i].push(matrizPixels)
        }
    }

    console.log(matrixSubImages)

    //refocus()
}

function refocus(){
    console.log("opa")
    matriz = matrixSubImages[s][t];
    //var img = document.getElementById("mainImage")
    //const ctx = canvas.getContext('2d'); 
    const canvas2 = document.getElementById('cv'); 
    const ctx2 = canvas2.getContext('2d'); 
    console.log(width)
    console.log(height)
    canvas2.width = width
    canvas2.height = height
    var Srefocus = s - shift
    var Trefocus = t - shift


    var red = 0;
    var blue = 0;
    var green = 0;
    var alpha = 0;

    for(var u=0; u< matriz.length; u++){
        for(var v=0; v<matriz[0].length; v++){
            for(var i =0; i<matrixSubImages.length; i++){
                for(var j =0; j<matrixSubImages[0].length; j++){
                    var newU = parseInt(Math.round(u + (i-Srefocus)*disp))
                    var newV = parseInt(Math.round(v + (j-Trefocus)*disp))
                    if(newU < 0) newU = 0;
                    if(newV < 0) newV = 0;
                    if(newU >= matriz.length) newU = matriz.length-1
                    if(newV >= matriz[0].length) newV = matriz.length-1
                    if(u==256 && v ==256){
                        console.log(matrixSubImages[i][j][newU][newV][0]);
                    }
                    red = red + matrixSubImages[i][j][newU][newV][0];
                    green = green + matrixSubImages[i][j][newU][newV][1];
                    blue = blue + matrixSubImages[i][j][newU][newV][2];
                    alpha = alpha + matrixSubImages[i][j][newU][newV][3];
                }
            }
            red = parseInt(red/size)
            green = parseInt(green/size)
            blue = parseInt(blue/size)
            if(red > 255) red = 255;
            if(blue > 255) blue = 255;
            if(green > 255) green = 255;
            if(alpha > 255) alpha = 255;
            matriz[u][v][0] = red; 
            matriz[u][v][1] = green; 
            matriz[u][v][2] = blue; 
            matriz[u][v][3] = alpha;
            red = 0;
            green = 0;
            blue = 0;
            alpha = 0; 
        }
    }

    var myImageData = ctx2.createImageData(width, height);
    var data = myImageData.data;
    var k = 0;
    //tirar esses 512
    console.log(matriz.length);
    console.log(matriz[0].length);
    for(var i = 0; i< matriz.length; i++){
        for(var j = 0; j< matriz[0].length; j++){
            data[k] = matriz[i][j][0]
            data[k+1] = matriz[i][j][1]
            data[k+2] = matriz[i][j][2]
            data[k+3] = matriz[i][j][3]
            k = k + 4;
        }
    }
    console.log("data dps")
    console.log(data)
    console.log(myImageData.data)
    //ctx2.drawImage(myImageData, 0, 0)
    ctx2.putImageData(myImageData, 0, 0);
    var src = canvas2.toDataURL()
    ctx2.clearRect(0, 0, width, height)
    //ctx2.drawImage(img, 0,0);
    console.log(canvas2.toDataURL())
    document.getElementById("mainImage").src = src
    
}

var imgMatrix = []
var width;
var height;

async function createMatrix(size){
    imgMatrix=[]
    var img = []
    var j = 0;
    for(var i =0; i< size; i++){
        var image = new Image();
        if(i % Math.sqrt(size) == 0 && i != 0){
            imgMatrix.push(img)
            j++
            img = []
        }
        image.src = files.table[i+1].filename
        img.push(image)
    }
    await later(10000);
    width = image.width
    console.log(width)
    height = image.height
    console.log(height)
    imgMatrix.push(img)
    console.log("Valor da linha da matriz")
    console.log(imgMatrix)

    CreatePixelMatrix()
}

       
function later(delay) {
    return new Promise(function(resolve) {
        setTimeout(resolve, delay);
    });
}

