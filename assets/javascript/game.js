$(document).ready(function() {
var wins = 0;
var loses = 0;
var total = 0;
var randomNumbers = new Object();

	// generate random numbers for 4 crystals between 1 and 12
	var rand = function() {
		return Math.ceil(Math.random()* 12 + 1);
	};
	var randomBigNumber = function() {
		return Math.ceil(Math.random()* 101 + 19);
	};
	var reset = function() {
		total = 0;
		$("#total").text(total);
		generator();
	};
	var generator = function() {
		randomNumbers = {
			// generate a random number between 19 and 120
			randomNumber: randomBigNumber(),
			"crystal1": rand(),
			"crystal2": rand(),
			"crystal3": rand(),
			"crystal4": rand(),
		};
		$("#randomNumber").text(randomNumbers.randomNumber);
		console.log(randomNumbers.randomNumber);
		console.log(randomNumbers.crystal1);
		console.log(randomNumbers.crystal2);
		console.log(randomNumbers.crystal3);
		console.log(randomNumbers.crystal4);
	};


	var checker = function() {
		// if the total equals the first random number, you win
		if (total == randomNumbers.randomNumber) {
			console.log("win");
			wins += 1;
			$("#wins").text(wins);
			reset();
		// if the total goes above the first random number, you lose
		} else if (total > randomNumbers.randomNumber) {
			console.log("lose");
			loses += 1;
			$("#loses").text(loses);
			reset();
		}
	};
	$("#crystal1 img").mouseenter(function() {
		$(this).animate({height: "175px", width: "175px"});
	});
	$("#crystal2 img").mouseenter(function() {
		$(this).animate({height: "175px", width: "175px"});
	});
	$("#crystal3 img").mouseenter(function() {
		$(this).animate({height: "175px", width: "175px"});
	});
	$("#crystal4 img").mouseenter(function() {
		$(this).animate({height: "175px", width: "175px"});
	});
	$("#crystal1 img").mouseleave(function() {
		$(this).animate({height: "150px", width: "150px"});
	});
	$("#crystal2 img").mouseleave(function() {
		$(this).animate({height: "150px", width: "150px"});
	});
	$("#crystal3 img").mouseleave(function() {
		$(this).animate({height: "150px", width: "150px"});
	});
	$("#crystal4 img").mouseleave(function() {
		$(this).animate({height: "150px", width: "150px"});
	});
	$("#crystal").on("click", "div", function() {
		var crystalClick = $(this).attr('id');
		// add the crystal number clicked to a total
		$("#total").text(total += randomNumbers[crystalClick]);
		checker();
	});

	reset();


});
