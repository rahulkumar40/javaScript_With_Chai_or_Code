const randomNum = Math.round(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const gessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');

const lowOrhi = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuss = 1;

let playGame = true;

if (playGame) {
   submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validatGuss(guess);
  });
}
// validation or guess only value under the limitation
function validatGuss(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuss === 11) {
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuss(guess);
    }
  }
}

// cjeck guss or show msg
//  win --> show win or vice-versa
function checkGuss(guess) {
  if (guess === randomNum) {
    displayMessage('You guessed it right');
    endGame();
  } else if (guess < randomNum) {
    displayMessage(`Number is Too low `);
  } else if (guess > randomNum) {
    displayMessage(`Number is Too high `);
  }
}

function displayGuess(guess) {
  userInput.value = ``;
  gessSlot.innerHTML += `${guess},  `;
  numGuss++;
  remaining.innerHTML = `${11 - numGuss}`;
}

// direct interact with DOM  or manuplation
function displayMessage(message) {
  lowOrhi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame"> Start new Game </h2>`;
  start.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  
}
