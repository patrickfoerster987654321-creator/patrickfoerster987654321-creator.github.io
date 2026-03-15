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
function chopTree(locationName) {
    if (!hasAxe) {
        print("\nYou need an axe to chop trees.");
        return;
    }

    let treesLeft = 0;

    if (locationName === "broken") treesLeft = treesBrokenBridge;
    if (locationName === "restrooms") treesLeft = treesRestrooms;
    if (locationName === "swamp") treesLeft = treesSwampTrail;
    if (locationName === "woods") treesLeft = treesWoodsTrail;
    if (locationName === "upland") treesLeft = treesUplandTrail;
    if (locationName === "island") treesLeft = treesLittleIsland;

    if (treesLeft <= 0) {
        print("\nNo trees left here.");
        return;
    }

    // remove one tree
    if (locationName === "broken") treesBrokenBridge--;
    if (locationName === "restrooms") treesRestrooms--;
    if (locationName === "swamp") treesSwampTrail--;
    if (locationName === "woods") treesWoodsTrail--;
    if (locationName === "upland") treesUplandTrail--;
    if (locationName === "island") treesLittleIsland--;

    wood += 4;

    print("\nYou chopped a tree and got 4 planks. Total wood: " + wood);
    useAction();
}

function winGame() {
    clear();
    print("You rebuilt the bridge and escaped! You win!");
    gameActive = false;
}

function askLittleIsland() {
    clear();
    print("On your way to the Restrooms, you see a small path leading to a secret place.");
    print("Do you want to go to Little Island? (yes/no)");

    function processInput(input) {
        if (input.toLowerCase() === "yes") {
            littleIsland();
        } else {
            restrooms();
        }
    }

    waitForInput(processInput);
}

//Make one function for each location
function brokenBridge() {
    clear();
    print("\nYou are at the broken bridge!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tCollect Water" + "\n\tRestrooms" + "\n\tMemorial Plaza" + "\n\tCollect Water");
    
    function processInput(input){
 	if (input.toLowerCase() === "rebuildbridge" || input.toLowerCase() === "rebuild bridge") {
    if (wood >= 100) {
        winGame();
    } else {
        print("\nYou need 100 planks to rebuild the bridge. You have " + wood + ".");
        waitThenCall(brokenBridge);
    }
	} else if (input.toLowerCase() === "collectwater" || iput.toLowerCase() === "collect water"){
		collectWater();
	} else if (input.toLowerCase() === "memorialplaza" || input.toLowerCase() === "memorial plaza") {
            memorialPlaza();
	    useAction();
        } else if (input.toLowerCase() === "restrooms") {
		restrooms();
		useAction();
	} else {
            stayHere();
	    useAction();
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
	    useAction();
        } else if (input.toLowerCase === "woodstrail" || input.toLowerCase() === "woods trail"){
		woodsTrail();
		useAction();
	} else if (input.toLowerCase === "swamptrail" || input.toLowerCase() === "swamp trail"){
		swampTrail();
		useAction();
	} else {
            stayHere();
	    useAction();
            waitThenCall(memorialPlaza);
        }
    }
    waitForInput(processInput);
}

function restrooms() {
	clear();
	print("\nYou are at the Restrooms!");
	print("\nWhere do you want to go next? Say one of these choices:" +
	"\n\tCollectWater"+ "\n\tBroken Bridge" + "\n\tSwamp Trail");
 	function processInput(input){
 		if (input.toLowerCase() === "collectwater" || input.toLowerCase() === "collect water"){
			collectWater();
		} else if (input.toLowerCase() === "brokenbridge" || input.toLowerCase() === "broken bridge") {
			brokenBridge();
			useAction();
		} else if (input.toLowerCase() === "swamptrail" || input.toLowerCase() === "swamp trail"){
			swampTrail();
			useAction();
		}else {
			stayHere();
			useAction();
			waitThenCall(restrooms);
		}
	}
	waitForInput(processInput);
}
function swampTrail() {
	clear();
	print("\nYou are at the broken bridge!");
	print("\nWhere do you want to go next? Say one of these choices:" +
	"\n\tCollect Water" + "\n\tMemorial Plaza" + "\n\tUpland Trail" + "\n\tRestrooms");

 	function processInput(input){
 		if (input.toLowerCase() === "collectwater" || input.toLowerCase() === "collect water"){
			collectWater();
		} else if (input.toLowerCase() === "memorialplaza" || input.toLowerCase() === "memorial plaza") {
			memorialPlaza();
			useAction();
		} else if (input.toLowerCase() === "restrooms") {
			askLittleIsland();
			restrooms();
			useAction();
		} else if (input.toLowerCase() === "uplandtrail" || input.toLowerCase() === "upland trail"){
			uplandTrail();
			useAction();
		}
			else {      
			stayHere();
			useAction();
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
			useAction();
		} else if (input.toLowerCase() === "uplandtrail" || input.toLowerCase() === "upland trail") {
			uplandTrail();
			useAction();
		} else {
			stayHere();
			useAction();
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
			useAction();
		} else if (input.toLowerCase() === "swamptrail" || input.toLowerCase() === "swamp trail") {
			swampTrail();
			useAction();
		} else {
			stayHere();
			useAction();
			waitThenCall(uplandTrail);
		}
	}
	waitForInput(processInput);
}
function littleIsland() {
    clear();
    print("\nYou arrive at Little Island!");
    print("\nYou can:" +
        "\n\tCollect Water" +
        "\n\tChop Tree" +
        "\n\tTake Axe" +
        "\n\tSwamp Trail");

    function processInput(input) {
        if (input.toLowerCase() === "collectwater" || input.toLowerCase() === "collect water") {
            collectWater();
            waitThenCall(littleIsland);
        }
        else if (input.toLowerCase() === "choptree" || input.toLowerCase() === "chop tree") {
            chopTree("island");
            waitThenCall(littleIsland);
        }
        else if (input.toLowerCase() === "takeaxe" || input.toLowerCase() === "take axe") {
            hasAxe = true;
            print("\nYou picked up the axe!");
            waitThenCall(littleIsland);
        }
        else if (input.toLowerCase() === "swamptrail" || input.toLowerCase() === "swamp trail") {
            swampTrail();
        }
        else {
            stayHere();
            waitThenCall(littleIsland);
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
