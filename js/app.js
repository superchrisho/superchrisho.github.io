const toggle = document.querySelector(".hamburger");
const links = document.querySelector(".navbar-links");
const tl = gsap.timeline();

tl.pause();
tl.from(".links", {
  opacity: 0,
  x: "200%",
  stagger: 0.2,
})
  .to(
    ".line1",
    {
      top: "50%",
      y: "-50%",
      width: "0%",
      duration: 0.2,
    },
    "<"
  )
  .to(
    ".line2",
    {
      width: "0%",
      duration: 0.2,
    },
    "<"
  )
  .to(
    ".line3",
    {
      top: "50%",
      y: "-50%",
      width: "0%",
      duration: 0.2,
    },
    "<"
  )
  .to(".line1", {
    width: "100%",
    rotate: "45deg",
    duration: 0.2,
    backgroundColor: "lightcoral",
  })
  .to(
    ".line3",
    {
      width: "100%",
      rotate: "-45deg",
      duration: 0.2,
      backgroundColor: "lightcoral",
    },
    "<"
  )
  .reverse();

toggle.addEventListener("click", () => {
  console.log(`Played animation`);
  tl.resume();
  tl.reversed() ? tl.play() : tl.reverse();
});
