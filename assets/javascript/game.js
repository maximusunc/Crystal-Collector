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
			var audio = $("#sound2")[0];
			audio.play();
			reset();
		// if the total goes above the first random number, you lose
		} else if (total > randomNumbers.randomNumber) {
			console.log("lose");
			loses += 1;
			$("#loses").text(loses);
			var audio = $("#sound3")[0];
			audio.play();
			reset();
		}
	};

	$("#crystal").on("click", "div", function() {
		var crystalClick = $(this).attr('id');
		var audio = $("#sound1")[0];
		audio.play();
		// add the crystal number clicked to a total
		$("#total").text(total += randomNumbers[crystalClick]);
		checker();
	});
	var big = function() {
		$(this).animate({height: "175px", width: "175px"});
	};
	var small = function() {
		$(this).animate({height: "150px", width: "150px"});
	};
	

	// Animation of crystals on hover
	$("#crystal1 img").mouseenter(big);
	$("#crystal2 img").mouseenter(big);
	$("#crystal3 img").mouseenter(big);
	$("#crystal4 img").mouseenter(big);
	$("#crystal1 img").mouseleave(small);
	$("#crystal2 img").mouseleave(small);
	$("#crystal3 img").mouseleave(small);
	$("#crystal4 img").mouseleave(small);
	// End of animation


	reset();


});
