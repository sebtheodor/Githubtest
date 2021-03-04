
// Mindre script der checker hvad klokken er på et givet tidspunkt
// Efter dette oprettes der et array udfra content der har klassen "open" 
// Contenten bliver herefter skiftet ud med baseret på udfoldelelsen af for løkken
// bestemmes det om klokken er mere end 9 og tidligere end 17 
// (Fremvises på search.html)
//															- Nicklas

var date = new Date();
var openHours = date.getHours();

var openingHours = document.getElementsByClassName("open");

for (var i = 0; i < openingHours.length; i++) {

	if  (openHours >= 9 && openHours <= 17){
		var info = "Åben nu <br> 09:00 - 17:00";
		var color = "#5a8a5a";
	} else {
		var info = "Salonen er lukket <br> Åbner kl. 09:00";
		var color = "#D22424";
	}


	openingHours[i].innerHTML = info;
	openingHours[i].style.color = color;
}