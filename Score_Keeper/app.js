let p1score = 0;
let p2score = 0;

let p1score_span = document.getElementById('p1_score');
let p2score_span = document.getElementById('p2_score');

let btn_1 =  document.getElementById('button_1');
let btn_2 =  document.getElementById('button_2');
let btn_3 =  document.getElementById('button_3');

let limit = document.getElementById('limit').value;
let winner = document.getElementById('winner_span');



btn_1.addEventListener('click', function(){

	if ( (p1score == limit) || (p1score > p2score && p1score + p2score == limit) ) {
		winner.innerHTML = "Player 1.";
		p1score_span.style.color = "green";
	}

	else if ( p1score < p2score && p1score + p2score == limit ) {
		winner.innerHTML = "Player 2.";
		p2score_span.style.color = "green";
	}

	else if ( p1score == p2score && p1score + p2score == limit ) {
		winner.innerHTML = "Nobody!";
	}

	else{
		p1score++;
		p1score_span.innerHTML = p1score;
	}
});

btn_2.addEventListener('click', function(){

	if ( (p2score == limit) || (p1score < p2score && p1score + p2score == limit) ) {
		winner.innerHTML = "Player 2.";
		p2score_span.style.color = "green";
	}

	else if ( p1score > p2score && p1score + p2score == limit ) {
		winner.innerHTML = "Player 1.";
		p1score_span.style.color = "green";
	}
	else if ( p1score == p2score && p1score + p2score == limit ) {
		winner.innerHTML = "Nobody!";
	}

	else{
		p2score++;
		p2score_span.innerHTML = p2score;
	}
});

btn_3.addEventListener('click', function(){

	p1score = 0;
	p2score = 0;
	p1score_span.innerHTML = p1score;
	p1score_span.style.color = "white";
	p2score_span.innerHTML = p2score;
	p2score_span.style.color = "white";
	winner.innerHTML = "";

});





