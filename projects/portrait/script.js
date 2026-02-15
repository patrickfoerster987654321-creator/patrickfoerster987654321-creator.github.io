//declare canvas and ctx variables
const canvas = document.getElementById("me");
const ctx = canvas.getContext("2d");

//make image background
const img = new Image();
img.src = "me.png";
img.onload = () => {
    ctx.drawImage(img, 0, 0);
};

//add clothes
ctx.fillStyle= "#222233";
ctx.fillRect(260, 480, 280, 220);

//add left shoulder
ctx.beginPath();
ctx.moveTo(260, 480);
ctx.lineTo(200, 620);
ctx.lineTo(260, 620);
ctx.closePath();
ctx.fill();

//add right shoulder
ctx.beginPath();
ctx.moveTo(540, 480);
ctx.lineTo(600, 620);
ctx.lineTo(540, 620);
ctx.closePath();
ctx.fill();

//add neck
ctx.fillStyle = "#f2c29b";
ctx.fillRect(350, 430, 100, 70);

//add left collar
ctx.fillStyle = "#1a1a2b";
ctx.beginPath();
ctx.moveTo(350, 430);
ctx.lineTo(320, 470);
ctx.lineTo(350, 470);
ctx.closePath();
ctx.fill();

//add right collar
ctx.beginPath();
ctx.moveTo(450, 430);
ctx.lineTo(480, 470);
ctx.lineTo(450, 470);
ctx.closePath();
ctx.fill();
