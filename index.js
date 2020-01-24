const bullets = [];
const enemies = [];
let tickCounter = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(100);
	fill("white");
	ellipse(mouseX, mouseY, 20);
	textSize(30);
	text(`enemies: ${enemies.length}`, 0, 30);
	text(`bullets: ${bullets.length}`, 0, 70);


	for (let i = 1; i < bullets.length; i++) {
		const bullet = bullets[i];
		bullet.y -= 5;
		if (bullet.y < 0) {
			bullets.splice(i, 1);
			i -= 1;
			continue;
		}
		
		fill("white");
		ellipse(bullet.x, bullet.y, 8);
	}
	
	for (let k = 0; k < enemies.length; k++) {
		const enemy = enemies[k];
		enemy.x += enemy.speedX;
		enemy.y += enemy.speedY;

		if(enemy.x < 0 || windowWidth < enemy.x || enemy.y < 0 || windowHeight < enemy.y){
			enemies.splice(k, 1);
			k -= 1;
			continue;
		}

		fill(enemy.colorR, enemy.colorG, enemy.colorB);
		ellipse(enemy.x, enemy.y, 50);
	}

	tickCounter = (tickCounter + 1) % 10000;
	if (tickCounter % 5 === 0) createBullet();
	if (tickCounter % 5 === 0) createEnemy();
}

function createBullet() {
	bullets.push({
		x: mouseX,
		y: mouseY
	});
}

function createEnemy() {
	const speedX = random(-6, 6);
	const speedY = random(-6, 6);
	const colorR = random(155, 255);
	const colorG = random(155, 255);
	const colorB = random(155, 255);

	enemies.push({
		x: windowWidth / 2,
		y: windowHeight / 2,
		speedX,
		speedY,
		colorR,
		colorG,
		colorB
	});
}