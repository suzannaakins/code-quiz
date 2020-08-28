//assign variable for entire page to make it easy to find elements on click
var pageBodyEl = document.querySelector(".page-body");
//assign variable to "Start Quiz" button
var startButton = document.querySelector("#start-quiz");
//variable for timer
var timerEl = document.getElementById('countdown');
//variable for div that shows text on page
var pageMessage = document.getElementById('main-page')

// Timer function that counts down from 90 second (1.5 min), called when start button is clicked
function countdown() {
    var timeLeft = 90;

    // Use the `setInterval()` method to call a function to be executed every second
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            pageMessage.textContent = 'Time is Up!  Your final score is FINALSCOREVARIABLE.  Enter initials: INPUT FORM. SUBMIT BUTTON.';
            clearInterval(timeInterval);
        }
    }, 1000);
};

//array with quiz Qs
var questions = [
    {
        question: "1. How can we make an event happen by clicking on an element?"
    },
    {
        question: "2. What does document.querySelector('#btn') do?",
    },
    {
        question: "3. How can you add a header element to the DOM?",
    },
    {
        question: "4. What does headerEl.appendChild(textEl) do?",
    },
    {
        question: "5. How do you pass a number into local storage?",
    },
    {
        question: "6. How do you change a string into an array in the DOM?",
    },
    {
        question: "7. What is 'dragstart' in JavaScript?",
    },
    {
        question: "8. What does HTML stand for?",
    },
    {
        question: "9. What does CSS stand for?",
    },
    {
        question: "10. What do you get when you combine HTML, CSS, and Javascript",
    },
];

//array with quiz CHOICES
var choices = [
    {
        a: "add addEventListener('mouseclick')",
        b: "addEventListener('target')",
        c: "var UponClick = function(click)",
        d: "element.addEventListener('click', function)"
    },
    {
        a: "targets an element in the HTML by its id",
        b: "targets an element in the DOM by its id",
        c: "targets element in the DOM by its class",
        d: "makes the browser inquire on the element"
    },
    {
        a: "var headerEl = document.createElement('header')",
        b: "",
        c: "",
        d: ""
    },
    {
        a: "adds textEl as a child element to the headerEl parent in the CSS",
        b: "adds textEl as a child element to the headerEl parent in the HTML",
        c: "adds textEl as a child element to the headerEl parent in the DOM",
        d: "creates an opportunity for the child to give an appendix to the parent"
    },
    {
        a: "solidify",
        b: "beautify",
        c: "numerify",
        d: "stringify"
    },

    {
        a: "parsley()",
        b: "parse()",
        c: "purse()",
        d: "PercyWeasley()"
    },
    {
        a: "the Opening Ceremonies of The Annual Coders Drag Competition in Palm Springs",
        b: "when the coder first starts dragging their code around the JS file to refactor it",
        c: "code for 'dragrace,' every coder's secret passion",
        d: "an event listener for when the user starts to drag an element"
    },
    {
        a: "Hot Toddy Makes Life",
        b: "High Tide Marks Lunar",
        c: "Hypertext Markup Language",
        d: "Hot Toes Model Linens"
    },

    {
        a: "Coders See Signs",
        b: "Can't Stand Silence",
        c: "Colon Synch Style",
        d: "Cascading Style Sheets"
    },
    {
        a: "all of the below",
        b: "an application",
        c: "a website",
        d: "a headache"
    }
];

//array with correct quiz ANSWERS
var answers = [
    {
        answer: "d"
    },
    {
        answer: "b"
    },
    {
        answer: "a"
    },
    {
        answer: "c"
    },
    {
        answer: "d"
    },
    {
        answer: "b"
    },
    {
        answer: "d"
    },
    {
        answer: "c"
    },
    {
        answer: "d"
    },
    {
        answer: "a"
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

//function to start quiz with button
var startQuiz = function () {
    //delete everything in main section page, and load first question (variable 0 of quiz array)
    var startPage = document.querySelector("#start-screen")
    startPage.remove();
    countdown();
    loadQuiz();
};

//starts Quiz
var loadQuiz = function () {
    for (i = 0; i < questions.length; i++) {
        var titleEl = document.querySelector("#question-title");
        titleEl.textContent = questions[i].question;
    }
    for (i = 0; i < questions.length; i++) {
        var choices = document.querySelector("#choices");
        choices.textContent = choices[i].a;
        choices.textContent = choices[i].b;
        choices.textContent = choices[i].c;
        choices.textContent = choices[i].d;
    }
    if (pageBodyEl.matches(answers[i].answer)) {
        correct()
    }
};

//function for when user gets correct answer
var correct = function () {
    //display  Correct! text
    document.getElementById("correct").textContent = "Correct!"
    //score++ 
}

//function for when user gets wrong answer
var wrong = function () {
    //display  Wrong! text
    document.getElementById("wrong").textContent = "Wrong!"
    //subtract 10 second from time
    //score--
}



//find elements in HTML/DOM by clicking on them
pageBodyEl.addEventListener("click", findElement);
//click event for start quiz button
startButton.addEventListener("click", startQuiz);