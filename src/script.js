const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  updateToggleIcon();
});

function updateToggleIcon() {
  if (document.body.classList.contains('light-mode')) {
    themeToggle.textContent = '☀️';
    themeToggle.setAttribute('aria-label', 'Alternar para tema escuro');
  } else {
    themeToggle.textContent = '🌙';
    themeToggle.setAttribute('aria-label', 'Alternar para tema claro');
  }
}

// Initialize the icon based on current theme
updateToggleIcon();

// Armazenar perfil ativo ao clicar
const profileLinks = document.querySelectorAll('.profile');

profileLinks.forEach(profile => {
  profile.addEventListener('click', (event) => {
    // Obter a imagem e o nome do perfil
    const img = profile.querySelector('img');
    const figCaption = profile.querySelector('figcaption');
    
    if (img && figCaption) {
      const profileData = {
        name: figCaption.textContent,
        image: img.src
      };
      
      // Armazenar no LocalStorage
      localStorage.setItem('activeProfile', JSON.stringify(profileData));
    }
  });
});