const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 200;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / width) * walk - walk / 2);

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 5px rgba(107, 154, 149, 0.5),
  ${xWalk * -1}px ${yWalk}px 5px rgba(148, 187, 233, 0.5)
  `;
}

hero.addEventListener('mousemove', shadow);
