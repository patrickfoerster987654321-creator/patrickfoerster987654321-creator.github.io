let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function brokenBridge() {
    clear();
    print("\nYou are at the broken bridge!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tRestrooms" + "\n\tMemorial Plaza");
    
    function processInput(input){
        if (input.toLowerCase() === "memorialplaza" || "memorial plaza") {
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
        if (input.toLowerCase() === "brokenbridge" || "broken bridge") {
            brokenBridge();
        } else if (input.toLowerCase === "woodstrail" || "woods trail"){
		woodsTrail();
	} else if (input.toLowerCase === "swamptrail" || "swamp trail"){
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
 		if (input.toLowerCase() === "brokenbridge" || "broken bridge") {
			brokenBridge();
		} else if (input.toLowerCase() === "swamptrail" || "swamp trail"){
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
 		if (input.toLowerCase() === "memorialplaza" || "memorial plaza") {
			memorialPlaza();
		} else if (input.toLowerCase() === "restrooms") {
			restrooms();
		} else if (input.toLowerCase() === "uplandtrail" || "upland trail"){
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
 		if (input.toLowerCase() === "memorialplaza" || "memorial plaza") {
			memorialPlaza();
		} else if (input.toLowerCase() === "uplandtrail" || "upland trail") {
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
 		if (input.toLowerCase() === "woodstrail" || "woods trail") {
			woodsTrail();
		} else if (input.toLowerCase() === "swamptrail" || "swamp trail") {
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
