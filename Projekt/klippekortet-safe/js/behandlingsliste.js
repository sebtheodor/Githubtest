window.addEventListener("DOMContentLoaded", function() { // Når windowed er loaded køre vi funktionen, anonym funktion som laver masse eventlisteners
  document.getElementById("Barbering").addEventListener("click", addOrder.bind(null, "Barbering")); //Vi henter barbering fra html, når click event bliver brugt, kører addOrder funktion.
  document.getElementById("Klipning").addEventListener("click", addOrder.bind(null, "Klipning"));
  document.getElementById("Hårvask").addEventListener("click", addOrder.bind(null, "Hårvask"));
  document.getElementById("Hårfarve").addEventListener("click", addOrder.bind(null, "Hårfarve"));
});

function addOrder(navn) {
  if (!behandlingliste.includes(navn)) { //Hvis navn ikke er der, tilføjer den navn. Hvis navn er her, springer den funktion over.
    behandlingliste.push(navn); //tilføjer navn til array
  }
  behandlingslistegenerator(); // opdatere behandlinsListeContainer div'en
  opdaterPrisOgTid(); // opdatere den viste tid og pris
}
function removeOrder(navn){
	let index = behandlingliste.indexOf(navn.id); //indexOf giver postitionen af en værdi i et array.
	if(index>-1){ //Hvis værdien er i array'et, køre den behandlingslise.splice
		behandlingliste.splice(index, 1); // Fjerner en enkelt værdi fra array'et.
	}
	behandlingslistegenerator(); // opdatere behandlinsListeContainer div'en
	opdaterPrisOgTid(); // opdatere den viste tid og pris
}

let behandlingliste = []; //Globale array, liste af behandlinger.

function behandlingslistegenerator() { //definere funktionen behandlingslistegenerator
  let parentDiv = document.createElement("div"); // laver en div.
  parentDiv.setAttribute("id", "behandlinsListeContainer"); // Vi laver en Id inde i diven, som hedder behandlinsListeContainer
  for (let j = 0; j < behandlingliste.length; j++) { //For loop som tjekker om variablen j er større end behandlingslisten, hvis ja, kører den koden fra linje 30-41, hvis ikke springer den til 43.
    let div = document.createElement("div"); // Laver en div.
    div.setAttribute("class", "imgContainer flex"); // giver div, classen "imgContainer Flex"
    let p = document.createElement("p"); // Laver et p element.
    p.innerHTML = behandlingliste[j]; //Sætter teksten i p.
    div.appendChild(p); // Tilføjer p til div'en
    let img = document.createElement("img"); //Laver et img element
		img.setAttribute("onclick", "removeOrder("+behandlingliste[j]+")"); // laver atributten onlick = "removeOrder(behandlingsliste, klipning, barbering etc)"
    img.setAttribute("class", "kryds"); // giver img elementet, classes "kryds"
    img.setAttribute("src", "img\\icons\\Decline.png"); //Giver den src="blabla"
    img.setAttribute("alt", "Anuller"); // Skriver Anuller hvis img ikke kan vises, via et alt atribut.
    div.appendChild(img); // tilføjer img tagget til div'en
    parentDiv.appendChild(div); // tilføjer div barnet til div faderen.
  }
  document.getElementById("behandlinsListeContainer").replaceWith(parentDiv) //erstatter behandlinsListeContainer div'en med den generederededede fader div.
}

let prisListe = { //laver objektet prisListe, som yderligere har 4 objekter, barbering, klipning, hårfarve og hårvask, som hver har to værdier, tid og pris.  skaber en liste over priser og tider.
  Barbering: {
    pris: 200,
    tid: 20
  },
  Klipning: {
    pris: 300,
    tid: 20
  },
  Hårfarve: {
    pris: 400,
    tid: 20
  },
  Hårvask: {
    pris: 50,
    tid: 20
  }
}

function opdaterPrisOgTid() {
	let pris = 0;
	let tid = 0;
  for (let i = 0; i < behandlingliste.length; i++) { //For loop som tjekker om variablen i er større end behandlingslisten, hvis ja, kører den koden fra linje 69 og 70, hvis ikke springer den til 72.
		pris += prisListe[behandlingliste[i]].pris //tilføjer værdien fra prislisten baseret på elemente i behandlingslisten
		tid += prisListe[behandlingliste[i]].tid
	}
	document.getElementById("denTotalePris").innerHTML = pris.toString(); //sætter den totale pris til den udregnede pris.
	document.getElementById("totalTid").innerHTML = tid.toString(); //Sætter den totale tid til den udregnede tid.
}
