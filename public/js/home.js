const imagination = document.querySelector(".imagination");
gsap.to(imagination, {
  y: 8,
  rotation: 2,
  duration: 2,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
});

const reality = document.querySelector(".reality");

function createStar() {
  const star = document.createElement("div");
  star.innerHTML = "⭐";
  star.className = "star";
  star.style.fontSize = "0.5rem";

  const x = (Math.random() - 0.5) * 50;
  const y = (Math.random() - 0.5) * 50;

  star.style.transform = `translate(${x}px, ${y}px)`;
  reality.appendChild(star);

  gsap.to(star, {
    scale: 0.1,
    opacity: 0,
    duration: 1,
    onComplete: () => star.remove(),
  });
}

const realityTimeline = gsap.timeline({ repeat: -1 });

realityTimeline
  .to(reality, {
    opacity: 1,
    duration: 0.5,
    onStart: () => {
      for (let i = 0; i < 5; i++) {
        setTimeout(createStar, i * 100);
      }
    },
  })
  .to(reality, {
    opacity: 0.3,
    duration: 0.5,
    delay: 0.5,
  });

gsap.to(".tagline", {
  textShadow:
    "0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.6)",
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});