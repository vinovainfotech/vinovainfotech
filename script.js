// Animate on Scroll Init
AOS.init({
  duration: 1000,
  once: true,
});

// Contact Form Alert
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for contacting Vinova Infotech! We'll respond shortly.");
  this.reset();
});

// Hamburger toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });

  // Optional: close mobile nav when clicking a link
  mobileNav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
    })
  );
});
