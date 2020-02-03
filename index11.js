const margin = 6;
const balls = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(100);
	if (frameCount % 5 === 0 && balls.length < 30 ) createBall();

	for (let i = 0; i < balls.length; i++) {
		const ball = balls[i];

		if (ball.x < 0 + ball.size / 2) {
			ball.x += ball.size;
		} else if (windowWidth - ball.size / 2 < ball.x) {
			ball.x -= ball.size;
		} else {
			ball.x += random(-margin, margin);
		}

		if (ball.y < 0 + ball.size / 2) {
			ball.y += ball.size;
		} else if (windowHeight - ball.size / 2 < ball.y) {
			ball.y -= ball.size;
		} else {
			ball.y += random(-margin, margin);
		}

		fill(ball.colorR, ball.colorG, ball.colorB);
		ellipse(ball.x, ball.y, ball.size);

	}
}

function createBall() {
	balls.push({
		x: windowWidth / 2,
		y: windowHeight / 2,
		size: random(10, 70),
		colorR: random(100, 255), 
		colorG: random(100, 255), 
		colorB: random(100, 255) 
	});
}