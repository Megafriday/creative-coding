function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	noStroke();
}

function mouseDragged() {

	fill(
		random(100, 255),
		random(100, 255),
		random(100, 255));

	ellipse(
		mouseX + random(-10, 10),
		mouseY + random(-10, 10),
		random(5, 150),
		random(5, 150));

}