// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	
	// skriv din kode her...
	
	const besked = "hej med dig"

	function hils(){
		console.log(besked)
	};

	hils();

}); // Afslutter: DOMContentLoaded