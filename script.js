document.getElementById('joinBtn').addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({
    behavior: 'smooth'
  });
});

document.getElementById('campaignForm').addEventListener('submit', (e) => {
  e.preventDefault();

  alert('Welcome to the Khazai Movement 🇮🇳');
});
