// Animate on Scroll Init
AOS.init({
  duration: 1000,
  once: true,
});

// Contact Form
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks for contacting Vinova Infotech! We'll respond shortly.");
});
