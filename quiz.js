const start = document.getElementById ("start")
const quiz = document.getElementById('quiz')
const question = document.getElementById('question')
const qImg = document.getElementById('qImg')
const choices = document.getElementById('choiches')
const choiceA = document.getElementById('A')
const choiceB = document.getElementById('B')
const choiceC = document.getElementById('C')
const scorecontainer = document.getElementById('scorecontainer')

start.addEventListener ("click", startQuiz)
function startQuiz() {
  start.style.display = "none";
  renderQuestion()
  quiz.style.display = "block";
}

function renderQuestion(){
  question.innerHTML = "<p>"+ q.question +"</p>";
  qImg.innerHTML = "<img src:"+ q.imgSrc+">";
  choicheA.innerHTML = q.choiceA;
  choicheB.innerHTML = q.choiceB;
  choicheC.innerHTML = q.choiceC;
}

let questions = [
  {question: "How much plastic is trown in the ocean each year?"
  // qImg: "plasicwave.png"
  choiceA: "8 million metric tons"
  choiceB: "2 million metric tons"
  choicheC: "none, we went plastic free"
  correct: "A"
  },{
  question: "How much trash could be given new life?"
  qImg: "recycling.png"
  choiceA: "about 60%"
  choiceB: "about 80%"
  choicheC: "about 15%"
  correct: "B"
  },{
  question: "Which contries use more plastic bottles?"
  qImg: "plastic bottles.png"
  choiceA: "Italy, Germany and France"
  choiceB: "Indonesia, Brazil and Thailand"
  choicheC: "USA, China and Mexico"
  correct: "C"
  }
]
