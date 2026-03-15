"use strict";

function addToBody(text){                                                  
    document.body.innerHTML += "<p>" + text + "</p>";
}
/*
let yourName = prompt("What is your name?");
console.log("Hi "+yourName);
alert("Hi "+yourName);
*/

let input = prompt("What is the temperature outside in Fahrenheit?");

let temperature = Number(input);

if (typeof temperature !== 'number' || isNaN(temperature) || input  === null || input.trim() === "" || temperature <= -200){
	console.log("really");
	alert("really");
}
else if (temperature <= 32){
	alert("Wow! It's freezing outside");
	console.log("Wow! It's freezing outside");
}
else if (temperature >= 32 && temperature <= 45){
	alert("It's cold. Don't forget your coat!");
	console.log("It's cold. Don't forget your coat!");
}
else if (temperature >=45 && temperature <= 80){
	alert("It's nice outside.");
	console.log("It's nice outside.");
}
else if (temperature >= 80 && temperature <= 90){
	alert("It's a little hot. Wear shorts!");
	console.log("It's a little hot. Wear shorts!");
}
else if (temperature >= 90 && temperature <= 120){
	alert("It's hot. Stay hydrated!");
	console.log("It's hot. Stay hydrated!");
}
else{
	alert("Stop fucking with me.");
	console.log("Stop fucking with me");
}
