let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".banner",
  },
});

tl.from(".bannerMessage", { y: 300, opacity: 0, duration: 4 });
