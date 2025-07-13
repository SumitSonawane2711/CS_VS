function setLanguage(lang) {
  document.querySelectorAll('.lang').forEach(el => {
    el.classList.remove('active');
  });

  document.querySelectorAll(`.lang-${lang}`).forEach(el => {
    el.classList.add('active');
  });

  localStorage.setItem('preferredLanguage', lang);
}

// On page load, set preferred language
window.addEventListener('DOMContentLoaded', () => {
  const preferredLang = localStorage.getItem('preferredLanguage') || 'en';
  setLanguage(preferredLang);
});


 // Show sticky footer after hero CTA scroll
  document.addEventListener("DOMContentLoaded", function () {
    const footer = document.getElementById("stickyFooter");
    const triggerEl = document.querySelector(".hero-buttons"); // Adjust selector to your CTA container

    function checkScroll() {
      const triggerPosition = triggerEl.getBoundingClientRect().top;
      
      if (triggerPosition < 0) {
        footer.style.display = "block";
      } else {
        footer.style.display = "none";
      }
    }

    window.addEventListener("scroll", checkScroll);
  });