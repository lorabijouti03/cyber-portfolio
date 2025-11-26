document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.getElementById('lang-btn');
  let isEN = false;

  langBtn.addEventListener('click', () => {
    isEN = !isEN;
    langBtn.textContent = isEN ? 'FR' : 'EN';

    document.querySelectorAll('[data-fr][data-en]').forEach(el => {
      el.textContent = isEN ? el.dataset.en : el.dataset.fr;
    });
  });
});
