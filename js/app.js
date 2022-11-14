


// Game Page

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