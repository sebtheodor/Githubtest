
// Mindre script der checker hvad klokken er på et givet tidspunkt
// Efter dette sættes det op mod den statiske åbningstid og udskriver
// om salonen har åbent eller ej derefter.
// (Fremvises på Item cards samt item pagen.)
//													- Nicklas

var date = new Date();
var openHours = date.getHours();

if  (openHours >= 9 && openHours <= 17){
	document.getElementById("open-now").style.fontWeight = "400";
	document.getElementById("open-now").style.color = "#5a8a5a";
	document.getElementById("open-now").innerHTML = "Salonen er åbent - Åbningstid: (09:00 - 17:00)";
} else {
	document.getElementById("open-now").style.fontWeight = "400";
	document.getElementById("open-now").style.color = "#D22424";
	document.getElementById("open-now").innerHTML = "Salonen er lukket indtil kl: 09:00 - Åbningstid: (09:00 - 17:00)";
}
