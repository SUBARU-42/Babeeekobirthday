// Countdown timer from a specific date
function dates() {
  const startDate = new Date("January 24, 2025 20:15:00");
  const now = new Date();
  let seconds = Math.abs(startDate - now) / 1000;

  const days = Math.floor(seconds / (24 * 3600));
  seconds %= (24 * 3600);
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  const rseconds = Math.floor(seconds % 60);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(rseconds).padStart(2, '0');
}

setInterval(dates, 1000);

// Card selection logic
function cardSelected(selectedCard) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if (card === selectedCard) {
      card.classList.remove('fade-out');
      card.classList.add('show');
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      card.classList.add('fade-out');
      card.classList.remove('show');
    }
  });
}
