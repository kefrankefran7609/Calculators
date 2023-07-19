/* You can remove this Webflow function is your not using webflow to develop your project */
window.Webflow ||= [];
window.Webflow.push(() => {

console.log("parsed")
  
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
  /* Give the values to the elements on the page from our API call */
   document.querySelector('[pageheading]').textContent = parsed.records[24].fields.Name 
   document.querySelector('[location1]').textContent = parsed.records[35].fields.Name  
   document.querySelector('[topnote]').innerHTML = parsed.records[20].fields.Notes 
   document.querySelectorAll('[title]').forEach(el => el.textContent = parsed.records[23].fields.Name)
   document.querySelectorAll('[title1]').forEach(el => el.textContent = parsed.records[23].fields["1st row"])
   document.querySelector('[title2]').textContent = parsed.records[23].fields["2nd row"]   
   document.querySelector('[first]').textContent = parsed.records[9].fields.Name
   document.querySelector('[firstrate1]').textContent = parsed.records[9].fields["1st row"]
   document.querySelector('[firstrate2]').textContent = parsed.records[9].fields["2nd row"] 
   document.querySelector('[second]').textContent = parsed.records[8].fields.Name
   document.querySelector('[secondrate1]').textContent = parsed.records[8].fields["1st row"]
   document.querySelector('[secondrate2]').textContent = parsed.records[8].fields["2nd row"]
   document.querySelector('[third]').textContent = parsed.records[2].fields.Name
   document.querySelector('[third1]').textContent = parsed.records[2].fields["1st row"]
   document.querySelector('[third2]').textContent = parsed.records[2].fields["2nd row"]
   document.querySelector('[fifth]').textContent = parsed.records[18].fields.Name
   document.querySelector('[fifth1]').textContent = parsed.records[18].fields["1st row"]
   document.querySelector('[fifth2]').textContent = parsed.records[18].fields["2nd row"]  
   document.querySelector('[englandbottomnote]').innerHTML = parsed.records[31].fields.Notes 
   document.querySelector('[location2]').textContent = parsed.records[28].fields.Name  
   document.querySelector('[walestopnote]').innerHTML = parsed.records[17].fields.Notes
   document.querySelector('[walesfirst]').textContent = parsed.records[11].fields.Name
   document.querySelector('[walesfirstrate]').textContent = parsed.records[11].fields["1st row"]
   document.querySelector('[walessecond]').textContent = parsed.records[4].fields.Name
   document.querySelector('[walessecondrate]').textContent = parsed.records[4].fields["1st row"]
   document.querySelector('[walesthird]').textContent = parsed.records[32].fields.Name
   document.querySelector('[walesthirdrate]').textContent = parsed.records[32].fields["1st row"]
   document.querySelector('[walesfourth]').textContent = parsed.records[30].fields.Name
   document.querySelector('[walesfourthrate]').textContent = parsed.records[30].fields["1st row"]
   document.querySelector('[walesfifth]').textContent = parsed.records[16].fields.Name
   document.querySelector('[walesfifthrate]').textContent = parsed.records[16].fields["1st row"] 
   document.querySelector('[walesaddtopnote]').innerHTML = parsed.records[7].fields.Notes
   document.querySelector('[walesaddfirst]').textContent = parsed.records[34].fields.Name
   document.querySelector('[walesaddfirstrate]').textContent = parsed.records[34].fields["1st row"]
   document.querySelector('[walesaddsecond]').textContent = parsed.records[25].fields.Name
   document.querySelector('[walesaddsecondrate]').textContent = parsed.records[25].fields["1st row"]
   document.querySelector('[walesaddthird]').textContent = parsed.records[15].fields.Name
   document.querySelector('[walesaddthirdrate]').textContent = parsed.records[15].fields["1st row"]
   document.querySelector('[walesaddfourth]').textContent = parsed.records[27].fields.Name
   document.querySelector('[walesaddfourthrate]').textContent = parsed.records[27].fields["1st row"]
   document.querySelector('[walesaddfifth]').textContent = parsed.records[21].fields.Name
   document.querySelector('[walesaddfifthrate]').textContent = parsed.records[21].fields["1st row"]
   document.querySelector('[walesaddsixth]').textContent = parsed.records[10].fields.Name
   document.querySelector('[walesaddsixthrate]').textContent = parsed.records[10].fields["1st row"]
  })
  .catch(error => console.log('error', error))  
/*****  End of Webflow push function *****/
})
