// Cuenta regresiva para la boda
const countdownElement = document.getElementById('countdown');
const weddingDate = new Date('2025-05-17T20:30:00');
 // Ajustá esta fecha a la de tu boda

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    countdownElement.innerText = '¡Hoy es el gran día!';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownElement.innerText = `${days} días ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

const basePath = '/boda-Jorgelina-Panagiotis/';
let currentLang = 'es';

function loadLanguage(lang) {
  currentLang = lang;
  fetch(`${basePath}lang/${currentLang}.json`)
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (data[key]) {
          el.innerHTML = data[key];
        }
      });
    });
}

function switchLanguage() {
  const newLang = currentLang === 'es' ? 'gr' : 'es';
  loadLanguage(newLang);
}


// 🔽 Llamada inicial para cargar el idioma por defecto al entrar
document.addEventListener('DOMContentLoaded', () => {
  loadLanguage(currentLang);
});


// Música automática al cargar (requiere interacción del usuario)
document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('musicaFondo');

  const activarMusica = () => {
    if (audio.paused) {
      audio.play().catch(err => console.log("No se pudo reproducir hasta que el usuario interactúe."));
    }
    // Importante: remover el listener para que no se dispare de nuevo
    document.body.removeEventListener('click', activarMusica);
  };

  document.body.addEventListener('click', activarMusica);
});

