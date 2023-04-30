// Get todays date
const currentDate = new Date();
const day = currentDate.getDate().toString().padStart(2, '0');
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const year = currentDate.getFullYear().toString();
const today = `${day}/${month}/${year}`;
console.log(today);

// Find the ability corresponding to todays date 
let targetValue = today; let todaysAbility = null;
for (let key in dailies) {  
    if (dailies[key] === targetValue) {
        todaysAbility = key;
      break;
    }
}
console.log(todaysAbility);

