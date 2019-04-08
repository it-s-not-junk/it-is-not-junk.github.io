// slect elements from html file
const start = document.getElementById ("start")
const quiz = document.getElementById("quiz")
const question = document.getElementById("question")
const qImg = document.getElementById("qImg")
const choices = document.getElementById("choiches")
const choiceA = document.getElementById("A")
const choiceB = document.getElementById("B")
const choiceC = document.getElementById("C")
const finishQuiz = document.getElementById("finishQuiz")

// array with questions that will be displayed
let questions = [
  {
    question: "How much plastic is trown in the ocean each year?",
    imgSrc : "https://i2.wp.com/statementsstore.com/wp-content/uploads/2018/09/plasticwave-signed.jpg?fit=500%2C500&ssl=1",
    choiceA : "8 million metric tons",
    choiceB : "2 million metric tons",
    choiceC : "none, we went plastic free",
    correct : "A"
  },{
    question: "How much trash could be given new life?",
    imgSrc : "https://cdn.shopify.com/s/files/1/0014/7845/9504/products/RECYCLING-FEE-01_grande.png?v=1539292248",
    choiceA : "about 60%",
    choiceB : "about 80%",
    choiceC : "about 15%",
    correct : "B"
  },{
    question : "Which contries use more plastic bottles?",
    imgSrc : "http://divemagazine.co.uk/images/article-images/eco/Plastic_Pollution/plastic_eating_enzyme/plastic_enzyme_600.jpg",
    choiceA : "Italy, Germany and France",
    choiceB : "Indonesia, Brazil and Thailand",
    choiceC : "USA, China and Mexico",
    correct : "C"
  }
]

// create useful variables (for score and to render questions)
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;

//render question one
function renderQuestion(){
  let q = questions[runningQuestion];
  question.innerHTML = "<p>"+ q.question +"</p>";
  qImg.innerHTML = "<img src="+ q.imgSrc +"/>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}

//render question two
choiceA.addEventListener("click", renerQuestion2)
function renerQuestion2(){
  let q = questions[runningQuestion++];
  question.innerHTML = "<p>"+ q.question +"</p>";
  qImg.innerHTML = "<img src="+ q.imgSrc +"/>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}

//render question three
choiceB.addEventListener("click", renderQuestion3)
function renderQuestion3(){
  let q = questions[runningQuestion++];
  question.innerHTML = "<p>"+ q.question +"</p>";
  qImg.innerHTML = "<img src="+ q.imgSrc +"/>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}

//show finishQuiz
choiceC.addEventListener("click", showFinishQuiz)
function showFinishQuiz(){
  finishQuiz.style.display = "block";
  quiz.style.display = "none";
}

//Show finishquiz
// render progress
// function renderProgress(){
//     for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
//         progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
//     }
// }

// program to make the quiz start
start.addEventListener ("click", startQuiz)

function startQuiz() {
  start.style.display = "none";
  renderQuestion()
  quiz.style.display = "block";
  // renderProgress()
}
