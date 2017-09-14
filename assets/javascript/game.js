$(document).ready(function() {
var wins = 0;
var loses = 0;
var total = 0;

	// generate random numbers for 4 crystals between 1 and 12
	var rand = function() {
		return Math.ceil(Math.random()* 12 + 1);
	};
	var randomBigNumber = function() {
		return Math.ceil(Math.random()* 101 + 19);
	};
	var generator = function() {
		var randomNumbers = {
		// generate a random number between 19 and 120
		randomNumber: randomBigNumber(),
		"crystal1": rand(),
		"crystal2": rand(),
		"crystal3": rand(),
		"crystal4": rand(),
		};
		$("#randomNumber").text(randomNumbers.randomNumber);
	};
	var reset = function() {
		total = 0;
		$("#total").text(total);
		generator();
	};
	var checker = function() {
		// if the total equals the first random number, you win
		if (total == generator.randomNumbers.randomNumber) {
			console.log("win");
			wins += 1;
			$("#wins").text(wins);
			$("#randomNumber").text(generator.randomNumbers.randomNumber);
			reset();
		// if the total goes above the first random number, you lose
		} else if (total > generator.randomNumbers.randomNumber) {
			console.log("lose");
			loses += 1;
			$("#loses").text(loses);
			$("#randomNumber").text(generator.randomNumbers.randomNumber);
			reset();
		}
	};

	reset();

	// add the crystal number clicked to a total
	$("#crystal").on("click", "div", function() {
		var crystalClick = $(this).attr('id');
		$("#total").text(total += generator.randomNumbers[crystalClick]);
		checker();
	});

	// console.log(randomNumbers.randomNumber);
	// console.log(randomNumbers.crystal1);
	// console.log(randomNumbers.crystal2);
	// console.log(randomNumbers.crystal3);
	// console.log(randomNumbers.crystal4);


});
