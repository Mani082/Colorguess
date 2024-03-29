var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor =  pickColor();
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var snd1 = new Audio("clay.mp3")
var snd2 = new Audio("moon.mp3")

for(var i = 0;i < modeButtons.length; i++){
  modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    //snd.currentTime = 0;
    this.classList.add("selected");

    this.textContent === "Easy" ? numSquares =3: numSquares = 6;
    // if(this.textContent === "Easy"){
    //   numSquares = 3;
    // }else{
    //   numSquares = 6;
    // }
    reset();
  });
}
function reset(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
        squares[i].style.background = colors[i];
    }else{
      squares[i].style.display = "none";
    }
   }
   h1.style.background = "steelblue";
}

// easyBtn.addEventListener("click", function(){
//   this.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   numSquares = 3
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//     if(colors[i]){
//       squares[i].style.background = colors[i];
//     }else{
//       squares[i].style.display = "none";
//     }
//   }
// });
// hardBtn.addEventListener("click", function(){
//   this.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//       squares[i].style.background = colors[i];
//       squares[i].style.display = "block";
//   }
// });

resetButton.addEventListener("click", function(){
reset();
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
//add initial colors to squares
  squares[i].style.background = colors[i];
//add click listeners to square
  squares[i].addEventListener("click",function(){
    //grab colors of clicked squares
    var clickedColor = this.style.background;
    //compare color to picked color
    if(clickedColor === pickedColor){
         messageDisplay.textContent = "Correct";
         snd1.play();
         resetButton.textContent = "Play again?";
         changeColors(clickedColor);
         h1.style.background = clickedColor;
    }
    else{
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
      snd2.play();
    }
  });
}

function changeColors(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  var arr = [];
  for(var i = 0; i < num; i++){
    arr.push(randomColor())
  }
  return arr;
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
