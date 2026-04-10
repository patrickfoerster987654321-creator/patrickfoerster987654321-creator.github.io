const canvas = document.getElementById("me");
const ctx = canvas.getContext("2d");
let max = 10;
let x = Math.floor(Math.random() * max);
let y = Math.floor(Math.random() * max);
let dx = Math.floor(Math.random() * max);
let dy = Math.floor(Math.random() * max);
function animate(){
	ctx.clearRect(0,0,800,800);
	x += dx;
	y += dy;
	if (x > 750 || x < 0){
		dx *= -1;
	}
	if (y > 750 || y < 0){
		dy *= -1;
	}
	ctx.fillRect(x,y,50,50);
	requestAnimationFrame(animate);
}

animate();
