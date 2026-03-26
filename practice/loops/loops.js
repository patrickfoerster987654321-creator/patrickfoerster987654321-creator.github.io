let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");

for (let y = 0; y <= 200; y += 100){
	for (let x = 0; x < 800; x += 100){
		ctx.fillRect(x, y, 50, 25);
	}
}
//fill in code for canvas1 here

canvas = document.getElementById("canvas2");
ctx = canvas.getContext("2d");
for (let y = 100; y < 800; y += 100){
	for (let x = 0; x < 800; x += 100){
		if (y > x){
			ctx.fillRect(x, y, 50, 25);
		}
	}
}
//fill in code for canvas2 here

canvas = document.getElementById("canvas3");
ctx = canvas.getContext("2d");

for (let y = 0; y < 800; y += 100){
	for (let x = 0; x < 800; x += 100){
		if (x != y){
			ctx.fillRect(x, y, 50, 25);
		}
	}
}

//fill in code for canvas3 here

canvas = document.getElementById("canvas4");
ctx = canvas.getContext("2d");

for (let x = 0; x <= 800; x += 100){
	for (let y = 0; y <= 800; y += 100){
		if ((x + y) % 40 === 0){
			ctx.fillRect(x, y, 100, 100);
		}
	}
}
//fill in code for canvas4 here
