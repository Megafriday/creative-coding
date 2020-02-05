let oldX;
let oldY;
let newX;
let newY

function setup() {
	createCanvas(windowWidth, windowHeight);
	oldX = windowWidth / 2;
	oldY = windowHeight / 2;
	newX = windowWidth / 2;
	newY = windowHeight / 2;
	background(100);
}

function draw() {
	ellipse(oldX, oldY, 7);
	ellipse(newX, newY, 7);

	if (frameCount % 40 === 0) newPoint();

	stroke(255);
	line(oldX, oldY, newX, newY);
}

function newPoint() {
	oldX = newX;
	oldY = newY;
	newX = random(30, windowWidth - 30);
	newY = random(30, windowHeight - 30);
}