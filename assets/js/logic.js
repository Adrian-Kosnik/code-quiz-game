let startBtn = document.querySelector("#start");
let container = document.querySelector("#start-screen");
let questionsSectDiv = document.querySelector("#questions");
let choicesDiv = document.querySelector("#choices");
let questionTitleh2 = document.querySelector("#question-title");

startBtn.addEventListener("click", function() {
    console.log(`I have been clicked!`);
    container.setAttribute("class", "hide");
    questionsSectDiv.setAttribute("class", "show");
    setTime();
});

// Create ordered list items
let listEl = document.createElement("ol");
let answer1li = document.createElement("li");
let answer2li = document.createElement("li");
let answer3li = document.createElement("li");
let answer4li = document.createElement("li");
let answer1btn = document.createElement("button")
let answer2btn = document.createElement("button")
let answer3btn = document.createElement("button")
let answer4btn = document.createElement("button")

// Changes the h2 to the question
questionTitleh2.textContent = questionsArr[0].question
// this fills list with questions
answer1btn.textContent = questionsArr[0].choices[0];
answer2btn.textContent = questionsArr[0].choices[1];
answer3btn.textContent = questionsArr[0].choices[2];
answer4btn.textContent = questionsArr[0].choices[3];


// this adds the list to choices div within the DOM
choicesDiv.appendChild(listEl)

choicesDiv.children[0].appendChild(answer1li)
choicesDiv.children[0].appendChild(answer2li)
choicesDiv.children[0].appendChild(answer3li)
choicesDiv.children[0].appendChild(answer4li)

let choicesDivOl = choicesDiv.children[0]

choicesDivOl.children[0].appendChild(answer1btn)
choicesDivOl.children[1].appendChild(answer2btn)
choicesDivOl.children[2].appendChild(answer3btn)
choicesDivOl.children[3].appendChild(answer4btn)

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

// This is the timer section

let timeEl = document.querySelector("#time");
var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      finalScore();
    }

  }, 1000);
}


// End screen section

// This is not needed, the final score will be the number of questions answered.
let finalScoreEl = document.querySelector("#final-score")

let finalScore = function() {
    finalScoreEl.textContent = secondsLeft
};

// Function makes sure all other sections of quiz game are hidden
// and displays the End score screen.
let endScreenEl = document.querySelector("#end-screen")
let dispEndScreen = function() {
    if (questionsSectDiv.className == "show") {
        questionsSectDiv.setAttribute("class", "hide");
    };
    if (container.className == "show") {
        container.setAttribute("class", "hide");
    };
    endScreenEl.setAttribute("class", "show");
}


// TODO: Write a function that tracks number of questions answered.
