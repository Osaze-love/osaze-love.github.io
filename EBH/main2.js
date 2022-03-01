// document.querySelector(".contents").style.display = "none";
// document.querySelector("body").classList.add("spinner-2");

// // Mimic Server Request
// setTimeout(() => {
//   document.querySelector("body").classList.remove("spinner-2");
//   document.querySelector(".contents").style.display = "block";
// }, 2000);

const hamburger = document.querySelector(".hamburger");
const Navul = document.querySelector(".navUl");

hamburger.addEventListener("click", () => {
  Navul.classList.toggle("show");
  if (Navul.classList.contains("show")) {
    hamburger.src = "images/close.png";
  } else {
    hamburger.src = "images/hamburger.png";
  }
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    Navul.classList.remove("show");
    hamburger.src = "images/hamburger.png";
  })
);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".mission",
  },
});

tl.from(".mission1", { y: 200, opacity: 0, duration: 1, ease: "powerIn" });

let zl = gsap.timeline({
  scrollTrigger: {
    trigger: ".mission",
  },
});

zl.from(".mission2", { y: 200, opacity: 0, duration: 1, ease: "powerIn" });

let ml = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
  },
});

ml.from(".aboutText", { y: 200, opacity: 0, duration: 1, ease: "powerIn" });

let pl = gsap.timeline({
  scrollTrigger: {
    trigger: ".backStory",
  },
});

pl.from(".story", { y: 200, opacity: 0, duration: 1, ease: "powerIn" });

let gl = gsap.timeline({
  scrollTrigger: {
    trigger: ".entrepreneurship",
  },
});

gl.from(".entrepreneurText", {
  y: 200,
  opacity: 0,
  duration: 1,
  ease: "powerIn",
});

let el = gsap.timeline({
  scrollTrigger: {
    trigger: ".focus",
  },
});

el.from(".focus1item1", { y: 200, opacity: 0, duration: 1, ease: "powerIn" });

let yl = gsap.timeline({
  scrollTrigger: {
    trigger: ".recent",
  },
});

yl.from(".recents", { y: 200, opacity: 0, duration: 1, ease: "powerIn" });
