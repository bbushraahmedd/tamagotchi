// Game Page

// Cached Variables for Buttons
const foodButtonEl = document.querySelector('#food')
const sleepButtonEl = document.querySelector('#sleep')
const playButtonEl = document.querySelector('#play')

let foodScoreEl = document.querySelector('#foodScore')
let sleepScoreEl = document.querySelector('#sleepScore')
let playScoreEl = document.querySelector('#playScore')

// Event Listeners for Buttons
foodButtonEl.addEventListener('click', e => {
    scores.food +=1
    render();
})

sleepButtonEl.addEventListener('click', e => {
    scores.sleep +=1
    render();
});

playButtonEl.addEventListener('click', e => {
    scores.play +=1
    render();
});


let scores;
init();

function init() {
    scores = {
        food: 100,
        sleep: 100,
        play: 100
    };
    render();
};

function render() {
    foodScoreEl.innerText = `Food Level: ${scores.food}`;
    sleepScoreEl.innerText = `Sleep Level: ${scores.sleep}`;
    playScoreEl.innerText = `Play Level: ${scores.play}`;
}

// Intervals Decreasing
let foodTimer = setInterval(lowerFoodScore, 1000)
function lowerFoodScore() {
    scores.food -=1;
    render();
    if(scores.food === 0) {
        clearInterval(foodTimer);
    }
}

let sleepTimer = setInterval(lowerSleepScore, 5000)
function lowerSleepScore() {
    scores.sleep -=7;
    render();
    if(scores.sleep === 0) {
        clearInterval(sleepTimer);
    }
}

let playTimer = setInterval(lowerPlayScore, 3000)
function lowerplayScore() {
    scores.play -=3;
    render();
    if(scores.play === 0) {
        clearInterval(playTimer);
    }
}