// Find a <table> element with id="myTable":
var table = document.getElementById("ability-table");

// Create an empty <thead> element and add it to the table:
var header = table.createTHead();

// Create a new <tr> element and add it to the <thead>:
var row = header.insertRow(0);

// Add a first cell with the text "Ability":
var cell = row.insertCell(0);cell.innerHTML = "<b>Ability</b>";

// For each property in abilitiesToDisplay, insert a new cell (<th>) into the new <tr> element:
const propertiesToDisplay = ["CD", "ICD", "Gauge", "Diameter\/Width", "Shape", "Element", "Blunt"];
propertiesToDisplay.forEach((property) => {
  var cell = row.insertCell(-1);
  cell.innerHTML = "<b>" + property + "</b>";
});


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

	for (let i = 0; i < propertiesToDisplay.length; i++) {
		const property = propertiesToDisplay[i];
		const newValueCell = newRow.insertCell();
		newValueCell.textContent = abilities[selectedAbility][property];
	
		if (abilities[selectedAbility][property] === abilities[randomAbility][property]) {
		  newValueCell.classList.add("correct");
		} else {
		  // Check if there is any overlap between the guessed and correct values
		  const guessedValues = abilities[selectedAbility][property]
			.split(", ")
			.join("|")
			.split("-")
			.join("|")
			.split("|");
		  const correctValues = abilities[randomAbility][property]
			.split(", ")
			.join("|")
			.split("-")
			.join("|")
			.split("|");
		  let partialMatch = false;
		  for (let j = 0; j < guessedValues.length; j++) {
			if (correctValues.includes(guessedValues[j])) {
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
const confirmButton = document.getElementById("confirmButton");
const cancelButton = document.getElementById("cancelButton")

//Confirm popup hidden by default
document.getElementById("confirm-popup").style.display = 'none';

// Add event listener to concede button
concedeButton.addEventListener("click", function() {
	if (incorrectGuesses === 0) {alert(`You didn't even guess anything yet`);}
	else {
		document.getElementById("confirm-popup").style.display = 'initial';
	}
})
confirmButton.addEventListener("click", function() {
	document.getElementById("confirm-popup").style.display = 'none';
	incorrectGuesses = "C"
	saveIncorrectGuessesToCookie()
	showCorrectAnswer();
	resetGame();
});
cancelButton.addEventListener("click", function() {
	document.getElementById("confirm-popup").style.display = 'none';
})

// Function to display the correct answer
function showCorrectAnswer() {
	if (incorrectGuesses === 0) {return false}
	else {
  		alert(`The correct ability was ${randomAbility}.`);
	}
}


// Helper function to set cookies
function setCookie(name, value) {
	if (getCookie("cookiesAgreeGe") !== 'true') {console.log("Saving cookies has been aborted, cookies haven't been agreed to")}
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


// Select the resetstats button element
const resetstatsButton = document.getElementById("resetstats");

// Add event listener to resetstats button in statistic
resetstatsButton.addEventListener("click", function() {
	setCookie("incorrectGuessesArray", '')
	closestat()
});


// FOR DEVELOPEMENT: Select the correct-answer element on screen and display the answer
// const correctAnswer = document.getElementById("correct-answer");
// correctAnswer.textContent += randomAbility;