// ================= MOBILE MENU =================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    menuToggle.textContent = "✕";
  } else {
    menuToggle.textContent = "☰";
  }
});


// ================= CLOSE MENU AFTER CLICK =================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});


// ================= SCROLL ANIMATION =================

const animatedElements = document.querySelectorAll(
  ".benefit-card, .about-grid, .contact-box"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

animatedElements.forEach(element => {
  element.classList.add("hidden");
  observer.observe(element);
});


// ================= DYNAMIC YEAR =================

const footerText = document.querySelector("footer p");

const currentYear = new Date().getFullYear();

footerText.textContent =
  `© ${currentYear} NazwaHydroponik. Growing a greener future.`;
