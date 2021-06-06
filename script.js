'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
const holdBtn = document.querySelector('.btn--hold');
const rollBtn = document.querySelector('.btn--roll');
const newBtn = document.querySelector('.btn--new');
let currentScore, activePlayer, totalscore, playing;
//initial

function init(params) {
  currentScore = 0;
  activePlayer = 0;
  totalscore = [0, 0];
  playing = true;
  score1El.textContent = 0;
  score0El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  dice.classList.add('hidden');

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}
const switchPlayer = () => {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
//click roll
rollBtn.addEventListener('click', function () {
  if (playing) {
    dice.classList.remove('hidden');
    let diceNo = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${diceNo}.png`;
    console.log('a' + activePlayer);

    if (diceNo !== 1) {
      currentScore = currentScore + diceNo;
      console.log('current' + currentScore);
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (playing) {
    totalscore[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      totalscore[activePlayer];
    if (totalscore[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

newBtn.addEventListener('click', function () {
  init();
});
