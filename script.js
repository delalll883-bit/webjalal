const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    menu.classList.toggle("menu-active");
  });
}
if (hamburger) {
  window.addEventListener("scroll", () => {
    hamburger.classList.remove("is-active");
    menu.classList.remove("menu-active");
  });
}


const loader = document.querySelector(".loader");

function loaderActive() {
  loader.classList.add("loader-active");
}

function loaderActiveTime() {
  setInterval(loaderActive, 3000);
}

window.onload = loaderActiveTime();
