let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  const rand = Math.floor(Math.random() * choices.length);
  return choices[rand];
}

function getHumanChoice() {
  return prompt("Insert your choice (rock, paper, scissors)").toLowerCase();
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function playRound() {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();

  if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "rock")
  ) {
    humanScore++;
    console.log(
      `Human wins, because ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`,
    );
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
    console.log(
      `Computer wins, because ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`,
    );
  } else {
    console.log(
      `Round ends with a draw, because both players picked ${capitalize(humanChoice)}`,
    );
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }

  let winner =
    humanScore > computerScore
      ? "the Human (yes, you!)"
      : humanScore === computerScore
        ? "nobody (the game ended with a draw)"
        : "the Computer";
  console.log(`The winner is ${winner}`);
}

playGame();
