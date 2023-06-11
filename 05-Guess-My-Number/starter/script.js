'use strict';

let secretNumber = Math.trunc(Math.random()*20+1);
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', () => {
    let guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('⛔️ No number!');
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = String(secretNumber);
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('body').style.backgroundColor = '#60b347';

        if (score > highScore) {
          highScore = score;
          document.querySelector('.highscore').textContent = String(highScore);
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
          displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
          score--;
          document.querySelector('.score').textContent = String(score);
        } else {
          displayMessage('💥 You lost the game!');
          document.querySelector('.score').textContent = '0';
        }
    }
})

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20+1);

    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = String(score);
    document.querySelector('.guess').value = '';

    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
})