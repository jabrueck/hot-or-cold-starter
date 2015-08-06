//set up counter for guesses
var count = 0;
var number;

//count the number of guesses
function countUp(){
	count++; 
	$('#count').text(count);
};

//evaluate guess and give response
function validateGuess(guess){
	var diff;
	var playerGuess = parseInt(guess);
	
	if (guess == number){
		$("#feedback").text("That's the number!!");
	} else if (playerGuess > number) {
		diff = playerGuess - number;
	} else if (playerGuess < number) {
		diff = number - playerGuess;
	}
	if (diff >= 1 && diff <= 10) {
		$("#feedback").text("You're on fire!");
	} else if (diff < 10 && diff <= 20){
		$("#feedback").text("Hot, hot, hot!");
	} else if (diff < 20 && diff <= 30){
		$("#feedback").text("Warming up.");
	} else if (diff < 30 && diff <= 50){
		$("#feedback").text("Pretty cold.");
	} else if ( diff > 50){
		$("#feedback").text("Freezing cold!");
	}
};

//generate a random number
function makeNumber(){
	number = Math.floor((Math.random() * 100) + 1);
};

$(document).ready(function(){

	makeNumber();
	console.log(number);
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	//make guess button count
  	$("#guessButton").click(function(e){
  		e.preventDefault();
  		var guess = $("#userGuess").val();
  		var guessEl = '<li>' + guess + '</li>';
  		$('#guessList').append(guessEl);
  		$('#userGuess').val('');
  		countUp();
  		validateGuess(guess);
  	});

  	//start new game
 	$(".new").on('click', function(){
 		window.location.reload(true);
 	});
});

