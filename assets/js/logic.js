let startBtn = document.querySelector("#start");
let container = document.querySelector("#start-screen");
let questionsSect = document.querySelector("#questions");

startBtn.addEventListener("click", function() {
    console.log(`I have been clicked!`);
    container.setAttribute("class", "hide");
    questionsSect.setAttribute("class", "show");
});