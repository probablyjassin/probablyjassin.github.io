/* This is the game's main code*/

// hide multiple elements at once
function hideElements(...ids) {
  ids.forEach((id) => {
    document.getElementById(id).style.display = "none";
  });
}
function showElements(...ids) {
  ids.forEach((id) => {
    document.getElementById(id).style.display = "";
  });
}
// Function to change the bg color of multiple elements
function styleElement(hex, ...ids) {
  ids.forEach((id) => {
    document.getElementById(id).style.backgroundColor = hex;
  });
}
hideElements(`popup-changelogs`); // hidden by default
/*------------------------------*/

// Focus the input textfield for the player to start guessing immediately
document.getElementById("guess-input").focus();
// Defaults to daily mode
var mode = "daily";
// Unless User switches to endless
const modeButton = document.getElementById("modeButton");
modeButton.addEventListener("click", function () {
  switchToEndless();
});
function switchToEndless() {
  // Clear the table
  mode = "endless";
  hideElements("dailyDiv", "timer", "dailyText", "modeButton", "daily");
  showElements("endless", "buttonsdiv", "guess-input", "incorrect-guesses");
  // Restart game
  resetGame();
  // Focus on the input field to start guessing immediately; after delay not to trigger the tet input
  setTimeout(() => {
    document.getElementById("guess-input").focus();
  }, 50);
}
//Hide the corresponding title
if (mode === "daily") {
  document.getElementById("endless").style.display = "none";
}
if (mode === "endless") {
  document.getElementById("daily").style.display = "none";
}

// Start by making the table on screen.
// Array of all the properties that exist are predefined in abilities.js

var propertiesToDisplay = []; // Array of the properties the game will use

function randomizeTable() {
  if (mode === 'new') {propertiesToDisplay = allProperties; return;}
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
  randomIndices.forEach((index) => {
    propertiesToDisplay.push(allProperties[index]);
  });
  return propertiesToDisplay;
}
if (mode === "daily") {
  propertiesToDisplay = allProperties;
}
if (mode === "endless") {
  randomizeTable();
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
  var cell = row.insertCell(0);
  cell.innerHTML = "<b>Ability</b>";
  // For each property in abilitiesToDisplay, insert a new cell (<th>) into the new <tr> element:
  propertiesToDisplay.forEach((property) => {
    var cell = row.insertCell(-1);
    cell.innerHTML = "<b>" + property + "</b>";
  });
}
makeTable();

// Get time until next day, counter until next daily game
// Counter until the next day
var timer = document.getElementById("timer");
document.getElementById("dailyDiv").style.display = "none"; // (hide by default)
document.getElementById("timer").style.display = "none";
document.getElementById("dailyText").style.display = "none";
var tomorrow = "";
setInterval(function () {
  var toDate = new Date();
  var tomorrow = new Date();
  tomorrow.setHours(24, 0, 0, 0);
  var diffMS = tomorrow.getTime() / 1000 - toDate.getTime() / 1000;
  var diffHr = Math.floor(diffMS / 3600);
  diffMS = diffMS - diffHr * 3600;
  var diffMi = Math.floor(diffMS / 60);
  diffMS = diffMS - diffMi * 60;
  var diffS = Math.floor(diffMS);
  var result = diffHr < 10 ? "0" + diffHr : diffHr;
  result += " Hours " + (diffMi < 10 ? "0" + diffMi : diffMi);
  result += " Minutes " + (diffS < 10 ? "0" + diffS : diffS) + " Seconds";
  timer.innerHTML = "Time until the next: " + result;
  return tomorrow;
}, 1000);
// Timestamp for cookie expire
var nextday = new Date();
nextday.setHours(24, 0, 0, 0);
// Chosing the ability that is the correct answer
// Get date for daily mode
// Get todays date
const currentDate = new Date();
const day = currentDate.getDate().toString().padStart(2, "0");
const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
const year = currentDate.getFullYear().toString();
const today = `${day}/${month}/${year}`;
console.log(today);

// Initiate the game by chosing a random ability to be set as the correct answer
let randomAbility = "";
const abilityOptions = Object.keys(abilities);
function generateRandomAbility() {
  randomAbility =
    abilityOptions[Math.floor(Math.random() * abilityOptions.length)];
  if (abilitiesToExclude.includes(randomAbility)) {
    generateRandomAbility();
  }
}
// Generate daily abilities using the date as seed
function generateDailyAbility() {
  var myrng = new Math.seedrandom(today);
  randomAbility = abilityOptions[Math.floor(myrng() * abilityOptions.length)];
}

//--------new game mode?
function generateRandomProperty(obj) {
  excludedProperties = ["Image", "Weapon", "Blunt"];
  const keysArray = Object.keys(obj).filter(
    (key) => !excludedProperties.includes(key) && obj[key] !== "???"
  );
  const randomKey = keysArray[Math.floor(Math.random() * keysArray.length)];
  jsonprop = obj[randomKey];
  if (true) jsonprop = jsonprop.split(",")[0].split("-")[0].trim()
  displprop = `${randomKey.charAt(0).toUpperCase() + randomKey.slice(1)}: ${jsonprop}`;
}
//----

if (mode === "endless") {
  generateRandomAbility();
}
if (mode === "daily") {
  generateDailyAbility();
}
if (mode === "new") {
  generateRandomAbility();
  generateRandomProperty(randomAbility);
}

function newMode() {
  propertiesToDisplay = allProperties
  mode = "new";
  hideElements(
    "endless",
    "dailyDiv",
    "timer",
    "dailyText",
    "modeButton",
    "daily",
    "incorrect-guesses"
  );
  showElements("buttonsdiv", "guess-input", "ability-table", "propCounter");
  document.getElementById("propCounter").style.display = "initial"
  resetGame();
  generateRandomAbility();
  console.log(randomAbility, abilities[randomAbility]);
  generateRandomProperty(abilities[randomAbility]);
  console.log(jsonprop, displprop);
  document.getElementById("prop").innerHTML = displprop;
  document.getElementById("proptext").innerHTML =
    "Find an ability with this property!";
  amount = countProps(jsonprop) > 5 ? 5 : countProps(jsonprop)
  console.log(amount)
  document.getElementById("propCount").innerHTML = amount
  propCount = amount
}

// Read the guessable options from the list of abilities
const guessTable = document.getElementById("guess-select");
for (const iterator of abilityOptions) {
  var option = document.createElement("option");
  option.value = iterator.replace(/([A-Z0-9])/g, " $1");
  guessTable.appendChild(option);
}

// Select the guess select and ability table elements
const guessSelect = document.getElementById("guess-input");
const abilityTable = document.getElementById("ability-table");

// Select the incorrect guess counter element
const incorrectCount = document.getElementById("incorrect-count");

// Initialize the counter for incorrect guesses and props (new)
let incorrectGuesses = 0;
let propCount = 0;

// Initialize prettyRandom as text that is the correct ability, but with spaces, for display
var prettyRandom = "";

// Initialize correctGuess variable
let correctGuess = false;

// Function to check the player's guess and update the table
function checkGuess() {
  const rawValue = guessSelect.value;
  const selectedAbility = rawValue.replace(/([ ])/g, "");
  if (mode === "new") {
    correctProperty = checkProps(abilities[selectedAbility]);
    var datalist = document.getElementById("guess-select");
    var inputValue = selectedAbility.replace(/([A-Z0-9])/g, " $1");
    var optionIndex = -1;
    for (var i = 0; i < datalist.options.length; i++) {
      if (datalist.options[i].value === inputValue) {
        optionIndex = i;
        break;
      }
    }
    datalist.removeChild(datalist.options[optionIndex])
  }
  if (!abilityOptions.includes(selectedAbility)) {
    popup("Please select an ability to guess.");
    return;
  }

  // Update prettyRandom
  prettyRandom = randomAbility.replace(/([A-Z0-9])/g, " $1");

  // Create a new row for the guess
  const newRow = abilityTable.insertRow();
  const newGuessCell = newRow.insertCell();
  newGuessCell.textContent = rawValue;
  const img = document.createElement("img");
  img.src = abilities[selectedAbility].Image;
  img.classList.add("icon");
  newGuessCell.appendChild(img);

  for (let i = 0; i < propertiesToDisplay.length; i++) {
    const property = propertiesToDisplay[i];
    const newValueCell = newRow.insertCell();
    newValueCell.textContent = abilities[selectedAbility][property];

    if (mode === 'new') {
      if (correctProperty) {
        newValueCell.classList.add("correct")
      }
      else {newValueCell.classList.add("incorrect")}
      continue
    }
    if (
      abilities[selectedAbility][property] ===
      abilities[randomAbility][property]
    ) {
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

  // Reset correctGuess
  correctGuess = false;

  // Check if player has guessed the correct ability
  if (selectedAbility === randomAbility) {
    correctGuess = true;
  } else {
    ++incorrectGuesses;
    // Update the incorrect guess count on screen
    incorrectCount.textContent = incorrectGuesses;
  }

  if (mode === 'new') {
    if (correctProperty) {
      propCount -= 1
    document.getElementById("propCount").innerHTML = propCount
    if (propCount <= 0) {
      gameEnd()
      popup("Congratulations!")
    }
    }
    else {
    }
    guessSelect.value = ""
    return
  }

  // If correct, show popup and show reset button
  if (correctGuess) {
    gameEnd();
    // Save Incorrect Guesses To Cookies
    saveIncorrectGuessesToCookie();
    setTimeout(() => {
      popup(`${prettyRandom} was the correct ability. Congratulations!`);
    }, 100);
  }

  // Check if player has reached 8 incorrect guesses
  if (incorrectGuesses >= 8) {
    incorrectGuesses = 8;
    saveIncorrectGuessesToCookie();
    incorrectCount.textContent = `8`;
    gameEnd();
    setTimeout(() => {
      popup(
        `You have reached 8 incorrect guesses.` +
          `The correct ability was ${prettyRandom}.`
      );
      showAnswer();
      // Save Incorrect Guesses To Cookies
    }, 100);
  }
}

function countProps(property) {
	const regex = new RegExp(`\\b\\d*${property}\\b(?!\\d)`, "g");
	let count = 0;
	for (let zaAbility in abilities) {
	  if (abilitiesToExclude.includes(zaAbility)) {
		  continue;
	  }
	  const ability = abilities[zaAbility];
	  for (const value of Object.values(ability)) {
		const matches = value.match(regex) || [];
		for (const match of matches) {
		  count++;
		}
	  }
	}
	return count;
}
function checkProps(characterObject) {
	function hasProp(characterObject) {
	  valueToFind = jsonprop;
	  for (const key in characterObject) {
		const value = characterObject[key];
  
		if (typeof value === "object") {
		  if (hasProp(value, valueToFind)) {
			return true;
		  }
		} else {
		  if (value === valueToFind) {
			return true;
		  }
		  if (typeof value === "string" && value.includes(", ")) {
			const values = value.split(", ");
			for (const val of values) {
			  if (val.includes("-")) {
				const [startVal, endVal] = val.split("-");
				const startValue = getValueAsNumberOrString(startVal);
				const endValue = getValueAsNumberOrString(endVal);
				const targetValue = getValueAsNumberOrString(valueToFind);
  
				if (
				  targetValue !== null &&
				  startValue !== null &&
				  endValue !== null
				) {
				  if (targetValue >= startValue && targetValue <= endValue) {
					return true;
				  }
				}
			  } else {
				const intValue = getValueAsNumberOrString(val);
				const targetValue = getValueAsNumberOrString(valueToFind);
				if (
				  intValue !== null &&
				  targetValue !== null &&
				  intValue === targetValue
				) {
				  return true;
				}
			  }
			}
		  }
		}
	  }
	  return false;
	}
  
	function getValueAsNumberOrString(value) {
	  if (value.toLowerCase() === "none") {
		return "None"; // Return a unique string for "None"
	  }
  
	  const numValue = parseInt(value);
	  if (!isNaN(numValue)) {
		return numValue;
	  }
	  return value;
	}
  
	return hasProp(characterObject);
}

// Pressing Enter in the text box should also submit the guess
const node = document.getElementsByClassName("choicer")[0];
node.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});

// Function to fill in the  correct answer in blue after the player loses the game
// Create a new row for the guess
function showAnswer() {
  console.log("WIP, would fill the correct answer now");

  window.scrollTo(0, 0); // Then also scroll to the very top of the page
}

// Hide reset button by default
document.getElementById("reset-button").style.display = "none";
// Add event listener to reset button
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", function () {
  resetGame();
  setTimeout(() => {
    document.getElementById("guess-input").focus();
  }, 100);
});

// Things to do after the game ended by winning, conceding or losing
function gameEnd() {
  // Disable guess inputs and make them greyed out until game is restarted
  node.disabled = true;
  node.style.backgroundColor = "grey";
  document.getElementById("concede-button").disabled = true;
  document.getElementById("concede-button").style.backgroundColor = "grey";
  document.getElementById("submit-button").disabled = true;
  document.getElementById("submit-button").style.backgroundColor = "grey";
  // Remember the completion of the daily game
  if (mode === "daily") {
    document.cookie =
      "dailyComplete=true;expires=" + nextday.toUTCString() + ";path=/";
    // Show contents for the completion of the daily game
    document.getElementById("dailyText").style.display = "initial";
    document.getElementById("timer").style.display = "initial";
    document.getElementById("dailyDiv").style.display = "initial";
  }
  // Show the reset button; Unless we're in daily mode
  if (mode !== "daily") {
    document.getElementById("reset-button").style.display = "initial";
  }
  if (mode === "endless") {
    //pass
  }
  // If the game was lost, reveal the correct answer in the table as well
  if (!correctGuess && mode != "new") {
    revealAnswer();
  }
}
// Function to disable multiple buttons
function disableElements(...ids) {
  ids.forEach((id) => {
    document.getElementById(id).disabled = true;
  });
}
// Function to re-enable buttons
function enableElements(...ids) {
  ids.forEach((id) => {
    document.getElementById(id).disabled = false;
  });
}

// Function to reset the game
function resetGame() {
  closeEndPopup();
  // Hide replay button again
  document.getElementById("reset-button").style.display = "none";

  // Re-enable guess inputs and change back their background color
  node.disabled = false;
  node.style.backgroundColor = "#2a2a2a";
  document.getElementById("concede-button").disabled = false;
  document.getElementById("concede-button").style.backgroundColor = "#2a2a2a";
  document.getElementById("submit-button").disabled = false;
  document.getElementById("submit-button").style.backgroundColor = "#2a2a2a";

  // Clear the table
  while (abilityTable.rows.length > 1) {
    abilityTable.deleteRow(1);
  }
  // Generate a new random ability as correct answer
  generateRandomAbility();

  // Regenerate the table to have new random properties
  propertiesToDisplay = [];
  randomizeTable();
  makeTable();

  //Reset incorrect guesses
  incorrectGuesses = 0;
  incorrectCount.textContent = `0`;
}

// Select the concede button element
const concedeButton = document.getElementById("concede-button");
const confirmButton = document.getElementById("confirmButton");
const cancelButton = document.getElementById("cancelButton");

//Confirm popup hidden by default
document.getElementById("confirm-popup").style.display = "none";

// Add event listener to concede button
concedeButton.addEventListener("click", function () {
  if (incorrectGuesses === 0) {
    popup(`You didn't even guess anything yet`);
  } else {
    document.getElementById("confirm-popup").style.display = "initial";
    document.getElementById("confirmButton").focus();
  }
});
confirmButton.addEventListener("click", function () {
  document.getElementById("confirm-popup").style.display = "none";
  incorrectGuesses = "C";
  saveIncorrectGuessesToCookie();
  showAnswer();
  gameEnd();
  popup(`The correct ability was ${randomAbility}.`);
});
cancelButton.addEventListener("click", function () {
  document.getElementById("confirm-popup").style.display = "none";
});
// Select the resetstats button element
const resetstatsButton = document.getElementById("resetstats");

// Add event listener to resetstats button in statistic
resetstatsButton.addEventListener("click", function () {
  resetcookies();
  closestat();
  location.reload();
});

//Function to show messages for events (lost/won/conceded game, ...)
function popup(message) {
  document.getElementById("end-popup").style.display = "initial";
  document.getElementById("end-popup p").innerHTML = message;
  document.getElementById("closeBtn").focus();
}
// Function to hide the popup
function closeEndPopup() {
  document.getElementById("end-popup").style.display = "none";
  document.getElementById("end-popup p").innerHTML = "---";
  setTimeout(() => {
    document.getElementById("guess-input").focus();
  }, 100);
  // focus on the play again button if it appeared
  document.getElementById("reset-button").focus();
}
// Listen to the close button
document.getElementById("closeBtn").addEventListener("click", function () {
  closeEndPopup();
});

// If the daily is already done, hide game elements and show the timer
function dailyComplete() {
  if (getCookie("dailyComplete") === "true") {
    hideElements("buttonsdiv", "guess-input", "incorrect-guesses");
    showElements("dailyText", "timer", "dailyDiv");

    // Focus on the button to go to endless mode
    document.getElementById("modeButton").focus();
  }
}
dailyComplete();

// surely this will make music autoplay work
document.addEventListener("click", musicPlay);
function musicPlay() {
  document.getElementById("musicPlay").play();
  document.removeEventListener("click", musicPlay);
}

// Function to fill the correct answer in blue
function revealAnswer() {
  console.log("revealanswer is running");
  const rawValue = randomAbility;

  // Update prettyRandom
  prettyRandom = randomAbility.replace(/([A-Z0-9])/g, " $1");

  // Create a new row for the guess
  const newRow = abilityTable.insertRow(1);
  const newGuessCell = newRow.insertCell();
  newGuessCell.textContent = rawValue;
  // Add icon image
  const img = document.createElement("img");
  img.src = abilities[randomAbility].Image;
  img.classList.add("icon");
  newGuessCell.appendChild(img);

  for (let i = 0; i < propertiesToDisplay.length; i++) {
    const property = propertiesToDisplay[i];
    const newValueCell = newRow.insertCell();
    newValueCell.textContent = abilities[randomAbility][property];
    newValueCell.classList.add("solution");
  }
}
// FOR DEVELOPEMENT: Select the correct-answer element on screen and display the answer
// const correctAnswer = document.getElementById("correct-answer");
// correctAnswer.textContent += randomAbility;
/* hide survery by default */
//document.getElementById('survey-popup').style.display = 'none'