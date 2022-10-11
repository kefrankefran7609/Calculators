/* VAT Calculator */

/* Quering all inputs */
const inputs = document.querySelectorAll('.input');
  
inputs.forEach((input) => {

	/* Setting the default value of all inputs to 0 */
  input.value = "0"
  
  /* Reading the value of an input when the value changes */
  input.addEventListener('change', (e) => {
  
  /* Reseeting the value of a input to 0 if left empty */
    if(e.path[0].value === ""){
    input.value = "0"
    }    
  });
})

/* Firing the calculator when submitting */
document.querySelector('#calculate').addEventListener('click', (e) => {

	/* Preventing the default behavior from the form */
 e.preventDefault()
 
 /* Getting values from the form */
 var start = document.querySelector('#start').value
 var vat = document.querySelector('#vat').value
 var RATE = document.querySelector('#rate').value
 var rate = 0.2
 
 if(RATE === '5'){
 	rate = 0.05
 }
 
 
if(vat === 'add'){ 
	document.querySelector('#vatAmount').textContent = (start * rate).toFixed(2)
  document.querySelector('#total').textContent = (parseInt((start * rate)) + parseInt(start)).toFixed(2)
  document.querySelector('#resultName').textContent = 'Total including VAT:'
} else {
  document.querySelector('#total').textContent = (start / (1 + rate)).toFixed(2)
  document.querySelector('#vatAmount').textContent = (start - (start / (1 + rate))).toFixed(2)
	document.querySelector('#resultName').textContent = 'Total excluding VAT:'
}

/* End of Event Listener */
})


