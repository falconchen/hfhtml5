window.onload = function() {
	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;
}

function previewHandler() {
	var canvas = document.getElementById("tshirtCanvas");
	var context = canvas.getContext("2d");
	fillBackgroundColor(canvas, context);
	
	var selectObj = document.getElementById("shape");
	var index = selectObj.selectedIndex;
	var shape = selectObj[index].value;
	
	if (shape == "squares") {
		for (var squares = 0; squares < 20; squares++) {
			drawSquare(canvas, context);
		} 
	} else if (shape == "circles") {
		for (var circles = 0; circles < 20; circles++) {
			drawCircle(canvas, context);
		}
	}
}

function drawSquare(canvas, context) {
	//set the fllStyle to "lightblue"
	context.fillStyle="lightblue";
	//calculate a random x position for the square inside the canvas
	var x = Math.floor(Math.random() * canvas.width);
	//calculate a random y position for the square inside the canvas
	var y = Math.floor(Math.random() * canvas.height);
	//calculate a random width for the square
	var w = Math.floor(Math.random() * 40)
	//draw a square at position x, y with width w
	context.fillRect(x,y,w,w);
}

function drawCircle(canvas, context) {
	var radius = Math.floor(Math.random() * 40);
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.width);
	
	context.beginPath();
	context.arc(x, y, radius, 0, degreesToRadians(360), true);
	
	context.fillStyle = "lightblue";
	context.fill();
}

function fillBackgroundColor(canvas, context) {
    var selectObj = document.getElementById("backgroundColor");
    var index = selectObj.selectedIndex;
    var bgColor = selectObj.options[index].value;
    context.fillStyle = bgColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function degreesToRadians(degrees) {
	return (degrees * Math.PI)/180;
}