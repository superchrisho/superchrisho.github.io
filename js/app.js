const toggle = document.querySelector(".hamburger");
const links = document.querySelector(".navbar-links")

const tl = gsap.timeline().pause(true);

tl.from(".links", {
  opacity: 0,
  duration: 0.5,
  x: 300,
  stagger: 0.2
})

toggle.addEventListener("click", () => {
  links.classList.toggle("hide");
  tl.reversed() ? tl.play() : tl.reverse();
});