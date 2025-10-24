// année dynamique
document.getElementById('year').textContent = new Date().getFullYear();

// menu burger pour mobile
const burger = document.getElementById('burger');
const menu = document.querySelector('.menu');
burger?.addEventListener('click', () => {
  const visible = getComputedStyle(menu).display !== 'none';
  menu.style.display = visible ? 'none' : 'flex';
});

// formulaire de contact simulé (pas d'envoi réel)
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

form?.addEventListener('submit', (e) => {
  e.preventDefault();

const date = new Date().toLocaleString('fr-FR');

statusEl.textContent = `Merci ! Votre message a bien été simulé le ${date}.`;
form.reset();
});
