let gameActive = true;

// Global variables
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
let treesLittleIsland = 5;

// Status display
function showStatus() {
    print("Day " + day + " | Water: " + water + " | Wood: " + wood);
}

// Helper functions
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
    day++;

    if (day > 30) {
        gameOver();
        return;
    }

    print("\nDay " + day + " begins.");
}

function gameOver() {
    clear();
    print("You failed to escape in 30 days. Starving, you fall over and don't wake up.");
    gameActive = false;
}

function collectWater() {
    water++;
    print("\nYou collected water. Total water: " + water);
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

    if (locationName === "broken") treesBrokenBridge--;
    if (locationName === "restrooms") treesRestrooms--;
    if (locationName === "swamp") treesSwampTrail--;
    if (locationName === "woods") treesWoodsTrail--;
    if (locationName === "upland") treesUplandTrail--;
    if (locationName === "island") treesLittleIsland--;

    wood += 4;
    print("\nYou chopped a tree and got 4 planks. Total wood: " + wood);
}

function winGame() {
    clear();
    print("You rebuilt the bridge and escaped! You win!");
    gameActive = false;
}

function askLittleIsland() {
    clear();
    showStatus();
    print("On your way to the Restrooms, you see a small path leading to a secret place.");
    print("Do you want to go to Little Island? (yes/no)");

    function processInput(input) {
        input = input.toLowerCase();

        if (input === "yes") {
            littleIsland();
        } else {
            restrooms();
        }
    }

    waitForInput(processInput);
}

// LOCATIONS
function brokenBridge() {
    clear();
    showStatus();
    print("\nYou are at the Broken Bridge!");
    print("\nWhere do you want to go next?" +
        "\n\tCollect Water" +
        "\n\tRestrooms" +
        "\n\tMemorial Plaza" +
        "\n\tRebuild Bridge");

    function processInput(input) {
        input = input.toLowerCase();

        if (input === "rebuildbridge" || input === "rebuild bridge") {
            if (wood >= 100) {
                winGame();
            } else {
                print("\nYou need 100 planks to rebuild the bridge. You have " + wood + ".");
                brokenBridge();
            }
        }

        else if (input === "collectwater" || input === "collect water") {
            collectWater();
            brokenBridge();
        }

        else if (input === "restrooms") {
            useAction();
            restrooms();
        }

        else if (input === "memorialplaza" || input === "memorial plaza") {
            useAction();
            memorialPlaza();
        }

        else {
            stayHere();
            useAction();
            waitThenCall(brokenBridge);
        }
    }

    waitForInput(processInput);
}

function memorialPlaza() {
    clear();
    showStatus();
    print("\nYou are in the Memorial Plaza.");
    print("\nWhere do you want to go next?" +
        "\n\tBroken Bridge" +
        "\n\tWoods Trail" +
        "\n\tSwamp Trail");

    function processInput(input) {
        input = input.toLowerCase();

        if (input === "brokenbridge" || input === "broken bridge") {
            useAction();
            brokenBridge();
        }

        else if (input === "woodstrail" || input === "woods trail") {
            useAction();
            woodsTrail();
        }

        else if (input === "swamptrail" || input === "swamp trail") {
            useAction();
            swampTrail();
        }

        else {
            stayHere();
            useAction();
            waitThenCall(memorialPlaza);
        }
    }

    waitForInput(processInput);
}

function restrooms() {
    clear();
    showStatus();
    print("\nYou are at the Restrooms!");
    print("\nWhere do you want to go next?" +
        "\n\tCollect Water" +
        "\n\tBroken Bridge" +
        "\n\tSwamp Trail");

    function processInput(input) {
        input = input.toLowerCase();

        if (input === "collectwater" || input === "collect water") {
            collectWater();
            waitThenCall(restrooms);
        }

        else if (input === "brokenbridge" || input === "broken bridge") {
            useAction();
            brokenBridge();
        }

        else if (input === "swamptrail" || input === "swamp trail") {
            useAction();
            swampTrail();
        }

        else {
            stayHere();
            useAction();
            waitThenCall(restrooms);
        }
    }

    waitForInput(processInput);
}

function swampTrail() {
    clear();
    showStatus();
    print("\nYou are at the Swamp Trail!");
    print("\nWhere do you want to go next?" +
        "\n\tCollect Water" +
        "\n\tMemorial Plaza" +
        "\n\tUpland Trail" +
        "\n\tRestrooms");

    function processInput(input) {
        input = input.toLowerCase();

        if (input === "collectwater" || input === "collect water") {
            collectWater();
            waitThenCall(swampTrail);
        }

        else if (input === "memorialplaza" || input === "memorial plaza") {
            useAction();
            memorialPlaza();
        }

        else if (input === "restrooms") {
            askLittleIsland();
        }

        else if (input === "uplandtrail" || input === "upland trail") {
            useAction();
            uplandTrail();
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
    showStatus();
    print("\nYou are at the Woods Trail!");
    print("\nWhere do you want to go next?" +
        "\n\tMemorial Plaza" +
        "\n\tUpland Trail");

    function processInput(input) {
        input = input.toLowerCase();

        if (input === "memorialplaza" || input === "memorial plaza") {
            useAction();
            memorialPlaza();
        }

        else if (input === "uplandtrail" || input === "upland trail") {
            useAction();
            uplandTrail();
        }

        else {
            stayHere();
            useAction();
            waitThenCall(woodsTrail);
	}
    }

    waitForInput(processInput);
}

function uplandTrail() {
    clear();
    showStatus();
    print("\nYou are at the Upland Trail!");
    print("\nWhere do you want to go next?" +
        "\n\tWoods Trail" +
        "\n\tSwamp Trail");

    function processInput(input) {
        input = input.toLowerCase();

        if (input === "woodstrail" || input === "woods trail") {
            useAction();
            woodsTrail();
        }

        else if (input === "swamptrail" || input === "swamp trail") {
            useAction();
            swampTrail();
        }

        else {
            stayHere();
            useAction();
            waitThenCall(uplandTrail);
        }
    }

    waitForInput(processInput);
}

function littleIsland() {
    clear();
    showStatus();
    print("\nYou arrive at Little Island!");
    print("\nYou can:" +
        "\n\tCollect Water" +
        "\n\tChop Tree" +
        "\n\tTake Axe" +
        "\n\tSwamp Trail");

    function processInput(input) {
        input = input.toLowerCase();

        if (input === "collectwater" || input === "collect water") {
            collectWater();
            waitThenCall(littleIsland);
        }

        else if (input === "choptree" || input === "chop tree") {
            chopTree("island");
            waitThenCall(littleIsland);
        }

        else if (input === "takeaxe" || input === "take axe") {
            hasAxe = true;
            print("\nYou picked up the axe!");
            waitThenCall(littleIsland);
        }

        else if (input === "swamptrail" || input === "swamp trail") {
            useAction();
            swampTrail();
        }

        else {
            stayHere();
            useAction();
            waitThenCall(littleIsland);
        }
    }

    waitForInput(processInput);
}

// Start
function start() {
    print("Welcome to my game! Press any key to start.");

    function processInput(input) {
        brokenBridge();
    }

    waitForInput(processInput);
}

// Helpers
function print(text) {
    const output = document.getElementById('output');
    const line = document.createElement('div');
    line.innerHTML = "<p>" + text + "</p>";
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
}

function printAscii(art) {
    const output = document.getElementById('output');
    const pre = document.createElement('pre');
    pre.className = 'ascii-art';
    pre.textContent = art;
    output.appendChild(pre);
    output.scrollTop = output.scrollHeight;
}

function clear() {
    document.getElementById('output').innerHTML = '';
}

document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && gameActive) {
        const input = this.value.trim();
        this.value = '';
        print('> ' + input);
        handleInput(input);
    }
});

function handleInput(input) {
    console.log("No handler for input: " + input);
}

function waitForInput(handlerFunction) {
    handleInput = handlerFunction;
}

function waitThenCall(target){
    setTimeout(target,2000);
}

function stayHere() {
    print("\nSorry, I don't understand your input. I'll assume you want to stay here.");
}

