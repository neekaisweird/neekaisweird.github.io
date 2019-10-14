const pressed = [];
const secretCode = 'peach';
const img = document.querySelector('.cat');

function showImage() {
  img.classList.remove('cat');
}

window.addEventListener('keyup', e => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    showImage();
  }
});
