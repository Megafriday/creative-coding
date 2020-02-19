let img0;
let img1;
let img2;
let img3;
let cuts = 4;
let counter = 0;

function setup() {
	img0 = loadImage("./gallery/frame-0.png");
	img1 = loadImage("./gallery/frame-1.png");
	img2 = loadImage("./gallery/frame-2.png");
	img3 = loadImage("./gallery/frame-3.png");
	createCanvas(windowWidth, windowHeight);
	background(255);
}

function draw() {

	if (frameCount % 20 === 0) { // 一秒毎に実行

		if (counter % cuts === 0) {
			image(img0, 0, 0);
		} else if (counter % cuts === 1) {
			image(img1, 0, 0);
		} else if (counter % cuts === 2) {
			image(img2, 0, 0);
		} else if (counter % cuts === 3) {
			image(img3, 0, 0);
		}
		
		counter++;
	}
}

