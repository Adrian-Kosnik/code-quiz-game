// this is the highscres <ol> element
let highScoresEl = document.querySelector("#highscores")
// this grabs the json of usernames/scores from browser memory
let userScoreStr = localStorage.getItem('userScore');
// converting json to object
let parsedUserScore = JSON.parse(userScoreStr);

// This creates new li for user score
let newLiElm = document.createElement("li");
newLiElm.textContent = (`${parsedUserScore[0]} - ${parsedUserScore[1]}`);
highScoresEl.appendChild(newLiElm)

let clearScoresBtn = document.querySelector("#clear");

clearScoresBtn.addEventListener("click", function() {
    localStorage.clear()
    newLiElm.remove()
});