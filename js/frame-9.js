function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}



let counterDisplayElem = document.querySelector(".counter-display");
let counterMinusElem = document.querySelector(".counter-minus");
let counterPlusElem = document.querySelector(".counter-plus");

let count = +0;

updateDisplay();
if (count >= 0) {
  counterPlusElem.addEventListener("click", () => {
    count++;
    updateDisplay();
  });

  counterMinusElem.addEventListener("click", () => {
    count--;
    updateDisplay();
  });
}

function updateDisplay() {
  counterDisplayElem.innerHTML = count;
}
