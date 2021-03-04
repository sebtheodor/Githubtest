console.log("den er inde");

//Validere Fornavn
function validerFnavn(){
  console.log("hello")
  var validerFnavn = document.getElementById("fnavn").value;
  console.log(validerFnavn)
  if(validerFnavn == ""){
  fnavn_fejl.style.color = "red";
  return false;
} else {
  fnavn_fejl.style.color = "green";
  return true;
 }
}

//Validere Efternavn
function validerEnavn(){
  console.log("hello")
  var validerEnavn = document.getElementById("enavn").value;
  console.log(validerEnavn)
  if(validerEnavn == ""){
  enavn_fejl.style.color = "red";
  return false;
} else {
  enavn_fejl.style.color = "green";
  return true;
 }
}

//Validere Køn
function validerKøn(){
var køn = document.getElementsByName("køn").value;
for (var i = 0, length = køn.length; i<length; i++) {
  if (køn[i].checked){
    alert(køn[i].value);

    break;
}
}

console.log(køn);
}


//Validere Adresse
function validerAdresse(){
  console.log("hello")
  var validerAd = document.getElementById("adresse_validering").value;
  console.log(validerAd)
  if(validerAd == "" || validerAd !== /[a-zA-Z0-9ÆØÅæøå]\w+/g) {
  adresse_fejl.style.color = "red";

  return false;
} else {
  adresse_fejl.style.color = "green";

  return true;
 }
}

//Validere Telefon Nummer

function validerTlf(input){
var teleFonAd = document.getElementById("telf_validering").value;
var tal = /[0-9]/;
if(teleFonAd = tal) {
  telf_fejl.style.color = "green";
  return true;
}
else{
  telf_fejl.style.color = "red";
  return false;
}
}

//Validere E-mail
function validerEmail(){
  console.log("hello")
  var validerEmail = document.getElementById("email_validering").value;
  console.log(validerEmail)
  if(validerEmail == ""){
  email_fejl.style.color = "red";
  return false;
} else {
  email_fejl.style.color = "green";
  return true;
 }
}
//Validere password
function validerAdgang1(){
  console.log("hello")
  var validerPass = document.getElementById("adgang_validering").value;
  var validerPass2 = document.getElementById("adgang2_validering").value;
  console.log(validerPass)
  if(validerPass == ""  || validerPass2 != validerPass){
  password_fejl.style.color = "red";
  password2_fejl.style.color = "red";
  return false;
} else {
  password_fejl.style.color = "green";
  password2_fejl.style.color = "green";
  return true;
 }
}

//Åbner Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
function valideretBesked() {
  modal.style.display = "block";
}
function valideretBesked() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
