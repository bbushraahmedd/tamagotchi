
// Cached Variables for Level Buttons
const foodButtonEl = document.querySelector('#food')
const sleepButtonEl = document.querySelector('#sleep')
const playButtonEl = document.querySelector('#play')

let foodScoreEl = document.querySelector('#foodScore')
let sleepScoreEl = document.querySelector('#sleepScore')
let playScoreEl = document.querySelector('#playScore')

// Render and Init Functions
// init function wokrs when the page is reloading and it sets all the variables back to wtv baseline you set it at
// render displays wtv HTML code inside the specific HTML element,, shows the output in the browser
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

    stopGame();
}

// Event Listeners for Level Buttons

// I've set the base level at 100 (using the init func)
// When I click any of the needs buttons, a few things are happening: 
        // the value of the keys within the scores object will go up a certain amount, depending on the need
        // Ive also notified the html to update as I click on the button and update it to whatever the keys value is (using the render func)

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
// the functions below do a few things
    // first: its decreasing the needs levels a certain amount depending on the need
    // second: the render func is called so that its updated the DOM and showing that the change in value is occurring
    // third: theres an if statement inside set to where if/when the timer hits 0 two things are happening:
        // 1. the countdown stops (doesnt go past 0 to negative)
        // 2. a modal appears WHEN the needs hit 0 indicating that the players game has ended

let foodTimer;
function lowerFoodScore() {
    scores.food -=1;
    render();
    // if(scores.food === 0) {
    //     clearInterval(foodTimer);
    //     checkEndGame();
    // }
}

let sleepTimer; 
function lowerSleepScore() {
    scores.sleep -=5;
    render();
    // if(scores.sleep === 0) {
    //     clearInterval(sleepTimer);
    //     checkEndGame();
    // }
}

let playTimer;
function lowerPlayScore() {
    scores.play -=10;
    render();
    // if(scores.play === 0) {
    //     clearInterval(playTimer);
    //     checkEndGame();
    // }
}

function stopGame() {
    if (scores.food === 0 || scores.sleep === 0 || scores.play === 0) {
        clearInterval(foodTimer);
        clearInterval(sleepTimer);
        clearInterval(playTimer);
        activateEndGameModal();
        render();
    } else {
        return false
    }
}


// Pause and Restart Button
// the player has the ability to pause and resume the game as needed
    // event listeners and set to where if the computer 'listens' for a 'click' action and then the following things happen
        // pause: the countdowns stop at wtv level player stops it at (using the clearInterval func) and the player can see that actually happening bc of the render func
        // resume: the countdown resumes back from wtv score the player paused at (using the setInterval) and the needs are decreasing by 0.5s, 3s, 4s accordingly

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
    sleepTimer = setInterval(lowerSleepScore, 2000)
    playTimer = setInterval(lowerPlayScore, 5000)
}
// startTimers();
// this functions starts the countdown of the levels depleting

resumeButtonEl.addEventListener('click', e => {
    startTimers();
    render();
});
// hitting the resume button again starts the countdown of the levels and render func updates DOM to show that happening

// Name Modal
// still trying to understand this one but basically 
// when a player hits the 'enter pet name' button, a modal opens to where the player can input a name for their pet and hit 'confirm' --> the name will appear in the middle of the screen then
// i have 3 buttons with the ID 'namebtn' i used q.s.ALL to call all the btns under that ID and then to target a specific button, i used index(es)

const nameButtons = document.querySelectorAll('#namebtn');
const nameModal = document.querySelector('.name');
const backdrop = document.querySelector('.backdrop');

const nameParagraph = document.querySelector('#new-name');
let nameEdit = document.querySelector('.name-input textarea');

let enterName = '';
let editedName = '';

function activateNameModal() {
    nameModal.classList.add('active')
};

function updateName() {
    nameParagraph.textContent = enterName;
    render();
}

function closeName () {
    nameModal.style.display = 'none';
    backdrop.style.display = 'none';
    render();
}
updateName();

nameButtons[2].addEventListener('click', e => {
    nameModal.style.display = 'block'; 
    backdrop.style.display = 'block';
    editedName = enterName;
    nameEdit.value = enterName;
    render();
});
// the display prop allows me to show/hide an element
// this is the confirm button that when the player inputs a new name, the game registers it once the player hits the 'confirm' button

nameButtons[0].addEventListener('click', closeName); 
// used when hitting the cancel button
backdrop.addEventListener('click', closeName);

nameButtons[1].addEventListener('click', e => {
    closeName();
    if (editedName.trim().length > 0) {
        enterName = editedName;
        updateName();
    }
    startTimers();
    render();
});
// user has to enter non-empty value --> if its true, the enterName value updates and nameParagraph updates (using the updateName func)
// this is to exit out of the name modal, if the name entered is less than nothing, the button wont compute and it will stay to wtv the name was input initially


nameEdit.addEventListener('input', e => {
    editedName = nameEdit.value;
    render();
});
// get current value after the user did something and store it in variable 'editedName',, its the value we wanna get when suer hits the confirm btn
// this is giving the player the ability to input wtv name they want inside

// End Game Modal
const section = document.querySelector('section')
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('.close-btn')

overlay.addEventListener('click', e => {
    section.classList.remove('active')
});
// this allows u to exit out of the modal once it appears clicking anywhere on the screen (bc the overlay)

closeBtn.addEventListener('click', e => {
    section.classList.remove('active')
});
// this button allows u to exit out of the modal once it appears


function activateEndGameModal() {
    section.classList.add('active')
 };
//  this function is used to let the modal appear whenever its called on (depending on the condition,, in my case its when any of the scores hit 0)