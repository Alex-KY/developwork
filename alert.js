/*var promptButton = document.getElementById("myButton");
promptButton.addEventListener("click", callPrompt);

function callPrompt () {
		
	var quest = confirm("Хочешь личный вопрос?");
	if (quest != false) {
		var youName = prompt("You name", 'Вася Пупкин');
		alert("You name is " + youName);
	} else {
		alert("Ну и пофик");
	}

}
var age;
if (age = null || -1 && 1) alert(age);
var login = prompt('Вы кто?', '');
var message = (login == 'Вася') ? 'Привет' : 
(login == 'Директор') ? 'Здравствуйте' : 
(login == '') ? 'Пустое поле': 'Отмена ввода';

var sum = 0;

while (true) {

  var value = prompt("Введите число", '');
  
  if (value == "") prompt("Введите число ещё раз...", ''); // (*)
  else if (value == undefined) break;
  	value = +value;
  	sum += value;

}
alert( 'Сумма: ' + sum );*/

/*for (var i = 2; i <= 10; i++) { 
	for (var n = i; n <= i; n++) {
		if (i % n == 0) {
			if (n == 1) {
				alert(i);
			}
		}
	}
}*/

function pow(x, n) {
	var result = x;
	for (i = 1; i < n; i++) {
		result *= x;
	}
	return result;
} 
var x = +prompt('vvedite chislo', '');
var n = +prompt('vvedite stepen', '');
if (n<=1) {
	alert('Степень не поддерживается, введите n>1');
} else alert( pow(x, n) );
