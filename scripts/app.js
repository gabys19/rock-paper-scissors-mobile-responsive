const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const playAgain = document.getElementById("play-again");

let playerScore = document.getElementById("player-score");
let compScore = document.getElementById("computer-score");
let roundMessage = document.getElementById("round-message");

let playerWins = 0;
let compWins = 0;
let playerChoice;
let computerChoice;

//add event listener to each div-button
rockButton.addEventListener("click", handleRockClick);
paperButton.addEventListener("click", handlePaperClick);
scissorsButton.addEventListener("click", handleScissorsClick);
playAgain.addEventListener("click", handlePlayAgainClick);

//handling clicks
function handleRockClick(e) {
  playerChoice = rockButton.dataset.choice;
  console.log("player chose: " + playerChoice);
  computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
  playerScore.innerHTML = playerWins;
  compScore.innerHTML = compWins;
}

function handlePaperClick(e) {
  playerChoice = paperButton.dataset.choice;
  console.log("player chose: " + playerChoice);
  computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
  playerScore.innerHTML = playerWins;
  compScore.innerHTML = compWins;
}

function handleScissorsClick(e) {
  playerChoice = scissorsButton.dataset.choice;
  console.log("player chose: " + playerChoice);
  computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
  playerScore.innerHTML = playerWins;
  compScore.innerHTML = compWins;
}

//reload the page and start the game again
function handlePlayAgainClick(e) {
  location.reload();
}

let getComputerChoice = () => {
  let randomChoice = Math.floor(Math.random() * 10);
  //randomly generates a number between 0->9
  if (randomChoice === 0) {
    randomChoice++;
  }
  if (randomChoice > 0 && randomChoice <= 3) {
    console.log("Computer: rock");
    return "rock";
  } else if (randomChoice > 3 && randomChoice <= 6) {
    console.log("Computer: paper");
    return "paper";
  } else {
    console.log("Computer: scissors");
    return "scissors";
  }
};

//evaluate rounds
let playRound = (player, computer) => {
  if (playerWins === 5 || compWins === 5) {
    pickWinner(playerWins, compWins);
    return;
  }
  switch (true) {
    case player === computer:
      console.log("draw");
      playerWins++;
      compWins++;
      roundMessage.innerHTML = "It looks like a draw to me!";
      return "Draw";
    case computer === "rock" && player === "scissors":
      console.log("Computer Wins!");
      compWins++;
      roundMessage.innerHTML =
        "Machine destroyed your scissors by picking the rock!";
      return "Computer Wins!";
    case computer === "paper" && player === "rock":
      console.log("Computer Wins!");
      compWins++;
      roundMessage.innerHTML = "Machine covered your stone with paper!";
      return "Computer Wins!";
    case computer === "scissors" && player === "paper":
      console.log("Computer Wins!");
      roundMessage.innerHTML = "Machine cut your paper with scissors!";
      compWins++;
      return "Computer Wins!";
    case player === "rock" && computer === "scissors":
      console.log("Player Wins!");
      roundMessage.innerHTML =
        "You destroyed Machine's scissors with the rock!";
      playerWins++;
      return "Player Wins!";
    case player === "paper" && computer === "rock":
      console.log("Player Wins!");
      roundMessage.innerHTML = "You covered the stone with your paper!";
      playerWins++;
      return "Player Wins!";
    case player === "scissors" && computer === "paper":
      console.log("Player Wins!");
      roundMessage.innerHTML = "You cut all the paper with your scissors!";
      playerWins++;
      return "Player Wins!";
    default:
      break;
  }
};

//pick winner and display final message
let pickWinner = (playerWins, compWins) => {
  if (playerWins === 5 && compWins < 5) {
    console.log("Human Wins!");
    rockButton.removeEventListener("click", handleRockClick);
    paperButton.removeEventListener("click", handlePaperClick);
    scissorsButton.removeEventListener("click", handleScissorsClick);
    roundMessage.innerHTML = "Congrats! You completely destroyed the machine!";
    playAgain.style.setProperty("display", "initial");
    return "Human wins!";
  } else if (compWins === 5 && playerWins < 5) {
    rockButton.removeEventListener("click", handleRockClick);
    paperButton.removeEventListener("click", handlePaperClick);
    scissorsButton.removeEventListener("click", handleScissorsClick);
    roundMessage.innerHTML =
      "Oh no! You have been defeated! Try something else!";
    playAgain.style.setProperty("display", "initial");
    return "Defeated!";
  } else if (playerWins === 5 && compWins === 5) {
    console.log("Draw");
    rockButton.removeEventListener("click", handleRockClick);
    paperButton.removeEventListener("click", handlePaperClick);
    scissorsButton.removeEventListener("click", handleScissorsClick);
    roundMessage.innerHTML = "It's a tie!";
    playAgain.style.setProperty("display", "initial");
    return "Tie";
  }
};
