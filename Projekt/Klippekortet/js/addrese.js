console.log('koden er inde');
// validate hvor man skal skrive noget for at komme videre
function validateForm() {
  var x = document.forms["searchForm"]["fname"].value;
  if (x == "") {
    alert("Du skal indtaste et postnummer for at forsætte");
    return false;
  }
}

//autocomplete
const citys = ['5100', '5250', '8100', '7100', '2600', '2625', '2200', '2400' ];

document.getElementById('fname').addEventListener('input', (e)=>{

  let citysArray = [];

  if(e.target.value){
    citysArray = citys.filter(city => city.toLowerCase().includes(e.target.value));
    citysArray = citysArray.map(city => `<li>${city}</li>`)
  }

  showCitysArray(citysArray);
});

function showCitysArray(citysArray){
  const html = !citysArray.length ? '' : citysArray.join('');
  document.querySelector('ul').innerHTML = html;
}
