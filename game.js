// Added some extra sounds to just experiment on javascript
let scorePlay = 0;
let scoreComp = 0;
let rockBtn = document.getElementById("rock-pic");
let paperBtn = document.getElementById("paper-pic");
let scissorBtn = document.getElementById("scissors-pic");
let documentPlayerScore = document.getElementById("player-score");
let documentCompScore = document.getElementById("comp-score");
let playerSelectedPic = document.getElementById("player-select-pic");
let compSelectedPic = document.getElementById("comp-select-pic");
let winner = document.getElementById("winner");
let rockPhoto = `<img src="./assets/rock-hand.png" />`;
let paperPhoto = `<img src="./assets/paper-hand.png" />`;
let scissorsPhoto = `<img src="./assets/scissors-hand.png" />`;
let playAgain = document.getElementById("play-again-btn");
let winningSound = new Audio("./audio/win.wav");
let losingSound = new Audio("./audio/lose.wav");

function randomise() {
  return Math.ceil(Math.random() * 3);
}

function checking(playerIntp) {
  if (randomise() == 1) {
    compSelectedPic.innerHTML = rockPhoto;
    switch (playerIntp) {
      case 1:
        break;
      case 2:
        scorePlay += 1;
        break;
      case 3:
        scoreComp += 1;
        break;
    }
    console.log(compSelectedPic);
  } else if (randomise() == 2) {
    compSelectedPic.innerHTML = paperPhoto;
    switch (playerIntp) {
      case 1:
        scoreComp += 1;
        break;
      case 2:
        break;
      case 3:
        scorePlay += 1;
        break;
    }
  } else {
    compSelectedPic.innerHTML = scissorsPhoto;
    switch (playerIntp) {
      case 1:
        scorePlay += 1;
        break;
      case 2:
        scoreComp += 1;
        break;
      case 3:
        break;
    }
  }
}

rockBtn.onclick = () => {
  let playerIntp = 1;
  playerSelectedPic.innerHTML = rockPhoto;
  randomise();
  checking(playerIntp);
  documentPlayerScore.innerText = scorePlay;
  documentCompScore.innerText = scoreComp;
  finalize();
};

paperBtn.onclick = () => {
  let playerIntp = 2;
  playerSelectedPic.innerHTML = paperPhoto;
  randomise();
  checking(playerIntp);
  documentPlayerScore.innerText = scorePlay;
  documentCompScore.innerText = scoreComp;
  finalize();
};

scissorBtn.onclick = () => {
  let playerIntp = 3;
  playerSelectedPic.innerHTML = scissorsPhoto;
  randomise();
  checking(playerIntp);
  documentPlayerScore.innerText = scorePlay;
  documentCompScore.innerText = scoreComp;
  finalize();
};

function finalize() {
  if (scorePlay >= 5) {
    winner.innerText = "You";
    document.getElementById("end-screen").style.visibility = "visible";
    winningSound.play();
    rockBtn.style.visibility = "hidden";
    paperBtn.style.visibility = "hidden";
    scissorBtn.style.visibility = "hidden";
  } else if (scoreComp >= 5) {
    winner.innerText = "Comp";
    document.getElementById("end-screen").style.visibility = "visible";
    losingSound.play();
    rockBtn.style.visibility = "hidden";
    paperBtn.style.visibility = "hidden";
    scissorBtn.style.visibility = "hidden";
  }
}

playAgain.onclick = () => {
  window.location.href = "./game.html";
};
