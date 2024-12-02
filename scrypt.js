let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#333';
tg.MainButton.color = '#cd7165';

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");

btn1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали букет из роз кантри блю");
		item = "1";
		tg.MainButton.show();
	}
});

btn2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали Букет из 101 кенийской розы");
		item = "2";
		tg.MainButton.show();
	}
});

btn3.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали Букет невесты из калл");
		item = "3";
		tg.MainButton.show();
	}
});

btn4.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар Лилия");
		item = "4";
		tg.MainButton.show();
	}
});

btn5.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар Лилия");
		item = "5";
		tg.MainButton.show();
	}
});

btn6.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар Лилия");
		item = "6";
		tg.MainButton.show();
	}
});

btn7.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар Лилия");
		item = "7";
		tg.MainButton.show();
	}
});

btn8.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар Лилия");
		item = "8";
		tg.MainButton.show();
	}
});

btn9.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар Лилия");
		item = "9";
		tg.MainButton.show();
	}
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});
