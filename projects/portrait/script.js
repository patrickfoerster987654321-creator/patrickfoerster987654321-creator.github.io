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

//add head
ctx.fillStyle = "#f2c29b";
ctx.beginPath();
ctx.arc(400, 330, 130, 0, Math.PI*2);
ctx.fill();

//add left ear
ctx.beginPath();
ctx.arc(270, 330, 25, 0, Math.PI*2);
ctx.fill();

//add right ear
ctx.beginPath();
ctx.arc(530, 330, 25, 0, Math.PI*2);

//add hair cap
ctx.fillStyle = "#2b2523";
ctx.beginPath();
ctx.arc(400, 280, 140, Math.PI, 0);
ctx.fill();

//add hair spikes
ctx.beginPath();
ctx.moveTo(300, 260);
ctx.lineTo(320, 220);
ctx.lineTo(340, 260);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(360, 250);
ctx.lineTo(380, 210);
ctx.lineTo(400, 250);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(420, 250);
ctx.lineTo(440, 210);
ctx.lineTo(460, 250);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(460, 260);
ctx.lineTo(480, 225);
ctx.lineTo(500, 265);
ctx.closePath();
ctx.fill();

//add eye white
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.arc(360, 320, 25, 0, Math.PI*2);
ctx.fill();

ctx.beginPath();
ctx.arc(440, 320, 25, 0, Math.PI*2);
ctx.fill();

//add pupils
ctx.fillStyle = "#2b2523";
ctx.beginPath();
ctx.arc(360, 320, 10, 0, Math.PI*2);
ctx.fill();

ctx.beginPath();
ctx.arc(440, 320, 10, 0, Math.PI*2);
ctx.fill();

//add eyebrows
ctx.beginPath();
ctx.moveTo(335, 295);
ctx.lineTo(385, 290);
ctx.lineTo(385, 300);
ctx.lineTo(335, 305);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(415, 290);
ctx.lineTo(465, 295);
ctx.lineTo(465, 305);
ctx.lineTo(415, 300);
ctx.closePath();
ctx.fill();

//add nose
ctx.fillStyle = "#e0a982";
ctx.beginPath();
ctx.moveTo(400, 330);
ctx.lineTo(385, 370);
ctx.lineTo(415, 370);
ctx.closePath();
ctx.fill();

//add mouth
ctx.fillStyle = "#c46a5a";
ctx.beginPath();
ctx.moveTo(365, 395);
ctx.lineTo(435, 395);
ctx.lineTo(425, 410);
ctx.lineTo(375, 410);
ctx.closePath();
ctx.fill();

//add highlight to lower lip
ctx.fillStyle = "#e89a8a";
ctx.beginPath();
ctx.moveTo(380, 410);
ctx.lineTo(420, 410);
ctx.lineTo(415, 417);
ctx.lineTo(385, 417);
ctx.closePath();
ctx.fill();

