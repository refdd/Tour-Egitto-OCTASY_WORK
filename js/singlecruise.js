// selctor
const boat = document.querySelector(".boat");
const start = document.querySelector(".start");
const end = document.querySelector(".end");

// enent scroll
window.addEventListener("scroll", slidesas);

slidesas();

function slidesas() {
  const homeHeight = window.innerHeight / 6;

  const boatTop = boat.getBoundingClientRect().top;
  const starTop = start.getBoundingClientRect().top;
  const endTop = end.getBoundingClientRect().top;
  if (boatTop < homeHeight) {
    boat.classList.add("move");
    console.log(starTop, boatTop);
  } else {
    boat.classList.remove("move");
    console.log("stop");
  }
  if (boatTop <= starTop) {
    boat.classList.remove("move");
    return;
  }
  if (homeHeight >= endTop) {
    boat.classList.remove("move");
  }
}
