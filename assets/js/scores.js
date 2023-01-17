// this is the highscres <ol> element
let highScoresEl = document.querySelector("#highscores")

// let newLiElm = document.createElement("li");
// newLiElm.textContent = ("This is the new list element!");
// highScoresEl.appendChild(newLiElm)

// this grabs the json of usernames/scores from browser memory
let userScoreStr = localStorage.getItem('userScore');

// converting json to object
let parsedUserScore = JSON.parse(userScoreStr);

// the json to console to check it is all good
console.log(parsedUserScore);

