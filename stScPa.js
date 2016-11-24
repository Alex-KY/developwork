var promptButton = document.getElementById("myButton");
promptButton.addEventListener("click", callPrompt);
function callPrompt () {
//var sum1, sum2;
//while (confirm("Begin?")) {
while (true) {
	var weap1 = +Math.floor(prompt('Change your weapon ' +
		'(1 - Stone, ' +
		'2 - Scissors, '+
		'3 - Paper)', ''));
	go:
	if (weap1<1 || weap1>3) {
		weap1 = +prompt('Enter an integer from 1 to 3', '');
		break go;
	}
	var weap2 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
	var win1 = win(weap1, weap2);
	if (win1 == null) {
		alert("Oh! Your weapons are the same! It's a draw!");
		break;		
	} else if (win1) {
		alert("You are a Winner! Get one point!");
		break;
	} else alert("You lose! Score one for the winner");
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