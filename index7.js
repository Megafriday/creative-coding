function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
}

function draw() {
	const x = random(0, windowWidth);
	const y = random(0, windowHeight);
	const endX = width/2;
	const endY = height/2;
	strokeWeight(10);
	stroke(random(100, 255), random(100, 255), random(100, 255))
	line(x, 0, endX, endY);
	line(x, windowHeight, endX, endY);
	line(0, y, endX, endY);
	line(windowWidth, y, endX, endY);
}

