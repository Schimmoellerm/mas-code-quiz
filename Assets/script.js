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
     Answers: ["Quotes", "Curly Brasckets", "Parentheses", "Square Brackets"],
     Correct: "Parentheses"
    },
    {Question: "String values must be enclosed within _____ when being assigned to variables.",
     Answers: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
     Correct: "Quotes"
    },
    {
     Question: "A very useful tool used during development and debugging for printing content to the debugger is?",
     Answers: ["JavaScript", "Terminal/Bash", "for Loops", "console.log"],
     Correct: "console.log"
    }
];

//countdown Variables
let timer = document.querySelector("#timer");
let timeRemaining = 76;

//generateQs Variables
let questionBox = document.querySelector("#QuestionBox");
let answer1 = document.querySelector("#Answer1");
let answer2 = document.querySelector("#Answer2");
let answer3 = document.querySelector("#Answer3");
let answer4 = document.querySelector("#Answer4");
let Qindex = 0;

//quizComplete Variables
let score;
let reset = document.querySelector("#reset");

/**************************************************************/
//Functions
//Timer (75 seconds)
function countdown() {
    let countdownInterval = setInterval(function() {
        timeRemaining--;
        timer.textContent = "Time: " + timeRemaining;
        if(timeRemaining === 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);
}

//Generate Questions
function generateQs() {
    questionBox.innerHTML = "";
    answer1.innerHTML= "";
    answer2.innerHTML= "";
    answer3.innerHTML= "";
    answer4.innerHTML= "";
    document.getElementById("reset").style.visibility = "hidden";
    
    
    if (Qindex >= Questions.length) {
        document.getElementById("Answer1").style.visibility = "hidden";
        document.getElementById("Answer2").style.visibility = "hidden";
        document.getElementById("Answer3").style.visibility = "hidden";
        document.getElementById("Answer4").style.visibility = "hidden";
        quizComplete();
        
    }else {
        
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
        answer1.addEventListener("click", (checker));
        answer2.addEventListener("click", (checker));
        answer3.addEventListener("click", (checker));
        answer4.addEventListener("click", (checker));
        document.getElementById("Answer1").style.visibility = "visible";
        document.getElementById("Answer2").style.visibility = "visible";
        document.getElementById("Answer3").style.visibility = "visible";
        document.getElementById("Answer4").style.visibility = "visible";
    }
}

//Answer Checker
function checker(event) {
    let userAnswer = event.target.textContent;
    console.log(userAnswer);
    console.log(Questions[Qindex].Correct);

    if (userAnswer === Questions[Qindex].Correct) {
        console.log("correct");
        Qindex++;
        generateQs();
    }else {
        console.log("incorrect");
        Qindex++;
        generateQs();
    } 
}

//End Quiz Function
function quizComplete() {
    console.log("Quiz Complete");
    let score = timeRemaining;
    console.log(score);
    //need to create high scores display
    //need to hide timer  
    document.getElementById("reset").style.visibility = "visible";
    
}

/*************************************************************/
//Buttons
//Start Button
document.getElementById("start").addEventListener("click", function(){
    countdown();
    generateQs();
});

//Restart Quiz
reset.addEventListener("click", function(){
    console.log("something");
    Qindex = 0;
    timeRemaining = 76;
    generateQs();
    countdown();  
});

//Log High Scores

//Check High Scores
