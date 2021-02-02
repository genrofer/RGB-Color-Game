var colors = generateRandomColor(6);

var squares = document.querySelectorAll(".square");
var colorPicked = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message")
var h1 = document.querySelector("h1");
var newcolors = document.querySelector("#newcolors");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

colorDisplay.textContent = colorPicked

for(var i = 0; i < squares.length; i++){
    // change background color
    squares[i].style.backgroundColor = colors[i]

    // adding events
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;

        if(clickedColor === colorPicked){
            message.textContent = " CORRECT"
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
            newcolors.textContent = "PLAY AGAIN"
        } else {
            this.style.backgroundColor = "#232323"
            message.textContent = "TRY AGAIN"
        }
    })
}

newcolors.addEventListener("click", function(){
    window.location.reload();
})

easy.addEventListener("click", function(){
    easy.classList.add("selected");
    hard.classList.remove("selected")
    colors = generateRandomColor(3);
    colorPicked = pickColor();
    colorDisplay.textContent = colorPicked
    message.textContent = ""
    newcolors.textContent = "NEW COLORS"
    h1.style.backgroundColor = "steelblue"
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i]
        } else {
            squares[i].style.background = "none"
        }
    }
})

hard.addEventListener("click", function(){
    hard.classList.add("selected");
    easy.classList.remove("selected")
    colors = generateRandomColor(6);
    colorPicked = pickColor();
    colorDisplay.textContent = colorPicked
    message.textContent = ""
    newcolors.textContent = "NEW COLORS"
    h1.style.backgroundColor = "steelblue"
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i]
        } 
    }
})

// Functions

function changeColor(color){
    // loop through all squares
    for(var i = 0; i < colors.length; i++){
        // change color to match given
        squares[i].style.backgroundColor = color
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function generateRandomColor(num){
    // make an array
    var arr = []
    // loop through
    for(var i = 0; i < num; i++){
    arr.push(randomColor());
    }
    // return
    return arr
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}