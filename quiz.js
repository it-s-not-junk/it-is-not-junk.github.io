const start = document.getElementById ("start")
const quiz = document.getElementById('quiz')
const question = document.getElementById('question')
const  qImg = document.getElementById('qImg')
const choices = document.getElementById('choiches')
const choices = document.getElementByclass('choiche')
const choiceA = document.getElementById('A')
const choiceB = document.getElementById('B')
const choiceC = document.getElementById('C')
const scorecontainer = document.getElementById('scorecontainer')


start.addEventListener ("click", startQuiz)
function startQuiz(){
  start.style.display = "none";
  quiz.style.display = "block";
}

question: "How much trash is in our oceans?"
qImg: "img/"
