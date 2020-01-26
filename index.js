let tickCounter = 0;
let balls = [];
let txtColorR = 0;
let txtColorG = 0;
let txtColorB = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(100);

	if (tickCounter % 5 === 0) createBall();

	// ボール
	for (let i = 0; i < balls.length; i++) {
		const ball = balls[i];
		ball.x += ball.speedX;
		ball.y += ball.speedY;

		if( ball.x < 0 || windowWidth < ball.x || 
			ball.y < 0 || windowHeight < ball.y ) {

				balls.splice(i, 1);
				i -= 1;
				continue;
		}

		fill(ball.colorR, ball.colorG, ball.colorB);
		ellipse(ball.x, ball.y, 150);
	}

	// 文字列
	if (tickCounter % 15 === 0) {
		txtColorR = random(150, 255);
		txtColorG = random(150, 255);
		txtColorB = random(150, 255);
	}
	textSize(150);
	fill(txtColorR, txtColorG, txtColorB);
	text(`N予備校最高だ！`, 110, windowHeight / 2);

	tickCounter = (tickCounter + 1) % 10000;
}

function createBall() {
	balls.push({
		x: windowWidth / 2,
		y: windowHeight / 2,
		speedX: random(-6, 6),
		speedY: random(-6, 6),
		colorR: random(150, 255),
		colorG: random(150, 255),
		colorB: random(150, 255)
	});
}