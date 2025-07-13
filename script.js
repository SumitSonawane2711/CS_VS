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
