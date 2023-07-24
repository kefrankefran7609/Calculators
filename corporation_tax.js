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

fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tblt7D4MfSbOEKyFF", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
   const parsed = JSON.parse(data)
  /* Give the values to the elements on the page from our APi call */
   console.log(parsed)
   document.querySelectorAll('[pageheading]').forEach(el => el.textContent = parsed.records[7].fields.Name)
   document.querySelector('[yearfrom]').textContent = parsed.records[7].fields["Year from"]
   document.querySelector('[yearto]').textContent = parsed.records[7].fields["Year to"]
   document.querySelector('[ct1]').textContent = parsed.records[0].fields.Name
   document.querySelector('[ct1from]').textContent = parsed.records[0].fields["Year from"]
   document.querySelector('[ct1to]').textContent = parsed.records[0].fields["Year to"]
   document.querySelector('[ct2]').textContent = parsed.records[3].fields.Name
   document.querySelector('[ct2from]').textContent = parsed.records[3].fields["Year from"]
   document.querySelector('[ct2to]').textContent = parsed.records[3].fields["Year to"]
   document.querySelector('[ct3]').textContent = parsed.records[9].fields.Name
   document.querySelector('[ct3from]').textContent = parsed.records[9].fields["Year from"]
   document.querySelector('[ct3to]').textContent = parsed.records[9].fields["Year to"]
   document.querySelector('[ct4]').textContent = parsed.records[8].fields.Name
   document.querySelector('[ct4from]').textContent = parsed.records[8].fields["Year from"]
   document.querySelector('[ct4to]').textContent = parsed.records[8].fields["Year to"]
   document.querySelector('[ct5]').textContent = parsed.records[5].fields.Name
   document.querySelector('[ct5from]').textContent = parsed.records[5].fields["Year from"]
   document.querySelector('[ct5to]').textContent = parsed.records[5].fields["Year to"]
   document.querySelector('[ct6]').textContent = parsed.records[4].fields.Name
   document.querySelector('[ct6from]').textContent = parsed.records[4].fields["Year from"]
   document.querySelector('[ct6to]').textContent = parsed.records[4].fields["Year to"]
   document.querySelector('[ct7]').textContent = parsed.records[10].fields.Name
   document.querySelector('[ct7from]').textContent = parsed.records[10].fields["Year from"]
   document.querySelector('[ct7to]').textContent = parsed.records[10].fields["Year to"]
   document.querySelector('[ct8]').textContent = parsed.records[11].fields.Name
   document.querySelector('[ct8from]').textContent = parsed.records[11].fields["Year from"]
   document.querySelector('[ct8to]').textContent = parsed.records[11].fields["Year to"]
   document.querySelector('[ct9]').textContent = parsed.records[1].fields.Name
   document.querySelector('[ct9from]').textContent = parsed.records[1].fields["Year from"]
   document.querySelector('[ct9to]').textContent = parsed.records[1].fields["Year to"]  
   document.querySelector('[ct10]').textContent = parsed.records[2].fields.Name
   document.querySelector('[ct10from]').textContent = parsed.records[2].fields["Year from"]
   document.querySelector('[ct10to]').textContent = parsed.records[2].fields["Year to"] 
   document.querySelector('[ct11]').textContent = parsed.records[6].fields.Name
   document.querySelector('[ct11from]').textContent = parsed.records[6].fields["Year from"]
   document.querySelector('[ct11to]').textContent = parsed.records[6].fields["Year to"] 
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
