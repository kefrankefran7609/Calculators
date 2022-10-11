/* Payroll Calculator */

/***** Quering all inputs *****/
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
 var salary = document.querySelector('#salary').value
 var frequency = document.querySelector('#frequency').value
 var years = document.querySelector('#years').value
 var country = document.querySelector('#country').value
 
/* Assign values to the variables accroding to the selection */
 var primaryRate = 0.12
 var upperRate = .02
 var bracket4 = 0
 var bracket5 = 0
 
 
 /***** Calculating Income Tax Due *****/
 if(years === '19-20' || years === '20-21' && country != 'scotland'){
 var gross1 = 12500
 var gross2 = 37500
 var gross3 = 100000 
 }
 
 if(years === '21-22' || years === '22-23aj' || years === '22-23jn' || years === '22-23na' && country != 'scotland'){
 var gross1 = 12570
 var gross2 = 37700
 var gross3 = 99730
 }
 
 if(years === '19-20' && country === 'scotland'){
 var gross1 = 12500
 var gross2 = 2049
 var gross3 = 10395
 var gross4 = 18486
 var gross5 = 106570
 }
 
 if(years === '20-21' && country === 'scotland'){
 var gross1 = 12500
 var gross2 = 2085
 var gross3 = 10573
 var gross4 = 18272
 var gross5 = 106570
 }
 if(years === '21-22' && country === 'scotland'){
 var gross1 = 12570
 var gross2 = 2097
 var gross3 = 10629
 var gross4 = 18366
 var gross5 = 106338
 }
 
 if(years === '22-23aj' || years === '22-23jn' || years === '22-23na' && country === 'scotland'){
 var gross1 = 12570
 var gross2 = 2162
 var gross3 = 10956
 var gross4 = 17974
 var gross5 = 106338
 } 
 /***** End of Calculating Income Tax Due *****/
 
 
 /***** Calculating National Insurance *****/
 if(years === '19-20'){
 var primaryTreshold = 719
 var upperEarnings = 4167
 }
 
 if(years === '20-21'){
 var primaryTreshold = 792
 var upperEarnings = 4167
 }
 
 if(years === '21-22'){
 var primaryTreshold = 797
 var upperEarnings = 4189
 }
 
 if(years === '22-23aj'){
 var primaryTreshold = 823
 var upperEarnings = 4189
 var primaryRate = 0.1325
 var upperRate = .0325
 }
 
  if(years === '22-23jn'){
 var primaryTreshold = 1048
 var upperEarnings = 4189
 var primaryRate = 0.1325
 var upperRate = .0325
 }
 
  if(years === '22-23na'){
 var primaryTreshold = 1048
 var upperEarnings = 4189
 var primaryRate = 0.12
 var upperRate = .02
 }
 
 if(frequency === 'month'){
 salary = salary * 12
 } else if(frequency === 'week'){
 salary = salary * 52
 }
 
 if(country === 'scotland'){
 var taxRate1 = 0.19
 var taxRate2 = 0.20
 var taxRate3 = 0.21
 var taxRate4 = 0.41
 var taxRate5 = 0.46
} else{
 var taxRate1 = 0.2
 var taxRate2 = 0.4
 var taxRate3 = 0.45
}
/***** End of calculating National Insurance *****/


/***** Calculating and displaying tax free allowance value *****/
if(salary > 100000){
   document.querySelector('#payroll').textContent = Math.max(0, 12570 - (salary - 100000) * .5)
   }else {document.querySelector('#payroll').textContent = '12570'
}

/* Calculating Revised Tax Free Allowance if Gross Salary above £100k p.a.*/
if(salary > 100000){
   var revisedTax = Math.max(0, 12570 - (salary - 100000) * .5)
   }else { var revisedTax = 0
}
/* Calculating Additional tax @ 40% */
if(country != 'scotland'){
if(salary > 100000){
   var additionalTax = (gross1 - revisedTax) * 0.4
   }else { 
   var additionalTax = 0
}} else{ 
	 if(salary > 100000){
   var additionalTax = (gross1 - revisedTax) * 0.41
   }else { 
   var additionalTax = 0
}}

/***** Calculating total income tax due *****/
/* Calculating 1st bracket */
if(salary > (gross1 + gross2)){
	var bracket1 = gross2 * taxRate1
} else if(salary < gross1){
	var bracket1 = 0
} else { 
	var bracket1 = (salary - gross1) * taxRate1
}
	console.log(bracket1 +'is bracket1')

/* Calculating 2nd bracket */
if(salary > (gross1 + gross2 + gross3)){
	var bracket2 = gross3 * taxRate2
} else if(salary < (gross1 + gross2)){
	var bracket2 = 0
} else { 
	var bracket2 = (salary - gross1 - gross2) * taxRate2
}
	console.log('bracket 2' + bracket2)

/* Calculating 3rd bracket */
if(country != 'scotland'){
if(salary > 150000){
	var bracket3 = (salary - 150000) * taxRate3
} else { var bracket3 = 0
}} else { 
	if(salary > (gross1 + gross2 + gross3 + gross4)){
	var bracket3 = gross4 * taxRate3
} else if(salary < (gross2 + gross3)){
	var bracket3 = 0
} else { 
	var bracket3 = (salary - gross1 - gross2 - gross3) * taxRate3
}}
	console.log('bracket 3' + bracket3)

/* Calculating 4th bracket for Scotland */
if(country === 'scotland'){
if(salary > (gross1 + gross2 + gross3 + gross4 + gross5)){
	bracket4 = gross5 * taxRate4
} else if(salary < (gross3 + gross4)){
	bracket4 = 0
} else { 
	bracket4 = (salary - gross1 - gross2 - gross3 - gross4) * taxRate4
}console.log('bracket 4' + bracket4) }  


/* Calculating 5th bracket for Scotland */
if(country === 'scotland'){
if(salary > 150000){
	bracket5 = (salary - 150000) * taxRate5
} else { bracket5 = 0
} console.log('bracket 5' + bracket5)}


/***** Calculating total national insurance due *****/
/* Calculating Between PT and UEL */
if((salary / 12) > upperEarnings){
	var between = (upperEarnings - primaryTreshold) * primaryRate
  console.log(between)
} else if((salary / 12) < primaryTreshold) {
	var between = 0
} else { 
	var between = ((salary / 12) - primaryTreshold) * primaryRate
  console.log(between)
}

/* Calculating above UEL */
if((salary / 12) > upperEarnings){
	var uel = ((salary / 12) - upperEarnings) * upperRate
  console.log(uel)
} else { 
	var uel = 0
  console.log(uel)
}

if(years === '19-20' || years === '20-21' || years === '21-22'){
	var totalInsurance = (between + uel) * 12
  console.log(totalInsurance + ' not 22-23')
} 

if(years === '22-23aj'){
	var totalInsurance = (between + uel) * 3
  console.log(totalInsurance + ' for aj')
} 
if(years === '22-23jn'){
	var totalInsurance = (between + uel) * 4
  console.log(totalInsurance + ' for jn')
}

if(years === '22-23na'){
	var totalInsurance = (between + uel) * 5
  console.log(totalInsurance + ' for na')
}
/***** End of alculating total national insurance due *****/


/***** Adding all numbers and displaying the result *****/
document.querySelector('#totalIncome').textContent = (bracket1 + bracket2 + bracket3 + bracket4 + bracket5 + additionalTax).toFixed(2)
document.querySelector('#totalInsurance').textContent = totalInsurance.toFixed(2)
document.querySelector('#totalTaxes').textContent = (bracket1 + bracket2 + bracket3 + bracket4 + bracket5 + additionalTax + totalInsurance).toFixed(2)
document.querySelector('#netIncome').textContent = (salary - (bracket1 + bracket2 + bracket3 + bracket4 + bracket5 + additionalTax + totalInsurance)).toFixed(2)
/***** End of main Event Listener *****/
})
