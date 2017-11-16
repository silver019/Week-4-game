

//----------------------------------------------

var redCrystal

var blueCrystal

var greenCrystal

var yellowCrystal

var crystal = {
	sapphire:
	{
		name: "sapphire",
		value: 0
	}

	ruby:
	{
		name: "ruby",
		value: 0
	}

	emerald:
	{
		name: "emerald",
		value: 0
	}

	yellowE:
	{
		name: "yellowE",
		value: 0
	}
}

var currentScore = 0;

var scoreboard = 0;

var winCount = 0;

var lossCount = 0;


//Get random numbers
var getRandom = function(min,max) {
	return Math.floor(Math.random() * (120 - 19 + 1)) +19;
}

//Start the game and restart the game
var startGame() {

	//Reset current score
	var currentScore = 0;

//Set a new target score between 19 and 120
	scoreboard = getRandom(19, 120);


//Set different values for each of the crystals between 1 and 12
	crystal.blue.value = getRandom(1, 12);
	crystal.ruby.value = getRandom(1, 12);
	crystal.emerald.value = getRandom(1, 12);
	crystal.yellowE.value = getRandom(1, 12);


	$("#score").html(currentScore);
	$("scoreboard").html(currentScore);



console.log("Targer Score: " + scoreboard);
console.log("Sapphire: " + crystal.sapphire.value + " | Ruby: " + crystal.ruby.value + " | Emerald: " + crystal.emerald.value + " | Yellow Crystal: " + crystal.yellowE.value);

}

var addValues = function(crystal) {

	currentScore = currentScore + crystal.value;

	$("#score").html(currentScore);

	checkWin();
}

var checkWin = function() {
	if(currentScore > scoreboard){
		alert("You lost!");
		lossCount++;
	}

	else if(currentScore == scoreboard){
		alert("You won!");
		lossCount++;
	}

}

//Starts game the first time
startGame();

$("#ruby").on("click", function(){
	addValues(crystal.ruby);
})

$("#sapphire").on("click", function(){
	addValues(crystal.sapphire);
})

$("#emerald").on("click", function(){
	addValues(crystal.emerald);
})

$("#yellowE").on("click", function(){
	addValues(crystal.yellowE);
})