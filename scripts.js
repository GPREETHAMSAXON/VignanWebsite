/* =========================
   INIT
========================= */
feather.replace();

// Scroll track element
const track = document.getElementById("scroll-track");
if (track) {

  /* =========================
     FOOTER ANIMATION
  ========================= */
  const footer = document.getElementById("footer");

  if (footer) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            footer.classList.add("footer-visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(footer);
  }

  /* =========================
     MOBILE SWIPE
  ========================= */
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;

  function pauseAnimation() {
    track.style.animationPlayState = "paused";
  }

  function resumeAnimation() {
    track.style.animationPlayState = "running";
  }

  track.addEventListener("touchstart", e => {
    isDragging = true;
    startX = e.touches[0].clientX;
    prevTranslate = currentTranslate;
    pauseAnimation();
  });

  track.addEventListener("touchmove", e => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    currentTranslate = prevTranslate + diff;
    track.style.transform = `translateX(${currentTranslate}px)`;
  });

  track.addEventListener("touchend", () => {
    isDragging = false;
    track.style.transition = "transform 0.4s ease";
    track.style.transform = "";
    currentTranslate = 0;

    setTimeout(() => {
      track.style.transition = "";
      resumeAnimation();
    }, 400);
  });

  /* =========================
     VARIABLE SPEED ON HOVER
  ========================= */
  track.addEventListener("mouseenter", () => {
    track.style.setProperty("--scroll-speed", "90s");
  });

  track.addEventListener("mouseleave", () => {
    track.style.setProperty("--scroll-speed", "60s");
  });

  /* =========================
     AUTO PAUSE ON TAB SWITCH
  ========================= */
  document.addEventListener("visibilitychange", () => {
    track.style.animationPlayState = document.hidden ? "paused" : "running";
  });

} else {
  console.error("Scroll track not found");
}

/* =========================
   DARK / LIGHT MODE TOGGLE
========================= */
const toggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  if (themeIcon) themeIcon.textContent = "☀️";
}

if (toggle) {
  toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    if (themeIcon) themeIcon.textContent = isDark ? "☀️" : "🌙";
  });
}

/* =========================
   KPI CARDS TILT + GLOW EFFECT
========================= */
const kpiCards = document.querySelectorAll(".kpi-card");

kpiCards.forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Glow effect coordinates for CSS variable usage
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);

    // Tilt effect
    const rotateX = -(y - centerY) / 18;
    const rotateY = (x - centerX) / 18;

    card.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-10px)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `
      perspective(900px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0)
    `;
  });
});


/* =========================
   KPI CURSOR INTERACTION
========================= */

document.querySelectorAll(".kpi-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * -8;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-10px)
    `;

    // glow follow cursor
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0)
    `;
  });
});
