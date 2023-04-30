// Get todays date
const currentDate = new Date();
const day = currentDate.getDate().toString().padStart(2, '0');
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const year = currentDate.getFullYear().toString();
const today = `${day}/${month}/${year}`;
console.log(today);

// Generate daily abilities
var myrng = new Math.seedrandom(today);
abilityOptions[Math.floor(myrng() * abilityOptions.length)]