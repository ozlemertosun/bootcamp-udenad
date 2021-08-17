
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {


	// skriv din kode her...

	/* let counter = document.querySelector("#text-count");
	textCountElement.textContent = 5;  */


	//opret en funktion som indsætter tallet 5: (se de to eksempler)
	let counter = document.querySelector("#text-count");

	//når man trykker på plusset skal værdien forhøjes med én:  
	//når man trykker på minus skal værdien mindskes med én:
	
	let number = 5;
	let plusButton = document.querySelector("#btn-count-increase");
	let minusButton = document.querySelector("#btn-count-decrease");
	counter.textContent = number;

	function updateNumber(){
		counter.textContent = number;
	}

	updateNumber();

	//eventlistener forhøjer med en, hver gang der bliver 
	//klikket på på plus-knappen. Men kun op til 10. 
	plusButton.addEventListener("click", () => {
		if (number < 10){
		number++;
		updateNumber();
		}
	});

	minusButton.addEventListener("click", () => {
		if (number > 0){
		number--;
		updateNumber();
		}
	});
	


}); // Afslutter: DOMContentLoaded