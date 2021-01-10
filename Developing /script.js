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