//assign variable for entire page to make it easy to find elements on click
var pageBodyEl = document.querySelector(".page-body");
console.log(pageBodyEl)
//assign variable to "Start Quiz" button
var startButton = document.querySelector("#start-quiz");
//variable for timer
var timerEl = document.getElementById('countdown');
//variable for div that shows text on page
var pageMessage = document.getElementById('main-page')
var timeLeft = 90;
var score = 0;
var submitButton = document.createElement("button");
submitButton.setAttribute("id", "submit-button");
var inputForm = document.createElement("input");

var highScores = []

highScores = JSON.parse(localStorage.getItem("highScores"));

// Timer function that counts down from 90 second (1.5 min), called when start button is clicked
function countdown() {
    // Use the `setInterval()` method to call a function to be executed every second
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '0';
            pageMessage.textContent = 'Time is Up!  Your final score is ' + score + '. Enter initials: '
            pageMessage.appendChild(inputForm);
            pageMessage.appendChild(submitButton);
            submitButton.textContent = "Submit!";
        }
    }, 1000);
};

//array quiz
var index = 0;
var quiz = [
    {
        question: "1. How can we make an event happen by clicking on an element?",
        choices: [
            "a. add addEventListener('mouseclick')",
            "b. addEventListener('target')",
            "c. var UponClick = function(click)",
            "d. element.addEventListener('click', function)",
        ],
        answer: "d. element.addEventListener('click', function)",
    },
    {
        question: "2. What does document.querySelector('#btn') do?",
        choices: [
            "a. targets an element in the HTML by its id",
            "b. targets an element in the DOM by its id",
            "c. targets element in the DOM by its class",
            "d. makes the browser inquire on the element",
        ],
        answer: "b. targets an element in the DOM by its id",
    },
    {
        question: "3. How can you add a header element to the DOM?",
        choices: [
            "a. var headerEl = document.createElement('header')",
            "b. same as in soccer! Header to the DOME!",
            "c. use your head",
            "d. <header> to DOM",
        ],
        answer: "a. var headerEl = document.createElement('header')",
    },
    {
        question: "4. What does headerEl.appendChild(textEl) do?",
        choices: [
            "a. adds textEl as a child element to the headerEl parent in the CSS",
            "b. adds textEl as a child element to the headerEl parent in the HTML",
            "c. adds textEl as a child element to the headerEl parent in the DOM",
            "d. creates an opportunity for the child to give an appendix to the parent",
        ],
        answer: "c. adds textEl as a child element to the headerEl parent in the DOM",
    },
    {
        question: "5. How do you pass a number into local storage?",
        choices: [
            "a. solidify",
            "b. beautify",
            "c. numerify",
            "d. stringify"
        ],
        answer: "d. stringify",
    },
    {
        question: "6. How do you change a string into an array in the DOM?",
        choices: [
            "a. parsley()",
            "b. parse()",
            "c. purse()",
            "d. PercyWeasley()",
        ],
        answer: "b. parse()",
    },
    {
        question: "7. What is 'dragstart' in JavaScript?",
        choices: [
            "a. the Opening Ceremonies of The Annual Coders Drag Competition in Palm Springs",
            "b. when the coder first starts dragging their code around the JS file to refactor it",
            "c. code for 'dragrace,' every coder's secret passion",
            "d. an event listener for when the user starts to drag an element",
        ],
        answer: "d. an event listener for when the user starts to drag an element",
    },
    {
        question: "8. What does HTML stand for?",
        choices: [
            "a. Hot Toddy Makes Life",
            "b. High Tide Marks Lunar",
            "c. Hypertext Markup Language",
            "d. Hot Toes Model Linens",
        ],
        answer: "c. Hypertext Markup Language",
    },
    {
        question: "9. What does CSS stand for?",
        choices: [
            "a. Coders See Signs",
            "b. Can't Stand Silence",
            "c. Colon Synch Style",
            "d. Cascading Style Sheets",
        ],
        answer: "d. Cascading Style Sheets",
    },
    {
        question: "10. What do you get when you combine HTML, CSS, and Javascript",
        choices: [
            "a. all of the below",
            "b. an application",
            "c. a website",
            "d. a headache",
        ],
        answer: "a. all of the below",
    },
];

//link "view high score" to retrieve high schore from localStorage
//add sound to right/wrong alert
//at end of quiz, display high score. let them ENTER INTIALS (FORM input?)
//add high score to local storage
//style everything in CSS....

//function to find elements on page by clicking
var findElement = function (event) {
    console.log(event.target)
};

//function to start quiz with button
var startQuiz = function () {
    //remove intro, and load first question (variable 0 of quiz array)
    var startPage = document.querySelector("#start-screen")
    startPage.remove();
    countdown();
    loadQuiz();
};

//starts Quiz
var loadQuiz = function () {
    var choices = document.querySelector("#choices");
    var titleEl = document.querySelector("#question-title");
    var currentQuestion = quiz[index];
    titleEl.textContent = currentQuestion.question;
    choices.innerHTML = "";

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var li = document.createElement("li")
        var choiceButton = document.createElement("button");
        li.appendChild(choiceButton);
        var listItem = currentQuestion.choices[i];
        choiceButton.className = "choiceButton"
        choiceButton.setAttribute("value", listItem);
        choiceButton.textContent = listItem;
        choices.appendChild(li);
    }
    //user chooses answer function
    choiceButton.onclick = function () {
        if (this.value === quiz[index].answer) {
            document.getElementById("answerResult").textContent = "Correct!"
            score++
        }
        else if (this.value !== quiz[index].answer) {
            document.getElementById("answerResult").textContent = "Wrong!";
            timeLeft -= 10;
            timerEl.textContent = timeLeft;
            score--
        }
        index++;
        loadQuiz();
    }
};

//function for submit button to store high scores
var submit = function () {
    var initials = {
        initials: inputForm.value,
        score: score
    }
    highScores.push(initials);
    localStorage.setItem("highScores", JSON.stringify(highScores));
};

var displayScores = function () {
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var li = document.createElement("li")
        var listItem = highScore[i];
        highScore.appendChild(li);
    }
};

//find elements in HTML/DOM by clicking on them
pageBodyEl.addEventListener("click", findElement);
//click event for start quiz button
startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", submit);