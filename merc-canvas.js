// gsap.registerPlugin(ScrollTrigger);

// const canvas = document.querySelector("#merc-scroll canvas");
// const context = canvas.getContext("2d");

// const frameCount = 78;

// function currentFrame(i) {
//   return `Assets/New folder (2)/ezgif-frame-${String(i + 1).padStart(3, "0")}.jpg`;
// }

// const images = [];
// const state = { frame: 0 };

// for (let i = 0; i < frameCount; i++) {
//   const img = new Image();
//   img.src = currentFrame(i);
//   images.push(img);
// }

// function resizeCanvas() {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   render();
// }

// window.addEventListener("resize", resizeCanvas);
// resizeCanvas();

// function render() {
//   const img = images[state.frame];
//   if (!img) return;
//   const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
//   const w = img.width * scale;
//   const h = img.height * scale;
//   const x = (canvas.width - w) / 2;
//   const y = (canvas.height - h) / 2;
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   context.drawImage(img, x, y, w, h);
// }

// images[0].onload = render;

// // gsap.to(state, {
// //   frame: frameCount - 1,
// //   ease: "none",
// //   snap: "frame",
// //   scrollTrigger: {
// //     trigger: "#merc-scroll",
// //     start: "top top",
// //     end: "bottom bottom",
// //     scrub: true,
// //     pin: true
// //   },
// //   onUpdate: render
// // });


// gsap.to(state, {
//   frame: frameCount - 1,
//   ease: "none",
//   snap: "frame",
//   scrollTrigger: {
//     trigger: "#merc-scroll",
//     start: "top top",
//     end: "+=3000",   // scroll distance for the “video”
//     scrub: true,
//     pin: true
//   },
//   onUpdate: render
// });

gsap.registerPlugin(ScrollTrigger);

const canvas = document.querySelector("#merc-scroll canvas");
const context = canvas.getContext("2d");

const frameCount = 78;

function currentFrame(i) {
  return `Assets/New folder (2)/ezgif-frame-${String(i + 1).padStart(3, "0")}.jpg`;
}

const images = [];
const state = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function render() {
  const img = images[state.frame];
  if (!img) return;
  const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
  const w = img.width * scale;
  const h = img.height * scale;
  const x = (canvas.width - w) / 2;
  const y = (canvas.height - h) / 2;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(img, x, y, w, h);
}

images[0].onload = render;

gsap.to(state, {
  frame: frameCount - 1,
  ease: "none",
  snap: "frame",
  scrollTrigger: {
    trigger: "#merc-scroll",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pin: true
  },
  onUpdate: render
});
