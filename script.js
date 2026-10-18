(() => {
  const body = document.body;
  const themeButton = document.getElementById('theme-toggle');
  const themeIcon = themeButton?.querySelector('i');
  const dropdown = document.getElementById('myDropdown');
  const languageButton = document.getElementById('lang-button');
  const currentLanguage = document.getElementById('current-language');
  const backToTop = document.getElementById('back-to-top');

  // Apply saved preferences safely; defaults are dark mode and English.
  function applyTheme(theme) {
    const light = theme === 'light';
    body.classList.toggle('light-mode', light);
    if (themeIcon) {
      themeIcon.classList.toggle('fa-moon', light);
      themeIcon.classList.toggle('fa-sun', !light);
    }
    if (themeButton) {
      themeButton.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
      themeButton.setAttribute('title', light ? 'Switch to dark mode' : 'Switch to light mode');
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', light ? '#f8fafc' : '#05050f');
  }

  window.toggleTheme = function toggleTheme() {
    const nextTheme = body.classList.contains('light-mode') ? 'dark' : 'light';
    applyTheme(nextTheme);
    try { localStorage.setItem('portfolio-theme', nextTheme); } catch (_) { /* storage may be unavailable */ }
  };

  try { applyTheme(localStorage.getItem('portfolio-theme') || 'dark'); }
  catch (_) { applyTheme('dark'); }

  // Language switcher: all elements with data-en/data-rw are translated together.
  function setLanguage(language) {
    const lang = language === 'rw' ? 'rw' : 'en';
    document.documentElement.lang = lang === 'rw' ? 'rw' : 'en';
    document.querySelectorAll('[data-en][data-rw]').forEach((element) => {
      const value = element.dataset[lang];
      if (typeof value === 'string') element.textContent = value;
    });
    if (currentLanguage) currentLanguage.textContent = lang === 'rw' ? '🇷🇼 RW' : '🇬🇧 EN';
    if (languageButton) languageButton.setAttribute('aria-label', lang === 'rw' ? 'Hindura ururimi' : 'Change language');
    dropdown?.classList.remove('show');
    languageButton?.setAttribute('aria-expanded', 'false');
    try { localStorage.setItem('portfolio-language', lang); } catch (_) { /* storage may be unavailable */ }
  }

  window.toggleDropdown = function toggleDropdown() {
    if (!dropdown) return;
    const isOpen = dropdown.classList.toggle('show');
    languageButton?.setAttribute('aria-expanded', String(isOpen));
  };

  dropdown?.querySelectorAll('[data-language]').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
  });
  document.addEventListener('click', (event) => {
    if (dropdown?.classList.contains('show') && !event.target.closest('.dropdown')) {
      dropdown.classList.remove('show');
      languageButton?.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && dropdown?.classList.contains('show')) {
      dropdown.classList.remove('show');
      languageButton?.setAttribute('aria-expanded', 'false');
      languageButton?.focus();
    }
  });

  try { setLanguage(localStorage.getItem('portfolio-language') || 'en'); }
  catch (_) { setLanguage('en'); }

  // Reveal the back-to-top control only after the visitor scrolls down.
  function updateBackToTop() {
    backToTop?.classList.toggle('visible', window.scrollY > 450);
  }
  window.addEventListener('scroll', updateBackToTop, { passive: true });
  updateBackToTop();

  const year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();
})();
