function newArrowMove(code){
    var radios = document.querySelectorAll('input[type=radio][name="myRadio"]');
    let selectedSize;
    var hascheck = false
    var n = Math.sqrt(size)

    for(const radioButton of radios){
        if(radioButton.checked){
            selectedSize = radioButton.value;
            radioButton.checked = false;
            hascheck = true
            break;
        }
    }
    if(hascheck){
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
    
    var n = Math.sqrt(size)
    var dimensionW = n*21;
    var dimensionH = n*(21);
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
    loadImage(this.value)         
}


//CHANGE THE DEFAULT BEHAVIOUR OF ARROW KEY WHEN USING THE RADIOBOX
document.addEventListener('keydown', (event) => {
    if(event.defaultPrevented) return;
    if(event.code === "ArrowDown" || event.code === "ArrowUp" || event.code === "ArrowRight" || event.code === "ArrowLeft") newArrowMove(event.code)
    event.preventDefault();
}, true);
