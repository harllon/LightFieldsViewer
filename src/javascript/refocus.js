
var rangeslider = document.getElementById("sliderRange");
rangeslider.addEventListener('change', rangeChange)

function setDispRange(minDisp, maxDisp){
    rangeslider.min = minDisp;
    rangeslider.max = maxDisp;
}

function rangeChange(){
    var disp = this.value;
    console.log(disp);
    shiftSumRefocus(disp)
}

function shiftSumRefocus(disp, shift = 0.2){
    //document.body.style.cursor = "wait"
    var red = 0;
    var blue = 0;
    var green = 0;
    var alpha = 0;
    
    var newU = 0;
    var newV = 0;

    var Srefocus = s - shift
    var Trefocus = t - shift

    subImageMatrix = matrixSubImages[s][t];

    for(var u=0; u< subImageMatrix.length; u++){
        for(var v=0; v<subImageMatrix[0].length; v++){
            for(var i =0; i<matrixSubImages.length; i++){
                for(var j =0; j<matrixSubImages[0].length; j++){
                    newU = parseInt(Math.round(u + (i-Srefocus)*disp))
                    newV = parseInt(Math.round(v + (j-Trefocus)*disp))
                    if(newU < 0) newU = 0;
                    if(newV < 0) newV = 0;
                    if(newU >= subImageMatrix.length) newU = subImageMatrix.length-1
                    if(newV >= subImageMatrix[0].length) newV = subImageMatrix.length-1
                    red = red + matrixSubImages[i][j][newU][newV][0];
                    green = green + matrixSubImages[i][j][newU][newV][1];
                    blue = blue + matrixSubImages[i][j][newU][newV][2];
                    alpha = alpha + matrixSubImages[i][j][newU][newV][3];
                }
            }
            red = parseInt(red/size) > 255 ? 255 : parseInt(red/size)
            green = parseInt(green/size) > 255 ? 255 : parseInt(green/size)
            blue = parseInt(blue/size) > 255 ? 255 : parseInt(blue/size)
            alpha = alpha > 255 ? 255 : alpha

            subImageMatrix[u][v][0] = red; 
            subImageMatrix[u][v][1] = green; 
            subImageMatrix[u][v][2] = blue; 
            subImageMatrix[u][v][3] = alpha;
        }
    }
    createRefocusedImage(subImageMatrix)
}

function createRefocusedImage(subImageMatrix){
    const canvas = document.getElementById('cv'); 
    const ctx = canvas.getContext('2d'); 

    canvas.width = subImageMatrix[0].length
    canvas.height = subImageMatrix.length

    var myImageData = ctx.createImageData(canvas.width, canvas.height);
    var data = myImageData.data;
    var k = 0;
    
    for(var i = 0; i< subImageMatrix.length; i++){
        for(var j = 0; j< subImageMatrix[0].length; j++){
            data[k] = subImageMatrix[i][j][0]
            data[k+1] = subImageMatrix[i][j][1]
            data[k+2] = subImageMatrix[i][j][2]
            data[k+3] = subImageMatrix[i][j][3]
            k = k + 4;
        }
    }

    ctx.putImageData(myImageData, 0, 0);
    var src = canvas.toDataURL()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    document.getElementById("mainImage").src = src
    
    //document.body.style.cursor = "auto"

}