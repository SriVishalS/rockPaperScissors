const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#compText");
const resultText = document.querySelector("#resultText");
const usrChoice = document.querySelectorAll(".usrChoice");
let player;
let computer;
let result;

usrChoice.forEach(button => button.addEventListener("click", () => {
      player = button.textContent;
      computerTurn();
      playerText.textContent = `Player: ${player}`;
      computerText.textContent = `Computer: ${computer}`;
      resultText.textContent = checkWinner();
}));
computerTurn = () => {
      const compRandChoice = Math.floor(Math.random() * 3 + 1);
      switch (compRandChoice) {
            case 1:
                  computer = 'ROCK'
                  break;
            case 2:
                  computer = 'PAPER'
                  break;
            case 3:
                  computer = 'SCISSORS'
                  break;
      }
}
checkWinner = () => {
      if (player == computer) {
            return "Draw!";
      }
      else if (computer == "ROCK") {
            return (player == "PAPER") ? "You Win!" : "You Lose!"
      }
      else if (computer == "PAPER") {
            return (player == "SCISSORS") ? "You Win!" : "You Lose!"
      }
      else if (computer == "SCISSORS") {
            return (player == "ROCK") ? "You Win!" : "You Lose!"
      }
}
