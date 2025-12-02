const buttonContainer = document.querySelector(".button-container");
const scoreText = document.querySelector("#score");
const resultText = document.querySelector("#result");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  const rand = Math.floor(Math.random() * choices.length);
  return choices[rand];
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function updateDisplayText(str) {
  resultText.textContent = str;
}

function playRound(humanChoice) {
  humanChoice = humanChoice.toLowerCase();
  let computerChoice = getComputerChoice();

  if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "rock")
  ) {
    humanScore++;
    updateDisplayText(
      `Human wins, because ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`,
    );
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
    updateDisplayText(
      `Computer wins, because ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`,
    );
  } else {
    updateDisplayText(
      `Round ends with a draw, because both players picked ${capitalize(humanChoice)}`,
    );
  }
}

buttonContainer.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  if (humanScore === 5 || computerScore === 5) {
    humanScore = 0;
    computerScore = 0;
  }

  playRound(e.target.id);

  if (humanScore === 5) updateDisplayText("You have won.");
  else if (computerScore === 5) updateDisplayText("The Computer has won.");

  scoreText.textContent = humanScore + ":" + computerScore;
});
