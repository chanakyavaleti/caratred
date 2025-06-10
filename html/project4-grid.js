const hamburger = document.querySelector(".lines");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const draw=document.querySelector(".rightmobile");

hamburger.addEventListener("click", () => {
  bar1.classList.toggle("bar11");
  bar2.classList.toggle("bar22");
  bar3.classList.toggle("bar33");
  draw.classList.toggle("opendraw");
});
