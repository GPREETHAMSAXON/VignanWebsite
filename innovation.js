// future-ready JS hooks
console.log("Innovation Cell Page Loaded");
// ================= SCROLL-IN ANIMATION =================

const fadeElements = document.querySelectorAll(".fade-up");

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

fadeElements.forEach((el) => fadeObserver.observe(el));
