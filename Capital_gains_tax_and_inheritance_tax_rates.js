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

fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tblbnpfB7JMoUVgPg", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
  console.log(parsed)
  /* Give the values to the elements on the page from our APi call */
   document.querySelector('[title]').textContent = parsed.records[13].fields["Capital Gains Tax"]
   document.querySelector('[yearfrom]').textContent = parsed.records[13].fields["Year from"]
   document.querySelector('[yearto]').textContent = parsed.records[13].fields["Year to"]  
   document.querySelector('[annual1]').textContent = parsed.records[0].fields["Capital Gains Tax"]
   document.querySelector('[annual121-22]').textContent = parsed.records[0].fields["Year from"]
   document.querySelector('[annual122-23]').textContent = parsed.records[0].fields["Year to"]
   document.querySelector('[taper]').textContent = parsed.records[2].fields["Capital Gains Tax"]
   document.querySelector('[taper21-22]').textContent = parsed.records[2].fields["Year from"]
   document.querySelector('[taper22-23]').textContent = parsed.records[2].fields["Year to"]
   document.querySelector('[nilrate]').textContent = parsed.records[3].fields["Capital Gains Tax"]
   document.querySelector('[nilrate21-22]').textContent = parsed.records[3].fields["Year from"]
   document.querySelector('[nilrate22-23]').textContent = parsed.records[3].fields["Year to"]
   document.querySelector('[residence]').textContent = parsed.records[4].fields["Capital Gains Tax"]
   document.querySelector('[residence21-22]').textContent = parsed.records[4].fields["Year from"]
   document.querySelector('[residence22-23]').textContent = parsed.records[4].fields["Year to"]
   document.querySelector('[annual2]').textContent = parsed.records[5].fields["Capital Gains Tax"]
   document.querySelector('[annual221-22]').textContent = parsed.records[5].fields["Year from"]
   document.querySelector('[annual222-23]').textContent = parsed.records[5].fields["Year to"]   
   document.querySelector('[higher]').textContent = parsed.records[10].fields["Capital Gains Tax"]
   document.querySelector('[higher21-22]').textContent = parsed.records[10].fields["Year from"]
   document.querySelector('[higher22-23]').textContent = parsed.records[10].fields["Year to"]
   document.querySelector('[chargeable]').textContent = parsed.records[7].fields["Capital Gains Tax"]
   document.querySelector('[chargeable21-22]').textContent = parsed.records[7].fields["Year from"]
   document.querySelector('[chargeable22-23]').textContent = parsed.records[7].fields["Year to"]
   document.querySelector('[inheritance]').textContent = parsed.records[8].fields["Capital Gains Tax"]
   document.querySelector('[business]').textContent = parsed.records[9].fields["Capital Gains Tax"]
   document.querySelector('[business21-22]').textContent = parsed.records[9].fields["Year from"]
   document.querySelector('[business22-23]').textContent = parsed.records[9].fields["Year to"]
   document.querySelector('[higher2]').textContent = parsed.records[6].fields["Capital Gains Tax"]
   document.querySelector('[higher221-22]').textContent = parsed.records[6].fields["Year from"]
   document.querySelector('[higher222-23]').textContent = parsed.records[6].fields["Year to"]
   document.querySelector('[estate]').textContent = parsed.records[11].fields["Capital Gains Tax"]
   document.querySelector('[estate21-22]').textContent = parsed.records[11].fields["Year from"]
   document.querySelector('[estate22-23]').textContent = parsed.records[11].fields["Year to"]
   document.querySelector('[basic2]').textContent = parsed.records[12].fields["Capital Gains Tax"]
   document.querySelector('[basic221-22]').textContent = parsed.records[12].fields["Year from"]
   document.querySelector('[basic222-23]').textContent = parsed.records[12].fields["Year to"]
   document.querySelector('[basic]').textContent = parsed.records[14].fields["Capital Gains Tax"]
   document.querySelector('[basic21-22]').textContent = parsed.records[14].fields["Year from"]
   document.querySelector('[basic22-23]').textContent = parsed.records[14].fields["Year to"] 
   document.querySelector('[note]').innerHTML = parsed.records[1].fields.Notes
   document.querySelectorAll('[pageheading]').forEach(el => el.textContent = parsed.records[1].fields["Capital Gains Tax"])
   document.querySelector('[middlenote]').innerHTML = parsed.records[7].fields.Notes
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
