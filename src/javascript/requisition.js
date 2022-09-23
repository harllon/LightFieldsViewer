
//REQUEST HTTP
var buttonGreek = document.getElementById("greek")
var buttonSideboard = document.getElementById("sideboard")
var buttonBike = document.getElementById("bike")
var buttonTarot = document.getElementById("tarot")
var buttonStone = document.getElementById("stone")
var buttonLab = document.getElementById("lab")
var buttonDanger = document.getElementById("danger")
var buttonFountain = document.getElementById("fountain")
var buttonAirplane = document.getElementById("airplane")

let files;
let size; 
buttonGreek.onclick = function(){
    makeRequest('get', 'http://172.15.4.172:3000/src/public/datasets/greek')
    setDispRange(-3.5, 3.1);
};

buttonSideboard.onclick = function(){
    makeRequest('get', 'http://172.15.4.172:3000/src/public/datasets/sideboard')
    setDispRange(-2, 1.7);
};

buttonBike.onclick = function(){
    makeRequest('get', 'http://172.15.4.172:3000/src/public/datasets/bikesResized')
    setDispRange(-0.5, 0.5);
};

buttonTarot.onclick = function(){
    makeRequest('get', 'http://172.15.4.172:3000/src/public/datasets/tarotResized')
    setDispRange(-1.3, 0.7);
};

buttonStone.onclick = function(){
    makeRequest('get', 'http://localhost:3000/src/public/datasets/stoneResized')
    setDispRange(-0.5, 0.5);
};

buttonDanger.onclick = function(){
    makeRequest('get', 'http://localhost:3000/src/public/datasets/dangerResized')
    setDispRange(-0.5, 0.5);
};

buttonFountain.onclick = function(){
    makeRequest('get', 'http://localhost:3000/src/public/datasets/fountainResized')
    setDispRange(-0.5, 0.5);
};

buttonLab.onclick = function(){
    makeRequest('get', 'http://localhost:3000/src/public/datasets/labResized')
    setDispRange(-0.5, 1.75);
};

buttonAirplane.onclick = function(){
    makeRequest('get', 'http://localhost:3000/src/public/datasets/airplane')
    setDispRange(-6.6, 1.1);
};


function makeRequest(method, url){
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();
    console.log("ola")
    xhr.onload = function(){
        files = JSON.parse(xhr.response);
        size = files.table[0].size;

        loadRadios(size);
        createImageMatrix(size);

        document.getElementById("mainImage").src = "public/assets/blackImage.png"
    }
}