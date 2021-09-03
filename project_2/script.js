const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const progress = document.querySelector('.progress');
const circles = document.querySelectorAll('.circle');
let n = 1;
// -----------next-----------
next.addEventListener('click', function() {
  progress.style.width = 100 / (circles.length - 1) * n++ + '%';
  prev.className = 'btn active-btn';
  prev.style.cursor = 'pointer';
  prev.disabled = false;
  circles[n - 1].className = 'circle active';

  if (n === circles.length) {
    this.className = 'btn';
    this.style.cursor = 'not-allowed';
    this.disabled = true;
  }
});

// ----------previous-----------
prev.addEventListener('click', function() {
  progress.style.width = (n - 2) / (circles.length - 1) * 100 + '%';
  circles[n - 1].className = 'circle';
  n--;

  if (n) {
    next.className = 'btn active-btn';
    next.style.cursor = 'pointer';
    next.disabled = false;
  }

  if (n === 1) {
    this.className = 'btn';
    this.style.cursor = 'not-allowed';
    this.disabled = true;
  }
});
