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

fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tblIt28vfTJiKpCe1", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
  console.log(parsed)
  /* Give the values to the elements on the page from our APi call */
   document.querySelector('[title]').textContent = parsed.records[4].fields["Purchase consideration"]
   document.querySelector('[title1]').textContent = parsed.records[4].fields["Rate – on portion above threshold"]
   document.querySelector('[title2]').textContent = parsed.records[4].fields["Rate if second or subsequent property"]   
   document.querySelector('[first]').textContent = parsed.records[2].fields["Purchase consideration"]
   document.querySelector('[firstrate1]').textContent = parsed.records[2].fields["Rate – on portion above threshold"]
   document.querySelector('[firstrate2]').textContent = parsed.records[2].fields["Rate if second or subsequent property"]
   document.querySelector('[second]').textContent = parsed.records[5].fields["Purchase consideration"]
   document.querySelector('[secondrate1]').textContent = parsed.records[5].fields["Rate – on portion above threshold"]
   document.querySelector('[secondrate2]').textContent = parsed.records[5].fields["Rate if second or subsequent property"]
   document.querySelector('[third]').textContent = parsed.records[1].fields["Purchase consideration"]
   document.querySelector('[third1]').textContent = parsed.records[1].fields["Rate – on portion above threshold"]
   document.querySelector('[third2]').textContent = parsed.records[1].fields["Rate if second or subsequent property"]
   document.querySelector('[fourth]').textContent = parsed.records[0].fields["Purchase consideration"]
   document.querySelector('[fourth1]').textContent = parsed.records[0].fields["Rate – on portion above threshold"]
   document.querySelector('[fourth2]').textContent = parsed.records[0].fields["Rate if second or subsequent property"]
   document.querySelector('[fifth]').textContent = parsed.records[3].fields["Purchase consideration"]
   document.querySelector('[fifth1]').textContent = parsed.records[3].fields["Rate – on portion above threshold"]
   document.querySelector('[fifth2]').textContent = parsed.records[3].fields["Rate if second or subsequent property"]   
   document.querySelector('[note]').innerHTML = parsed.records[6].fields.Notes  
  })
  .catch(error => console.log('error', error))  
/*****  End of Webflow push function *****/
})
