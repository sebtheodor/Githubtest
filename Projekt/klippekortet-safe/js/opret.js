console.log("den er inde");

function validerFnavn(input){
  var validerFnavn = document.getElementById("fnavn").innerHTML;
  if(validerFnavn == ""){
  fnavn_fejl.style.color = "red";
  return false;
}
else {
  fnavn_fejl.style.color = "green";
  return true;
}
console.log(validerFnacn)
}

function validerKøn(){
var køn = document.getElementsByName("køn").innerHTML;

console.log(køn);
}

function validerAdresse(input){
var adresse_fejl = document.getElementById("adresse_fejl").value;
if(validerAdresse == "") {
  adresse_fejl.style.color = "red";
  return true;
}
else{
  adresse_fejl.style.color = "green";
  return false;
}
}


function validerTlf(input){
var telf_fejl = document.getElementById("telf_fejl").value;
var tal = /[0-9]/;
if(input.value.match(tal)) {
  telf_fejl.style.color = "green";
  return true;
}
else{
  telf_fejl.style.color = "red";
  return false;
}
}

function valideretBesked(){
  alert();
}
