// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...

	//lav et array, som vises i browser ved at bruge html liste

	/* 
	Byg vidre på opgave 3a: 
	- Opret et parameter som hedder array 
	- Flyt løkken fra opgave 3a ind i funtionen, brug
	funktionsparametret i stedet for det oprindelige array-navn i din løkke
	- kald funtionen med dit array af navne som argument 
	*/ 

	let navneListe = ["Rip", "Rap", "Rup"];
	
	createListe(navneListe);	
	
	function createListe(array){
	for (i=0; i < array.length; i++){
		let element = document.createElement("li");
		element.textContent = array[i];
		document.querySelector("#liste").appendChild(element);
		//console.log(i)
	}
}; 

	// et andet eksempel 

	let navne = ["Troels", "Mads", "Louise"];
	let ulElement = document.querySelector("#liste");

	function doImportantStuff(array){
	array.forEach((navn) => {
		ulElement.innerHTML += `<li> ${navn} </li>`;
	}); 
}
	doImportantStuff(navne);
	

}); // Afslutter: DOMContentLoaded