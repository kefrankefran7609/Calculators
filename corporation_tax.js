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
  /* Give the values to the elements on the page from our APi call */
   console.log(parsed)
   document.querySelectorAll('[pageheading]').forEach(el => el.textContent = parsed.records[24].fields["Main allowances"])
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