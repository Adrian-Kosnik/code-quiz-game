//! Start screen section

let startBtn = document.querySelector("#start");
let container = document.querySelector("#start-screen");
let questionsSectDiv = document.querySelector("#questions");
let choicesDiv = document.querySelector("#choices");
let questionTitleh2 = document.querySelector("#question-title");

// Start button listener
startBtn.addEventListener("click", function() {
    container.setAttribute("class", "hide");
    questionsSectDiv.setAttribute("class", "show");
    clearStoredScore();
    setTime();
});

//! End of start screen section

//! Questions section

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

// Changes the h2 to the question
questionTitleh2.textContent = questionsArr[0].question;
// this fills list with questions
answer1btn.textContent = questionsArr[0].choices[0];
answer2btn.textContent = questionsArr[0].choices[1];
answer3btn.textContent = questionsArr[0].choices[2];
answer4btn.textContent = questionsArr[0].choices[3];
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

let questNumTrack = 1
let score = localStorage.getItem("score");
let finalScoreEl = document.querySelector("#final-score")

let nextQuest = function() {
    // Changes the h2 to the new question
    questionTitleh2.textContent = questionsArr[questNumTrack].question;
    // This fills list with new questions
    answer1btn.textContent = questionsArr[questNumTrack].choices[0];
    answer2btn.textContent = questionsArr[questNumTrack].choices[1];
    answer3btn.textContent = questionsArr[questNumTrack].choices[2];
    answer4btn.textContent = questionsArr[questNumTrack].choices[3];

    questNumTrack++
};

// Function that creates, updates the score. stored locally in users browser.
function finalScoreUpdate() {
    finalScoreEl.textContent = score;
    score++
    localStorage.setItem("score", score);
};
// Function that set score stored in memory to 0 again.
function clearStoredScore() {
    localStorage.setItem("score", 0);
};

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

// !End of Questions section

// !Final score screen section

// This part takes you from questions screen to final score screen

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


// ! this needs fixing
// TODO: the object needs to be an array and the converted to json string
// TODO: and back when I need it again!
// Clicking submit will save the users name to memory and move you to
// high score page.
let subButtonEl = document.querySelector("#submit");
// let userName;

// I need to check if there is anything in memory already and if there is
// append the new score, if not then just save it.


subButtonEl.addEventListener("click", function() {


    // if (!localStorage.getItem('userScore')) {
    //     localStorage.setItem("userScore", []);
    // } 

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

// !End of Final score screen section

// !Timer section

let timeEl = document.querySelector("#time");
let timerEl = document.querySelector(".timer");
let secondsLeft = 60;

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
}

// !End of timer section

// !End-screen section

// !Function makes sure all other sections of quiz game are hidden
// !and displays the End score screen.
let endScreenEl = document.querySelector("#end-screen")
function dispEndScreen() {
    if (questionsSectDiv.className == "show") {
        questionsSectDiv.setAttribute("class", "hide");
    };
    if (container.className == "show") {
        container.setAttribute("class", "hide");
    };
    endScreenEl.setAttribute("class", "show");
}

// !End of end-screen section

