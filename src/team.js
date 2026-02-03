import './people.css';

const teamwrapper = document.querySelector(".teamwrapper");
const teamleadership = document.querySelector(".leadershipclick");
const teammarketing = document.querySelector(".marketingclick");
const teamfinance = document.querySelector(".financeclick");
const teamtech = document.querySelector(".techclick");
const teamclass = document.querySelectorAll(".teamclass");
const linkhighlight = document.querySelector(".linkhighlight");

function untoggle(thing1, thing2, thing3) {
  if (thing1.classList.contains("active")) {
    thing1.classList.remove("active");
  }
  if (thing2.classList.contains("active")) {
    thing2.classList.remove("active");
  }
  if (thing3.classList.contains("active")) {
    thing3.classList.remove("active");
  }
}
function removeHighlight() {
  if (linkhighlight.classList.contains("active1")) {
    linkhighlight.classList.remove("active1");
  }
  if (linkhighlight.classList.contains("active2")) {
    linkhighlight.classList.remove("active2");
  }
  if (linkhighlight.classList.contains("active3")) {
    linkhighlight.classList.remove("active3");
  }
  if (linkhighlight.classList.contains("active4")) {
    linkhighlight.classList.remove("active4");
  }
}
teamleadership.addEventListener("click", () => {
  untoggle(teammarketing, teamfinance, teamtech);
  teamwrapper.style.transform = "translateX(0)";
  teamleadership.classList.toggle("active");
  removeHighlight();
  linkhighlight.classList.toggle("active1");
  console.log("leadership active");
});
teammarketing.addEventListener("click", () => {
  untoggle(teamleadership, teamfinance, teamtech);
  teamwrapper.style.transform = "translateX(-100vw)";
  teammarketing.classList.toggle("active");
  removeHighlight();
  linkhighlight.classList.toggle("active2");
  console.log("marketing active");
});
teamfinance.addEventListener("click", () => {
  untoggle(teammarketing, teamleadership, teamtech);
  teamwrapper.style.transform = "translateX(-200vw)";
  teamfinance.classList.toggle("active");
  removeHighlight();
  linkhighlight.classList.toggle("active3");
  console.log("finance active");
});
teamtech.addEventListener("click", () => {
  untoggle(teammarketing, teamfinance, teamleadership);
  teamwrapper.style.transform = "translateX(-300vw)";
  teamtech.classList.toggle("active");
  removeHighlight();
  linkhighlight.classList.toggle("active4");
  console.log("tech active");
});
