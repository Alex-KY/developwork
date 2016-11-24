var promptButton = document.getElementById("myButton");
promptButton.addEventListener("click", callPrompt);

var popUp = document.getElementById('pop-up');
function callPrompt () {
//var sum1, sum2;
//while (confirm("Begin?")) {

// selection use weapon
//popUp.style.display = 'block';
while (true) {
	var weap1 = prompt('Change your weapon ' +
		'(1 - Stone, ' +
		'2 - Scissors, '+
		'3 - Paper)', '');

	if (weap1 == null) {
		break;
	}

// value verification
go:	
	while (weap1 < 1 || weap1 > 3 || isNaN(weap1) == true){
		if (weap1 == null) break;
		weap1 = prompt('Enter an integer from 1 to 3', '');
		continue go;
	}

// game
	Math.floor(weap1);
	var weap2 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
	var win1 = win(weap1, weap2);
	if (win1 == null) {
		alert("Oh! Your weapons are the same! It's a draw!");
		break;		
	} else if (win1) {
		alert("You are a Winner! Get one point!");
		break;
	} else if (weap1 == null) {
		break;
	} else alert("You lose! Score one for the winner")
		break;

}
}


function win(weap1, weap2) {
		if (weap1 == weap2)
			return null;
		else if (weap1 == 3 && weap2 == 1 
			|| weap1 == 1 && weap2 == 2 
			|| weap1 == 2 && weap2 == 3)
			return true;
			return false;
	}