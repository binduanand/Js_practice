let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user"); 
const compScorePara = document.querySelector("#computer"); 

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()* 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Draw!";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
    }
};

const playGame = (userChoice) =>{
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false :true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice, compChoice);
    }
};



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); 
        playGame(userChoice);
    });
});
