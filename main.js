
const title = document.getElementById ("title")
const garbage = document.getElementById("garbage")

title.addEventListener ("mouseover", showGarbage)
function showGarbage() {
  title.style.display = "none"
  garbage.style.display = "block"
}

garbage.addEventListener ("mouseout", hideGarbage)
function hideGarbage() {
  title.style.display = "block"
  garbage.style.display = "none"
}
