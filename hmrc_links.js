
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

fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tblYjacAWXqVfWCek", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
  
  /* Give the values to the elements on the page from our APi call */
   document.querySelector('[name1]').textContent = parsed.records[5].fields.Name
   document.querySelector('[desc1]').textContent = parsed.records[5].fields.Description
   document.querySelector('[link1]').href = parsed.records[5].fields.Link
   document.querySelector('[name2]').textContent = parsed.records[14].fields.Name
   document.querySelector('[desc2]').textContent = parsed.records[14].fields.Description
   document.querySelector('[link2]').href = parsed.records[14].fields.Link
   document.querySelector('[name3]').textContent = parsed.records[9].fields.Name
   document.querySelector('[desc3]').textContent = parsed.records[9].fields.Description
   document.querySelector('[link3]').href = parsed.records[9].fields.Link
   document.querySelector('[name4]').textContent = parsed.records[3].fields.Name
   document.querySelector('[desc4]').textContent = parsed.records[3].fields.Description
   document.querySelector('[link4]').href = parsed.records[3].fields.Link
   document.querySelector('[name5]').textContent = parsed.records[7].fields.Name
   document.querySelector('[desc5]').textContent = parsed.records[7].fields.Description
   document.querySelector('[link5]').href = parsed.records[7].fields.Link
   document.querySelector('[name6]').textContent = parsed.records[4].fields.Name
   document.querySelector('[desc6]').textContent = parsed.records[4].fields.Description
   document.querySelector('[link6]').href = parsed.records[4].fields.Link
   document.querySelector('[name7]').textContent = parsed.records[8].fields.Name
   document.querySelector('[desc7]').textContent = parsed.records[8].fields.Description
   document.querySelector('[link7]').href = parsed.records[8].fields.Link
   document.querySelector('[name8]').textContent = parsed.records[10].fields.Name
   document.querySelector('[desc8]').textContent = parsed.records[10].fields.Description
   document.querySelector('[link8]').href = parsed.records[10].fields.Link
   document.querySelector('[name9]').textContent = parsed.records[0].fields.Name
   document.querySelector('[desc9]').textContent = parsed.records[0].fields.Description
   document.querySelector('[link9]').href = parsed.records[0].fields.Link
   document.querySelector('[name10]').textContent = parsed.records[16].fields.Name
   document.querySelector('[desc10]').textContent = parsed.records[16].fields.Description
   document.querySelector('[link10]').href = parsed.records[16].fields.Link
   document.querySelector('[name11]').textContent = parsed.records[2].fields.Name
   document.querySelector('[desc11]').textContent = parsed.records[2].fields.Description
   document.querySelector('[link11]').href = parsed.records[2].fields.Link
   document.querySelector('[name12]').textContent = parsed.records[12].fields.Name
   document.querySelector('[desc12]').textContent = parsed.records[12].fields.Description
   document.querySelector('[link12]').href = parsed.records[12].fields.Link
   document.querySelector('[name13]').textContent = parsed.records[15].fields.Name
   document.querySelector('[desc13]').textContent = parsed.records[15].fields.Description
   document.querySelector('[link13]').href = parsed.records[15].fields.Link
   document.querySelector('[name14]').textContent = parsed.records[11].fields.Name
   document.querySelector('[desc14]').textContent = parsed.records[11].fields.Description
   document.querySelector('[link14]').href = parsed.records[11].fields.Link
   document.querySelector('[name15]').textContent = parsed.records[13].fields.Name
   document.querySelector('[desc15]').textContent = parsed.records[13].fields.Description
   document.querySelector('[link15]').href = parsed.records[13].fields.Link
   document.querySelector('[name16]').textContent = parsed.records[6].fields.Name
   document.querySelector('[desc16]').textContent = parsed.records[6].fields.Description
   document.querySelector('[link16]').href = parsed.records[6].fields.Link
   document.querySelector('[name17]').textContent = parsed.records[17].fields.Name
   document.querySelector('[desc17]').textContent = parsed.records[17].fields.Description
   document.querySelector('[link17]').href = parsed.records[17].fields.Link
   document.querySelector('[name18]').textContent = parsed.records[1].fields.Name
   document.querySelector('[desc18]').textContent = parsed.records[1].fields.Description
   document.querySelector('[link18]').href = parsed.records[1].fields.Link
   
 })
  
  .catch(error => console.log('error', error))  
/*****  End of Webflow push function *****/
})
