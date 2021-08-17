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

	plusButton.addEventListener("click", () => {
		if (number < maxValue ){
		number++;
		updateNumber();
		}
	});

	minusButton.addEventListener("click", () => {
		if (number > minValue ){
		number--;
		updateNumber();
		}
	});


}); // Afslutter: DOMContentLoaded