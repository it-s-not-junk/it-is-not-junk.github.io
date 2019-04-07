const start = document.getElementById ("start")
const quiz = document.getElementById("quiz")
const question = document.getElementById("question")
const qImg = document.getElementById("qImg")
const choices = document.getElementById("choiches")
const choiceA = document.getElementById("A")
const choiceB = document.getElementById("B")
const choiceC = document.getElementById("C")

// array with questions that will be displayed
let questions = [
  {
    question: "How much plastic is trown in the ocean each year?",
    imgSrc : "plasicwave.png",
    choiceA : "8 million metric tons",
    choiceB : "2 million metric tons",
    choiceC : "none, we went plastic free",
    correct : "A"
  },{
    question: "How much trash could be given new life?",
    imgSrc : "recycling.png",
    choiceA : "about 60%",
    choiceB : "about 80%",
    choiceC : "about 15%",
    correct : "B"
  },{
    question : "Which contries use more plastic bottles?",
    imgSrc : "plastic bottles.png",
    choiceA : "Italy, Germany and France",
    choiceB : "Indonesia, Brazil and Thailand",
    choiceC : "USA, China and Mexico",
    correct : "C"
  }
]

let runningQuestion = 0;

function renderQuestion(){
  let q = questions[runningQuestion];

  question.innerHTML = "<p>"+ q.question +"</p>";
  qImg.innerHTML = "<img src:"+ q.imgSrc +"/>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}

start.addEventListener ("click", startQuiz)
function startQuiz() {
  start.style.display = "none";
  renderQuestion()
  quiz.style.display = "block";
}
