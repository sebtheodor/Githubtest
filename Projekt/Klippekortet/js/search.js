function validateForm() {
  var x = document.forms["searchForm"]["fname"].value;
  if (x == "") {
    alert("Du skal indtaste et  postnummer for at forsætte");
    return false;
  }
}
