/* Startup Calculator */

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

/* Firing the one off set up costs calculator when submitting */
document.querySelector('#calculate').addEventListener('click', (e) => {

	/* Preventing the default behavior from the form */
 e.preventDefault()
 
 /* Calculating all the values */
 const total = 
 +document.querySelector('#rental').value +
 +document.querySelector('#firstRent').value +
 +document.querySelector('#utility').value +
 +document.querySelector('#other1').value +
 +document.querySelector('#other2').value +
 +document.querySelector('#other3').value +
 +document.querySelector('#other4').value +
 +document.querySelector('#other5').value +
 +document.querySelector('#car').value +
 +document.querySelector('#equipment').value +
 +document.querySelector('#office').value +
 +document.querySelector('#initial').value +
 +document.querySelector('#itEquipment').value +
  +document.querySelector('#itSystem').value +
 +document.querySelector('#itWebsite').value +
 +document.querySelector('#professional').value +
 +document.querySelector('#licence').value +
 +document.querySelector('#inicialPromotion').value
 
 /* Displaying the result */
 document.querySelector('#total').textContent = total.toFixed(2) 
})


/* Firing the ongoing costs on a monthly basis calculator when submitting */
document.querySelector('#calculateMonthly').addEventListener('click', (e) => {

	/* Preventing the default behavior from the form */
 e.preventDefault()

/* Calculating all the values */
 const total =
+document.querySelector('#other6').value +
+document.querySelector('#other7').value +
+document.querySelector('#other8').value +
+document.querySelector('#other9').value +
+document.querySelector('#other10').value +
+document.querySelector('#salary').value +
+document.querySelector('#payroll').value +
+document.querySelector('#recruitment').value +
+document.querySelector('#rent').value +
+document.querySelector('#bills').value +
+document.querySelector('#insurance').value +
+document.querySelector('#transport').value +
+document.querySelector('#maintenance').value +
+document.querySelector('#software').value +
+document.querySelector('#website').value +
+document.querySelector('#accounting').value +
+document.querySelector('#legal').value +
+document.querySelector('#promotion').value 
 
 /* Displaying the result */
  document.querySelector('#monthly').textContent = total.toFixed(2)
})
