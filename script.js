document.querySelector('.card-container').addEventListener('click', function () {
  this.classList.toggle('flipped');
});

document.addEventListener('DOMContentLoaded', function() {
  const card = document.querySelector('.card');
  let isAnimating = false;

  card.addEventListener('click', function(e) {
    if (!isAnimating) {
      isAnimating = true;
      this.classList.toggle('flipped');
      
      setTimeout(() => {
        isAnimating = false;
      }, 800);
    }
  });
});