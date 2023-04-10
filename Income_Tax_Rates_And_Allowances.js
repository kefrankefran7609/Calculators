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

fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tbl859m8WhwIV59tT", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
  /* Give the values to the elements on the page from our APi call */
   document.querySelector('[mapersonal]').textContent = parsed.records[0].fields["Main allowances"]
   document.querySelector('[mapersonal21-22]').textContent = parsed.records[0].fields["2021/22"]
   document.querySelector('[mapersonal22-23]').textContent = parsed.records[0].fields["2022/23"]
   document.querySelector('[mablind]').textContent = parsed.records[8].fields["Main allowances"]
   document.querySelector('[mablind21-22]').textContent = parsed.records[8].fields["2021/22"]
   document.querySelector('[mablind22-23]').textContent = parsed.records[8].fields["2022/23"]
   document.querySelector('[maallowwed]').textContent = parsed.records[1].fields["Main allowances"]
   document.querySelector('[mamarried]').textContent = parsed.records[2].fields["Main allowances"]
   document.querySelector('[mamarried21-22]').textContent = parsed.records[2].fields["2021/22"]
   document.querySelector('[mamarried22-23]').textContent = parsed.records[2].fields["2022/23"]
   document.querySelector('[maincome]').textContent = parsed.records[12].fields["Main allowances"]
   document.querySelector('[maincome21-22]').textContent = parsed.records[12].fields["2021/22"]
   document.querySelector('[maincome22-23]').textContent = parsed.records[12].fields["2022/23"]
   document.querySelector('[maallowwed]').textContent = parsed.records[11].fields["Main allowances"]
   document.querySelector('[madividend]').textContent = parsed.records[3].fields["Main allowances"]
   document.querySelector('[madividend21-22]').textContent = parsed.records[3].fields["2021/22"]
   document.querySelector('[madividend22-23]').textContent = parsed.records[3].fields["2022/23"]
   document.querySelector('[masavingshigher]').textContent = parsed.records[13].fields["Main allowances"]
   document.querySelector('[masavingshigher21-22]').textContent = parsed.records[13].fields["2021/22"]
   document.querySelector('[masavingshigher22-23]').textContent = parsed.records[13].fields["2022/23"]
   document.querySelector('[masavingsbasic]').textContent = parsed.records[9].fields["Main allowances"]
   document.querySelector('[masavingsbasic21-22]').textContent = parsed.records[9].fields["2021/22"]
   document.querySelector('[masavingsbasic22-23]').textContent = parsed.records[9].fields["2022/23"]
   document.querySelectorAll('[mabandsbasic]').forEach((el) => {
   el.textContent = parsed.records[5].fields["Rate bands"]
   })
   document.querySelector('[mabandsbasic21-22]').textContent = parsed.records[5].fields["2021/22"]
   document.querySelector('[mabandsbasic22-23]').textContent = parsed.records[5].fields["2022/23"]
   document.querySelector('[mabandsbasicg]').textContent = parsed.records[5].fields["General income"]
   document.querySelector('[mabandsbasics]').textContent = parsed.records[5].fields["Savings income"]
   document.querySelector('[mabandsbasicd]').textContent = parsed.records[5].fields["Dividend income"]
   document.querySelectorAll('[mabandshigher]').forEach((el) => {
   el.textContent = parsed.records[10].fields["Rate bands"]
   })
   document.querySelector('[mabandshigher21-22]').textContent = parsed.records[10].fields["2021/22"]
   document.querySelector('[mabandshigher22-23]').textContent = parsed.records[10].fields["2022/23"]
   document.querySelector('[mabandshigherg]').textContent = parsed.records[10].fields["General income"]
   document.querySelector('[mabandshighers]').textContent = parsed.records[10].fields["Savings income"]
   document.querySelector('[mabandshigherd]').textContent = parsed.records[10].fields["Dividend income"]
   document.querySelectorAll('[mabandsadditional]').forEach((el) => {
   el.textContent = parsed.records[7].fields["Rate bands"]
   })
   document.querySelector('[mabandsadditional21-22]').textContent = parsed.records[7].fields["2021/22"]
   document.querySelector('[mabandsadditional22-23]').textContent = parsed.records[7].fields["2022/23"]
   document.querySelector('[mabandsadditionalg]').textContent = parsed.records[7].fields["General income"]
   document.querySelector('[mabandsadditionals]').textContent = parsed.records[7].fields["Savings income"]
   document.querySelector('[mabandsadditionald]').textContent = parsed.records[7].fields["Dividend income"]
   document.querySelector('[manotes]').innerHTML = parsed.records[4].fields.Notes
   document.querySelector('[mabandsnotes]').innerHTML = parsed.records[6].fields.Notes 
  })
  .catch(error => console.log('error', error))  
/*****  End of Webflow push function *****/
})
