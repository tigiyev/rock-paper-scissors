"use strict"

let userInput = ""
let computerInput = ""

let userScore = 0
let computerScore = 0


// get user input
function getUserInput() {
	userInput = prompt('Your choise?', "scissors").toLowerCase() 	// do a lowercase

	// for debugging
	// userInput = "rock"

	switch (userInput) {
		case "rock":
			console.log("User: rock");
			break;

		case "paper":
			console.log("User: paper");
			break;

		case "scissors":
			console.log("User: scissors");
			break;

		default:
			console.log("Your selection is something else...");
			getUserInput()
			break;
	}
	return userInput;
}


// generate random computer input
function getCoptuterInput() {

	// make math random select 1 of 3 variants
	let randomNumber = Math.floor(Math.random() * 3) + 1

	switch (randomNumber) {
		case 1: console.log("Computer: rock");
			computerInput = "rock"
			break
		case 2: console.log("Computer: paper");
			computerInput = "paper"
			break
		case 3: console.log("Computer: scissors");
			computerInput = "scissors"
			break
		default: console.log("Computer selection error occured...");
			break
	}
	return computerInput;
}


// play round
// increase score for round winner
function playRound(userInput, computerInput) {

	// compare both inputs
	// rock > scissors
	// paper > rock
	// scissors > rock

	if (userInput === computerInput) {
		console.log("Tie!");

	} else if (userInput === "rock" && computerInput === "paper") {
		console.log("Coputer wins!");
		computerScore++
	} else if (userInput === "rock" && computerInput === "scissors") {
		console.log("User wins!");
		userScore++
	}

	else if (userInput === "paper" && computerInput === "rock") {
		console.log("User wins!");
		userScore++
	}
	else if (userInput === "paper" && computerInput === "scissors") {
		console.log("Coputer wins!");
		computerScore++
	}

	else if (userInput === "scissors" && computerInput === "rock") {
		console.log("Coputer wins!");
		computerScore++
	}
	else if (userInput === "scissors" && computerInput === "paper") {
		console.log("User wins!");
		userScore++
	}
}

// show current score
function winCounter() {
	console.log("user: ", userScore, "computer: ", computerScore)
}


// play game untill one of the players has 5 wins
// call the winner
function playGame(rounds) {

	while ((userScore < rounds) && (computerScore < rounds)) {
		playRound(getUserInput(), getCoptuterInput())
		winCounter()
	}

	if (userScore > computerScore) {
		console.log("USER WINS");
	} else console.log("COMPUTER WINS");

}
playGame(5)