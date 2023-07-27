/* You can remove this Webflow function is your not using webflow to develop your project */
window.Webflow ||= [];
window.Webflow.push(() => {

/*   API call to airtable to get main allowances table  */
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer keyPbt2NnvY5saxet");
myHeaders.append("Cookie", "brw=brwrmCv4hFJTjFb7C");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tbl859m8WhwIV59tT", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
   const parsed = JSON.parse(data)
   console.log(parsed)
  /* Give the values to the elements on the page from our APi call */
   document.querySelector('[ma]').textContent = parsed.records[11].fields["Main allowances"]
   document.querySelector('[mato]').textContent = parsed.records[11].fields["Year from"]
   document.querySelector('[mafrom]').textContent = parsed.records[11].fields["Year to"]
   document.querySelector('[mapersonal]').textContent = parsed.records[0].fields["Main allowances"]
   document.querySelector('[mapersonal21-22]').textContent = parsed.records[0].fields["Year from"]
   document.querySelector('[mapersonal22-23]').textContent = parsed.records[0].fields["Year to"]
   document.querySelector('[mablind]').textContent = parsed.records[8].fields["Main allowances"]
   document.querySelector('[mablind21-22]').textContent = parsed.records[8].fields["Year from"]
   document.querySelector('[mablind22-23]').textContent = parsed.records[8].fields["Year to"]
   document.querySelector('[maallowwed]').textContent = parsed.records[1].fields["Main allowances"]
   document.querySelector('[mamarried]').textContent = parsed.records[2].fields["Main allowances"]
   document.querySelector('[mamarried21-22]').textContent = parsed.records[2].fields["Year from"]
   document.querySelector('[mamarried22-23]').textContent = parsed.records[2].fields["Year to"]
   document.querySelector('[maincome]').textContent = parsed.records[13].fields["Main allowances"]
   document.querySelector('[maincome21-22]').textContent = parsed.records[13].fields["Year from"]
   document.querySelector('[maincome22-23]').textContent = parsed.records[13].fields["Year to"]
   document.querySelector('[madividendsavings]').textContent = parsed.records[12].fields["Main allowances"]
   document.querySelector('[madividend]').textContent = parsed.records[3].fields["Main allowances"]
   document.querySelector('[madividend21-22]').textContent = parsed.records[3].fields["Year from"]
   document.querySelector('[madividend22-23]').textContent = parsed.records[3].fields["Year to"]
   document.querySelector('[masavingshigher]').textContent = parsed.records[14].fields["Main allowances"]
   document.querySelector('[masavingshigher21-22]').textContent = parsed.records[14].fields["Year from"]
   document.querySelector('[masavingshigher22-23]').textContent = parsed.records[14].fields["Year to"]
   document.querySelector('[masavingsbasic]').textContent = parsed.records[9].fields["Main allowances"]
   document.querySelector('[masavingsbasic21-22]').textContent = parsed.records[9].fields["Year from"]
   document.querySelector('[masavingsbasic22-23]').textContent = parsed.records[9].fields["Year to"]
   document.querySelector('[rate1title]').textContent = parsed.records[11].fields["Rate bands"]
   document.querySelector('[rate1titleto]').textContent = parsed.records[11].fields["Year from"]
   document.querySelector('[rate1titlefrom]').textContent = parsed.records[11].fields["Year to"]
   document.querySelector('[rate2title]').textContent = parsed.records[11].fields["Rate bands"]
   document.querySelector('[rate2titleg]').textContent = parsed.records[11].fields["General income"]
   document.querySelector('[rate2titles]').textContent = parsed.records[11].fields["Savings income"]  
   document.querySelector('[rate2titled]').textContent = parsed.records[11].fields["Dividend income"]  
   document.querySelectorAll('[mabandsbasic]').forEach((el) => {
   el.textContent = parsed.records[5].fields["Rate bands"]
   })
   document.querySelector('[mabandsbasic21-22]').textContent = parsed.records[5].fields["Year from"]
   document.querySelector('[mabandsbasic22-23]').textContent = parsed.records[5].fields["Year to"]
   document.querySelector('[mabandsbasicg]').textContent = parsed.records[5].fields["General income"]
   document.querySelector('[mabandsbasics]').textContent = parsed.records[5].fields["Savings income"]
   document.querySelector('[mabandsbasicd]').textContent = parsed.records[5].fields["Dividend income"]
   document.querySelectorAll('[mabandshigher]').forEach((el) => {
   el.textContent = parsed.records[10].fields["Rate bands"]
   })
   document.querySelector('[mabandshigher21-22]').textContent = parsed.records[10].fields["Year from"]
   document.querySelector('[mabandshigher22-23]').textContent = parsed.records[10].fields["Year to"]
   document.querySelector('[mabandshigherg]').textContent = parsed.records[10].fields["General income"]
   document.querySelector('[mabandshighers]').textContent = parsed.records[10].fields["Savings income"]
   document.querySelector('[mabandshigherd]').textContent = parsed.records[10].fields["Dividend income"]
   document.querySelectorAll('[mabandsadditional]').forEach((el) => {
   el.textContent = parsed.records[7].fields["Rate bands"]
   })
   document.querySelectorAll('[pageheading]').forEach(el => el.textContent = parsed.records[7].fields["Main allowances"])
   document.querySelector('[mabandsadditional21-22]').textContent = parsed.records[7].fields["Year from"]
   document.querySelector('[mabandsadditional22-23]').textContent = parsed.records[7].fields["Year to"]
   document.querySelector('[mabandsadditionalg]').textContent = parsed.records[7].fields["General income"]
   document.querySelector('[mabandsadditionals]').textContent = parsed.records[7].fields["Savings income"]
   document.querySelector('[mabandsadditionald]').textContent = parsed.records[7].fields["Dividend income"]
   document.querySelector('[manotes]').innerHTML = parsed.records[4].fields.Notes
   document.querySelector('[mabandsnotes]').innerHTML = parsed.records[6].fields.Notes 
  })
  .catch(error => console.log('error', error))  

  fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tblf4WESF6Q7u0fZp", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
  /* Give the values to the elements on the page from our APi call */
   document.querySelectorAll('[pageheading0]').forEach(el => el.textContent = parsed.records[4].fields["Main allowances"])
   document.querySelector('[rbc]').textContent = parsed.records[3].fields["Remittance basis charge"]
   document.querySelector('[rbcto]').textContent = parsed.records[3].fields["Year from"]
   document.querySelector('[rbcfrom]').textContent = parsed.records[3].fields["Year to"]
   document.querySelector('[remittance1]').textContent = parsed.records[7].fields["Remittance basis charge"]
   document.querySelector('[remittance121-22]').textContent = parsed.records[7].fields["Year from"]
   document.querySelector('[remittance122-23]').textContent = parsed.records[7].fields["Year to"]
   document.querySelector('[remittance2]').textContent = parsed.records[8].fields["Remittance basis charge"]
   document.querySelector('[remittance221-22]').textContent = parsed.records[8].fields["Year from"]
   document.querySelector('[remittance222-23]').textContent = parsed.records[8].fields["Year to"]
   document.querySelector('[remittance3]').textContent = parsed.records[6].fields["Remittance basis charge"]
   document.querySelector('[remittance321-22]').textContent = parsed.records[6].fields["Year from"]
   document.querySelector('[remittance322-23]').textContent = parsed.records[6].fields["Year to"]
   document.querySelector('[topnote]').innerHTML = parsed.records[4].fields.Notes
 })
  
  .catch(error => console.log('error', error))

  /***** Hiding rows that don't receive content from Airtbale *****/
setTimeout(() => {
document.querySelectorAll('.tax-data_table-row').forEach((el) => {
var children = el.children
function isNodeEmpty(node) {
  return !node.textContent.trim(); 	
}
// Check if all children are empty
const allChildrenEmpty = Array.from(children).every(isNodeEmpty);
if(allChildrenEmpty){
	el.classList.add('hide')
}
})

const rows = document.querySelectorAll('.tax-data_table-row:not(.hide):not(.is--first-row)').forEach((element, index) => {
    if (index % 2 === 0) {
      element.style.background = "#FFFFFF"
    } else {
      element.classList.add('color-bg')
    }
  });
}, 1000)
	
})

