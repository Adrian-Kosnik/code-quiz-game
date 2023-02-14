//! Selecting elements section
let scoresEl = document.querySelector("#scores");
let clearScoresBtn = document.querySelector("#clear");
//! End of selecting elements section

//! Getting elements from localStorage
let something = localStorage.getItem('results');
let userScoresStored = JSON.parse(something);
//! End of getting elements from localStorage

// For loop that creates li elements for every score in localStorage
for (let i = userScoresStored.length - 1; i >= 0; i--) {
    let listEl = document.createElement("li");
    listEl.setAttribute("class", "scoreLi");
    listEl.textContent = (`${userScoresStored[i].initials} - ${userScoresStored[i].score}`);

    scoresEl.appendChild(listEl);
};

// Event listener on the 'Clear Scores' button that removes the scores from
// localStorage and also removes the <li> elements that have scores.
clearScoresBtn.addEventListener("click", function() {
    localStorage.clear();
    scoresEl.remove();
});