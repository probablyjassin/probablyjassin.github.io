// This is the game's main code

// Focus the input textfield for the player to start guessing immediately
document.getElementById("guess-input").focus()
// Defaults to daily mode
var mode = "daily"
// Unless User switches to endless
const modeButton = document.getElementById("modeButton")
modeButton.addEventListener("click", function() {
	switchToEndless()
})
function switchToEndless() {
	// Clear the table
	mode = "endless"
	document.getElementById("dailyDiv").style.display = 'none';
	document.getElementById("timer").style.display = 'none';
	document.getElementById("dailyText").style.display = 'none';
	document.getElementById("modeButton").style.display = 'none';
	document.getElementById("daily").style.display = 'none';
	document.getElementById("endless").style.display = 'initial';
	document.getElementById("buttonsdiv").style.display = 'inherit'
	document.getElementById("guess-input").style.display = 'initial'
	document.getElementById("incorrect-guesses").style.display = 'inherit';
	// Restart game
	resetGame()
	// Focus on the input field to start guessing immediately; after delay not to trigger the tet input
	setTimeout(() => {
		document.getElementById("guess-input").focus();
	}, 50);
}
//Hide the corresponding title
if (mode === "daily") {
	document.getElementById("endless").style.display = 'none';
}
if (mode === "endless") {
	document.getElementById("daily").style.display = 'none';
}

// Start by making the table on screen.
// Array of all the properties that exist are predefined in abilities.js

var propertiesToDisplay = []; // Array of the properties the game will use

function randomizeTable() {
	// New: Chose 5 random properties to be displayed to the player each game
	propertiesToDisplay.length = 0; // Reset from past games
	// Get five random indices from allProperties
	const randomIndices = [];
	while (randomIndices.length < 6) {
	const randomIndex = Math.floor(Math.random() * allProperties.length);
		if (!randomIndices.includes(randomIndex)) {
			randomIndices.push(randomIndex);
		}
	}
	// Sort the indices in ascending order to preserve the order of elements 
	// (Important, because the properties later get added in this fixed order)
	randomIndices.sort();
	// Add the selected elements to propertiesToDisplay in the original order
	randomIndices.forEach(index => {
		propertiesToDisplay.push(allProperties[index]);
	});
	return propertiesToDisplay;
}
if (mode === 'daily') {
	propertiesToDisplay = allProperties
}
if (mode === 'endless') {
	randomizeTable()
}

function makeTable() {
	document.getElementById("ability-table").deleteTHead(); // Clear head from previous games
	// Find the table from the HTML
	var table = document.getElementById("ability-table");
	// Create an empty <thead> element and add it to the table:
	var header = table.createTHead();
	// Create a new <tr> element and add it to the <thead>:
	var row = header.insertRow(0);
	// Add a first cell with the text "Ability":
	var cell = row.insertCell(0);cell.innerHTML = "<b>Ability</b>";
	// For each property in abilitiesToDisplay, insert a new cell (<th>) into the new <tr> element:
	propertiesToDisplay.forEach((property) => {
		var cell = row.insertCell(-1);
		cell.innerHTML = "<b>" + property + "</b>";
	});
}
makeTable()

// Get time until next day, counter until next daily game
// Counter until the next day 
var timer = document.getElementById("timer");
document.getElementById("dailyDiv").style.display = 'none'; // (hide by default)
document.getElementById("timer").style.display = 'none';
document.getElementById("dailyText").style.display = 'none';
var tomorrow = ''
setInterval(function(){ 
  var toDate = new Date();
  var tomorrow = new Date();
  tomorrow.setHours(24,0,0,0);
  var diffMS=tomorrow.getTime()/1000-toDate.getTime()/1000;
  var diffHr=Math.floor(diffMS/3600);
  diffMS=diffMS-diffHr*3600;
  var diffMi=Math.floor(diffMS/60);
  diffMS=diffMS-diffMi*60;
  var diffS=Math.floor(diffMS);
  var result=((diffHr<10)?"0"+diffHr:diffHr);
  result+=" Hours "+((diffMi<10)?"0"+diffMi:diffMi);
  result+=" Minutes "+((diffS<10)?"0"+diffS:diffS) + " Seconds" ;
  timer.innerHTML="Time until the next: " + result;
  return tomorrow
},1000);
// Timestamp for cookie expire
var nextday = new Date();
nextday.setHours(24,0,0,0);
// Chosing the ability that is the correct answer
// Get date for daily mode
// Get todays date
const currentDate = new Date();
const day = currentDate.getDate().toString().padStart(2, '0');
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const year = currentDate.getFullYear().toString();
const today = `${day}/${month}/${year}`;
console.log(today);

// Initiate the game by chosing a random ability to be set as the correct answer
let randomAbility = "";
const abilityOptions = Object.keys(abilities);
function generateRandomAbility() {
    randomAbility = abilityOptions[Math.floor(Math.random() * abilityOptions.length)];
	if (abilitiesToExclude.includes(randomAbility)) {
		generateDailyAbility()
	}
}
// Generate daily abilities using the date as seed
function generateDailyAbility() {
	var myrng = new Math.seedrandom(today);
	randomAbility = abilityOptions[Math.floor(myrng() * abilityOptions.length)]
}

if (mode === "endless") {generateRandomAbility();}
if (mode === "daily") {generateDailyAbility()}

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

// Initialize prettyRandom as text that is the correct ability, but with spaces, for display
var prettyRandom = ''

// Function to check the player's guess and update the table
function checkGuess() {
	const rawValue = guessSelect.value;
	const selectedAbility = rawValue.replace(/([ ])/g, "")
	if (!abilityOptions.includes(selectedAbility)) {
		popup("Please select an ability to guess.")
		return;
	}

	// Update prettyRandom
	prettyRandom = randomAbility.replace(/([A-Z0-9])/g, ' $1')

	// Create a new row for the guess
	const newRow = abilityTable.insertRow();
	const newGuessCell = newRow.insertCell();
	newGuessCell.textContent = rawValue;
	// Add icon image
	const img = document.createElement("img");	
	img.src = abilities[selectedAbility].Image;
	img.width = "40";
    img.height = "40";
	img.style.marginLeft = "200";
	img.style.verticalAlign = "middle";
	newGuessCell.appendChild(img);
		
	for (let i = 0; i < propertiesToDisplay.length; i++) {
		const property = propertiesToDisplay[i];
		const newValueCell = newRow.insertCell();
		newValueCell.textContent = abilities[selectedAbility][property];
		
		if (abilities[selectedAbility][property] === abilities[randomAbility][property]) {
			newValueCell.classList.add("correct");
		} else {
			// Check if there is any overlap between the guessed and correct values
			const guessedValues = abilities[selectedAbility][property]
			.split(", ").join("|")
			.split("-").join("|")
			.split("|");
			const correctValues = abilities[randomAbility][property]
			.split(", ").join("|")
			.split("-").join("|")
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
			} 
			else {
				newValueCell.classList.add("incorrect");
			}
		}
	}

	// Initialize correctGuess variable
	let correctGuess = false;

	// Check if player has guessed the correct ability
	if (selectedAbility === randomAbility) {
		correctGuess = true;
	}
    else {
        ++incorrectGuesses;
		// Update the incorrect guess count on screen
		incorrectCount.textContent = incorrectGuesses; 
    }

	// If correct, show popup and show reset button
	if (correctGuess) {
		gameEnd()
		// Save Incorrect Guesses To Cookies
		saveIncorrectGuessesToCookie()
		setTimeout(() => {
			popup(`${prettyRandom} was the correct ability. Congratulations!`)
		}, 100);
		
	}

	// Check if player has reached 8 incorrect guesses
	if (incorrectGuesses >= 8) {
		incorrectGuesses = 8
		saveIncorrectGuessesToCookie()
		incorrectCount.textContent = `8`
		gameEnd()
		setTimeout(() => {
			popup(`You have reached 8 incorrect guesses.` +
			`The correct ability was ${prettyRandom}.`)
			showAnswer()
			// Save Incorrect Guesses To Cookies
		}, 100);
	}
}
// Pressing Enter in the text box should also submit the guess
const node = document.getElementsByClassName("choicer")[0];
node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        checkGuess()
    }
});

// Function to fill in the  correct answer in blue after the player loses the game 
// Create a new row for the guess
function showAnswer() {
	console.log("WIP, would fill the correct answer now")
	
	window.scrollTo(0, 0); // Then also scroll to the very top of the page
}

// Hide reset button by default
document.getElementById("reset-button").style.display = 'none';
// Add event listener to reset button
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", function() {
	resetGame()
	setTimeout(() => {
		document.getElementById("guess-input").focus()
	}, 100);
});

// Things to do after the game ended by winning, conceding or losing
function gameEnd() {
	// Disable guess inputs and make them greyed out until game is restarted
	node.disabled = true;
	node.style.backgroundColor = 'grey';
	document.getElementById("concede-button").disabled = true;
	document.getElementById("concede-button").style.backgroundColor = 'grey';
	document.getElementById("submit-button").disabled = true;
	document.getElementById("submit-button").style.backgroundColor = 'grey';
	// Remember the completion of the daily game
	if (mode === 'daily') {
		document.cookie = 'dailyComplete=true;expires='+nextday.toUTCString()+';path=/' + "Domain=.jassin.aouani.de;";
		// Show contents for the completion of the daily game
		document.getElementById("dailyText").style.display = 'initial';
		document.getElementById("timer").style.display = 'initial';
		document.getElementById("dailyDiv").style.display = 'initial';
	}
	// Show the reset button; Unless we're in daily mode
	if (mode !== 'daily') {
	document.getElementById("reset-button").style.display = 'initial';
	}	
	if (mode === 'endless') {}
}

// Function to reset the game
function resetGame() {
	// Hide replay button again
	document.getElementById("reset-button").style.display = 'none';

	// Re-enable guess inputs and change back their background color
	node.disabled = false;
	node.style.backgroundColor = '#2a2a2a';
	document.getElementById("concede-button").disabled = false;
	document.getElementById("concede-button").style.backgroundColor = '#2a2a2a';
	document.getElementById("submit-button").disabled = false;
	document.getElementById("submit-button").style.backgroundColor = '#2a2a2a';

	// Clear the table
	while (abilityTable.rows.length > 1) {
		abilityTable.deleteRow(1);
	}
	// Generate a new random ability as correct answer
	generateRandomAbility();

	// Regenerate the table to have new random properties
	propertiesToDisplay = [];
	randomizeTable()
	makeTable()

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
	if (incorrectGuesses === 0) {
		popup(`You didn't even guess anything yet`)
	}
	else {
		document.getElementById("confirm-popup").style.display = 'initial';
		document.getElementById("confirmButton").focus();
	}
})
confirmButton.addEventListener("click", function() {
	document.getElementById("confirm-popup").style.display = 'none';
	incorrectGuesses = "C"
	saveIncorrectGuessesToCookie();
	showAnswer();
	showCorrectAnswer();
	gameEnd();
});
cancelButton.addEventListener("click", function() {
	document.getElementById("confirm-popup").style.display = 'none';
})

// Function to display the correct answer
function showCorrectAnswer() {
	if (incorrectGuesses === 0) {return false}
	else {
		gameEnd()
		popup(`The correct ability was ${randomAbility}.`)
	}
}

// Select the resetstats button element
const resetstatsButton = document.getElementById("resetstats");

// Add event listener to resetstats button in statistic
resetstatsButton.addEventListener("click", function() {
	setCookie("incorrectGuessesArray", '')
	closestat()
});

//Function to show messages for events (lost/won/conceded game, ...)
function popup(message) {
	document.getElementById("end-popup").style.display = 'initial'
	document.getElementById("end-popup p").innerHTML = message
	document.getElementById("closeBtn").focus()
}
// Function to hide the popup
function closeEndPopup() {
	document.getElementById("end-popup").style.display = 'none'
	document.getElementById("end-popup p").innerHTML = "---"
	setTimeout(() => {
		document.getElementById("guess-input").focus()
	}, 100);
	// focus on the play again button if it appeared
	document.getElementById("reset-button").focus()
}
// Listen to the close button
document.getElementById("closeBtn").addEventListener("click", function() {
	closeEndPopup()
});

// If the daily is already done, hide game elements and show the timer
function dailyComplete() {
	if (getCookie("dailyComplete") === 'true') {
		document.getElementById("dailyText").style.display = 'initial';
		document.getElementById("timer").style.display = 'initial';
		document.getElementById("dailyDiv").style.display = 'initial';
		document.getElementById("buttonsdiv").style.display = 'none';
		document.getElementById("guess-input").style.display = 'none';
		document.getElementById("incorrect-guesses").style.display = 'none';
		// Focus on the button to go to endless mode
		document.getElementById("modeButton").focus()
		
	}
}
dailyComplete()

// FOR DEVELOPEMENT: Select the correct-answer element on screen and display the answer
// const correctAnswer = document.getElementById("correct-answer");
// correctAnswer.textContent += randomAbility;