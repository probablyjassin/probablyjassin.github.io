// Initiate the game by chosing a random ability to be set as the correct answer
let randomAbility = "";
const abilityOptions = Object.keys(abilities);
function generateRandomAbility() {;
    randomAbility = abilityOptions[Math.floor(Math.random() * abilityOptions.length)];
}
generateRandomAbility();

// Read the guessable options from the list of abilities
const guessTable = document.getElementById("guess-select")
for (const iterator of abilityOptions) {
	var option = document.createElement("option")
	option.value = iterator.replace(/([A-Z0-9])/g, ' $1')
	guessTable.appendChild(option)
}

// Select the guess select and ability table elements
const guessSelect = document.getElementById("guess-input");
const abilityTable = document.getElementById("ability-table");

// Select the incorrect guess counter element
const incorrectCount = document.getElementById("incorrect-count");

// Initialize the counter for incorrect guesses
let incorrectGuesses = 0;

// Function to check the player's guess and update the table
function checkGuess() {
	const rawValue = guessSelect.value;
	const selectedAbility = rawValue.replace(/([ ])/g, "")
	if (!abilityOptions.includes(selectedAbility)) {
		alert("Please select an ability to guess.");
		return;
	}

	// Create a new row for the guess
	const newRow = abilityTable.insertRow();
	const newGuessCell = newRow.insertCell();
	newGuessCell.textContent = rawValue;

	for (let property in abilities[randomAbility]) {
		const newValueCell = newRow.insertCell();
		newValueCell.textContent = abilities[selectedAbility][property];

		if (abilities[selectedAbility][property] === abilities[randomAbility][property]) {
			newValueCell.classList.add("correct");
		} else {
			// Check if there is any overlap between the guessed and correct values
			const guessedValues = abilities[selectedAbility][property].split(', ').join('|').split('-').join('|').split('|');
			const correctValues = abilities[randomAbility][property].split(', ').join('|').split('-').join('|').split('|');
			let partialMatch = false;
			for (let i = 0; i < guessedValues.length; i++) {
				if (correctValues.includes(guessedValues[i])) {
					partialMatch = true;
					break;
				}
			}
			if (partialMatch) {
				newValueCell.classList.add("partial");
			} else {
				newValueCell.classList.add("incorrect");
			}
		}
	}

	// Initialize correctGuess variable
	let correctGuess = false;

	const prettyRandom = randomAbility.replace(/([A-Z0-9])/g, ' $1')

	// Check if player has guessed the correct ability
	if (selectedAbility === randomAbility) {
		correctGuess = true;
	}
    else {
        ++incorrectGuesses;
		// Update the incorrect guess count on screen
		incorrectCount.textContent = incorrectGuesses; 
    }

	// If correct, show alert and reset table
	if (correctGuess) {
		// Save Incorrect Guesses To Cookies
		saveIncorrectGuessesToCookie()
		setTimeout(() => {
			alert(`${prettyRandom} was the correct ability. Congratulations!`);
			resetGame();
		}, 100);
	}

	// Check if player has reached 8 incorrect guesses
	if (incorrectGuesses >= 8) {
		incorrectGuesses = 8
		saveIncorrectGuessesToCookie()
		incorrectCount.textContent = `8`
		setTimeout(() => {
			alert(`You have reached 8 incorrect guesses. The correct ability was ${prettyRandom}.`);
			resetGame(); 
			// Save Incorrect Guesses To Cookies
			incorrectCount.textContent = `0`;
		}, 100);
	}
}

// Add event listener to reset button
	const resetButton = document.getElementById("reset-button");
	resetButton.addEventListener("click", resetGame);

// Function to reset the game
function resetGame() {
	// Clear the table
	while (abilityTable.rows.length > 1) {
		abilityTable.deleteRow(1);
	}
	// Show and create the statistics
	makeChart()

	// Generate a new random ability as correct answer
	generateRandomAbility();

	//Reset incorrect guesses
	incorrectGuesses = 0;
	incorrectCount.textContent = `0`;
}

// Select the concede button element
const concedeButton = document.getElementById("concede-button");

// Add event listener to concede button
concedeButton.addEventListener("click", function() {
	if (incorrectGuesses === 0) {return}
	else {
	incorrectGuesses = "C"
	saveIncorrectGuessesToCookie()
	showCorrectAnswer();
	resetGame();
	}	
});

// Function to display the correct answer
function showCorrectAnswer() {
	if (incorrectGuesses === 0) {return false}
	else {
  		alert(`The correct ability was ${randomAbility}.`);
	}
}

// Saving the number of incorrect guesses the player needed into cookies
function saveIncorrectGuessesToCookie() {
	// Get the existing incorrect guesses array from the cookie or create a new empty array
	let incorrectGuessesArray = [getCookie("incorrectGuessesArray")]

	// Add the current incorrect guesses count to the array
	incorrectGuessesArray.push(incorrectGuesses);

	// Save the updated array back into the cookie
	setCookie("incorrectGuessesArray", incorrectGuessesArray);
	console.log(getCookie("incorrectGuessesArray"))
}

// Function to reset cookies
function resetcookies() {
	setCookie("incorrectGuessesArray", '');
	setCookie("cookiesAgreeGe", '');
}
  
// Helper function to set cookies
function setCookie(name, value) {
	if (AINTNOCookie) {console.log("Saving Cookies Was Aborted, Cookies Haven't Been Agreed To")}
	else {
	document.cookie = name + "=" + value + ";path=/";
}}
  
// Helper function to get cookies
function getCookie(name) {
	const cookieString = decodeURIComponent(document.cookie);
	const cookies = cookieString.split(';');
	for (let i = 0; i < cookies.length; i++) {
		let cookie = cookies[i].trim();
		if (cookie.indexOf(name + "=") === 0) {
		return cookie.substring(name.length + 1, cookie.length);
	}
}
	return "";
}


// Select the concede button element
const resetstatsButton = document.getElementById("resetstats");

// Add event listener to resetstats button in statistic
resetstatsButton.addEventListener("click", function() {
	setCookie("incorrectGuessesArray", '')
	closestat()
});


// FOR DEVELOPEMENT: Select the correct-answer element on screen and display the answer
// const correctAnswer = document.getElementById("correct-answer");
// correctAnswer.textContent += randomAbility;