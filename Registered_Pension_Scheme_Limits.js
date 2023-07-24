
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

fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tble7rzATUidKph2b", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
   const parsed = JSON.parse(data)
  /* Give the values to the elements on the page from our APi call */
   document.querySelectorAll('[pageheading]').forEach(el => el.textContent = parsed.records[1].fields.Name
   document.querySelector('[yearfrom]').textContent = parsed.records[1].fields["Year from"]
   document.querySelector('[yearto]').textContent = parsed.records[1].fields["Year to"]
   document.querySelector('[la]').textContent = parsed.records[2].fields.Name
   document.querySelector('[la21-22]').textContent = parsed.records[2].fields["Year from"]
   document.querySelector('[la22-23]').textContent = parsed.records[2].fields["Year to"]
   document.querySelector('[aa]').textContent = parsed.records[0].fields.Name
   document.querySelector('[aa21-22]').textContent = parsed.records[0].fields["Year from"]
   document.querySelector('[aa22-23]').textContent = parsed.records[0].fields["Year to"]
   /*
	 document.querySelector('[excessdrawn]').textContent = parsed.records[1].fields.Name
   document.querySelector('[excessdrawn21-23]').textContent = parsed.records[1].fields["Year from"]
   */
   document.querySelector('[excessinputs]').textContent = parsed.records[4].fields.Name
   document.querySelector('[excessinputs21-23]').textContent = parsed.records[4].fields["Year from"]
   
   document.querySelector('[bottomnote]').innerHTML = parsed.records[3].fields.Notes
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

/*****  End of Webflow push function *****/
})
