let ballX;
let ballY;
let margin = 20;
const ballSize = 50;

function setup() {
	createCanvas(windowWidth, windowHeight);
	ballX = windowWidth / 2;
	ballY = windowHeight / 2;
}

function draw() {
	background(100);
	if (ballX < 0 + ballSize / 2) {
		ballX += ballSize;
	} else if (windowWidth - ballSize / 2 < ballX) {
		ballX -= ballSize;
	} else {
		ballX += random(-margin, margin);
	}

	if (ballY < 0 + ballSize/2) {
		ballY += ballSize;
	}else if ( windowHeight - ballSize/2 < ballY) {
		ballY -= ballSize;
	}else{
		ballY += random(-margin, margin);
	}

	ellipse(ballX, ballY, ballSize);
}
