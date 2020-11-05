let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById('user-score');
let computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById('Rock');
const paper_div = document.getElementById('Paper');
const scissor_div = document.getElementById('Scissors');


function getComputerChoice(){
	const choices = ["Rock", "Paper", "Scissors"];
	const randomNumber = Math.floor(Math.random() *3);
	return choices[randomNumber];
}

function win(user, computer){
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smalluserword = "user".fontsize(3).sub();
	const smallcompword = "comp".fontsize(3).sub();
	result_p.innerHTML = user + smalluserword + " beats " + computer + smallcompword + ". You Win!";
}

function lose(user, computer){
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smalluserword = "user".fontsize(3).sub();
	const smallcompword = "comp".fontsize(3).sub();
	result_p.innerHTML = user + smalluserword + " loses to " + computer + smallcompword + ". You Lost!";
}

function draw(user, computer){
	const smalluserword = "user".fontsize(3).sub();
	const smallcompword = "comp".fontsize(3).sub();
	result_p.innerHTML = user + smalluserword + " equals to " + computer + smallcompword + ". It's a Draw!";
}

function game(userChoice){
	const computerChoice = getComputerChoice();

	switch (userChoice+computerChoice){
		case "RockScissors":
		case "PaperRock":
		case "ScissorsPaper":
			win(userChoice, computerChoice);
			break;
		case "RockPaper":
		case "PaperScissors":
		case "ScissorsRock":
			lose(userChoice, computerChoice);
			break;
		case "RockRock":
		case "PaperPaper":
		case "ScissorsScissors":
			draw(userChoice, computerChoice);
			break;
	}
}

function main(){
	rock_div.addEventListener('click', function(){
		game("Rock")
	});

	paper_div.addEventListener('click', function(){
		game("Paper")
	});

	scissor_div.addEventListener('click', function(){
		game("Scissors")
	});
}
main();