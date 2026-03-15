let gameActive = true;

// Global variables
let actions = 0;
let day = 1;
let water = 0;
let wood = 0;
let hasAxe = false;

let daysWithoutWater = 0;

let treesBrokenBridge = 5;
let treesRestrooms = 5;
let treesSwampTrail = 5;
let treesWoodsTrail = 5;
let treesUplandTrail = 5;
let treesLittleIsland = 5;

// Delay helper
function pauseThen(next){
    setTimeout(next,2000);
}

// Status display
function showStatus(){
    print("Day " + day + " | Water: " + water + " | Wood: " + wood);
}

// Action system
function useAction(){

    actions++;

    if(actions >= 5){
        sleep();
        return true;
    }

    return false;
}

function sleep(){

    clear();
    print("You feel tired and fall asleep...");

    actions = 0;
    day++;

    // Water consumption
    if(water > 0){
        water--;
        daysWithoutWater = 0;
        print("You drink 1 water during the night.");
    }
    else{
        daysWithoutWater++;
        print("You had no water to drink today.");
    }

    if(daysWithoutWater >= 3){
        gameOverThirst();
        return;
    }

    if(day > 30){
        gameOver();
        return;
    }

    print("\nDay " + day + " begins.");
}

function gameOver(){
    clear();
    print("You failed to escape. You collapse from exhaustion.");
    gameActive = false;
}

function gameOverThirst(){
    clear();
    print("You went three days without water and collapse from dehydration.");
    gameActive = false;
}

function winGame(){
    clear();
    print("You rebuilt the bridge and escaped! You win!");
    gameActive = false;
}

// Resources
function collectWater(){

    water++;
    print("\nYou collected water. Total water: " + water);

    if(!useAction()) pauseThen(currentLocation);
}

function chopTree(location){

    if(!hasAxe){
        print("\nYou need an axe to chop trees.");
        pauseThen(currentLocation);
        return;
    }

    let treesLeft = 0;

    if(location==="broken") treesLeft = treesBrokenBridge;
    if(location==="restrooms") treesLeft = treesRestrooms;
    if(location==="swamp") treesLeft = treesSwampTrail;
    if(location==="woods") treesLeft = treesWoodsTrail;
    if(location==="upland") treesLeft = treesUplandTrail;
    if(location==="island") treesLeft = treesLittleIsland;

    if(treesLeft<=0){
        print("\nNo trees left here.");
        pauseThen(currentLocation);
        return;
    }

    if(location==="broken") treesBrokenBridge--;
    if(location==="restrooms") treesRestrooms--;
    if(location==="swamp") treesSwampTrail--;
    if(location==="woods") treesWoodsTrail--;
    if(location==="upland") treesUplandTrail--;
    if(location==="island") treesLittleIsland--;

    wood += 4;

    print("\nYou chopped a tree and got 4 planks. Total wood: "+wood);

    if(!useAction()) pauseThen(currentLocation);
}

// ======================
// LOCATIONS
// ======================

let currentLocation;

function brokenBridge(){

    currentLocation = brokenBridge;

    clear();
    showStatus();

    print("\nYou are at the Broken Bridge!");

    print("\nWhere do you want to go?" +
    "\nCollect Water" +
    "\nChop Tree" +
    "\nRestrooms" +
    "\nMemorial Plaza" +
    "\nRebuild Bridge");

    waitForInput(brokenBridgeInput);
}

function brokenBridgeInput(input){

    input=input.toLowerCase();

    if(input==="collect water"||input==="collectwater"){
        collectWater();
    }

    else if(input==="chop tree"||input==="choptree"){
        chopTree("broken");
    }

    else if(input==="restrooms"){
        if(!useAction()) restrooms();
    }

    else if(input==="memorial plaza"||input==="memorialplaza"){
        if(!useAction()) memorialPlaza();
    }

    else if(input==="rebuild bridge"||input==="rebuildbridge"){

        if(wood>=100){
            winGame();
        }
        else{
            print("\nYou need 100 planks. You have "+wood+".");
            pauseThen(brokenBridge);
        }

    }

    else{
        stayHere();
        pauseThen(brokenBridge);
    }
}

function memorialPlaza(){

    currentLocation = memorialPlaza;

    clear();
    showStatus();

    print("\nYou are in the Memorial Plaza.");

    print("\nWhere do you want to go?" +
    "\nBroken Bridge"+
    "\nWoods Trail"+
    "\nSwamp Trail"+
    "\nChop Tree");

    waitForInput(memorialInput);
}

function memorialInput(input){

    input=input.toLowerCase();

    if(input==="broken bridge"||input==="brokenbridge"){
        if(!useAction()) brokenBridge();
    }

    else if(input==="woods trail"||input==="woodstrail"){
        if(!useAction()) woodsTrail();
    }

    else if(input==="swamp trail"||input==="swamptrail"){
        if(!useAction()) swampTrail();
    }

    else if(input==="chop tree"||input==="choptree"){
        chopTree("woods");
    }

    else{
        stayHere();
        pauseThen(memorialPlaza);
    }
}

function restrooms(){

    currentLocation = restrooms;

    clear();
    showStatus();

    print("\nYou are at the Restrooms!");

    print("\nWhere do you want to go?" +
    "\nCollect Water"+
    "\nChop Tree"+
    "\nBroken Bridge"+
    "\nSwamp Trail");

    waitForInput(restroomsInput);
}

function restroomsInput(input){

    input=input.toLowerCase();

    if(input==="collect water"||input==="collectwater"){
        collectWater();
    }

    else if(input==="chop tree"||input==="choptree"){
        chopTree("restrooms");
    }

    else if(input==="broken bridge"||input==="brokenbridge"){
        if(!useAction()) brokenBridge();
    }

    else if(input==="swamp trail"||input==="swamptrail"){
        if(!useAction()) swampTrail();
    }

    else{
        stayHere();
        pauseThen(restrooms);
    }
}

function swampTrail(){

    currentLocation = swampTrail;

    clear();
    showStatus();

    print("\nYou are at the Swamp Trail!");

    print("\nWhere do you want to go?" +
    "\nCollect Water"+
    "\nChop Tree"+
    "\nMemorial Plaza"+
    "\nUpland Trail"+
    "\nRestrooms");

    waitForInput(swampInput);
}

function swampInput(input){

    input=input.toLowerCase();

    if(input==="collect water"||input==="collectwater"){
        collectWater();
    }

    else if(input==="chop tree"||input==="choptree"){
        chopTree("swamp");
    }

    else if(input==="memorial plaza"||input==="memorialplaza"){
        if(!useAction()) memorialPlaza();
    }

    else if(input==="upland trail"||input==="uplandtrail"){
        if(!useAction()) uplandTrail();
    }

    else if(input==="restrooms"){

        if(useAction()) return;

        askLittleIsland();
    }

    else{
        stayHere();
        pauseThen(swampTrail);
    }
}

// Secret path
function askLittleIsland(){

    clear();
    showStatus();

    print("On your way to the Restrooms, you see a small hidden path.");
    print("Do you want to go to Little Island? (yes/no)");

    waitForInput(function(input){

        input=input.toLowerCase();

        if(input==="yes"){
            littleIsland();
        }
        else{
            restrooms();
        }

    });
}

function woodsTrail(){

    currentLocation = woodsTrail;

    clear();
    showStatus();

    print("\nYou are at the Woods Trail!");

    print("\nWhere do you want to go?" +
    "\nMemorial Plaza"+
    "\nUpland Trail"+
    "\nChop Tree");

    waitForInput(woodsInput);
}

function woodsInput(input){

    input=input.toLowerCase();

    if(input==="memorial plaza"||input==="memorialplaza"){
        if(!useAction()) memorialPlaza();
    }

    else if(input==="upland trail"||input==="uplandtrail"){
        if(!useAction()) uplandTrail();
    }

    else if(input==="chop tree"||input==="choptree"){
        chopTree("woods");
    }

    else{
        stayHere();
        pauseThen(woodsTrail);
    }
}

function uplandTrail(){

    currentLocation = uplandTrail;

    clear();
    showStatus();

    print("\nYou are at the Upland Trail!");

    print("\nWhere do you want to go?" +
    "\nWoods Trail"+
    "\nSwamp Trail"+
    "\nChop Tree");

    waitForInput(uplandInput);
}

function uplandInput(input){

    input=input.toLowerCase();

    if(input==="woods trail"||input==="woodstrail"){
        if(!useAction()) woodsTrail();
    }

    else if(input==="swamp trail"||input==="swamptrail"){
        if(!useAction()) swampTrail();
    }

    else if(input==="chop tree"||input==="choptree"){
        chopTree("upland");
    }

    else{
        stayHere();
        pauseThen(uplandTrail);
    }
}

function littleIsland(){

    currentLocation = littleIsland;

    clear();
    showStatus();

    print("\nYou arrive at Little Island!");

    print("\nYou can:"+
    "\nCollect Water"+
    "\nChop Tree"+
    "\nTake Axe"+
    "\nSwamp Trail");

    waitForInput(islandInput);
}

function islandInput(input){

    input=input.toLowerCase();

    if(input==="collect water"||input==="collectwater"){
        collectWater();
    }

    else if(input==="chop tree"||input==="choptree"){
        chopTree("island");
    }

    else if(input==="take axe"||input==="takeaxe"){
        hasAxe=true;
        print("\nYou picked up the axe!");
        pauseThen(littleIsland);
    }

    else if(input==="swamp trail"||input==="swamptrail"){
        if(!useAction()) swampTrail();
    }

    else{
        stayHere();
        pauseThen(littleIsland);
    }
}

// ======================
// GAME START
// ======================

function start(){

    print("Welcome to my game! Press Enter to start.");

    waitForInput(function(){
        brokenBridge();
    });

}
