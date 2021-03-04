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