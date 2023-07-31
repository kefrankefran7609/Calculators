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
   document.querySelectorAll('[annualtax]').forEach(el => el.textContent = parsed.records[5].fields["Property value"]) 
})
  .catch(error => console.log('error', error)) 
  
 fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tblbnpfB7JMoUVgPg", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
  /* Give the values to the elements on the page from our API call */
document.querySelectorAll('[capitalgaintax]').forEach(el => el.textContent = parsed.records[1].fields["Capital Gains Tax"])
})
  .catch(error => console.log('error', error))
  
 fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tblTomAWMw6SdkgWL", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
  /* Give the values to the elements on the page from our API call */
document.querySelectorAll('[carfuel]').forEach(el => el.textContent = parsed.records[0].fields["CO2 emissions (g/km)"])
})
  .catch(error => console.log('error', error)) 
  
fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tblt7D4MfSbOEKyFF", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
  /* Give the values to the elements on the page from our API call */
document.querySelectorAll('[corporationtax]').forEach(el => el.textContent = parsed.records[7].fields.Name)
})
  .catch(error => console.log('error', error))
  
fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tbl859m8WhwIV59tT", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
  /* Give the values to the elements on the page from our API call */
document.querySelectorAll('[incometaxrates]').forEach(el => el.textContent = parsed.records[7].fields["Main allowances"])
})
  .catch(error => console.log('error', error))
  
fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tblUJeRe8ao2unR2m", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
  /* Give the values to the elements on the page from our API call */
document.querySelectorAll('[nationalinsurance]').forEach(el => el.textContent = parsed.records[6].fields["Class 1 (Employees)"])
})
  .catch(error => console.log('error', error)) 
  
fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tble7rzATUidKph2b", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
  /* Give the values to the elements on the page from our API call */
document.querySelectorAll('[registeredpension]').forEach(el => el.textContent = parsed.records[1].fields.Name)
})
  .catch(error => console.log('error', error)) 
  
fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tblIt28vfTJiKpCe1", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
  /* Give the values to the elements on the page from our API call */
document.querySelectorAll('[sdltrb]').forEach(el => el.textContent = parsed.records[24].fields.Name)
})
  .catch(error => console.log('error', error))
  
