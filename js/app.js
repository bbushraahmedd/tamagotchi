

// Welcome Page

// let enterNameUrl = "entername.html";
// document.getElementById("play").onclick = 
// function () {
//     window.location.replace(enterNameUrl);
// }

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



// Game Page
// let foodLevel = 100
// A sleep variable: let sleepLevel = 100
// A play variable: let playLevel = 100


// I want to update the score in the DOM every time I hit the button corresponding to the variable

// function changeFoodLevel(newFoodLevel) {
//     foodLevel = newFoodLevel
//     return foodLevel
// }

// changeFoodLevel(56)
// console.log(foodLevel, "new food level")