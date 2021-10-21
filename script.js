var btn = document.querySelector(".button");
var h2 = document.querySelector("h2");
var btn1 = document.querySelector(".reset");
var v = 0;
function clickme() {
  v = v + 1;
  h2.innerText = v;
}
function reset() {
  h2.innerText = 0;
  }
btn.addEventListener("click", clickme);
btn1.addEventListener("click", reset);
