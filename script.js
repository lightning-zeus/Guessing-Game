'use strict';

// console.log(document.querySelector('.message').textContent);
// // document.querySelector('.message').textContent =
// //   'Guessed a number that is incorrect.';
let secretNumber = Math.floor(Math.random() * 20) + 1;
let currentScore = Number(document.querySelector('.score').textContent);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input by the user
  console.log(secretNumber, guess);
  if (!guess) {
    displayMessage('Please guess a number to start the game!!');
  }
  //When the player wins the game
  else if (guess === secretNumber) {
    displayMessage('Correct number wuhuhuh!!!  :)');
    if (currentScore > Number(document.querySelector('.highscore').textContent))
      document.querySelector('.highscore').textContent = currentScore;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  }

  //When the guessed number is greater
  else if (guess !== secretNumber) {
    if (currentScore > 1) {
      displayMessage(
        guess > secretNumber
          ? 'The guess is too high!!!'
          : 'The guess is too low!!'
      );

      currentScore--;
      document.querySelector('.score').textContent = currentScore;
    } else {
      displayMessage('ALAS!!!! You have lost the game....');
      document.querySelector('.score').textContent = 0;
    }
  }
  // } else if (guess > secretNumber) {
  //   if (currentScore > 1) {
  //     document.querySelector('.message').textContent =
  //       'The guessed number is too high :(';
  //     currentScore--;
  //     document.querySelector('.score').textContent = currentScore;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'ALAS!!!! You have lost the game....';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  // //When the guessed number is smaller
  // else {
  //   if (currentScore > 1) {
  //     document.querySelector('.message').textContent = currentScore--;
  //     document.querySelector('.score').textContent = currentScore;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'ALAS!!!! You have lost the game....';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  currentScore = 20;
  document.querySelector('.score').textContent = currentScore;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
