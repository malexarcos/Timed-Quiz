var startbtn = document.querySelector("#start");
var page1 = document.querySelector("#page1");
var page2 = document.querySelector("#page2");
var quizQuestion = document.querySelector("#quizQuestions")
var aButton = document.querySelector("#aButton")
var bButton = document.querySelector("#bButton")
var cButton = document.querySelector("#cButton")
var dButton = document.querySelector("#dButton")
var currentQ = 0

var timer; 
var element = document.getElementById('timer');
(function (){
    var sec = 0;
    timer = setInterval(()=>{
        element.innerHTML = '00:'+sec;
        sec ++;
    },6000)
})()

function startquiz(){
    page1.style.display = "none"
    page2.style.display = "block"
    displayQuestion()
}

startbtn.addEventListener("click",startquiz) 

function displayQuestion(){
    quizQuestion.textContent = questions [currentQ].question
    aButton.textContent = questions [currentQ].answers.a
    bButton.textContent = questions [currentQ].answers.b
    cButton.textContent = questions [currentQ].answers.c
    dButton.textContent = questions [currentQ].answers.d
    aButton.addEventListener("click", nextQ)
    bButton.addEventListener("click", nextQ)
    cButton.addEventListener("click", nextQ)
    dButton.addEventListener("click", nextQ)

}

function nextQ(){
    currentQ = currentQ+1
    displayQuestion()
}

var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: '3',
            b: '<script>',
            c: '40',
            d: '10',
            correctAnswer: "b"
        }
    } ,
    
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: {
            a: '=',
            b: '64',
            c: '66',
            d: '10',
            correctAnswer: 'a'
        }
    },

    {
        question: "Is JavaScript case-sensitive?",
        answers: {
            a: 'blue',
            b: 'green',
            c: 'yes',
            d: '10',
            correctAnswer: 'c'
        }
    },

    {
        question: "How to write an IF statement in JavaScript?",
        answers: {
            a: 'if (i == 5)',
            b: '10',
            c: '1',
            d: '10',
            correctAnswer: 'a'
        }
    }
];
