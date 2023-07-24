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

fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tblTomAWMw6SdkgWL", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
  console.log(parsed)
  /* Give the values to the elements on the page from our APi call */
   document.querySelector('[title]').textContent = parsed.records[1].fields["CO2 emissions (g/km)"]
   document.querySelector('[scale]').textContent = parsed.records[1].fields["Scale charge"]  
   document.querySelector('[zero]').textContent = parsed.records[6].fields["CO2 emissions (g/km)"]
   document.querySelector('[zeroscale]').textContent = parsed.records[6].fields["Scale charge"]
   document.querySelector('[first]').textContent = parsed.records[5].fields["CO2 emissions (g/km)"]
   document.querySelector('[firstscale]').textContent = parsed.records[5].fields["Scale charge"]
   document.querySelector('[second]').textContent = parsed.records[4].fields["CO2 emissions (g/km)"]
   document.querySelector('[secondscale]').textContent = parsed.records[4].fields["Scale charge"]
   document.querySelector('[third]').textContent = parsed.records[9].fields["CO2 emissions (g/km)"]
   document.querySelector('[thirdscale]').textContent = parsed.records[9].fields["Scale charge"]
   document.querySelector('[fourth]').textContent = parsed.records[7].fields["CO2 emissions (g/km)"]
   document.querySelector('[fourthscale]').textContent = parsed.records[7].fields["Scale charge"]
   document.querySelector('[fifth]').textContent = parsed.records[10].fields["CO2 emissions (g/km)"]
   document.querySelector('[fifthscale]').textContent = parsed.records[10].fields["Scale charge"]
   document.querySelector('[sixth]').textContent = parsed.records[3].fields["CO2 emissions (g/km)"]
   document.querySelector('[sixthscale]').textContent = parsed.records[3].fields["Scale charge"]
   document.querySelector('[seventh]').textContent = parsed.records[11].fields["CO2 emissions (g/km)"]
   document.querySelector('[seventhscale]').textContent = parsed.records[11].fields["Scale charge"]
   document.querySelector('[last]').textContent = parsed.records[8].fields["CO2 emissions (g/km)"]
   document.querySelector('[lastscale]').innerHTML = parsed.records[8].fields["Scale charge"]
   document.querySelector('[bottomnote]').innerHTML = parsed.records[2].fields.Notes
   document.querySelector('[topnote]').innerHTML = parsed.records[0].fields.Notes 
   document.querySelectorAll('[pageheading]').forEach(el => el.textContent = parsed.records[0].fields["CO2 emissions (g/km)"]
 })
  
  .catch(error => console.log('error', error))  
/*****  End of Webflow push function *****/

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

  
})

