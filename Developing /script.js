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

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
     

        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        clearInterval(timerInterval);
        timeValue -= 1;
        timeCount.textContent = timeValue;
        startTimer();
        console.log("Wrong Answer");


        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

const viewHS = document.querySelector(".vHS");
viewHS.addEventListener("click", function(event) {
    info_box.classList.remove("activeResult"); //hide result box
    highscore_box.classList.add("activeResult"); //show result box
})


function showResult(){
    secondsLeft = document.querySelector(".timer_sec").textContent;
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box2.classList.add("activeResult"); //show result box
    const scoreText = result_box2.querySelector(".score_text");
    let scoreTag = '<span>All done! Your final score is ' + secondsLeft +'</span>';
        scoreText.innerHTML = scoreTag;

        var formInput = document.getElementById("formInput");
    
        function displayMessage(type, message) {
            var msgDiv = document.getElementById("msg");
            msgDiv.textContent = message;
            msgDiv.setAttribute("class", type);
          }
        
          submitBtn.addEventListener("click", function(event) {
            event.preventDefault();
            result_box2.classList.remove("activeResult"); //hide result box
            highscore_box.classList.add("activeResult"); //show result box


            
            var user = {
              initials: formInput.value.trim(),
              score: secondsLeft,
            };  

            // validate the fields
            if (formInput.value === "") {
              displayMessage("error", "Initials cannot be blank");
            }
            else if (formInput.value.length > 3) {
              displayMessage("error", "Initials cannot be longer than 3 characters")
            }
            else {
              displayMessage("success", "Registered successfully");
            
              // set new submission
              console.log(user);
              var userString = JSON.stringify(user);
              JSON.parse(userString);
              localStorage.setItem("user", userString);
              highscoresList.push(user.initials + " " + user.score);
              formInput.value = "";
              displayMessage("", "");
              renderHighscores();              
            }

    
          });

          var highscorersList = document.querySelector(".hscores");

          function renderHighscores() {
            for ( newHS; newHS < highscoresList.length; newHS++) {
                var highscore = highscoresList[newHS];
                var li = document.createElement("li");
                li.textContent = highscore;
                highscorersList.appendChild(li);
              }
            }
          }



function incorrectAns() {
  timeValue -= 5;
};


function startTimer(){
        var timerInterval = setInterval(function () {
            timeValue -= 1;
            timeCount.textContent = timeValue;
        
        
            if (timeValue <= 0) {
              clearInterval(timerInterval);
            }
        
          }, 1000);

        if(timeValue <= 0){ //if timer is less than 0
            // clearInterval(counter); //clear counter
            // timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
// }

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}


