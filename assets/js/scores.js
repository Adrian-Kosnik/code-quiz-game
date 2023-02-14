// This is the highscres <ol> element
let scoresEl = document.querySelector("#scores");
let clearScoresBtn = document.querySelector("#clear");

let something = localStorage.getItem('results');

let userScoresStored = JSON.parse(something);
console.log(userScoresStored);

for (let i = userScoresStored.length - 1; i >= 0; i--) {
    let listEl = document.createElement("li");
    listEl.setAttribute("class", "scoreLi");
    listEl.textContent = (`${userScoresStored[i].initials} - ${userScoresStored[i].score}`);

    scoresEl.appendChild(listEl);
};

clearScoresBtn.addEventListener("click", function() {
    localStorage.clear();
    scoresEl.remove();
});