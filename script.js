document.getElementById('year').textContent = new Date().getFullYear();

document.querySelector('.signup').addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  button.textContent = 'You are onboard 🚀';
  button.disabled = true;
});
