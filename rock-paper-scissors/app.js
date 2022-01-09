let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span= document.getElementById("comp-score");
const result = document.querySelector(".result");
const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");



function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
    
};



function win(userChoice,computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result.innerHTML = `${userChoice}${smallUserWord} beats ${computerChoice}${smallCompWord}. You WIN! `;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove("green-glow");
    }, 300);
    

}

function lose(userChoice,computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result.innerHTML = `${userChoice}${smallUserWord} loses ${computerChoice}${smallCompWord}. You LOST! `;
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove("red-glow");
    }, 300);

}

function draw(userChoice,computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result.innerHTML = `${userChoice}${smallUserWord} is equal with ${computerChoice}${smallCompWord}. It is a DRAW! `;
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove("gray-glow");
    }, 300);

}

function game (userChoice)  {
    let computerChoice = getComputerChoice();
    console.log(userChoice,computerChoice);
    switch(userChoice + computerChoice){
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoice,computerChoice);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(userChoice,computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(userChoice,computerChoice);
            break;
    }
    
    
    
};

function EventListeners () {
rock.addEventListener("click", function(){
    game ("Rock");
});
paper.addEventListener("click", function(){
    game ("Paper");
});
scissors.addEventListener("click", function(){
    game ("Scissors");
});


}

EventListeners ();
