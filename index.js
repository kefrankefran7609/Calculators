
window.Webflow ||= [];
window.Webflow.push(() => {


/* Payroll Calculator */

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

/*****   Creating variable   *****/
/* England and Ireland */
var efrom1 
var efrom2
var efrom3 
var efrom4 
var eto1 
var eto2 
var eto3 
var erate1 
var erate2 
var erate3 
var erate4 
var eaddRate 

/* Wales 1st buyer */
var w1from1 
var w1from2 
var w1from3 
var w1from4
var w1from5 
var w1to1 
var w1to2 
var w1to3 
var w1to4
var w1rate1 
var w1rate2 
var w1rate3 
var w1rate4 
var w1rate5
var w1addRate 

/* Wales 2nd property */
var w2from1 
var w2from2 
var w2from3 
var w2from4
var w2from5
var w2from6 
var w2to1 
var w2to2 
var w2to3
var w2to4 
var w2to5  
var w2rate1 
var w2rate2 
var w2rate3 
var w2rate4
var w2rate5
var w2rate6 
var w2addRate

/* Scotland 2nd property */
var s2from1 
var s2from2 
var s2from3 
var s2from4 
var s2from5
var s2to1 
var s2to2 
var s2to3 
var s2to4
var s2rate1 
var s2rate2 
var s2rate3 
var s2rate4 
var s2rate5
var s2addRate 

/* Scotland 1st buyer */
var s1from1 
var s1from2 
var s1from3 
var s1from4
var s1from5 
var s1to1 
var s1to2 
var s1to3 
var s1to4
var s1rate1 
var s1rate2 
var s1rate3 
var s1rate4 
var s1rate5


/***** End of creating variables *****/


/*****   API call to airtable to get the data   *****/
/* Getting data for England and Northern Ireland */
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer keyPbt2NnvY5saxet");
myHeaders.append("Cookie", "brw=brwrmCv4hFJTjFb7C");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.airtable.com/v0/appPX1LpXetaEQH89/SDLT%20Calculators/recDHv4jYjcVO3G8L", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
   efrom1 = parsed.fields.From1
   efrom2 = parsed.fields.From2
   efrom3 = parsed.fields.From3
   efrom4 = parsed.fields.From4
   eto1 = parsed.fields.To1
   eto2 = parsed.fields.To2
   eto3 = parsed.fields.To3
   erate1 = parsed.fields.Rate1
   erate2 = parsed.fields.Rate2
   erate3 = parsed.fields.Rate3
   erate4 = parsed.fields.Rate4
   eaddRate = parsed.fields.AdditonalRate
  })
  .catch(error => console.log('error', error))
  

/* Getting data for Wales first buyer */
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer keyPbt2NnvY5saxet");
myHeaders.append("Cookie", "brw=brwrmCv4hFJTjFb7C");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.airtable.com/v0/appPX1LpXetaEQH89/SDLT%20Calculators/recaV2PCQZzEkTXQY", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
   w1from1 = parsed.fields.From1
   w1from2 = parsed.fields.From2
   w1from3 = parsed.fields.From3
   w1from4 = parsed.fields.From4
   w1from5 = parsed.fields.From5
   w1to1 = parsed.fields.To1
   w1to2 = parsed.fields.To2
   w1to3 = parsed.fields.To3
   w1to4 = parsed.fields.To4
   w1rate1 = parsed.fields.Rate1
   w1rate2 = parsed.fields.Rate2
   w1rate3 = parsed.fields.Rate3
   w1rate4 = parsed.fields.Rate4
   w1rate5 = parsed.fields.Rate5
   w1addRate = parsed.fields.AdditonalRate
  })
  .catch(error => console.log('error', error))


/* Getting data for Wales second property */
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer keyPbt2NnvY5saxet");
myHeaders.append("Cookie", "brw=brwrmCv4hFJTjFb7C");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.airtable.com/v0/appPX1LpXetaEQH89/SDLT%20Calculators/recPQtmqQCOWlujDo", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
   w2from1 = parsed.fields.From1
   w2from2 = parsed.fields.From2
   w2from3 = parsed.fields.From3
   w2from4 = parsed.fields.From4
   w2from5 = parsed.fields.From5
   w2from6 = parsed.fields.From6
   w2to1 = parsed.fields.To1
   w2to2 = parsed.fields.To2
   w2to3 = parsed.fields.To3
   w2to4 = parsed.fields.To4
   w2to5 = parsed.fields.To5
   w2rate1 = parsed.fields.Rate1
   w2rate2 = parsed.fields.Rate2
   w2rate3 = parsed.fields.Rate3
   w2rate4 = parsed.fields.Rate4
   w2rate5 = parsed.fields.Rate5
   w2rate6 = parsed.fields.Rate6 
  })
  .catch(error => console.log('error', error))


/* Getting data for Scotland second property */
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer keyPbt2NnvY5saxet");
myHeaders.append("Cookie", "brw=brwrmCv4hFJTjFb7C");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.airtable.com/v0/appPX1LpXetaEQH89/SDLT%20Calculators/rec91xkZeaAsLUOTY", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
   s2from1 = parsed.fields.From1
   s2from2 = parsed.fields.From2
   s2from3 = parsed.fields.From3
   s2from4 = parsed.fields.From4
   s2from5 = parsed.fields.From5
   s2to1 = parsed.fields.To1
   s2to2 = parsed.fields.To2
   s2to3 = parsed.fields.To3
   s2to4 = parsed.fields.To4
   s2rate1 = parsed.fields.Rate1
   s2rate2 = parsed.fields.Rate2
   s2rate3 = parsed.fields.Rate3
   s2rate4 = parsed.fields.Rate4
   s2rate5 = parsed.fields.Rate5
   s2addRate = parsed.fields.AdditonalRate
  })
  .catch(error => console.log('error', error))


/* Getting data for Scotland second property */
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer keyPbt2NnvY5saxet");
myHeaders.append("Cookie", "brw=brwrmCv4hFJTjFb7C");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.airtable.com/v0/appPX1LpXetaEQH89/SDLT%20Calculators/recOQeWhD5qmYWkt7", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
   s1from1 = parsed.fields.From1
   s1from2 = parsed.fields.From2
   s1from3 = parsed.fields.From3
   s1from4 = parsed.fields.From4
   s1from5 = parsed.fields.From5
   s1to1 = parsed.fields.To1
   s1to2 = parsed.fields.To2
   s1to3 = parsed.fields.To3
   s1to4 = parsed.fields.To4
   s1rate1 = parsed.fields.Rate1
   s1rate2 = parsed.fields.Rate2
   s1rate3 = parsed.fields.Rate3
   s1rate4 = parsed.fields.Rate4
   s1rate5 = parsed.fields.Rate5
  })
  .catch(error => console.log('error', error))


/***** End of API calls to get data from Airtable *****/


/****  Triggering the calculator when submitting *****/
document.querySelector('#calculate').addEventListener('click', (e) => {
	
	/* Preventing the default behavior from the form */
 e.preventDefault()
 /* Getting values from the form */
 var price = document.querySelector('#price').value
 var country = document.querySelector('#country').value
 var situation = document.querySelector('#situation').value
	
 
/* Assign default values to variables*/
var bracket5 = 0
var bracket6 = 0
/*
var rate1 = 0.00
var rate2 = 0.02
var rate3 = 0.05
var rate4 = 0.10
var rate5 = 0.12
*/
var add = 0
var resultName = 'Stamp Duty Land Tax Due:'


/***** Assign values to variables according to the selection *****/
if(country === 'wales'){
	var resultName = 'Land Transaction Tax Due:'
}

if(country === 'scotland'){
	var resultName = 'Land and Buildings Transaction Tax Due:'
}


if(country === 'england' || country === 'ireland'){
 var from1 = efrom1
 var from2 = efrom2
 var from3 = efrom3
 var from4 = efrom4
 var to1 = eto1
 var to2 = eto2
 var to3 = eto3
 var rate1 = erate1
 var rate2 = erate2
 var rate3 = erate3
 var rate4 = erate4
 var rateAdd = eaddRate
 }
 
 if(country === 'wales' && situation === 'first'){
 var from1 = w1from1
 var from2 = w1from2
 var from3 = w1from3
 var from4 = w1from4
 var from5 = w1from5
 var to1 = w1to1
 var to2 = w1to2
 var to3 = w1to3
 var to4 = w1to4
 var rate1 = w1rate1
 var rate2 = w1rate2
 var rate3 = w1rate3
 var rate4 = w1rate4
 var rate5 = w1rate5
 }
 
 if(country === 'wales' && situation === 'second'){
 var from1 = w2from1
 var from2 = w2from2
 var from3 = w2from3
 var from4 = w2from4
 var from5 = w2from5
 var from6 = w2from6
 var to1 = w2to1
 var to2 = w2to2
 var to3 = w2to3
 var to4 = w2to4
 var to5 = w2to5
 var rate1 = w2rate1
 var rate2 = w2rate2
 var rate3 = w2rate3
 var rate4 = w2rate4
 var rate5 = w2rate5
 var rate6 = w2rate6
 }
 
 if(country === 'scotland' && situation === 'second'){
  var from1 = s2from1
  var from2 = s2from2
  var from3 = s2from3
  var from4 = s2from4
  var from5 = s2from5
  var to1 = s2to1
  var to2 = s2to2
  var to3 = s2to3
  var to4 = s2to4
  var rate1 = s2rate1
  var rate2 = s2rate2
  var rate3 = s2rate3
  var rate4 = s2rate4
  var rate5 = s2rate5
  rateAdd = s2addRate
 }
 
 if(country === 'scotland' && situation === 'first'){
  var from1 = s1from1
  var from2 = s1from2
  var from3 = s1from3
  var from4 = s1from4
  var from5 = s1from5
  var to1 = s1to1
  var to2 = s1to2
  var to3 = s1to3
  var to4 = s1to4
  var rate1 = s1rate1
  var rate2 = s1rate2
  var rate3 = s1rate3
  var rate4 = s1rate4
  var rate5 = s1rate5
 }
 
 
 /* Calculating additional tax if second home is selected */
if(country != 'wales' && situation === 'second'){
   add = price * rateAdd
}
  

/***** Calculating taxes *****/
/* Calculating 1st bracket */
if(+price > +to1){
	var bracket1 = (+to1 - +from1) * +rate1
} else if(+price < +from1){
	var bracket1 = 0
} else { 
	var bracket1 = (+price - +from1) * +rate1
}
	console.log(bracket1 +' is bracket1')

/* Calculating 2nd bracket */
if(+price > +to2){
	var bracket2 = (+to2 - +from2) * +rate2
} else if(+price < +from2){
	var bracket2 = 0
} else { 
	var bracket2 = (+price - +from2) * +rate2
}
	console.log('bracket 2 ' + bracket2)

/* Calculating 3rd bracket */
if(+price > +to3){
	var bracket3 = (+to3 - +from3) * +rate3
} else if(+price < +from3){
	var bracket3 = 0
} else { 
	var bracket3 = (+price - +from3) * +rate3
}
	console.log('bracket 3 ' + bracket3)

/* Calculating 4th bracket */
if(country === 'england' || country === 'ireland'){
if(+price > +from4){
	var bracket4 = (+price - +from4) * +rate4
} else { var bracket4 = 0 
} console.log('bracket 4 ' + bracket4) 
} else { 
	if(+price > +to4){
	var bracket4 = (+to4 - +from4) * +rate4
} else if(+price < +from4){
	var bracket4 = 0
} else { 
	var bracket4 = (+price - +from4) * +rate4
	} console.log('bracket 4 ' + bracket4) 
} 

/* Calculating 5th bracket for Wales */
if((country === 'wales' && situation === 'first') || country === 'scotland'){
if(+price > +from5){
	var bracket5 = (+price - +from5) * +rate5
} else { var bracket5 = 0 
} console.log('bracket 5 ' + bracket5) 
} else if(country === 'wales' && situation === 'second'){ 
	if(+price > +to5){
	var bracket5 = (+to5 - +from5) * +rate5
} else if(+price < +from5){
	var bracket5 = 0
} else { 
	var bracket5 = (+price - +from5) * +rate5
	} console.log('bracket 5 ' + bracket5) 
}

/* Calculating 6th bracket for Wales */
if(country === 'wales' && situation === 'second'){
if(+price > +from6){
	var bracket6 = (+price - +from6) * +rate6
} else { var bracket6 = 0
} console.log('bracket 6 ' + bracket6)}


/* Adding all numbers and displaying the result */
document.querySelector('#total').textContent = (bracket1 + bracket2 + bracket3 + bracket4 + bracket5 + bracket6 + add).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
document.querySelector('#resultName').textContent = resultName
/* End of Event Listener */
})


});
