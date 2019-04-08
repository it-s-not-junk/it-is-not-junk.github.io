// facts page
const textImg1 = document.getElementById ("textimg1")
const textImg2 = document.getElementById ("textimg2")
const textImg3 = document.getElementById ("textimg3")
const textImg4 = document.getElementById ("textimg4")
const textImg5 = document.getElementById ("textimg5")
const textImg6 = document.getElementById ("textimg6")
const img1 = document.getElementById ("img1")
const img2 = document.getElementById ("img2")
const img3 = document.getElementById ("img3")
const img4 = document.getElementById ("img4")
const img5 = document.getElementById ("img5")
const img6 = document.getElementById ("img6")

img1.addEventListener ("mouseover", showTextImg1)
function showTextImg1() {
  textImg1.style.display = "block"
  img1.style.display = "none"
}

img2.addEventListener ("mouseover", showTextImg2)
function showTextImg2() {
  textImg2.style.display = "block"
  img2.style.display = "none"
}

img3.addEventListener ("mouseover", showTextImg3)
function showTextImg3() {
  textImg3.style.display = "block"
  img3.style.display = "none"
}

img4.addEventListener ("mouseover", showTextImg4)
function showTextImg4() {
  textImg4.style.display = "block"
  img4.style.display = "none"
}

img5.addEventListener ("mouseover", showTextImg5)
function showTextImg5() {
  textImg5.style.display = "block"
  img5.style.display = "none"
}

img6.addEventListener ("mouseover", showTextImg6)
function showTextImg6() {
  textImg6.style.display = "block"
  img6.style.display = "none"
}
