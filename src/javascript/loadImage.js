let s = 0
let t = 0

//LOAD IMAGES WHEN USING MATRIX
function loadImage(i){
    var index = parseInt(i) + 1
    document.getElementById("mainImage").src = files.table[index].filename;
    findImagePosition(index); 
}

function findImagePosition(index){
    var lastindexFiles = files.table[index].filename.lastIndexOf('/');
    var fileNumber = files.table[index].filename.substr(lastindexFiles+1);
        
    for(var i = 0; i< imgMatrix.length; i++){
        for(var j = 0; j<imgMatrix[0].length; j++){
            var lastindexSrc = imgMatrix[i][j].src.lastIndexOf('/');
            var imgNumber = imgMatrix[i][j].src.substr(lastindexSrc+1);
            if(imgNumber == fileNumber){
                s = i;
                t = j;
            }
        }
    }
}