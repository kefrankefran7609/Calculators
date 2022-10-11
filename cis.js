/* CIS Calculator */

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
 var gross = +document.querySelector('#gross').value
 var VAT = document.querySelector('#vat').value
 var materials = +document.querySelector('#materials').value
 var TAX = document.querySelector('#tax').value
 var vat = 0
 var tax = 0
	
 /* Assign values to the variables accroding to the selection */
if(VAT === '5'){
	vat = 0.05
}

if(VAT === '20'){
	vat = 0.2
}

if(TAX === '30'){
	tax = 0.3
}

/* calculating the values */
var vatAmount = gross * vat
var deduction = gross + vatAmount - materials
var deducted = (gross - materials) * tax

/* Displaying the results */
document.querySelector('#deducted').textContent = deducted.toFixed(2)
document.querySelector('#net').textContent = (deduction - deducted + materials).toFixed(2)

})
