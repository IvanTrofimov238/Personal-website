const themeButton = document.querySelector('.theme-toggle');

themeButton.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');
  alert('Делай, что можешь, с тем, что имеешь, там, где ты есть.');
});
