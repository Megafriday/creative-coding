function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	strokeWeight(3);
}

function draw() {
}

function mouseClicked() {
	let i = 0;
	noFill();
	while (i<50) {
		stroke(random(100, 255), random(100, 255), random(100, 255));
		ellipse(mouseX, mouseY, 10 * i);
		i++;
	}
}