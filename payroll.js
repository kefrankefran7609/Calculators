
/* You can remove this Webflow function is your not using webflow to develop your project */
window.Webflow ||= [];
window.Webflow.push(() => {
    console.log("hey")
/*   API call to airtable to get main allowances table  */
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer keyPbt2NnvY5saxet");
myHeaders.append("Cookie", "brw=brwrmCv4hFJTjFb7C");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tblHNDCEXfqRF3F33", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
  console.log(parsed)
  /* Give the values to the elements on the page from our APi call */
   document.querySelectorAll('[pageheading]').forEach(el => el.textContent = parsed.records[1].fields.Name0)
   document.querySelector('[payroll1]').textContent = parsed.records[3].fields.Name
   document.querySelector('[payroll2]').textContent = parsed.records[2].fields.Name 
   document.querySelector('[payroll3]').textContent = parsed.records[4].fields.Name
   document.querySelector('[payroll4]').textContent = parsed.records[1].fields.Name
   document.querySelector('[payroll5]').textContent = parsed.records[0].fields.Name
   document.querySelector('[payroll6]').textContent = parsed.records[3].fields.Name0
   document.querySelector('[payroll7]').textContent = parsed.records[2].fields.Name0
   document.querySelector('[payroll8]').textContent = parsed.records[4].fields.Name0
 })
  
  .catch(error => console.log('error', error))  
/*****  End of Webflow push function for API call*****/ 



/***** Payroll Calculatyor  *****/
const inputs = document.querySelectorAll(".input");
inputs.forEach((input) => {
    (input.value = "0"),
        input.addEventListener("change", (e) => {
            "" === e.target.value && (input.value = "0");  //path[0]
        });
}),
    document.querySelector("#calculate").addEventListener("click", (e) => {
        e.preventDefault();
        var salary = document.querySelector("#salary").value,
            country = document.querySelector("#country").value,
            primaryRate = 0.12,
            upperRate = 0.02,
			primaryTreshold = 1048,
			upperEarnings = 4189,
            bracket4 = 0,
            bracket5 = 0,
			gross1 = 12570,
			band3 = 0,
			band4 = 0;
        if (country != "scotland"){
            var gross2 = 50270,
                gross3 = 125140,
				band1 = 37700,
				band2 = 74870,
				taxRate1 = 0.2,
                taxRate2 = 0.4,
                taxRate3 = 0.45;
		}else { 
            var gross2 = 14732,
                gross3 = 25688,
                gross4 = 43662,
                gross5 = 125140,
				band1 = 2162,
				band2 = 10956,
				band3 = 17974,
				band4 = 81478,
				taxRate1 = 0.19,
                taxRate2 = 0.2,
                taxRate3 = 0.21,
                taxRate4 = 0.42,
                taxRate5 = 0.47;
	          }
        revisedTax = salary > 100000 ? Math.max(0, gross1 - (salary - 100000) * .5) : 0
	console.log(revisedTax.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
        document.querySelector("#payroll").textContent = revisedTax.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        var additionalTax = salary > 100000 && country != "scotland" ?  (gross1 - revisedTax) * taxRate2 : salary > 100000 && country == "scotland" ? (gross1 - revisedTax) * taxRate4 : 0
        if (salary > gross2) var bracket1 = band1 * taxRate1;
        else if (salary < gross1) var bracket1 = 0;
        else var bracket1 = (salary - gross1) * taxRate1;
        if (salary > gross3) var bracket2 = band2 * taxRate2;
        else if (salary < gross2) var bracket2 = 0;
        else var bracket2 = (salary - gross2) * taxRate2;
        var bracket3 = salary > gross4 ? band3 * taxRate3 : salary < gross3 ? 0 : (salary - gross3) * taxRate3;
        if (country == "scotland"){
            bracket4 = salary > gross5 ? band4 * taxRate4 : salary < gross3 ? 0 : (salary - gross4) * taxRate4
            bracket5 = salary > 125140 ? (salary - 125140) * taxRate5 : 0         
        }
        var between = (salary / 12) > upperEarnings ? (upperEarnings - primaryTreshold) * primaryRate : (salary / 12) < primaryTreshold ? 0 : ((salary / 12) - primaryTreshold) * primaryRate
        var uel = (salary / 12) > upperEarnings ? ((salary / 12) - upperEarnings) * upperRate : 0
        /*(upperEarnings - primaryTreshold) * primaryRate;
        if (salary / 12 < primaryTreshold) var between = 0;
        else var between = (salary / 12 - primaryTreshold) * primaryRate;
        if (salary / 12 > upperEarnings) var uel = (salary / 12 - upperEarnings) * upperRate;
        else var uel = 0;*/
        var totalInsurance = (uel + between) * 12;
        console.log(bracket1)
        console.log(bracket2)
        console.log(bracket3)
        console.log(bracket4)
        console.log(bracket5)
        console.log("additional" + additionalTax)
        console.log("revised" + revisedTax)
        console.log("insurance" + totalInsurance)
        document.querySelector("#totalIncome").textContent = (bracket1 + bracket2 + bracket3 + bracket4 + bracket5 + additionalTax)
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        document.querySelector("#totalInsurance").textContent = totalInsurance
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        document.querySelector("#totalTaxes").textContent = (bracket1 + bracket2 + bracket3 + bracket4 + bracket5 + additionalTax + totalInsurance)
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        document.querySelector("#netIncome").textContent = (salary - (bracket1 + bracket2 + bracket3 + bracket4 + bracket5 + additionalTax + totalInsurance))
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    })
})
