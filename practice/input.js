const canvas = document.getElementById("me");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;
let dy = 100;
let dx = 100;
function animate(){
	ctx.clearRect(0,0,800,800);

	ctx.fillRect(x,y,50,50);
	requestAnimationFrame(animate);
}

animate();

function handleKeyDown(e){
	console.log(e.key);
	if (e.key === "ArrowDown"){
		y += dy
	} else if (e.key === "ArrowUp"){
		y += -dy;
	} else if (e.key === "ArrowLeft"){
		x += -dx;
	} else if (e.key === "ArrowRight"){
		x += dx;
	}
}

document.addEventListener('keydown', handleKeyDown);
