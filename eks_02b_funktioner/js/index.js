// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...

	const besked = "hej med dig"
	let navn = ["Minna", "Laura", "Kenny", "Vagn", "Sheila", "Christian", "Özlem"]
	
	function hils(navn){
		let randomNumber = Math.floor(Math.random()* 7); 
		console.log(besked, navn[randomNumber]);
		// det der er inde i parantensen er et argument
	};

	hils(navn);
	hils(navn);
	hils(navn);
	//det inde i parantesen er parameter 

}); // Afslutter: DOMContentLoaded