// script.js
window.addEventListener('load', () => {
  const loaderWrapper = document.getElementById('loader-wrapper');
  const content = document.getElementById('content');

  // Simulate a delay to show the loader
  setTimeout(() => {
    loaderWrapper.style.display = 'none';
    content.style.display = 'block';
  }, 3000); // Adjust the delay time as needed
});
