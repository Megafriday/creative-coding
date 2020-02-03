let x = 0;
let y = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	x = windowWidth / 2;
	y = windowHeight / 2;
}

function draw() {
	background(100);
	ellipse(x, y, 20);
	stroke(255);
	strokeWeight(3);
	line(x, y, mouseX, mouseY);
}

function mouseClicked() {
	x = mouseX;
	y = mouseY;
}