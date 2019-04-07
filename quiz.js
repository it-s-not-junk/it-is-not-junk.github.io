const start = document.getElementById ("start")
const quiz = document.getElementById('quiz')

start.addEventListener ("click", startQuiz)
function startQuiz(){
  start.style.display = "none";
  quiz.style.display = "block";
}

let question = [
  {
    question: "How much plastic is currently in our oceans?",
  }
]
