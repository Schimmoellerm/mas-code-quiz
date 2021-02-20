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
let countdownInterval;

//generateQs Variables
let questionBox = document.querySelector("#QuestionBox");
let answer1 = document.querySelector("#Answer1");
let answer2 = document.querySelector("#Answer2");
let answer3 = document.querySelector("#Answer3");
let answer4 = document.querySelector("#Answer4");
let Qindex = 0; //Used to pull Questions out of the array

//quizComplete Variables
let score = 0;
let reset = document.querySelector("#reset");
let submit = document.querySelector("#submit");
let outputScore = document.querySelector("#outputScore");
let highScores = [];//stores score into array on submit
let initialsBox = document.querySelector('#initials')
let feedback = document.querySelector('#feedback');

//High Scores Varibles
let highScoresBtn = document.querySelector('#highScoresBtn');
let clear = document.querySelector('#clear');
let highScoresList = [];//Used to create list of high scores after pulling them from local storage
let quiz = document.querySelector('#takeQuiz');

/**************************************************************************************************/
//Functions
//Timer (75 seconds)
function countdown() {
    clearInterval(countdownInterval);
    document.getElementById("timer").style.visibility = "visible";
    countdownInterval = setInterval(function() {
        timeRemaining--;
        timer.textContent = "Time: " + timeRemaining;
        if(timeRemaining === 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);
}

//Generate Questions
function generateQs() {
    document.getElementById('QuestionBox').style.visibility = 'visible';
    score = 0;
    questionBox.innerHTML = "";
    answer1.innerHTML= "";
    answer2.innerHTML= "";
    answer3.innerHTML= "";
    answer4.innerHTML= "";
    document.getElementById("submitDiv").style.visibility = "hidden";
    document.getElementById('viewHighScores').style.visibility = 'hidden';
    
    //If there are no more questions in the array it goes to the end quiz function
    if (Qindex >= Questions.length) {
        document.getElementById("Answer1").style.visibility = "hidden";
        document.getElementById("Answer2").style.visibility = "hidden";
        document.getElementById("Answer3").style.visibility = "hidden";
        document.getElementById("Answer4").style.visibility = "hidden";
        quizComplete();
    //Otherwise it displays the next answer in the array    
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
        feedback.textContent = "Correct!"
        generateQs();
    }else {
        console.log("incorrect");
        Qindex++;
        timeRemaining = timeRemaining - 15;
        feedback.textContent = "Incorrect!"
        generateQs();
    } 
}

//End Quiz Function
function quizComplete() {
    console.log("Quiz Complete");
    document.getElementById("timer").style.visibility = "hidden";
    score = timeRemaining;
    console.log(score);
    outputScore.textContent = "Your Score is: " + score;
    document.getElementById("submitDiv").style.visibility = "visible"; 
    feedback.textContent = '';   
}

//View High Scores Function
function viewHighScores() {
    document.getElementById('QuestionBox').style.visibility = 'hidden';
    document.getElementById("Answer1").style.visibility = "hidden";
    document.getElementById("Answer2").style.visibility = "hidden";
    document.getElementById("Answer3").style.visibility = "hidden";
    document.getElementById("Answer4").style.visibility = "hidden";
    document.getElementById('submitDiv').style.visibility = 'hidden';
    document.getElementById('viewHighScores').style.visibility = 'visible';
    document.getElementById('timer').style.visibility = 'hidden';

    highScoresList = JSON.parse(localStorage.getItem("highScores"))
    console.log(highScoresList);

    highscore.innerHTML = '';

    for (i=0; i< highScoresList.length; i++) {
        let createLi = document.createElement("li");
        createLi.style.cssText = "list-style-type: none; margin-top: 5px;"
        createLi.textContent = highScoresList[i];
        highscore.appendChild(createLi);
    }   
}

/**********************************************************************************************/
//Buttons
//Start Button
document.getElementById("start").addEventListener("click", function(){
    countdown();
    generateQs();
});

//Restart Quiz Button
reset.addEventListener("click", function(){
    console.log("something");
    Qindex = 0;
    timeRemaining = 76;
    generateQs();
    countdown(); 
});

//Submit Button
submit.addEventListener("click", function(){
    let initials = initialsBox.value;
    let userScore = initials + "-" + score;
    console.log(userScore);
    highScores.push(userScore);
    console.log(highScores);
    document.getElementById('initials').value = '';
    localStorage.setItem("highScores", JSON.stringify(highScores));
    viewHighScores()
})

//Check High Scores Button
highScoresBtn.addEventListener('click', function(){
    viewHighScores();
})

//Clear Button
clear.addEventListener('click', function(){
    localStorage.clear();
    location.reload();
})

//Quiz Button
quiz.addEventListener('click', function(){
    Qindex = 0;
    timeRemaining = 76;
    generateQs();
    countdown(); 
})
