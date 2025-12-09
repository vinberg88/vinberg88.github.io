(function () {
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const storageKey = 'wsl-theme';

  function getSystemPreference() {
    return window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (btn) {
      btn.textContent = theme === 'light' ? '☀️' : '🌙';
    }
  }

  function initTheme() {
    const stored = localStorage.getItem(storageKey);
    const theme = stored || getSystemPreference() || 'dark';
    applyTheme(theme);
  }

  if (btn) {
    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(storageKey, next);
    });
  }

  initTheme();
})();
