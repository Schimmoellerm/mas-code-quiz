//Global Variables
//Questions
let Questions = [
    {Question: "Commonly used datatypes do not include ____.",
     Answers: ["Strings", "Numbers", "Booleans", "Alerts"],
     Correct: "Alerts"
    },
    {Question: "Arrays in JavaScript can be used to store ____.",
     Answers: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
     Correct: "All of the Above"
    },
    {Question: "The condition in an if/else statement is enclosed with?",
     Answers: ["Quotes", "Curly Brasckets", "Parenthese", "Square Brackets"],
     Correct: "Parenthese"
    },
    {Question: "String values must be enclosed within _____ when being assigned to variables.",
     Answers: ["Commas", "Curly Brackets", "Quotes", "Parenthese"],
     Correct: "Quotes"
    },
    {
     Question: "A very useful tool used during development and debugging for printing content to the debugger is?",
     Answers: ["JavaScript", "Terminal/Bash", "for Loops", "console.log"],
     Correct: "console.log"
    }
];

//Timer Variables
let timer = document.querySelector("#timer");
let timeRemaining = 76;

//Questions Generator Variables
let questionBox = document.querySelector("#QuestionBox");
let answer1 = document.querySelector("#Answer1");
let answer2 = document.querySelector("#Answer2");
let answer3 = document.querySelector("#Answer3");
let answer4 = document.querySelector("#Answer4");
let Qindex = 0;

/**************************************************************/
//Functions
//Timer (75 seconds)
function countdown() {
    let countdownInterval = setInterval(function() {
        timeRemaining--;
        timer.textContent = "Time: " + timeRemaining;
        if(timeRemaining === 0) {
            clearInterval(countdownInterval);
            alert("Times Up!");
        }
    }, 1000);
}

//Generate Questions
function generateQs() {
    questionBox.innerHTML = "";

    for(let i = 0; i< Questions.length; i++) {
        let postedQ = Questions[Qindex].Question;
        let postedA1 = Questions[Qindex].Answers[0];
        let postedA2 = Questions[Qindex].Answers[1];
        let postedA3 = Questions[Qindex].Answers[2];
        let postedA4 = Questions[Qindex].Answers[3];
        questionBox.textContent = postedQ;
        answer1.textContent = postedA1;
        answer2.textContent = postedA2;
        answer3.textContent = postedA3;
        answer4.textContent = postedA4;
    }

}

//Answer Checker

/*************************************************************/
//Start Button
document.getElementById("start").addEventListener("click", function(){
    countdown();
    generateQs();
});
