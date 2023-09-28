const сlicks = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
let score = 0;

function touchCookie() {
  score += 1;
  сlicks.textContent = score;
  cookie.width = 180;
  setTimeout(() => {cookie.width = 200;}, 50);
}

cookie.onclick = touchCookie;