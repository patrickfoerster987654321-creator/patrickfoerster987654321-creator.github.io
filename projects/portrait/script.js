//declare canvas and ctx variables
const canvas = document.getElementById("me");
const ctx = canvas.getContext("2d");

//add face image
const img = new Image();
img.src="me.png";
img.onload = () => {
	ctx.drawImage(img, 0, 0);
}

//add clothes
ctx.fillStyle= "#222233";
ctx.fillRect(260, 480, 280, 220);
