anime({
  targets: '.logo-path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  direction: 'alternate',
  loop: true
});
anime({
  targets: '.learn-btn',
  translateY: [40, 0],
  opacity: [0, 1],
  easing: 'easeOutExpo',
  duration: 1000,
  delay: 500
  
});

gsap.registerPlugin(ScrollTrigger);

let totalFrames = 80;
let frame = document.getElementById("frame");
let f = { n: 1 };

gsap.to(state, {
  frame: frameCount - 1,
  ease: "none",
  snap: "frame",
  scrollTrigger: {
    trigger: "#merc-scroll",
    start: "top top",
    end: "+=3000",   // scroll distance for the “video”
    scrub: true,
    pin: true
  },
  onUpdate: render
});


document.addEventListener("DOMContentLoaded", () => {
  const brandSection = document.querySelector("#brand");
  const cards = document.querySelectorAll(".brand-card");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        anime({
          targets: ".brand-card",
          opacity: [0, 1],
          translateY: [40, 0],
          easing: "easeOutExpo",
          duration: 900,
          delay: anime.stagger(160)
        });

        observer.unobserve(brandSection);

        anime({
          targets: ".brand-card",
          translateY: [
            { value: -6, duration: 2000 },
            { value: 0, duration: 2000 }
          ],
          easing: "easeInOutSine",
          loop: true,
          delay: anime.stagger(200)
        });
      });
    },
    { threshold: 0.3 }
  );

  if (brandSection) observer.observe(brandSection);
});
