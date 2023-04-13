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
  /* Give the values to the elements on the page from our APi call */
   document.querySelector('[first]').textContent = parsed.records[0].fields["Property value"]
   document.querySelector('[first21-22]').textContent = parsed.records[0].fields["2021/22"]
   document.querySelector('[first22-23]').textContent = parsed.records[0].fields["2022/23"]
   document.querySelector('[second]').textContent = parsed.records[1].fields["Property value"]
   document.querySelector('[second21-22]').textContent = parsed.records[1].fields["2021/22"]
   document.querySelector('[second22-23]').textContent = parsed.records[1].fields["2022/23"]
   document.querySelector('[third]').textContent = parsed.records[3].fields["Property value"]
   document.querySelector('[third21-22]').textContent = parsed.records[3].fields["2021/22"]
   document.querySelector('[third22-23]').textContent = parsed.records[3].fields["2022/23"]
   document.querySelector('[fourth]').textContent = parsed.records[5].fields["Property value"]
   document.querySelector('[fourth21-22]').textContent = parsed.records[5].fields["2021/22"]
   document.querySelector('[fourth22-23]').textContent = parsed.records[5].fields["2022/23"]
   document.querySelector('[fifth]').textContent = parsed.records[6].fields["Property value"]
   document.querySelector('[fifth21-22]').textContent = parsed.records[6].fields["2021/22"]
   document.querySelector('[fifth22-23]').textContent = parsed.records[6].fields["2022/23"]   
   document.querySelector('[sixth]').textContent = parsed.records[2].fields["Property value"]
   document.querySelector('[sixth21-22]').textContent = parsed.records[2].fields["2021/22"]
   document.querySelector('[sixth22-23]').textContent = parsed.records[2].fields["2022/23"]     
   document.querySelector('[note]').innerHTML = parsed.records[4].fields.Notes  
  })
  .catch(error => console.log('error', error))  
/*****  End of Webflow push function *****/
})
