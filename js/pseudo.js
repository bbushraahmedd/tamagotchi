 
// How I want this to run
// The base levels of the animal will start at 100 always


// Clicking the button would feed the animal and keep the base level of each need to 100

// I want to be able to change the level of the needs when I click the button




//  Variables in the game
// A food variable: let foodLevel = 100
// A sleep variable: let sleepLevel = 100
// A play variable: let playLevel = 100


// Cached Variables for Buttons
const foodButtonEl = document.querySelector('#food')
const sleepButtonEl = document.querySelector('#sleep')
const playButtonEl = document.querySelector('#play')

// Event Listeners for Buttons

foodButtonEl.addEventListener('click', e => {
    console.log(e, 'buttons working yoo!')
})

sleepButtonEl.addEventListener('click', e => {
    console.log(e, 'buttons working woohoooo!')
})

playButtonEl.addEventListener('click', e => {
    console.log(e, 'buttons working woohooo!')
})






const foodScoreEl = document.querySelector('#foodScore')



// Functions
// I want to update the score in the DOM every time I hit the button corresponding to the variable

function changeFoodLevel(newFoodLevel) {
    foodLevel = newFoodLevel
    return foodLevel
}

changeFoodLevel(56)
console.log(foodLevel, "new food level")


