let randomNumber = Math.floor(Math.random() * 100 + 1);

let triesTaken = 0;
let triesLimit = 5;

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;
  let output = document.querySelector(".final-output");
  let infoDisplayed = document.createElement("p");
  infoDisplayed.innerText = "Please enter a number ONLY between 1 and 100";
  let numberTooHigh = document.createElement("p");
  numberTooHigh.innerText = "Number is too high, try again";
  let numberTooLow = document.createElement("p");
  numberTooLow.innerText = "Number is too low, try again";
  let rightNumber = document.createElement("p");
  rightNumber.innerText = "Guess is correct. You win!";
  let outOfTries = document.createElement("p");
  outOfTries.innerText = "Sorry, no more tries left... GAME OVER! :(";
  let tries = document.querySelector(".Tries-output");

  //formatting different text colors for messages
  infoDisplayed.style.color = "blue";
  numberTooHigh.style.color = "blue";
  numberTooLow.style.color = "blue";
  rightNumber.style.color = "green";
  outOfTries.style.color = "red";

  triesTaken++;

  if (triesTaken > triesLimit) {
    tries.appendChild(outOfTries);
  }

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  else if (guess < 1 || guess > 100) {
    output.appendChild(infoDisplayed);
  }
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  else if (guess > randomNumber) {
    output.appendChild(numberTooHigh);
  }
  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  else if (guess < randomNumber) {
    output.appendChild(numberTooLow);
  }
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  else {
    output.appendChild(rightNumber);
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Reset randomNumber
  randomNumber;
  //Reset users input field
  document.querySelector(".inputs-Values").value = "";
  document.querySelector(".final-output").value = "";
  document.querySelector(".Tries-output").value = "";
  //Reset tries, and triesTaken by the user
  triesTaken = 0;
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnNewGame").addEventListener("click", newGame);

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
