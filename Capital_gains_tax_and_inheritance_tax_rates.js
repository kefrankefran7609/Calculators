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

fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tblbnpfB7JMoUVgPg", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
  /* Give the values to the elements on the page from our APi call */
   document.querySelector('[annual1]').textContent = parsed.records[0].fields["Capital Gains Tax"]
   document.querySelector('[annual121-22]').textContent = parsed.records[0].fields["2021/22"]
   document.querySelector('[annual122-23]').textContent = parsed.records[0].fields["2022/23"]
   document.querySelector('[taper]').textContent = parsed.records[2].fields["Capital Gains Tax"]
   document.querySelector('[taper21-22]').textContent = parsed.records[2].fields["2021/22"]
   document.querySelector('[taper22-23]').textContent = parsed.records[2].fields["2022/23"]
   document.querySelector('[nilrate]').textContent = parsed.records[3].fields["Capital Gains Tax"]
   document.querySelector('[nilrate21-22]').textContent = parsed.records[3].fields["2021/22"]
   document.querySelector('[nilrate22-23]').textContent = parsed.records[3].fields["2022/23"]
   document.querySelector('[residence]').textContent = parsed.records[4].fields["Capital Gains Tax"]
   document.querySelector('[residence21-22]').textContent = parsed.records[4].fields["2021/22"]
   document.querySelector('[residence22-23]').textContent = parsed.records[4].fields["2022/23"]
   document.querySelector('[annual2]').textContent = parsed.records[5].fields["Capital Gains Tax"]
   document.querySelector('[annual221-22]').textContent = parsed.records[5].fields["2021/22"]
   document.querySelector('[annual222-23]').textContent = parsed.records[5].fields["2022/23"]   
   document.querySelector('[higher]').textContent = parsed.records[10].fields["Capital Gains Tax"]
   document.querySelector('[higher21-22]').textContent = parsed.records[10].fields["2021/22"]
   document.querySelector('[higher22-23]').textContent = parsed.records[10].fields["2022/23"]
   document.querySelector('[chargeable]').textContent = parsed.records[7].fields["Capital Gains Tax"]
   document.querySelector('[chargeable21-22]').textContent = parsed.records[7].fields["2021/22"]
   document.querySelector('[chargeable22-23]').textContent = parsed.records[7].fields["2022/23"]
   document.querySelector('[inheritance]').textContent = parsed.records[8].fields["Capital Gains Tax"]
   document.querySelector('[business]').textContent = parsed.records[9].fields["Capital Gains Tax"]
   document.querySelector('[business21-22]').textContent = parsed.records[9].fields["2021/22"]
   document.querySelector('[business22-23]').textContent = parsed.records[9].fields["2022/23"]
   document.querySelector('[higher2]').textContent = parsed.records[6].fields["Capital Gains Tax"]
   document.querySelector('[higher221-22]').textContent = parsed.records[6].fields["2021/22"]
   document.querySelector('[higher222-23]').textContent = parsed.records[6].fields["2022/23"]
   document.querySelector('[estate]').textContent = parsed.records[11].fields["Capital Gains Tax"]
   document.querySelector('[estate21-22]').textContent = parsed.records[11].fields["2021/22"]
   document.querySelector('[estate22-23]').textContent = parsed.records[11].fields["2022/23"]
   document.querySelector('[basic2]').textContent = parsed.records[12].fields["Capital Gains Tax"]
   document.querySelector('[basic221-22]').textContent = parsed.records[12].fields["2021/22"]
   document.querySelector('[basic222-23]').textContent = parsed.records[12].fields["2022/23"]
   document.querySelector('[basic]').textContent = parsed.records[13].fields["Capital Gains Tax"]
   document.querySelector('[basic21-22]').textContent = parsed.records[13].fields["2021/22"]
   document.querySelector('[basic22-23]').textContent = parsed.records[13].fields["2022/23"] 
   document.querySelector('[note]').innerHTML = parsed.records[1].fields.Notes
   
  })
  .catch(error => console.log('error', error))  
/*****  End of Webflow push function *****/
})
