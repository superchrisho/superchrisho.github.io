const toggle = document.querySelector(".hamburger");
const links = document.querySelector(".navbar-links");

const tl = gsap.timeline().pause(true);

tl.from(".links", {
  opacity: 0,
  duration: 0.5,
  x: "100%",
  stagger: 0.2,
})
  .to(
    ".line1",
    {
      transformOrigin: "center left",
      rotate: "45deg",
    },
    "<"
  )
  .to(".line2", { width: "0px" }, "<")
  .to(
    ".line3",
    {
      transformOrigin: "center left",
      rotate: "-45deg",
    },
    "<"
  );

toggle.addEventListener("click", () => {
  tl.reversed() ? tl.play() : tl.reverse();
});
