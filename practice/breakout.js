const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const ballRadius = 10;

const balls = [];

for (let i = 0; i < 100; i++){
	const ball = {
		x: Math.random()*800,
		y: Math.random()*800,
		dx: 2,
		dy: -2,
		rColor: Math.random()*255,
		gColor: Math.random()*255,
		bColor: Math.random()*255
	};
	balls.push(ball);
}

const paddleHeight = 10;
const paddleWidth = 75;

let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;

let interval = 0;

const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;


function drawBricks(){
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
		    ctx.fillRect(brickOffsetLeft+c*(brickWidth+brickPadding), brickOffsetTop+r*(brickHeight+brickPadding), brickWidth, brickHeight);
    }
  }
}

function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  }
}

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function drawBall() {
	for(const ball of balls){
		ctx.fillStyle = `rgb(${ball.rColor}, ${ball.gColor}, ${ball.bColor})`;
		ctx.beginPath();
		ctx.arc(ball.x, ball.y, ballRadius, 0, Math.PI * 2);
		ctx.fill();
		ctx.closePath();
	}
}
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawBricks();
for(const ball of balls){
  if (ball.x + ball.dx > canvas.width - ballRadius || ball.x + ball.dx < ballRadius) {
    ball.dx = -ball.dx;
  }
  if (ball.y + ball.dy < ballRadius || ball.y + ball.dy > canvas.height - ballRadius) {
    ball.dy = -ball.dy;
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  //move the ball
  ball.x += ball.dx;
  ball.y += ball.dy;
}

  requestAnimationFrame(draw);
}

draw();
