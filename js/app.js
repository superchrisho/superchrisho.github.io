const toggle = document.querySelector(".hamburger");
const ul = document.querySelector(".navbar-links");

// prevents timeline from playing on load
const tl = gsap.timeline().paused(true);
let animationActive = false;

const animation = () => {
  if (!animationActive) {
    ul.style.display = "flex";
    tl.to(".line1", {
      top: "50%",
      rotate: "45deg",
      backgroundColor: "#d15252",
    })
      .to(
        ".line2",
        {
          width: "0%",
        },
        "<"
      )
      .to(
        ".line3",
        {
          top: "50%",
          rotate: "-45deg",
          backgroundColor: "#d15252",
        },
        "<"
      )
      .from(
        ".links",
        {
          x: "100%",
          opacity: 0,
          stagger: 0.2,
          ease: "back.inOut",
        },
        "<"
      )
      .play();
    animationActive = !animationActive;
  } else {
    tl.reversed() ? tl.play() : tl.reverse();
  }
};

toggle.addEventListener("click", () => {
  console.log(`Hamburger clicked`);
  animation();
  // tl.reversed() ? tl.play() : tl.reverse();
});
