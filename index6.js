function setup() {
	createCanvas(600, 600);
	// createCanvas(windowWidth, windowHeight);
	background(0);
}

function mouseMoved() {

	stroke(255, 255, 255);
	line(mouseX, mouseY, width/2, height/2);

}
