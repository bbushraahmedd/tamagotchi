 

// How I want this to run
// The base levels of the animal will start at 100 always
// Clicking the button would feed the animal and keep the base level of each need to 100
// I want to be able to change the level of the needs when I click the button
// Prework for me    ========================================================================================


// Cached Variables for Buttons
const foodButtonEl = document.querySelector('#food')
const sleepButtonEl = document.querySelector('#sleep')
const playButtonEl = document.querySelector('#play')

// Event Listeners for Buttons
let f = 1;
foodButtonEl.addEventListener('click', e => {
    f++;
    console.log(e, 'buttons working yoo!')
})

let s = 1;
sleepButtonEl.addEventListener('click', e => {
    s++;
    console.log(e, 'buttons working woohoooo!')
})

let p = 1;
playButtonEl.addEventListener('click', e => {
    p++;
    console.log(e, 'buttons working woohooo!')
})


// Functions
// I want to update the score in the DOM every time I hit the button corresponding to the variable
let scores;
init();

function init() {
    scores = {
        food: 0,
        sleep: 0,
        play: 0,
};
};


function render() {
    
}

// =========================================================================================


// =======================================================================================================
// Explaining how its all working

// Cached Variables for Buttons
const foodButtonEl = document.querySelector('#food')
const sleepButtonEl = document.querySelector('#sleep')
const playButtonEl = document.querySelector('#play')

let foodScoreEl = document.querySelector('#foodScore')
let sleepScoreEl = document.querySelector('#sleepScore')
let playScoreEl = document.querySelector('#playScore')


// Event Listeners for Buttons
let f = 0;
foodButtonEl.addEventListener('click', e => {
    f++;
    foodScoreEl.innerText = f;
    console.log(f)
})

// Ive set the base level at 0
// When I click the feed button a few things are happening: 
    // the value of f will go up by 1 which is indicated by the f++
    // Ive also notified the html to update as I click on the button and update it to whatever f is 
// the console.log is indicating that my function is working for me when i inspect and view it in the console

let s = 0;
sleepButtonEl.addEventListener('click', e => {
    s++;
    sleepScoreEl.innerText = s;
    console.log(s)
})

let p = 0;
playButtonEl.addEventListener('click', e => {
    p++;
    playScoreEl.innerText = p;
    console.log(p)
})

