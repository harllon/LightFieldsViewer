
//REQUEST HTTP
var buttonAirplane = document.getElementById("airplane")

let files;
let size; 

buttonAirplane.onclick = function(){
    makeRequest('get', 'http://localhost:3000/src/public/datasets/demo/airplane')
    setDispRange(-2.0, 1.1);
};


function makeRequest(method, url){
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();
    xhr.onload = function(){
        files = JSON.parse(xhr.response);
        size = files.table[0].size;

        loadRadios(size);
        createImageMatrix(size);

        document.getElementById("mainImage").src = "public/assets/blackImage.png"
    }
}