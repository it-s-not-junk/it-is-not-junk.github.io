const start = document.getElementById ("start")
const quiz = document.getElementById('quiz')
const question = document.getElementById('question')
const  qImg = document.getElementById('qImg')
const choices = document.getElementById('choiches')
const choiceA = document.getElementById('A')
const choiceB = document.getElementById('B')
const choiceC = document.getElementById('C')
const scorecontainer = document.getElementById('scorecontainer')

// This function is not working
start.addEventListener ("click", startQuiz)
function startQuiz() {
  start.style.display = "none";
  quiz.style.display = "block";
}

// not sure this works as startQuiz is not working
question: "How much trash is in our oceans?"
qImg: "plasicwave.png"
