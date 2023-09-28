const hitMole = document.getElementById(`dead`);
const missedShot = document.getElementById(`lost`);
let kill = parseInt(hitMole.textContent);
let missed = parseInt(missedShot.textContent);
let getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++) {
  getHole(i).onclick = function() {
    if (this.className.includes(`hole_has-mole`)) {
      kill += 1;
      hitMole.textContent = kill;
    } else {
      missed += 1;
      missedShot.textContent = missed;
    }
    checkWinner();
  }
}

function checkWinner() {
  if (kill === 10) {
    alert(`Ты выиграл`);
    clearScore();
  } else if (missed === 5) {
    alert(`Ты проиграл`);
    clearScore();
  }
}

function clearScore() {
  hitMole.textContent = 0;
  kill = 0;
  missedShot.textContent = 0;
  missed = 0;
}