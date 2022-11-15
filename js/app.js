// Game Page

// Cached Variables for Level Buttons
const foodButtonEl = document.querySelector('#food')
const sleepButtonEl = document.querySelector('#sleep')
const playButtonEl = document.querySelector('#play')

let foodScoreEl = document.querySelector('#foodScore')
let sleepScoreEl = document.querySelector('#sleepScore')
let playScoreEl = document.querySelector('#playScore')

// Render and Init Functions
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

// Event Listeners for Level Buttons
foodButtonEl.addEventListener('click', e => {
    scores.food +=1
    render();
})

sleepButtonEl.addEventListener('click', e => {
    scores.sleep +=5
    render();
});

playButtonEl.addEventListener('click', e => {
    scores.play +=10
    render();
});


// Intervals Decreasing
let foodTimer;
function lowerFoodScore() {
    scores.food -=1;
    render();
    if(scores.food === 50) {
        alert('Your pet is HUNGRY!');
    } else if(scores.food === 10) {
        alert('HURRY AND FEED YOUR PET LIKE NOOOWW!!!!');
    } else if(scores.food === 0) {
        clearInterval(foodTimer);
    }
}

let sleepTimer; 
function lowerSleepScore() {
    scores.sleep -=5;
    render();
    if(scores.sleep === 50) {
        alert('Your pet is TIRED!');
    } else if(scores.sleep === 10) {
        alert('HELLLLOOO?? Your pet is EXHAUSTED. Let them SLEEP!');
    } else if(scores.sleep === 0) {
        clearInterval(sleepTimer);
    }
}

let playTimer;
function lowerPlayScore() {
    scores.play -=10;
    render();
    if(scores.play === 50) {
        alert('Your pet is BORED!');
    } else if(scores.play === 10) {
        alert('Hey! Go and play with your pet. They are dying from BOREDOM!!!');
    } else if(scores.play === 0) {
        clearInterval(playTimer);
    }
}

// Pause and Restart Button
const pauseButtonEl = document.querySelector('#pause')
const resumeButtonEl = document.querySelector('#resume')

pauseButtonEl.addEventListener('click', e => {
    clearInterval(foodTimer);
    clearInterval(sleepTimer);
    clearInterval(playTimer);
    render();
});

function startTimers() {
    foodTimer = setInterval(lowerFoodScore, 1000)
    sleepTimer = setInterval(lowerSleepScore, 5000)
    playTimer = setInterval(lowerPlayScore, 3000)
}

startTimers();

resumeButtonEl.addEventListener('click', e => {
    startTimers();
    render();
});
