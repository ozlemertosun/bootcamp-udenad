// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...

	//lav et array, som vises i browser ved at bruge html liste

	let navneListe = ["Rip", "Rap", "Rup"];
	
	for (i=0; i < navneListe.length; i++){
		let element = document.createElement("li");
		element.textContent = navneListe[i];
		document.querySelector("#liste").appendChild(element);
		console.log(i)
	}

	// et andet eksempel 

	let navne = ["Troels", "Mads", "Louise"];
	let ulElement = document.querySelector("#liste");

	navne.forEach((navn) => {
		ulElement.innerHTML += `<li> ${navn} </li>`;
	});

}); // Afslutter: DOMContentLoaded