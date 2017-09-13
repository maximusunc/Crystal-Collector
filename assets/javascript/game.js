$(document).ready(function() {
	// generate a random number between 19 and 120
	// generate random numbers for 4 crystals between 1 and 12
	var rand = function() {
		return Math.ceil(Math.random()* 12 + 1);
	};
	var randomNumbers = {
		randomNumber: Math.ceil(Math.random()* 101 + 19),
		"crystal1": rand(),
		"crystal2": rand(),
		"crystal3": rand(),
		"crystal4": rand(),
	}

	$("#randomNumber").text(randomNumbers.randomNumber);
	
	console.log(randomNumbers.randomNumber);
	console.log(randomNumbers.crystal1);
	console.log(randomNumbers.crystal2);
	console.log(randomNumbers.crystal3);
	console.log(randomNumbers.crystal4);
	// add the crystal number clicked to a total
	var total = 0;
	$("#crystal").on("click", function() {
		$("#total").text(total += randomNumbers[this]);
	});
	// if the total equals the first random number, you win
	// if the total goes above the first random number, you lose
});
