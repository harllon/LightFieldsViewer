var imgMatrix = []

function createImageMatrix(size){
    imgMatrix = []
    var img = []
    var j = 0;

    for(var i = 0; i < size; i++){
        var image = new Image();
        if(i % Math.sqrt(size) == 0 && i != 0){
            imgMatrix.push(img)
            j++
            img = []
        }
        image.src = files.table[i+1].filename
        img.push(image)
    }
    imgMatrix.push(img)
    Array.prototype.forEach.call(imgMatrix, function(matrix){
        Array.prototype.forEach.call(matrix, function(image){
            image.addEventListener('load', loading)
        })
    })
}


var nImg = 0;
function loading(){
    document.body.style.cursor = "wait"
    nImg++
    if(nImg == size){
        CreateSubImagesPixelMatrix()
        nImg = 0;
    }
}


var matrixSubImages = []
function CreateSubImagesPixelMatrix(){
    
    matrixSubImages = []
    var img;
    var matrixPixels;

    
    for(var i = 0; i<imgMatrix.length; i++){
        
        matrixSubImages[i] = []

        for(var j = 0; j<imgMatrix[0].length; j++){
            img = imgMatrix[i][j]
            matrixPixels = createPixelMatrix(img);
            matrixSubImages[i].push(matrixPixels)
        }
    }

    loadImage(0);
    document.body.style.cursor = "auto"
}

function createPixelMatrix(img){
    const canvas = document.createElement('canvas'); 
    canvas.width = img.width; 
    canvas.height = img.height;
    const ctx = canvas.getContext('2d'); 
    var matrixPixels = []
    var p = 0;
    matrixPixels[p] = []

    ctx.drawImage(img, 0, 0)
    var imgData =  ctx.getImageData( 
        0, 0, img.width, img.height 
    ).data; 
        
    for(var k = 0; k< imgData.length-3; k=k+4){
        if(k%(4*img.width) == 0 && k != 0){
            p++
            matrixPixels[p] = []
        }
        var pixel = [imgData[k], imgData[k+1], imgData[k+2], imgData[k+3]]
        matrixPixels[p].push(pixel)
    }
    return matrixPixels;
}