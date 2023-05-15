
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

fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tblYjacAWXqVfWCek", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
  /* Give the values to the elements on the page from our APi call */
  console.log(parsed)
   document.querySelector('[name1]').textContent = parsed.records[2].fields.Name
   document.querySelector('[desc1]').textContent = parsed.records[2].fields.Description
   document.querySelector('[link1]').textContent = parsed.records[2].fields.Link
   document.querySelector('[name2]').textContent = parsed.records[2].fields.Name
   document.querySelector('[desc2]').textContent = parsed.records[2].fields.Description
   document.querySelector('[link2]').textContent = parsed.records[2].fields.Link
   document.querySelector('[name3]').textContent = parsed.records[2].fields.Name
   document.querySelector('[desc3]').textContent = parsed.records[2].fields.Description
   document.querySelector('[link3]').textContent = parsed.records[2].fields.Link
   document.querySelector('[name4]').textContent = parsed.records[2].fields.Name
   document.querySelector('[desc4]').textContent = parsed.records[2].fields.Description
   document.querySelector('[link4]').textContent = parsed.records[2].fields.Link
   document.querySelector('[name5]').textContent = parsed.records[2].fields.Name
   document.querySelector('[desc5]').textContent = parsed.records[2].fields.Description
   document.querySelector('[link5]').textContent = parsed.records[2].fields.Link
   document.querySelector('[name6]').textContent = parsed.records[2].fields.Name
   document.querySelector('[desc6]').textContent = parsed.records[2].fields.Description
   document.querySelector('[link6]').textContent = parsed.records[2].fields.Link
   document.querySelector('[name7]').textContent = parsed.records[2].fields.Name
   document.querySelector('[desc7]').textContent = parsed.records[2].fields.Description
   document.querySelector('[link7]').textContent = parsed.records[2].fields.Link
   document.querySelector('[name8]').textContent = parsed.records[2].fields.Name
   document.querySelector('[desc8]').textContent = parsed.records[2].fields.Description
   document.querySelector('[link8]').textContent = parsed.records[2].fields.Link
   document.querySelector('[name9]').textContent = parsed.records[2].fields.Name
   document.querySelector('[desc9]').textContent = parsed.records[2].fields.Description
   document.querySelector('[link9]').textContent = parsed.records[2].fields.Link
   document.querySelector('[name10]').textContent = parsed.records[2].fields.Name
   document.querySelector('[desc10]').textContent = parsed.records[2].fields.Description
   document.querySelector('[link10]').textContent = parsed.records[2].fields.Link
   document.querySelector('[name11]').textContent = parsed.records[2].fields.Name
   document.querySelector('[desc11]').textContent = parsed.records[2].fields.Description
   document.querySelector('[link11]').textContent = parsed.records[2].fields.Link
   document.querySelector('[name12]').textContent = parsed.records[2].fields.Name
   document.querySelector('[desc12]').textContent = parsed.records[2].fields.Description
   document.querySelector('[link12]').textContent = parsed.records[2].fields.Link
   document.querySelector('[name13]').textContent = parsed.records[2].fields.Name
   document.querySelector('[desc13]').textContent = parsed.records[2].fields.Description
   document.querySelector('[link13]').textContent = parsed.records[2].fields.Link
   document.querySelector('[name14]').textContent = parsed.records[2].fields.Name
   document.querySelector('[desc14]').textContent = parsed.records[2].fields.Description
   document.querySelector('[link14]').textContent = parsed.records[2].fields.Link
   document.querySelector('[name15]').textContent = parsed.records[2].fields.Name
   document.querySelector('[desc15]').textContent = parsed.records[2].fields.Description
   document.querySelector('[link15]').textContent = parsed.records[2].fields.Link
   document.querySelector('[name16]').textContent = parsed.records[2].fields.Name
   document.querySelector('[desc16]').textContent = parsed.records[2].fields.Description
   document.querySelector('[link16]').textContent = parsed.records[2].fields.Link
   document.querySelector('[name17]').textContent = parsed.records[2].fields.Name
   document.querySelector('[desc17]').textContent = parsed.records[2].fields.Description
   document.querySelector('[link17]').textContent = parsed.records[2].fields.Link
   document.querySelector('[name18]').textContent = parsed.records[2].fields.Name
   document.querySelector('[desc18]').textContent = parsed.records[2].fields.Description
   document.querySelector('[link18]').textContent = parsed.records[2].fields.Link
   
 })
  
  .catch(error => console.log('error', error))  
/*****  End of Webflow push function *****/
})
