// === Année dynamique dans le footer ===
document.getElementById('year').textContent = new Date().getFullYear();

// === Menu burger mobile ===
const burger = document.getElementById('burger');
const menu = document.querySelector('.menu');

burger?.addEventListener('click', () => {
  const isVisible = getComputedStyle(menu).display !== 'none';
  menu.style.display = isVisible ? 'none' : 'flex';
  burger.setAttribute('aria-expanded', String(!isVisible));
});

// === Formulaire de contact simulé (pas d'envoi réel) ===
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

form?.addEventListener('submit', (e) => {
  e.preventDefault();

  const date = new Date().toLocaleString('fr-FR');
  statusEl.textContent = `✅ Merci ! Votre message a bien été simulé le ${date}.`;
  statusEl.style.color = '#198754'; // vert succès
  statusEl.style.fontWeight = '600';

  // Effet : le message disparaît après 3 secondes
  setTimeout(() => {
    statusEl.textContent = '';
    statusEl.removeAttribute('style');
  }, 3000);

  form.reset();
});
