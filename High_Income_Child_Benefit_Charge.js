/* You can remove this Webflow function is your not using webflow to develop your project */
window.Webflow ||= [];
window.Webflow.push(() => {

/*   API call to airtable to get main allowances table  */
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer pat3xBDAwQuPoFK0d.3807c807f50f8c70f0d5f37373927208612efee25ec4fad2d4864a0b157bdc09");
myHeaders.append("Cookie", "brw=brwrmCv4hFJTjFb7C");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tblf4WESF6Q7u0fZp", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
  /* Give the values to the elements on the page from our APi call */
   document.querySelector('[rbc]').textContent = parsed.records[3].fields["Remittance basis charge"]
   document.querySelector('[rbcto]').textContent = parsed.records[3].fields["Year from"]
   document.querySelector('[rbcfrom]').textContent = parsed.records[3].fields["Year to"]
   document.querySelector('[rate]').textContent = parsed.records[3].fields["Rate bands"]
   document.querySelector('[rateto]').textContent = parsed.records[3].fields["Year from"]
   document.querySelector('[ratefrom]').textContent = parsed.records[3].fields["Year to"]
   document.querySelector('[remittance1]').textContent = parsed.records[7].fields["Remittance basis charge"]
   document.querySelector('[remittance121-22]').textContent = parsed.records[7].fields["Year from"]
   document.querySelector('[remittance122-23]').textContent = parsed.records[7].fields["Year to"]
   document.querySelector('[remittance2]').textContent = parsed.records[8].fields["Remittance basis charge"]
   document.querySelector('[remittance221-22]').textContent = parsed.records[8].fields["Year from"]
   document.querySelector('[remittance222-23]').textContent = parsed.records[8].fields["Year to"]
   document.querySelector('[remittance3]').textContent = parsed.records[6].fields["Remittance basis charge"]
   document.querySelector('[remittance321-22]').textContent = parsed.records[6].fields["Year from"]
   document.querySelector('[remittance322-23]').textContent = parsed.records[6].fields["Year to"]
   document.querySelector('[la]').textContent = parsed.records[0].fields["Rate bands"]
   document.querySelector('[la21-22]').textContent = parsed.records[0].fields["Year from"]
   document.querySelector('[la22-23]').textContent = parsed.records[0].fields["Year to"]
   document.querySelector('[aa]').textContent = parsed.records[5].fields["Rate bands"]
   document.querySelector('[aa21-22]').textContent = parsed.records[5].fields["Year from"]
   document.querySelector('[aa22-23]').textContent = parsed.records[5].fields["Year to"]
   document.querySelector('[excessdrawn]').textContent = parsed.records[2].fields["Rate bands"]
   document.querySelector('[excessdrawn21-23]').textContent = parsed.records[2].fields["Year from"]
   document.querySelector('[excessinputs]').textContent = parsed.records[1].fields["Rate bands"]
   document.querySelector('[excessinputs21-23]').textContent = parsed.records[1].fields["Year from"]
   document.querySelector('[topnote]').innerHTML = parsed.records[4].fields.Notes
   document.querySelector('[bottomnote]').innerHTML = parsed.records[9].fields.Notes
   document.querySelectorAll('[pageheading0]').forEach(el => el.textContent = parsed.records[4].fields["Remittance basis charge"]
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
console.log(allChildrenEmpty)
})

const rows = document.querySelectorAll('.tax-data_table-row:not(.hide):not(.is--first-row)').forEach((element, index) => {
    if (index % 2 === 0) {
      element.style.background = "#FFFFFF"
    } else {
      element.classList.add('color-bg')
    }
  });
}, 1000)

  
/*****  End of Webflow push function *****/
})
