function setLanguage(lang) {
    // Hide all language elements
    document.querySelectorAll('.lang').forEach(el => {
        el.style.display = 'none';
    });
    
    // Show only the selected language elements
    document.querySelectorAll(`.lang-${lang}`).forEach(el => {
        el.style.display = 'block';
    });

    // Update fade effect
    document.querySelectorAll('.fade').forEach(el => {
        el.style.opacity = 0;
        setTimeout(() => {
            el.style.opacity = 1;
        }, 100);
    });

    localStorage.setItem('preferredLanguage', lang);
}

// On page load, set preferred language
window.addEventListener('DOMContentLoaded', () => {
    const preferredLang = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(preferredLang);
});