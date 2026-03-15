let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let actions = 0;
let day = 1;
let water = 0;
let hasAxe = false;
let wood = 0;
let treesBrokenBridge = 5;
let treesRestrooms = 5;
let treesSwampTrail = 5;
let treesWoodsTrail = 5;
let treesUplandTrail = 5;
let treesMemorialPlaza = 5;
let treesLittleIsland = 5;

//If you need, add any "helper" functions here
function useAction() {
	actions++;
	if (actions >= 5) {
		sleep();
	}
}

function sleep() {
	clear();
	print("You feel tired and fall asleep...");
	actions = 0;
	day ++;
	if (day > 30){
		gameOver();
		return;
	}
	print("\nDay " + day + " begins.");
}

function gameOver() {
	clear();
	print("You failed to escape in 30 days. Starving, you fall over and don't wake up");
	gameActive = false;
}

function collectWater() {
	water++;
	print("\nYou collected water. Total water: " + water);
	useAction();
}

//Make one function for each location
function brokenBridge() {
    clear();
    print("\nYou are at the broken bridge!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tRestrooms" + "\n\tMemorial Plaza");
    
    function processInput(input){
        if (input.toLowerCase() === "memorialplaza" || input.toLowerCase() === "memorial plaza") {
            memorialPlaza();
        } else if (input.toLowerCase() === "restrooms") {
		restrooms();
	} else {
            stayHere();
            waitThenCall(brokenBridge);
        }
    }
    waitForInput(processInput);
}

function memorialPlaza() {
    clear();
    print("\nYou are in the Memorial Plaza");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tBroken Bridge" + "\n\tWoods Trail" + "\n\tSwamp Trail");
    
    function processInput(input){
        if (input.toLowerCase() === "brokenbridge" || input.toLowerCase() === "broken bridge") {
            brokenBridge();
        } else if (input.toLowerCase === "woodstrail" || input.toLowerCase() === "woods trail"){
		woodsTrail();
	} else if (input.toLowerCase === "swamptrail" || input.toLowerCase() === "swamp trail"){
		swampTrail();
	} else {
            stayHere();
            waitThenCall(memorialPlaza);
        }
    }
    waitForInput(processInput);
}

function restrooms() {
	clear();
	print("\nYou are at the Restrooms!");
	print("\nWhere do you want to go next? Say one of these choices:" +
	"\n\tBroken Bridge" + "\n\tSwamp Trail");
 	function processInput(input){
 		if (input.toLowerCase() === "brokenbridge" || input.toLowerCase() === "broken bridge") {
			brokenBridge();
		} else if (input.toLowerCase() === "swamptrail" || input.toLowerCase() === "swamp trail"){
			swampTrail();
		}else {
			stayHere();
			waitThenCall(restrooms);
		}
	}
	waitForInput(processInput);
}
function swampTrail() {
	clear();
	print("\nYou are at the broken bridge!");
	print("\nWhere do you want to go next? Say one of these choices:" +
	"\n\tMemorial Plaza" + "\n\tUpland Trail" + "\n\tRestrooms");

 	function processInput(input){
 		if (input.toLowerCase() === "memorialplaza" || input.toLowerCase() === "memorial plaza") {
			memorialPlaza();
		} else if (input.toLowerCase() === "restrooms") {
			restrooms();
		} else if (input.toLowerCase() === "uplandtrail" || input.toLowerCase() === "upland trail"){
			uplandTrail();
		}
			else {      
			stayHere();
			waitThenCall(swampTrail);
		}
	}
	waitForInput(processInput);
}
function woodsTrail() {
	clear();
	print("\nYou are at the broken bridge!");
	print("\nWhere do you want to go next? Say one of these choices:" +
	"\n\tMemorial Plaza" + "\n\tUpland Trail");

 	function processInput(input){
 		if (input.toLowerCase() === "memorialplaza" || input.toLowerCase() === "memorial plaza") {
			memorialPlaza();
		} else if (input.toLowerCase() === "uplandtrail" || input.toLowerCase() === "upland trail") {
			uplandTrail();
		} else {
			stayHere();
			waitThenCall(woodsTrail);
		}
	}
	waitForInput(processInput);
}
function uplandTrail() {
	clear();
	print("\nYou are at the broken bridge!");
	print("\nWhere do you want to go next? Say one of these choices:" +
	"\n\tWoods Trail" + "\n\tSwamp Trail");

 	function processInput(input){
 		if (input.toLowerCase() === "woodstrail" || input.toLowerCase() === "woods trail") {
			woodsTrail();
		} else if (input.toLowerCase() === "swamptrail" || input.toLowerCase() === "swamp trail") {
			swampTrail();
		} else {
			stayHere();
			waitThenCall(uplandTrail);
		}
	}
	waitForInput(processInput);
}
//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            brokenBridge();
    }
    waitForInput(processInput);
}
