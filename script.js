function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let landingActive = true;

function enterSite() {
  const landing = document.getElementById("landing-screen");
  document.body.classList.remove("lock-scroll");
  landing.classList.add("fade-out");

  setTimeout(() => {
    landing.style.display = "none";
    landingActive = false; // Allow normal scrolling from now on
  }, 500);
}

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("lock-scroll");
})
