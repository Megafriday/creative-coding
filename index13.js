function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	strokeWeight(3);
	noFill();
}

function mouseClicked() {
	createRipple();
}

function createRipple() {
	for (let i = 0; i < 40; i++) {
		stroke(random(100, 255), random(100, 255), random(100, 255));
		ellipse(mouseX, mouseY - i*10, i*10);
	}
}