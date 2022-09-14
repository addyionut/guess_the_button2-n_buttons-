const buttons = document.getElementById("buttons");
const inputNumber = document.getElementById("inpNumber");
const displayText = document.getElementById("displayText");
let randomNr;
inputNumber.focus();

function inputValue() {
	let val = inputNumber.value;
 	randomNr = Math.ceil(Math.random() * val);
 	generateButtons(val);
}

function generateButtons(value) {
	for (var i = 1; i <= value; ++i) {
		const createButtons = document.createElement("button");
		createButtons.textContent = i;
		createButtons.setAttribute("id", Number(i));
		createButtons.setAttribute("class", "btn btn-secondary btn-lg");
		createButtons.setAttribute("onclick", "pressButton(id)");
		buttons.append(createButtons);
	}
}

 function pressButton(id) {
 	if (id == randomNr) {
 		displayText.style.color = "green";
 		displayText.innerHTML = "Winner!";
 	} else {
 		displayText.style.color = "red";
 		displayText.innerHTML = "Try again"
 	}
 }