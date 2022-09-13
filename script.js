var startbtn = document.querySelector("#start");
var page1 = document.querySelector("#page1");
var page2 = document.querySelector("#page2");
var quizQuestion = document.querySelector("#quizQuestions")
var aButton = document.querySelector("#aButton")
var bButton = document.querySelector("#bButton")
var cButton = document.querySelector("#cButton")
var dButton = document.querySelector("#dButton")
var currentQ = 0

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
        question: "10 + 10",
        answers: {
            a: '3',
            b: '20',
            c: '40',
            d: '10',
            correctAnswer: "b"
        }
    } ,
    
    {
        question: "30 + 40",
        answers: {
            a: '70',
            b: '64',
            c: '66',
            d: '10',
            correctAnswer: 'a'
        }
    },

    {
        question: "what color is the sun?",
        answers: {
            a: 'blue',
            b: 'green',
            c: 'yellow',
            d: '10',
            correctAnswer: 'c'
        }
    },

    {
        question: "how many days are in a week?",
        answers: {
            a: '7',
            b: '10',
            c: '1',
            d: '10',
            correctAnswer: 'a'
        }
    }
];
