/* =========================
   INIT
========================= */
if (typeof feather !== 'undefined') {
  feather.replace();
}

/* =========================
   ANNOUNCEMENTS AUTO-SCROLL
========================= */
const announcementsContainer = document.querySelector('.announcements-container');
const announcementsScroll = document.getElementById('announcementsScroll');

if (announcementsContainer && announcementsScroll) {
  let scrollPos = 0;
  let isPaused = false;
  const scrollSpeed = 0.5;
  
  const items = announcementsScroll.querySelectorAll('.announcement-item:not(.clone)');
  items.forEach(item => {
    const clone = item.cloneNode(true);
    clone.classList.add('clone');
    announcementsScroll.appendChild(clone);
  });
  
  function scrollAnnouncements() {
    if (!isPaused) {
      scrollPos += scrollSpeed;
      const halfHeight = announcementsScroll.scrollHeight / 2;
      if (scrollPos >= halfHeight) {
        scrollPos = 0;
      }
      announcementsScroll.style.transform = `translateY(-${scrollPos}px)`;
    }
    requestAnimationFrame(scrollAnnouncements);
  }
  
  announcementsContainer.addEventListener('mouseenter', () => isPaused = true);
  announcementsContainer.addEventListener('mouseleave', () => isPaused = false);
  
  scrollAnnouncements();
}

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

/* =========================
   ACHIEVEMENT HOVER BLUR EFFECT
========================= */
const scrollTrack = document.getElementById("scroll-track");
const achievementCards = document.querySelectorAll(".achievement-card");

if (scrollTrack && achievementCards.length > 0) {
  achievementCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      scrollTrack.classList.add("has-hover");
      card.classList.add("active-card");
    });

    card.addEventListener("mouseleave", () => {
      scrollTrack.classList.remove("has-hover");
      card.classList.remove("active-card");
    });
  });
}

/* =========================
   LIGHTBOX FUNCTIONALITY
========================= */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

if (lightbox && lightboxImg) {
  achievementCards.forEach(card => {
    card.addEventListener("click", () => {
      const img = card.querySelector("img");
      if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });
}
