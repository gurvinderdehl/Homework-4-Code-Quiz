// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Who invented JavaScript?",
    answer: "Brendan Eich",
    options: [
      "Douglas Crockford",
      "Sheryl Sandberg",
      "Brendan Eich",
      "Harry Maguire"
    ]
},
{
numb: 3,
question: "Which is not a primitive data type in JavaScript?",
answer: "character",
options: [
  "boolean",
  "character",
  "string",
  "number",
]
},
{
numb: 4,
question: "Which event fires whenever a control loses focus?",
answer: "onblur",
options: [
  "onclick",
  "onmove",
  "onblur",
  "onchange",
]
},
{
numb: 5,
question: "String concatenation...?",
answer: "Is the combination of two or more text Strings",
options: [
  "is the splitting of a String into two or more Strings",
  "Is a complex String",
  "Is the combination of two or more text Strings",
  "Is an elemental String"
]
},
];
//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".rb1");
const result_box2 = document.querySelector(".rb2");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const submitBtn = document.querySelector(".submit");
const highscore_box = document.querySelector(".highscore_box");
var secondsLeft = 0;
var timerInterval = "";
var highscoresList = [];
var newHS = 0;

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(60); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let timeValue =  60;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box2.querySelector(".buttons .restart");
const restart_quiz2 = highscore_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");


restart_quiz.onclick = ()=>{
    info_box.classList.add("activeInfo");
    result_box.classList.remove("activeResult"); //hide result box
    result_box2.classList.remove("activeResult");
    highscore_box.classList.remove("activeResult");
    timeValue = 60; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    clearInterval(timerInterval); //clear counter
    next_btn.classList.remove("show"); //hide the next button
}

restart_quiz2.onclick = ()=>{
    info_box.classList.add("activeInfo");
    result_box.classList.remove("activeResult"); //hide result box
    result_box2.classList.remove("activeResult");
    highscore_box.classList.remove("activeResult");
    timeValue = 60; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    clearInterval(timerInterval); //clear counter
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");
