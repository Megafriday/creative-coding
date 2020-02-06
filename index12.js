let count = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	strokeWeight(3);
	noFill();
}

function draw() {
	if (frameCount % 60 === 0 && count < 10) {
		createCircles(random(30, windowWidth - 30), random(30, windowHeight - 30));
		count++;
	}
	
	if (frameCount % 800 === 0) {
		count = 0;
		background(100);
	}
}

function mouseClicked() {
	createCircles(mouseX, mouseY)
}

function createCircles(x, y) {
	for (let i = 0; i < 50; i++) {
		stroke(random(100, 255), random(100, 255), random(100, 255));
		ellipse(x, y, 10 * i);
	}
}