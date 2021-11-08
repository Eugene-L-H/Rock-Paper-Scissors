function computerPlay() {
  let num = Math.floor(Math.random() * 3);
  if (num == 0) {
    cpu_rock.classList.remove("hidden");
    return "rock";
  } else if (num == 1) {
    cpu_scissors.classList.remove("hidden");
    return "scissors";
  } else {
    cpu_paper.classList.remove("hidden");
    return "paper";
  }
}

function choices(playerSelection, computerSelection) {
  if (computerSelection == "rock") {
    switch (true) {
      case playerSelection == "paper":
        return 2;
      case playerSelection == "scissors":
        return 1;
      case playerSelection == "rock":
        play.innerHTML = "Tie!";
        return 0;
    }
  }

  if (computerSelection == "paper") {
    switch (true) {
      case playerSelection == "scissors":
        return 2;
      case playerSelection == "rock":
        return 1;
      case playerSelection == "paper":
        return 0;
    }
  }

  if (computerSelection == "scissors") {
    switch (true) {
      case playerSelection == "rock":
        return 2;
      case playerSelection == "paper":
        return 1;
      case playerSelection == "scissors":
        return 0;
    }
  }
}

function playGame(playerSelection) {
  hide_cpu_gestures();

  let cpuChoice = computerPlay();

  let round = choices(playerSelection, cpuChoice);

  if (round == 2) {
    // Player wins round
    playerScore++;
    if (playerSelection == "rock") {
      play.innerHTML =
        '<p class="game-text"><u><span class="win">Win!</span></u> Rock smashes scissors.</p>';
    } else if (playerSelection == "paper") {
      play.innerHTML =
        '<p class="game-text"><u><span class="win">Win!</span></u> Paper covers rock.</p>';
    } else {
      play.innerHTML =
        '<p class="game-text"><u><span class="win">Win!</span></u> Scissors cuts paper.</p>';
    }
    // Computer wins round
  } else if (round == 1) {
    cpuScore++;
    if (playerSelection == "rock") {
      play.innerHTML =
        '<p class="game-text"><span class="lose"><i>Lose!</i></span> Your rock is covered by paper.</p>';
    } else if (playerSelection == "paper") {
      play.innerHTML =
        '<p class="game-text"><span class="lose"><i>Lose!</i></span> Your paper is cut by scissors.</p>';
    } else {
      play.innerHTML =
        '<p class="game-text"><span class="lose"><i>Lose!</i></span> Your scissors are smashed by rock.</p>';
    }
  } else {
    play.innerHTML = `<p class="tie">Both ${cpuChoice}. Tie!</p>`;
  }

  // Change score display after each round
  updateScore();

  // End game if 3 wins are accumulated by player or CPU.
  if (playerScore == 3 || cpuScore == 3) {
    // Make "PLAY" button clickable again.
    play.classList.remove("no-pointers");

    if (playerScore > cpuScore) {
      hide_cpu_gestures();
      // Prevent player from playing game after gameover.
      gameplay.classList.add("no-pointers");
    } else {
      hide_player_gestures();
    }
    setTimeout(() => {
      hide();
    }, 2500);
    setTimeout(() => {
      // Display win msg or lose msg
      if (playerScore > cpuScore) {
        play.innerHTML = `<h1>You win ${playerScore} to ${cpuScore}</h1>`;
      } else if (playerScore < cpuScore) {
        play.innerHTML = `<h1>Computer wins this one ${cpuScore} to ${playerScore}.</h1>`;
      }
      hide_player_gestures();
      hide_cpu_gestures();
    }, 2500);

    setTimeout(() => {
      playerScore = 0;
      cpuScore = 0;
      updateScore();
      // Return functionality to player buttons.
      gameplay.classList.remove("no-pointers");
      // Reset screen to original UI.
      play.innerHTML = "<button>PLAY</button>";
      play.classList.remove("no-pointers");
      play.classList.remove("hidden");
      header.classList.remove("hidden");
    }, 5500);
  }
}

function display() {
  header.classList.remove("hidden");
  games[0].classList.remove("hidden");
  cpu_games[0].classList.remove("hidden");
  gameplay.classList.remove("hidden");
}

function hide() {
  header.classList.add("hidden");
  games[0].classList.add("hidden");
  cpu_games[0].classList.add("hidden");
  gameplay.classList.add("hidden");
  gameplay.classList.add("hidden");
}

function hide_cpu_gestures() {
  cpu_rock.classList.add("hidden");
  cpu_paper.classList.add("hidden");
  cpu_scissors.classList.add("hidden");
}

function hide_player_gestures() {
  gameplay.classList.add("hidden");
}

function updateScore() {
  // Change score display after each round
  human_score.innerHTML = `${playerScore}`;
  computer_score.innerHTML = `${cpuScore}`;
}

function time() {
  play.innerHTML = "<p>Best <i>3</i> out of <i>5</i>!</p>";
  setTimeout(() => {
    play.innerHTML = '<p class="question">Rock, Paper or Scissors?</p>';
  }, 1500);
  setTimeout(() => {
    display();
  }, 2500);
}
