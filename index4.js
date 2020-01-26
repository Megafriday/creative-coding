let angle = 0;
let r = 150;

function setup(){
	createCanvas(windowWidth, windowHeight);
}


function draw(){
	background(100, 40);
	translate(windowWidth/2, windowHeight/2);		//	中心座標を変える
	let x = cos(radians(angle)) * r;
	let y = sin(radians(angle)) * r;
	ellipse(x, y, 30);
	angle = (angle + 2) % 360;
}