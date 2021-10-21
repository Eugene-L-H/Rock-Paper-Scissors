function computerPlay() {
  let num = Math.floor(Math.random() * 3);
  if (num == 0) {
    return "rock";
  } else if (num == 1) {
    return "scissors";
  } else {
    return "paper";
  }
}

function playGame(playerSelection, computerSelection) {
  if (computerSelection == "rock") {
    switch (playerSelection) {
      case "rock":
        console.log("Tie!");
        break;
      case "paper":
        console.log("Win! Paper covers rock.");
        return 2;
      default:
        console.log("Lose! Rock smashes scissors.");
        return 1;
    }
  }

  if (computerSelection == "paper") {
    switch (playerSelection) {
      case "rock":
        console.log("Lose! Paper covers rock.");
        return 1;
      case "paper":
        console.log("Tie!");
        break;
      default:
        console.log("Win! Scissors cut paper.");
        return 2;
    }
  }

  if (computerSelection == "Scissors") {
    switch (playerSelection) {
      case "rock":
        console.log("Win! Rock smashes scissors.");
        return 2;
      case "paper":
        console.log("Lose! Scissors cut paper.");
        return 1;
      default:
        console.log("Tie!");
        break;
    }
  }
}

while (true) {
  console.log("Rock, Paper, Scissors! New game:");
  let wins = 0;
  let losses = 0;
  for (let i = 0; i < 5; i++) {
    let playerChoice = "";
    while (
      playerChoice != "rock" &&
      playerChoice != "paper" &&
      playerChoice != "scissors"
    ) {
      playerChoice = prompt("Rock, paper, or Scissors?: ");
      playerChoice = playerChoice.toLowerCase();
    }

    let round = playGame(playerChoice, computerPlay());

    if (round == 1) {
      losses++;
    } else if (round == 2) {
      wins++;
    }
  }

  if (wins > losses) {
    console.log(`You won ${wins} to ${losses}`);
  } else if (wins < losses) {
    console.log(`Computer wins this one ${losses} to ${wins}.`);
  } else {
    console.log("Tie.");
  }

  let playAgain = prompt("Play again? y/n: ");
  playAgain = playAgain.toLowerCase();
  if (playAgain != "y" && "yes") {
    console.clear();
    break;
  }
}
