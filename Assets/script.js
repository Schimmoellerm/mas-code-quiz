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

let timer = document.querySelector("#timer");
let timeRemaining = 76;

//Functions
//Timer Function (75 seconds)
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

//Start Button
document.getElementById("start").addEventListener("click", function(){
    countdown();
});
