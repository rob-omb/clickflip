document.addEventListener('DOMContentLoaded', () => {
  const clickflip = document.getElementById('click');

  clickflip.addEventListener('click', () => {
    clickflip.classList.add('flip');
  });

  const flipped = document.addEventListener('animationend', () => {
    clickflip.classList.remove('flip');
  });
});
