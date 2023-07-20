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

fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tblKnSGmzoxSyFC3Y", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
  /* Give the values to the elements on the page from our API call */
   document.querySelectorAll('[pageheading]').forEach(el => el.textContent = parsed.records[5].fields["Property value"]
   document.querySelector('[title]').textContent = parsed.records[2].fields["Property value"]
   document.querySelector('[yearfrom]').textContent = parsed.records[2].fields["Year from"]
   document.querySelector('[yearto]').textContent = parsed.records[2].fields["Year to"]   
   document.querySelector('[first]').textContent = parsed.records[0].fields["Property value"]
   document.querySelector('[first21-22]').textContent = parsed.records[0].fields["Year from"]
   document.querySelector('[first22-23]').textContent = parsed.records[0].fields["Year to"]
   document.querySelector('[second]').textContent = parsed.records[1].fields["Property value"]
   document.querySelector('[second21-22]').textContent = parsed.records[1].fields["Year from"]
   document.querySelector('[second22-23]').textContent = parsed.records[1].fields["Year to"]
   document.querySelector('[third]').textContent = parsed.records[4].fields["Property value"]
   document.querySelector('[third21-22]').textContent = parsed.records[4].fields["Year from"]
   document.querySelector('[third22-23]').textContent = parsed.records[4].fields["Year to"]
   document.querySelector('[fourth]').textContent = parsed.records[6].fields["Property value"]
   document.querySelector('[fourth21-22]').textContent = parsed.records[6].fields["Year from"]
   document.querySelector('[fourth22-23]').textContent = parsed.records[6].fields["Year to"]
   document.querySelector('[fifth]').textContent = parsed.records[7].fields["Property value"]
   document.querySelector('[fifth21-22]').textContent = parsed.records[7].fields["Year from"]
   document.querySelector('[fifth22-23]').textContent = parsed.records[7].fields["Year to"]   
   document.querySelector('[sixth]').textContent = parsed.records[3].fields["Property value"]
   document.querySelector('[sixth21-22]').textContent = parsed.records[3].fields["Year from"]
   document.querySelector('[sixth22-23]').textContent = parsed.records[3].fields["Year to"]     
   document.querySelector('[note]').innerHTML = parsed.records[5].fields.Notes  
  })
  .catch(error => console.log('error', error))  
/*****  End of Webflow push function *****/
})
