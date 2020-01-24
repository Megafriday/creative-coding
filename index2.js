const bullets = [];
const bSpeed = 10;
const bWidth = 6, bHeight = 8;
const enemies = [];
const eWidth = 50; eHeight = 50;
let score = 0;
let tickCounter = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0, 10, 60);

	if (tickCounter % 5 === 0) createBullet(mouseX, mouseY);
	if (tickCounter % 10 === 0) createEnemy();

	for (let index = 0; index < bullets.length; index++) {
		const bullet = bullets[index];
		bullet.y -= bSpeed;
		if (bullet.y < 0) {
			bullets.splice(index, 1);
			index -= 1;
			continue;
		}

		// hit
		let hitFlag = false;
		for (let eIndex = 0; eIndex < enemies.length; eIndex++) {
			const enemy = enemies[eIndex];
			if (
				Math.abs(bullet.x - enemy.x) < (eWidth) &&
				Math.abs(bullet.y - enemy.y) < (eHeight)
			) {
				hitFlag = true;
				enemies.splice(eIndex, 1);
				eIndex -= 1;
				createEnemy();
				fill(255, 0, 0);
				ellipse(bullet.x, bullet.y, 40, 40);
				score += 100;
				break;
			}
		}

		if (hitFlag === true) {
			bullets.splice(index, 1);
			index -= 1;
			continue;
		}

		fill(255);
		ellipse(bullet.x, bullet.y, bWidth, bHeight);
	}

	for (let eIndex = 0; eIndex < enemies.length; eIndex++) {
		const enemy = enemies[eIndex];
		enemy.x += enemy.moveX;
		enemy.y += enemy.moveY;
		if (enemy.x < 0 || enemy.x > windowWidth || enemy.y > windowHeight) {
			enemies.splice(eIndex, 1);
			eIndex -= 1;
			continue;
		}
		fill(enemy.colorR, enemy.colorG, enemy.colorB);
		ellipse(enemy.x, enemy.y, eWidth, eHeight);
	}

	fill(255);
	ellipse(mouseX, mouseY, 20, 20);
	fill(255, 0, 0);
	textSize(30);
	text(`score: ${score}`, 0, 50);

	tickCounter = (tickCounter + 1) % 10000;
}

function createBullet(mouseX, mouseY) {
	bullets.push({
		x: mouseX,
		y: mouseY
	});
}

function createEnemy() {
	const x = random(windowWidth);
	const moveX = random(-6, 6), moveY = random(1, 5);
	const colorR = random(255), colorG = random(255), colorB = random(255);
	enemies.push({
		x, y: 0, moveX, moveY, colorR, colorG, colorB
	});
}