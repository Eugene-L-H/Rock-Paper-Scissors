let playerScore = 0;
let cpuScore = 0;

// UI
const header = document.getElementsByClassName("header")[0];
const games = document.getElementsByClassName("games");
const cpu_games = document.getElementsByClassName("cpu-games");
const human_score = document.getElementsByClassName("score")[0];
const computer_score = document.getElementsByClassName("cpu-score")[0];
const gameplay = document.getElementById("gameplay");
const cpu_gameplay = document.getElementsByClassName("cpu-gameplay");
const play = document.getElementById("press-play");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const cpu_rock = document.getElementsByClassName("rock")[1];
const cpu_paper = document.getElementsByClassName("paper")[1];
const cpu_scissors = document.getElementsByClassName("scissors")[1];

rock.addEventListener("click", () => {
  playGame("rock");
});
paper.addEventListener("click", () => {
  playGame("paper");
});
scissors.addEventListener("click", () => {
  playGame("scissors");
});

play.addEventListener("click", () => {
  play.classList.add("no-pointers");
  if (playerScore != 5 && cpuScore != 5) {
    time();
  }
});
