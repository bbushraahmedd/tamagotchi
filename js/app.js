// Game Page

// Cached Variables for Level Buttons
const foodButtonEl = document.querySelector('#food')
const sleepButtonEl = document.querySelector('#sleep')
const playButtonEl = document.querySelector('#play')

let foodScoreEl = document.querySelector('#foodScore')
let sleepScoreEl = document.querySelector('#sleepScore')
let playScoreEl = document.querySelector('#playScore')

// Image Popup
// const pusheenImages = {
//     eat: {
//         imageURL: 'https://i.ibb.co/8YBWy0M/pusheen-eat-html.png'
//      },
//      exercise: { 
//         imageURL: 'https://i.ibb.co/d2y7vSq/pusheen-exercise-html.png'
//      },
//      sleep: { 
//         imageURL: 'https://i.ibb.co/KNSsgpT/pusheen-sleep-html.png'
//     },
//     ramen: {
//         imageURL: 'https://i.ibb.co/K0Vb53Z/pusheen-ramen-html.png'
//     },
//     plays: {
//         imageURL: 'https://i.ibb.co/98vp6ns/pusheen-play-html.png'
//     },
// }


// pusheenImages.eat.displayImageEl.src = pusheenImages[eat].imageURL;

function showImages() {
    if(scores.play === 50) {
        
    } else if(scores.play === 10) {
        
    } else if(scores.play === 0) {
        
    }
    render();
}


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
    if(scores.food === 0) {
        clearInterval(foodTimer);
    }
}


let sleepTimer; 
function lowerSleepScore() {
    scores.sleep -=5;
    render();
    if(scores.sleep === 0) {
        clearInterval(sleepTimer);
    }
}

let playTimer;
function lowerPlayScore() {
    scores.play -=10;
    render();
    if(scores.play === 0) {
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
    foodTimer = setInterval(lowerFoodScore, 500)
    sleepTimer = setInterval(lowerSleepScore, 3000)
    playTimer = setInterval(lowerPlayScore, 5000)
}

startTimers();

resumeButtonEl.addEventListener('click', e => {
    startTimers();
    render();
});

// Name Modal
const nameButtons = document.querySelectorAll('#namebtn');
const nameModal = document.querySelector('.name');
const backdrop = document.querySelector('.backdrop');

const nameParagraph = document.querySelector('#new-name');
let nameEdit = document.querySelector('.name-input textarea');

let enterName = '';
let editedName = '';

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

nameButtons[0].addEventListener('click', closeName); 
backdrop.addEventListener('click', closeName);

nameButtons[1].addEventListener('click', e => {
    closeName();
    if (editedName.trim().length > 0) {
        enterName = editedName;
        updateName();
    }
    render();
});

nameEdit.addEventListener('input', e => {
    editedName = nameEdit.value;
    render();
});

// End Game Modal
// const endButtonEl = document.querySelector('.end-btn')
// const closeButtonEl = document.querySelector('.close-btn')
// const overlayEl = document.getElementById('overlay')

// endButtonEl.addEventListener('click', e => {
//     const endModal = document.querySelector(button.end-btn)
//     closeModal(endModal);
//     render();
// });

// closeButtonEl.addEventListener('click', e => {
//     const endModal = button.closest('.end-modal')
//     endGameModal(endModal);
//     render();
// });

// function endGameModal(endModal) {
//     if (endModal == null) return
//     endModal.classList.add('active')
//     overlayEl.classList.add('active')
// };

// function closeModal(endModal) {
//     if (endModal == null) return
//     endModal.classList.remove('active')
//     overlayEl.classList.remove('active')
// };