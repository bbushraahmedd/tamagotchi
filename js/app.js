

// Welcome Page

// let enterNameUrl = "entername.html";
// document.getElementById("play").onclick = 
// function () {
//     window.location.replace(enterNameUrl);
// }





// Game Page
let foodLevel = 0
// A sleep variable: let sleepLevel = 0
// A play variable: let playLevel = 0


// I want to update the score in the DOM every time I hit the button corresponding to the variable

function changeFoodLevel(newFoodLevel) {
    foodLevel = newFoodLevel
    return foodLevel
}

changeFoodLevel(56)
console.log(foodLevel, "new food level")