// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...
			/* let counter = document.querySelector("#text-count");
	textCountElement.textContent = 5;  */

	let counter = document.querySelector("#text-count");
	
	let number = 5;

	//der er oprettet variabler, for en min og maximum værdi; 
	let minValue = 0;
	let maxValue = 10;

	let plusButton = document.querySelector("#btn-count-increase");
	let minusButton = document.querySelector("#btn-count-decrease");
	counter.textContent = number;

	function updateNumber(){
		counter.textContent = number;
	}

	updateNumber();
/* 
	function calcNumber(event) {
		console.log(number);
		if (event.target.attributes.id.nodeValue === "btn-count-increase") {
			if (number < maxValue){
				number++; 
				updateNumber();
			}
		}else if (event.target.attributes.id.nodeValue === "btn-count-decrease") {
			if (number > minValue){
			number--; 
			updateNumber();
		}}
	};

	plusButton.addEventListener("click", (event) => {
		calcNumber(event);
		//if (number < maxValue ){
		//number++;
		//updateNumber();
		});

	minusButton.addEventListener("click", (event) => {
		calcNumber(event);
		//if (number > minValue ){
		//number--;
		//updateNumber();
		});
 */

		function checkMinMaxValue(direction){
			if (direction === "inc" && number < maxValue){
				number++;
				updateNumber();
				console.log("hej");
			}

			if (direction === "dec" && number > minValue){
				number--;
				updateNumber();
				console.log("farvel");
			}
		};

plusButton.addEventListener("click", () => checkMinMaxValue("inc"));
minusButton.addEventListener("click", () => checkMinMaxValue("dec"));

}); // Afslutter: DOMContentLoaded