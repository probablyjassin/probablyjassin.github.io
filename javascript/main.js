// initiate the game by chosing a random ability to be set as the correct answer
let randomAbility = "";
const abilityOptions = Object.keys(abilities);

function generateRandomAbility() {;
    randomAbility = abilityOptions[Math.floor(Math.random() * abilityOptions.length)];
}

generateRandomAbility();

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
let incorrectGuesses = 8;

// Function to check the guess and update the table
function checkGuess() {
	const rawValue = guessSelect.value;
	// guessSelect.value = ""
	const selectedAbility = rawValue.replace(/([ ])/g, "")
	if (!abilityOptions.includes(selectedAbility)) {
		alert("Please select an ability to guess.");
		return;
	}

	// Create a new row for the guess
	const newRow = abilityTable.insertRow();
	const newGuessCell = newRow.insertCell();
	newGuessCell.textContent = rawValue;

	let allMatch = true; // assume all properties match
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
				allMatch = false; // at least one property doesn't match
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
        --incorrectGuesses;
		incorrectCount.textContent = incorrectGuesses; // update the incorrect guess count on screen
    }

	// If correct, show alert and reset table
	if (correctGuess) {
		setTimeout(() => {
			alert(`${prettyRandom} was the correct ability. Congratulations!`);
			resetTable();
		}, 100);
	}

	// Check if player has reached 8 incorrect guesses
	if (incorrectGuesses < 1) {
		alert(`You have reached 8 incorrect guesses. The correct ability was ${prettyRandom}.`);
		resetTable(); 
		incorrectCount.textContent = `8`;
	}
}

// Function to reset the table and generate a new random ability item
function resetTable() {
    // Clear the table
    while (abilityTable.rows.length > 1) {
        abilityTable.deleteRow(1);
    // Generate a new random ability as correct answer
    generateRandomAbility();

    // Reset the incorrect guesses counter
    incorrectGuesses = 8;
}
}
// Add event listener to reset button
	const resetButton = document.getElementById("reset-button");
	resetButton.addEventListener("click", resetCounter);

	function resetCounter() {
		incorrectGuesses = 8;
		incorrectCount.textContent = `8`;
}

// Select the concede button element
const concedeButton = document.getElementById("concede-button");

// Add event listener to concede button
concedeButton.addEventListener("click", showCorrectAnswer);

// Function to display the correct answer
function showCorrectAnswer() {
  	alert(`The correct ability was ${randomAbility}.`); resetCounter(); resetTable();
}

// FOR DEVELOPEMENT: Select the correct-answer element on screen and display the answer
// const correctAnswer = document.getElementById("correct-answer");
// correctAnswer.textContent += randomAbility;