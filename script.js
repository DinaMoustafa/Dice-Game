'use strict';
// Selecting Elements
const playerOneScore = document.querySelector('#score--0');
const playerTwoScore = document.querySelector('#score--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const newBtn = document.querySelector('.btn--new');
const diceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');

let currentScore;
let activePlayer;
let scores;
playerOneScore.textContent;
playerTwoScore.textContent;
let playing;
// to hide the dice image
document.querySelector('.dice').classList.add('hidden');
/*const showDiceImage = function () {
  diceEl.classList.remove('hidden');
};
*/

//initialization
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector('.dice').classList.add('hidden');
};
init();
// switching players
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};
diceBtn.addEventListener('click', function () {
  if (playing) {
    // Generates a random number
    const diceRoll = Math.trunc(Math.random() * 6) + 1;
    console.log(diceRoll);
    // showing dice image depends on dice number  -----method 1-----
    /*switch (diceRoll) {
    case 1:
      document.querySelector('.dice').src = 'dice-1.png';
      showDiceImage();

      break;
    case 2:
      document.querySelector('.dice').src = 'dice-2.png';
      showDiceImage();

      break;
    case 3:
      document.querySelector('.dice').src = 'dice-3.png';
      showDiceImage();

      break;
    case 4:
      document.querySelector('.dice').src = 'dice-4.png';
      showDiceImage();

      break;
    case 5:
      document.querySelector('.dice').src = 'dice-5.png';
      showDiceImage();

      break;
    default:
      document.querySelector('.dice').src = 'dice-6.png';
      showDiceImage();

      break;
  }
  */

    //showing dice image ----method2---
    diceEl.src = `dice-${diceRoll}.png`;
    diceEl.classList.remove('hidden');

    // check if diceroll not 1
    if (diceRoll !== 1) {
      currentScore += diceRoll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
    // diceroll = 1 switch player
    else {
      switchPlayer();
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (playing) {
    //Adding currentscore to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // check if the active player's score is 100
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      document.querySelector('.dice').classList.toggle('hidden');
    }
    // switch to the other player
    switchPlayer();
  }
});

newBtn.addEventListener('click', init);
