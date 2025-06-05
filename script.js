
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contactForm');

    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Thanks for contacting! I'll get back to you soon.");
      });
    }
  });

