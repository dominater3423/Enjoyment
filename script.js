"use strict";

let randomNumber = Math.floor((Math.random() * 30) + 1);

function game(a) {
	var userNumberInput = parseInt(a);
	if (userNumberInput == randomNumber) {
		alert("Congratulations, you guessed the number.");
	} else if (userNumberInput > randomNumber) {
		alert("Lower...")
	} else if (userNumberInput < randomNumber) {
		alert("Higher");
	} else {
		alert("That wasn't the input I asked for!")
	}
} 

function newNumber(b) {
	randomNumber = Math.floor((Math.random() * 30) + 1);	
}
