const mainButtons = document.querySelectorAll(".main-body button");
const checkWinner = document.querySelector(".check-winner");
const playAgain = document.querySelector(".play-again");
const result = document.querySelector(".result");
let computerBtn;
const choices = ["rock", "paper", "scissors"];
let playerChoice;

function checkWhoWins(playerChoice) {
    let computerChoice = choices[Math.round(Math.random() * 2)];
    computerBtn = checkWinner
        .querySelector(".computer .placeholder")
        .appendChild(
            document.querySelector("." + computerChoice).cloneNode(true)
        );
    let text;
    computerBtn.style.transform = "scale(0)";
    computerBtn.style.opacity = "0";
    computerBtn.style.transition = ".2s all  ease-in-out";

    if (playerChoice === computerChoice) {
        text = "DRAW";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        text = "PLAYER WINS";
    } else {
        text = "COMPUTEER WINS";
    }
    result.firstElementChild.textContent = text;
    setTimeout(() => {
        computerBtn.style.transform = "scale(1)";
        computerBtn.style.opacity = "1";
        result.style.opacity = "1";
        result.style.transform = "translateY(0px)";
    }, 10);
    return text;
}
function updateScore(status){
    let scoreNumber = document.getElementById("score_number")
    let count = parseInt(scoreNumber.textContent)
    if(status === "PLAYER WINS"){
        count++
    }else if(status === "COMPUTEER WINS"){
        count--
    }
    scoreNumber.textContent = count

}

function clickHandler() {
    playerChoice = this.title;
    this.parentElement.classList.add("active");
    checkWinner.classList.add("active");
    checkWinner
        .querySelector(".player .placeholder")
        .appendChild(this.cloneNode(true));
    updateScore(checkWhoWins(playerChoice));
}

for (let i = 0; i < mainButtons.length; i++) {
    mainButtons[i].onclick = clickHandler;
}
playAgain.onclick = () => {
    mainButtons[0].parentElement.classList.remove("active");
    checkWinner.classList.remove("active");
    checkWinner
        .querySelector(".computer .placeholder")
        .firstElementChild.remove();
    computerBtn.style.transform = "scale(0)";
    computerBtn.style.opacity = "0";
    result.style.opacity = "0";
    result.style.transform = "translateY(20px)";
};
