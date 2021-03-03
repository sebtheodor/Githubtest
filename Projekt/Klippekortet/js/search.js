console.log('koden er inde');

function validateForm() {
  var x = document.forms["searchForm"]["fname"].value;
  if (x == "") {
    alert("Du skal indtaste et postnummer for at forsætte");
    return false;
  }
}

const citys = ['5100', '5250', '8100', '7100', '2600', '2625', '2200', '2400' ];

document.getElementById('fname').addEventListener('input', (e)=>{

  let citysArray = [];

  console.log(e.target.value){
    citysArray = citys.filter(city => city.toLowerCase().includes(e.target.value));
  }

  console.log(citysArray);
})
