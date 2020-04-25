let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const results_p = document.querySelector(".results p");
const rock_div = document.getElementById("R");
const paper_div = document.getElementById("P");
const scissors_div = document.getElementById("S");

function getCompChoice() {
    const choices = ['R', 'P', 'S'];
    const randomNumber = (Math.floor(Math.random() * 3))
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "R") return "Rock";
    if (letter === "P") return "Paper";
    if (letter === "S") return "Scissors";
}

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sub();
    results_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord}. WIN!!`;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function () {document.getElementById(userChoice).classList.remove("green-glow") }, 300);
}

function lose(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sub();
    results_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord}. LOSE!!`;
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function () { document.getElementById(userChoice).classList.remove("red-glow") }, 300);
}

function draw(userChoice, compChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sub();
    results_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord}. DRAW!!`;
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("gray-glow"), 300);     /*#Arrow function from ES6.  Same as creating a function*/
}



function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "RS":
        case "SP":
        case "PR":
            win(userChoice, compChoice);
            break;
        case "RP":
        case "PS":
        case "SR":
            lose(userChoice, compChoice);
            break;
        case "RR":
        case "PP":
        case "SS":
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("R");
    })

    paper_div.addEventListener('click', function () {
        game("P");
    })

    scissors_div.addEventListener('click', () => game("S"));        /*#Arrow function from ES6.  Same as creating a function*/
}

main();