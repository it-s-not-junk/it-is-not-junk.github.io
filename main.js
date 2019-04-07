
//TEST
// $( ".hoverover" ).hover(function() {
//   $( ".garbage" ).toggle( "slow", function() {
//     // Animation complete.
//   });
// });
const title = document.getElementsByClassName ("title main")
const garbage = document.getElementById("garbage")

title.addEventListener ("mouseover", showGarbage)
function showGarbage() {
  title.style.display = "none"
  garbage.style.display = "block"
}
