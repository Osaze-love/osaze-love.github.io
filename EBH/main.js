document.querySelector(".contents").style.display = "none";
document.querySelector("body").classList.add("spinner-2");

// Mimic Server Request
setTimeout(() => {
  document.querySelector("body").classList.remove("spinner-2");
  document.querySelector(".contents").style.display = "block";
}, 3000);

const hamburger = document.querySelector(".hamburger");
const Navul = document.querySelector(".navUl");

hamburger.addEventListener("click", () => {
  Navul.classList.toggle("show");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    Navul.classList.remove("show");
  })
);
