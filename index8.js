function setup() {
	createCanvas(windowWidth, windowHeight);
}

let sec = 0;
let scaleUp = 9;

function draw() {
	
	background(100);
	sec = second();

	fill(100);
	strokeWeight(10);
	ellipse(windowWidth/2, windowHeight/2, 60*scaleUp);
	
	fill(255, 200, 100);
	strokeWeight(1);
	ellipse(windowWidth/2, windowHeight/2, sec*scaleUp);

	textSize(100);
	text(sec, 220, 220);

}