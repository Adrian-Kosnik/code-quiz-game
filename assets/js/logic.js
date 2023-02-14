//! querySelector section
// Start screen select elements
let startBtn = document.querySelector("#start");
let container = document.querySelector("#start-screen");
let questionsSectDiv = document.querySelector("#questions");
let choicesDiv = document.querySelector("#choices");
let questionTitleh2 = document.querySelector("#question-title");
// Final score screen select element
let finalScoreEl = document.querySelector("#final-score");
// End screen select elements
let endScreenEl = document.querySelector("#end-screen");
// Submit button select element
let subButtonEl = document.querySelector("#submit");
// Timer elements select elements
let timeEl = document.querySelector("#time");
let timerEl = document.querySelector(".timer");
//! End of querySelector section

//! createElement section
// Create ordered list items
let listEl = document.createElement("ol");
let answer1li = document.createElement("li");
let answer2li = document.createElement("li");
let answer3li = document.createElement("li");
let answer4li = document.createElement("li");
let answer1btn = document.createElement("button");
let answer2btn = document.createElement("button");
let answer3btn = document.createElement("button");
let answer4btn = document.createElement("button");
//! End of createElement section

//! Adding textContent to elements
// Changes the h2 to the question
questionTitleh2.textContent = questionsArr[0].question;
// this fills list with questions
answer1btn.textContent = questionsArr[0].choices[0];
answer2btn.textContent = questionsArr[0].choices[1];
answer3btn.textContent = questionsArr[0].choices[2];
answer4btn.textContent = questionsArr[0].choices[3];
//! End of adding textContent to elements

//! setAttribute section
// Adds id to the answers
answer1btn.setAttribute("id", "answer1btn");
answer2btn.setAttribute("id", "answer2btn");
answer3btn.setAttribute("id", "answer3btn");
answer4btn.setAttribute("id", "answer4btn");
// Adds class to the answers
answer1btn.setAttribute("class", "answerbtn");
answer2btn.setAttribute("class", "answerbtn");
answer3btn.setAttribute("class", "answerbtn");
answer4btn.setAttribute("class", "answerbtn");
//! End of setAttribute section

//! appendChild section
// this adds the list to choices div within the DOM
choicesDiv.appendChild(listEl);
choicesDiv.children[0].appendChild(answer1li);
choicesDiv.children[0].appendChild(answer2li);
choicesDiv.children[0].appendChild(answer3li);
choicesDiv.children[0].appendChild(answer4li);
let choicesDivOl = choicesDiv.children[0];
choicesDivOl.children[0].appendChild(answer1btn);
choicesDivOl.children[1].appendChild(answer2btn);
choicesDivOl.children[2].appendChild(answer3btn);
choicesDivOl.children[3].appendChild(answer4btn);
//! End of appendChild section

//! Global variables section
let secondsLeft = 60;
let questNumTrack = 1;
let score = localStorage.getItem("score");
//! End of global variables section

//! Functions section
// Function that set score stored in memory to 0 again.
let clearStoredScore = function() {
    score = 0;
    localStorage.setItem("score", score);
};
// Function that creates, updates the score. stored locally in users browser.
function finalScoreUpdate() {
    finalScoreEl.textContent = score;
    score++
    localStorage.setItem("score", score);
};
function nextQuest() {
    // Changes the h2 to the new question
    questionTitleh2.textContent = questionsArr[questNumTrack].question;
    // This fills list with new questions
    answer1btn.textContent = questionsArr[questNumTrack].choices[0];
    answer2btn.textContent = questionsArr[questNumTrack].choices[1];
    answer3btn.textContent = questionsArr[questNumTrack].choices[2];
    answer4btn.textContent = questionsArr[questNumTrack].choices[3];

    questNumTrack++
};
function checkIfGameOver() {
    if (questionsArr[questNumTrack] == undefined) {
        questionsSectDiv.setAttribute("class", "hide")
        container.setAttribute("class", "hide")
        endScreenEl.setAttribute("class", "show")
    };
    if (secondsLeft <= 0) {
        questionsSectDiv.setAttribute("class", "hide")
        container.setAttribute("class", "hide")
        endScreenEl.setAttribute("class", "show")
    };
};
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if(secondsLeft <= 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        secondsLeft = '';
        timerEl.textContent = 'Out of time!';
        timeEl.textContent = secondsLeft;
      }
  
    }, 1000);
};
function dispEndScreen() {
    if (questionsSectDiv.className == "show") {
        questionsSectDiv.setAttribute("class", "hide");
    };
    if (container.className == "show") {
        container.setAttribute("class", "hide");
    };
    endScreenEl.setAttribute("class", "show");
};
//! End of functions sections

//! EventListeners section
// Start button listener
startBtn.addEventListener("click", function() {
    container.setAttribute("class", "hide");
    questionsSectDiv.setAttribute("class", "show");
    clearStoredScore();
    setTime();
});
answer1btn.addEventListener("click", function() {
    console.log(`Im answer1 and I have been clicked!`)
});
answer2btn.addEventListener("click", function() {
    console.log(`Im answer2 and I have been clicked!`)
});
answer3btn.addEventListener("click", function() {
    console.log(`Im answer3 and I have been clicked!`)
});
answer4btn.addEventListener("click", function() {
    console.log(`Im answer4 and I have been clicked!`)
});
// Event listener that looks at the answers and adds to the score or lowers time.
answer1btn.addEventListener("click", function() {
    if (answer1btn.textContent == questionsArr[0].correctAnswer) {
        finalScoreUpdate();
    } else if (secondsLeft > 0) {
        secondsLeft = secondsLeft - 10;
    };
    checkIfGameOver();
    nextQuest();
});
answer2btn.addEventListener("click", function() {
    if (answer1btn.textContent == questionsArr[1].correctAnswer) {
        finalScoreUpdate();
    } else if (secondsLeft > 0) {
        secondsLeft = secondsLeft - 10;
    };
    checkIfGameOver();
    nextQuest();
});
answer3btn.addEventListener("click", function() {
    if (answer1btn.textContent == questionsArr[2].correctAnswer) {
        finalScoreUpdate();
    } else if (secondsLeft > 0) {
        secondsLeft = secondsLeft - 10;
    };
    checkIfGameOver();
    nextQuest();
});
answer4btn.addEventListener("click", function() {
    if (answer1btn.textContent == questionsArr[3].correctAnswer) {
        finalScoreUpdate();
    } else if (secondsLeft >= 0) {
        secondsLeft = secondsLeft - 10;
    };
    checkIfGameOver();
    nextQuest();
});
subButtonEl.addEventListener("click", function() {
    // let scoreInStorage = localStorage.getItem('userScore');
    let scoreInStorageParsed = JSON.parse(scoreInStorage) || [];
    // This sets the userName to the value of the input field that the user provided
    let userName = document.querySelector("#initials").value;
    // This creates an object with users name and score.
    //! Changed this to an array, 
    let currentUser = [userName, score];
    scoreInStorageParsed.push(currentUser);
    let currentUserJSON = JSON.stringify(scoreInStorageParsed);
    // Change currentUser to a JSON string
    // let currentUserJSON = JSON.stringify(currentUser);
    // Save the user data to browser memeory
    localStorage.setItem("userScore", currentUserJSON);
    document.location.href = 'highscores.html';
    dispScores();
});
//! End of eventListeners section