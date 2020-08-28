//assign variable for entire page to make it easy to find elements on click
var pageBodyEl = document.querySelector(".page-body");
//assign variable to "Start Quiz" button
var startButton = document.querySelector("#start-quiz");

//array with quiz Qs and As
var quiz = [
    {
        question: "How can we make an event happen by clicking on an element?",
        answer: {
            a: "add addEventListener('mouseclick')",
            b: "addEventListener('target')",
            c: "var UponClick = function(click)",
            d: "element.addEventListener('click', function)"
        },
        correctAnswer: "d"
    },
    {
        question: "What does document.querySelector('#btn') do?",
        answers: {
            a: "targets an element in the HTML by its id",
            b: "targets an element in the DOM by its id",
            c: "targets element in the DOM by its class",
            d: "makes the browser inquire on the element"
        },
        correctAnswer: "b"
    },
    {
        question: "How can you add a header element to the DOM?",
        answers: {
            a: "var headerEl = document.createElement('header')",
            b: "",
            c: "",
            d: ""
        },
        correctAnswer: "a"
    },
    {
        question: "What does headerEl.appendChild(textEl) do?",
        answers: {
            a: "adds textEl as a child element to the headerEl parent in the CSS",
            b: "adds textEl as a child element to the headerEl parent in the HTML",
            c: "adds textEl as a child element to the headerEl parent in the DOM",
            d: "creates an opportunity for the child to give an appendix to the parent"
        },
        correctAnswer: "c"
    },
    {
        question: "How do you pass a number into local storage?",
        answers: {
            a: "solidify",
            b: "beautify",
            c: "numerify",
            d: "stringify"
        },
        correctAnswer: "d"
    },
    {
        question: "How do you change a string into an array in the DOM?",
        answers: {
            a: "parsley()",
            b: "parse()",
            c: "purse()",
            d: "PercyWeasley()"
        },
        correctAnswer: "b"
    },
    {
        question: "What is 'dragstart' in JavaScript?",
        answers: {
            a: "the Opening Ceremonies of The Annual Coders Drag Competition in Palm Springs",
            b: "when the coder first starts dragging their code around the JS file to refactor it",
            c: "code for 'dragrace,' every coder's secret passion",
            d: "an event listener for when the user starts to drag an element"
        },
        correctAnswer: "d"
    },
    {
        question: "What does HTML stand for?",
        answers: {
            a: "Hot Toddy Makes Life",
            b: "High Tide Marks Lunar",
            c: "Hypertext Markup Language",
            d: "Hot Toes Model Linens"
        },
        correctAnswer: "c"
    },
    {
        question: "What does CSS stand for?",
        answers: {
            a: "Coders See Signs",
            b: "Can't Stand Silence",
            c: "Colon Synch Style",
            d: "Cascading Style Sheets"
        },
        correctAnswer: "d"
    },
    {
        question: "What do you get when you combine HTML, CSS, and Javascript",
        answers: {
            a: "all of the below",
            b: "an application",
            c: "a website",
            d: "a headache"
        },
        correctAnswer: "a"
    },
];

//style the quiz array so question is black bold TEXT. answers should be BUTTONS, purple background, white text. 

//click start quiz button to start quiz.

//link "view high score" to retrieve high schore from localStorage

//create countdown timer in <header div.timer> section of HTML

//create intro text and "start quiz" button -  on "click", it will load virst item in questions/answers array

//style answers so they change color on "hover"

//use "if" statement to check if right/wrong

//if "right", display "correct!", give "correct sound" and update score in local storage

//if "wrong", display "wrong!" and give a time penalty of ten seconds AND sound buzzer

//at end of quiz, display high score. let them ENTER INTIALS (FORM input?)
//add high score to local storage
//style everything in CSS....
//can style hover questions inline in JS I think

//function to find elements on page by clicking
var findElement = function (event) {
    console.log(event.target)
};

//function to start quiz
var startQuiz = function () {
    //delete everything in main section page, and load first question (variable 0 of quiz array)
    var startPage = document.querySelector("#start-page")
    startPage.remove();
    loadQuiz();
}


var loadQuiz = function () {
    // for (i = 0; i < quiz.length; i++) {
    //     //load variable 0 of array, create elements on the page
    //     //create a heading with the Question
    var titleEl = document.querySelector("#question-title");
    titleEl.textContent = quiz[0].question;


    //     //create order list for answers 
    //     var choiceEl = document.getElementById("choices");
    //     choiceEl.textContent = quiz[0].answer;
    //     // //create a div to append them to
    //     // var quizEl = document.createElement("div");
    //     // quizEl.className = "quiz";
    //     // quizEl.innerHTML = "<main class='quiz'>";
    // //append quiz q and a to div
    // quizEl.appendChild(quizQuestionEl);
    // quizEl.appendChild(quizAnswersEl);
}



//find elements in HTML/DOM by clicking on them
pageBodyEl.addEventListener("click", findElement);
//click event for start quiz button
startButton.addEventListener("click", startQuiz);