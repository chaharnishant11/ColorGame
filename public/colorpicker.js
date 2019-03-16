var ns = 6;
var colors = generateRandomColors(ns);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	ns=3;
	colors = generateRandomColors(ns);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
})

hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	ns=6;
	colors = generateRandomColors(ns);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
})
reset.addEventListener("click",function(){
	colors = generateRandomColors(ns);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	message.textContent = "";
	this.textContent = "NEW COLORS";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){

	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor) {
			message.textContent = "Correct!";
			changeColor(pickedColor);
			h1.style.background = clickedColor;
			reset.textContent = "Play Again";
		} else {
			this.style.background = "#232323";
			message.textContent = "Try Again";
		}
	});
};

function changeColor(color){
		for (var i = squares.length - 1; i >= 0; i--){
			squares[i].style.background = color;
		}
};

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColors(num){
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
};

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r +", "+ g +", "+ b +")";
}