const start = document.getElementById ("start")

function startQuiz(){
  start.style.display = "none"
  quiz.style.display = "block"
}
start.addEventListener ("click")

let question = [
  {
    question: "How much plastic is currently in our oceans?",
  }
]
