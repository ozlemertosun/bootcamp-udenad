// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...

	/*
	en funtion kan returnere værdier til derfra hvor funktionen bliver kaldt/eksekveret. 
	Det kræver at der er en variabel til at tage imod de data funtionen sender retur: 
	- kopier koden fra opgave 2b 
	- i stedet for at kalde dit console. log i funtionen, skal der nu stå: return "Hej med dig, " navn;
	- Der hvor du kalder din funtion skal du nu oprette en variabel til at "tage imod" svaret: 
		var hilsenFraOle = hilsen("Ole");
	-udskriv variablen i konsollen. 
	 */

// nedenstående er eks. 02b 
	/* const besked = `hej med dig`;
	let navn = ["Minna", "Laura", "Kenny", "Vagn", "Sheila", "Christian", "Özlem"]
	
	function hils(navn){
		let randomNumber = Math.floor(Math.random()* 7); 
		console.log(besked, navn[randomNumber]);
	};

	hils(navn);
	hils(navn);
	hils(navn);
 */
	

// nedenstående er eks. 02c 

/* 	const besked = `hej med dig`;
	let navne = ["Minna", "Laura", "Kenny", "Vagn", "Sheila", "Christian", "Özlem"]
	let navn = navne[Math.floor(Math.random()*navne.length)]; 
	let element = 
	
	function hils (navn){
		let randomNumber = Math.floor(Math.random()* navne.length); 
		return 
	};

	let greetingResult = hils();
	console.log(greetingResult);
 */

	//const besked = "Hej med dig";
	let navne = ['Minna', 'Laura', 'Kenny', 'Vagn', 'Sheila', 'Christian', 'Özlem'];
	let randomNavn = navne[Math.floor(Math.random()*navne.length)];

	function hils(navn){
		return `Hej med dig, ${navn}`; 
		console.log(hilsResultat);
	}
	let hilsResultat = hils(randomNavn)
	console.log(hilsResultat); 

//en anden måde at løse opgaven på:

/* 	function hils(navn){
		return `hej med dig ${navn}`; 
		console.log(hilsResultat);
	}
	let hilsResultat = hils("Magnus")
	console.log(hilsResultat);  

 */
}); // Afslutter: DOMContentLoaded