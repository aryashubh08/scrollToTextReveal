gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section",
    start: "0% 50%",
    end: "100% 50%",
    markers: true,
    scrub: 1,
  },
});
tl.to(
  "#one",
  {
    x: "-400px",
    rotate: -30,
  },
  "a"
);
tl.to(
  "#three",
  {
    x: "400px",
    rotate: 30,
  },
  "a"
);

tl.to(
  "#two",
  {
    x: "-400px",
    rotate: -30,
    delay: -0.5,
  },
  "b"
);
tl.to(
  "#four",
  {
    x: "400px",
    rotate: 30,
    delay: -0.5,
  },
  "b"
);
tl.from(
  ".back h1",
  {
    y: 100,
    opacity: 0,
    delay: 0.2,
  },
  "a"
);
tl.from(
  ".back button",
  {
    y: 100,
    opacity: 0,
    delay: 0.2,
  },
  "a"
);

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Listen for the 'scroll' event and log the event data to the console
lenis.on("scroll", (e) => {
  console.log(e);
});

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on("scroll", ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);
