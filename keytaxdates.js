
/* You can remove this Webflow function is your not using webflow to develop your project */
window.Webflow ||= [];
window.Webflow.push(() => {

/*   API call to airtable to get Key Tax Dates - Employers */
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer pat3xBDAwQuPoFK0d.3807c807f50f8c70f0d5f37373927208612efee25ec4fad2d4864a0b157bdc09");
myHeaders.append("Cookie", "brw=brwrmCv4hFJTjFb7C");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tblNRouyD9neO2iqt", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
	  console.log(parsed)

  /* Give the values to the elements on the page from our APi call ** */
   document.querySelector('[task]').textContent = parsed.records[26].fields.Task
   document.querySelector('[period]').textContent = parsed.records[26].fields.Period  
   document.querySelector('[deadline]').textContent = parsed.records[26].fields.Deadline
   document.querySelector('[note]').textContent = parsed.records[26].fields.Note
   document.querySelector('[task1]').textContent = parsed.records[36].fields.Task
   document.querySelector('[period1]').textContent = parsed.records[36].fields.Period  
   document.querySelector('[deadline1]').textContent = parsed.records[36].fields.Deadline
   document.querySelector('[note1]').textContent = parsed.records[36].fields.Note
   document.querySelector('[task2]').textContent = parsed.records[1].fields.Task
   document.querySelector('[period2]').textContent = parsed.records[1].fields.Period  
   document.querySelector('[deadline2]').textContent = parsed.records[1].fields.Deadline
   document.querySelector('[note2]').textContent = parsed.records[1].fields.Note
   document.querySelector('[task3]').textContent = parsed.records[34].fields.Task
   document.querySelector('[period3]').textContent = parsed.records[34].fields.Period  
   document.querySelector('[deadline3]').textContent = parsed.records[34].fields.Deadline
   document.querySelector('[note3]').textContent = parsed.records[34].fields.Note
   document.querySelector('[task4]').textContent = parsed.records[21].fields.Task
   document.querySelector('[period4]').textContent = parsed.records[21].fields.Period  
   document.querySelector('[deadline4]').textContent = parsed.records[21].fields.Deadline
   document.querySelector('[note4]').textContent = parsed.records[21].fields.Note  
   document.querySelector('[task5]').textContent = parsed.records[23].fields.Task
   document.querySelector('[period5]').textContent = parsed.records[23].fields.Period  
   document.querySelector('[deadline5]').textContent = parsed.records[23].fields.Deadline
   document.querySelector('[note5]').textContent = parsed.records[23].fields.Note
   document.querySelector('[task6]').textContent = parsed.records[25].fields.Task
   document.querySelector('[period6]').textContent = parsed.records[25].fields.Period  
   document.querySelector('[deadline6]').textContent = parsed.records[25].fields.Deadline
   document.querySelector('[note6]').textContent = parsed.records[25].fields.Note  
   document.querySelector('[task7]').textContent = parsed.records[11].fields.Task
   document.querySelector('[period7]').textContent = parsed.records[11].fields.Period  
   document.querySelector('[deadline7]').textContent = parsed.records[11].fields.Deadline
   document.querySelector('[note7]').textContent = parsed.records[11].fields.Note
   document.querySelector('[task8]').textContent = parsed.records[37].fields.Task
   document.querySelector('[period8]').textContent = parsed.records[37].fields.Period  
   document.querySelector('[deadline8]').textContent = parsed.records[37].fields.Deadline
   document.querySelector('[note8]').textContent = parsed.records[37].fields.Note
   document.querySelector('[task9]').textContent = parsed.records[31].fields.Task
   document.querySelector('[period9]').textContent = parsed.records[31].fields.Period  
   document.querySelector('[deadline9]').textContent = parsed.records[31].fields.Deadline
   document.querySelector('[note9]').textContent = parsed.records[31].fields.Note
   document.querySelector('[task10]').textContent = parsed.records[14].fields.Task
   document.querySelector('[period10]').textContent = parsed.records[14].fields.Period  
   document.querySelector('[deadline10]').textContent = parsed.records[14].fields.Deadline
   document.querySelector('[note10]').textContent = parsed.records[14].fields.Note  
   document.querySelector('[task11]').textContent = parsed.records[35].fields.Task
   document.querySelector('[period11]').textContent = parsed.records[35].fields.Period  
   document.querySelector('[deadline11]').textContent = parsed.records[35].fields.Deadline
   document.querySelector('[note11]').textContent = parsed.records[35].fields.Note
   document.querySelector('[task12]').textContent = parsed.records[28].fields.Task
   document.querySelector('[period12]').textContent = parsed.records[28].fields.Period  
   document.querySelector('[deadline12]').textContent = parsed.records[28].fields.Deadline
   document.querySelector('[note12]').textContent = parsed.records[28].fields.Note
   document.querySelector('[task13]').textContent = parsed.records[5].fields.Task
   document.querySelector('[period13]').textContent = parsed.records[5].fields.Period  
   document.querySelector('[deadline13]').textContent = parsed.records[5].fields.Deadline
   document.querySelector('[note13]').textContent = parsed.records[5].fields.Note
   document.querySelector('[task14]').textContent = parsed.records[8].fields.Task
   document.querySelector('[period14]').textContent = parsed.records[8].fields.Period  
   document.querySelector('[deadline14]').textContent = parsed.records[8].fields.Deadline
   document.querySelector('[note14]').textContent = parsed.records[8].fields.Note  
   document.querySelector('[task15]').textContent = parsed.records[10].fields.Task
   document.querySelector('[period15]').textContent = parsed.records[10].fields.Period  
   document.querySelector('[deadline15]').textContent = parsed.records[10].fields.Deadline
   document.querySelector('[note15]').textContent = parsed.records[10].fields.Note
   document.querySelector('[task16]').textContent = parsed.records[9].fields.Task
   document.querySelector('[period16]').textContent = parsed.records[9].fields.Period  
   document.querySelector('[deadline16]').textContent = parsed.records[9].fields.Deadline
   document.querySelector('[note16]').textContent = parsed.records[9].fields.Note
   document.querySelector('[task17]').textContent = parsed.records[19].fields.Task
   document.querySelector('[period17]').textContent = parsed.records[19].fields.Period  
   document.querySelector('[deadline17]').textContent = parsed.records[19].fields.Deadline
   document.querySelector('[note17]').textContent = parsed.records[19].fields.Note
   document.querySelector('[task18]').textContent = parsed.records[6].fields.Task
   document.querySelector('[period18]').textContent = parsed.records[6].fields.Period  
   document.querySelector('[deadline18]').textContent = parsed.records[6].fields.Deadline
   document.querySelector('[note18]').textContent = parsed.records[6].fields.Note  
   document.querySelector('[task19]').textContent = parsed.records[17].fields.Task
   document.querySelector('[period19]').textContent = parsed.records[17].fields.Period  
   document.querySelector('[deadline19]').textContent = parsed.records[17].fields.Deadline
   document.querySelector('[note19]').textContent = parsed.records[17].fields.Note
   document.querySelector('[task20]').textContent = parsed.records[29].fields.Task
   document.querySelector('[period20]').textContent = parsed.records[29].fields.Period  
   document.querySelector('[deadline20]').textContent = parsed.records[29].fields.Deadline
   document.querySelector('[note20]').textContent = parsed.records[29].fields.Note
   document.querySelector('[task21]').textContent = parsed.records[24].fields.Task
   document.querySelector('[period21]').textContent = parsed.records[24].fields.Period  
   document.querySelector('[deadline21]').textContent = parsed.records[24].fields.Deadline
   document.querySelector('[note21]').textContent = parsed.records[24].fields.Note
   document.querySelector('[task22]').textContent = parsed.records[13].fields.Task
   document.querySelector('[period22]').textContent = parsed.records[13].fields.Period  
   document.querySelector('[deadline22]').textContent = parsed.records[13].fields.Deadline
   document.querySelector('[note22]').textContent = parsed.records[13].fields.Note  
   document.querySelector('[task23]').textContent = parsed.records[27].fields.Task
   document.querySelector('[period23]').textContent = parsed.records[27].fields.Period  
   document.querySelector('[deadline23]').textContent = parsed.records[27].fields.Deadline
   document.querySelector('[note23]').textContent = parsed.records[27].fields.Note
   document.querySelector('[task24]').textContent = parsed.records[7].fields.Task
   document.querySelector('[period24]').textContent = parsed.records[7].fields.Period  
   document.querySelector('[deadline24]').textContent = parsed.records[7].fields.Deadline
   document.querySelector('[note24]').textContent = parsed.records[7].fields.Note
   document.querySelector('[task25]').textContent = parsed.records[16].fields.Task
   document.querySelector('[period25]').textContent = parsed.records[16].fields.Period  
   document.querySelector('[deadline25]').textContent = parsed.records[16].fields.Deadline
   document.querySelector('[note25]').textContent = parsed.records[16].fields.Note
   document.querySelector('[task26]').textContent = parsed.records[30].fields.Task
   document.querySelector('[period26]').textContent = parsed.records[30].fields.Period  
   document.querySelector('[deadline26]').textContent = parsed.records[30].fields.Deadline
   document.querySelector('[note26]').textContent = parsed.records[30].fields.Note
   document.querySelector('[task27]').textContent = parsed.records[15].fields.Task
   document.querySelector('[period27]').textContent = parsed.records[15].fields.Period  
   document.querySelector('[deadline27]').textContent = parsed.records[15].fields.Deadline
   document.querySelector('[note27]').textContent = parsed.records[15].fields.Note 
   document.querySelector('[task28]').textContent = parsed.records[18].fields.Task
   document.querySelector('[period28]').textContent = parsed.records[18].fields.Period  
   document.querySelector('[deadline28]').textContent = parsed.records[18].fields.Deadline
   document.querySelector('[note28]').textContent = parsed.records[18].fields.Note  
   document.querySelector('[task29]').textContent = parsed.records[3].fields.Task
   document.querySelector('[period29]').textContent = parsed.records[3].fields.Period  
   document.querySelector('[deadline29]').textContent = parsed.records[3].fields.Deadline
   document.querySelector('[note29]').textContent = parsed.records[3].fields.Note
   document.querySelector('[task30]').textContent = parsed.records[20].fields.Task
   document.querySelector('[period30]').textContent = parsed.records[20].fields.Period  
   document.querySelector('[deadline30]').textContent = parsed.records[20].fields.Deadline
   document.querySelector('[note30]').textContent = parsed.records[20].fields.Note
   document.querySelector('[task31]').textContent = parsed.records[33].fields.Task
   document.querySelector('[period31]').textContent = parsed.records[33].fields.Period  
   document.querySelector('[deadline31]').textContent = parsed.records[33].fields.Deadline
   document.querySelector('[note31]').textContent = parsed.records[33].fields.Note
   document.querySelector('[task32]').textContent = parsed.records[2].fields.Task
   document.querySelector('[period32]').textContent = parsed.records[2].fields.Period  
   document.querySelector('[deadline32]').textContent = parsed.records[2].fields.Deadline
   document.querySelector('[note32]').textContent = parsed.records[2].fields.Note
   document.querySelector('[task33]').textContent = parsed.records[4].fields.Task
   document.querySelector('[period33]').textContent = parsed.records[4].fields.Period  
   document.querySelector('[deadline33]').textContent = parsed.records[4].fields.Deadline
   document.querySelector('[note33]').textContent = parsed.records[4].fields.Note
   document.querySelector('[task34]').textContent = parsed.records[0].fields.Task
   document.querySelector('[period34]').textContent = parsed.records[0].fields.Period  
   document.querySelector('[deadline34]').textContent = parsed.records[0].fields.Deadline
   document.querySelector('[note34]').textContent = parsed.records[0].fields.Note
   document.querySelector('[task35]').textContent = parsed.records[22].fields.Task
   document.querySelector('[period35]').textContent = parsed.records[22].fields.Period  
   document.querySelector('[deadline35]').textContent = parsed.records[22].fields.Deadline
   document.querySelector('[note35]').textContent = parsed.records[22].fields.Note
   document.querySelector('[task36]').textContent = parsed.records[32].fields.Task
   document.querySelector('[period36]').textContent = parsed.records[32].fields.Period  
   document.querySelector('[deadline36]').textContent = parsed.records[32].fields.Deadline
   document.querySelector('[note36]').textContent = parsed.records[32].fields.Note
 })
  
  .catch(error => console.log('error', error))  

/*   API call to airtable to get Key Tax Dates - Individuals */
fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tblHwOsBKACCHgHVY", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
   /* Give the values to the elements on the page from our APi call  */
   document.querySelector('[task0]').textContent = parsed.records[3].fields.Task
   document.querySelector('[taxyear]').textContent = parsed.records[3].fields["Tax Year"] 
   document.querySelector('[deadline0]').textContent = parsed.records[3].fields.Deadline
   document.querySelector('[note0]').textContent = parsed.records[3].fields.Note
   document.querySelector('[task01]').textContent = parsed.records[2].fields.Task
   document.querySelector('[taxyear1]').textContent = parsed.records[2].fields["Tax Year"] 
   document.querySelector('[deadline01]').textContent = parsed.records[2].fields.Deadline
   document.querySelector('[note01]').textContent = parsed.records[2].fields.Note
   document.querySelector('[task02]').textContent = parsed.records[9].fields.Task
   document.querySelector('[taxyear2]').textContent = parsed.records[9].fields["Tax Year"]  
   document.querySelector('[deadline02]').textContent = parsed.records[9].fields.Deadline
   document.querySelector('[note02]').textContent = parsed.records[9].fields.Note
   document.querySelector('[task03]').textContent = parsed.records[1].fields.Task
   document.querySelector('[taxyear3]').textContent = parsed.records[1].fields["Tax Year"]  
   document.querySelector('[deadline03]').textContent = parsed.records[1].fields.Deadline
   document.querySelector('[note03]').textContent = parsed.records[1].fields.Note
   document.querySelector('[task04]').textContent = parsed.records[4].fields.Task
   document.querySelector('[taxyear4]').textContent = parsed.records[4].fields["Tax Year"]  
   document.querySelector('[deadline04]').textContent = parsed.records[4].fields.Deadline
   document.querySelector('[note04]').textContent = parsed.records[4].fields.Note  
   document.querySelector('[task05]').textContent = parsed.records[10].fields.Task
   document.querySelector('[taxyear5]').textContent = parsed.records[10].fields["Tax Year"] 
   document.querySelector('[deadline05]').textContent = parsed.records[10].fields.Deadline
   document.querySelector('[note05]').textContent = parsed.records[10].fields.Note
   document.querySelector('[task06]').textContent = parsed.records[0].fields.Task
   document.querySelector('[taxyear6]').textContent = parsed.records[0].fields["Tax Year"]
   document.querySelector('[deadline06]').textContent = parsed.records[0].fields.Deadline
   document.querySelector('[note06]').textContent = parsed.records[0].fields.Note  
   document.querySelector('[task07]').textContent = parsed.records[8].fields.Task
   document.querySelector('[taxyear7]').textContent = parsed.records[8].fields["Tax Year"] 
   document.querySelector('[deadline07]').textContent = parsed.records[8].fields.Deadline
   document.querySelector('[note07]').textContent = parsed.records[8].fields.Note
   document.querySelector('[task08]').textContent = parsed.records[5].fields.Task
   document.querySelector('[taxyear8]').textContent = parsed.records[5].fields["Tax Year"]  
   document.querySelector('[deadline08]').textContent = parsed.records[5].fields.Deadline
   document.querySelector('[note08]').textContent = parsed.records[5].fields.Note
   document.querySelector('[task09]').textContent = parsed.records[7].fields.Task
   document.querySelector('[taxyear9]').textContent = parsed.records[7].fields["Tax Year"]  
   document.querySelector('[deadline09]').textContent = parsed.records[7].fields.Deadline
   document.querySelector('[note09]').textContent = parsed.records[7].fields.Note
   document.querySelector('[task010]').textContent = parsed.records[6].fields.Task
   document.querySelector('[taxyear10]').textContent = parsed.records[6].fields["Tax Year"]  
   document.querySelector('[deadline010]').textContent = parsed.records[6].fields.Deadline
   document.querySelector('[note010]').textContent = parsed.records[6].fields.Note  
 })
  
  .catch(error => console.log('error', error)) 
  
  /*   API call to airtable to get Key Tax Dates - Corporation tax CT600 */
fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tblF4c9mWtwq2Bfwq", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
  
   /* Give the values to the elements on the page from our APi call  */
   document.querySelector('[acc]').textContent = parsed.records[2].fields["Accounting period end"]
   document.querySelector('[corp]').textContent = parsed.records[2].fields["Corporation tax payment date"] 
   document.querySelector('[ct601]').textContent = parsed.records[2].fields["CT600 filling date"]
   document.querySelector('[acc1]').textContent = parsed.records[14].fields["Accounting period end"]
   document.querySelector('[corp1]').textContent = parsed.records[14].fields["Corporation tax payment date"] 
   document.querySelector('[ct6011]').textContent = parsed.records[14].fields["CT600 filling date"]
   document.querySelector('[acc2]').textContent = parsed.records[6].fields["Accounting period end"]
   document.querySelector('[corp2]').textContent = parsed.records[6].fields["Corporation tax payment date"] 
   document.querySelector('[ct6012]').textContent = parsed.records[6].fields["CT600 filling date"]
   document.querySelector('[acc3]').textContent = parsed.records[4].fields["Accounting period end"]
   document.querySelector('[corp3]').textContent = parsed.records[4].fields["Corporation tax payment date"] 
   document.querySelector('[ct6013]').textContent = parsed.records[4].fields["CT600 filling date"]
   document.querySelector('[acc4]').textContent = parsed.records[9].fields["Accounting period end"]
   document.querySelector('[corp4]').textContent = parsed.records[9].fields["Corporation tax payment date"] 
   document.querySelector('[ct6014]').textContent = parsed.records[9].fields["CT600 filling date"]
   document.querySelector('[acc5]').textContent = parsed.records[3].fields["Accounting period end"]
   document.querySelector('[corp5]').textContent = parsed.records[3].fields["Corporation tax payment date"] 
   document.querySelector('[ct6015]').textContent = parsed.records[3].fields["CT600 filling date"]
   document.querySelector('[acc6]').textContent = parsed.records[5].fields["Accounting period end"]
   document.querySelector('[corp6]').textContent = parsed.records[5].fields["Corporation tax payment date"] 
   document.querySelector('[ct6016]').textContent = parsed.records[5].fields["CT600 filling date"]
   document.querySelector('[acc7]').textContent = parsed.records[1].fields["Accounting period end"]
   document.querySelector('[corp7]').textContent = parsed.records[1].fields["Corporation tax payment date"] 
   document.querySelector('[ct6017]').textContent = parsed.records[1].fields["CT600 filling date"]
   document.querySelector('[acc8]').textContent = parsed.records[12].fields["Accounting period end"]
   document.querySelector('[corp8]').textContent = parsed.records[12].fields["Corporation tax payment date"] 
   document.querySelector('[ct6018]').textContent = parsed.records[12].fields["CT600 filling date"]
   document.querySelector('[acc9]').textContent = parsed.records[10].fields["Accounting period end"]
   document.querySelector('[corp9]').textContent = parsed.records[10].fields["Corporation tax payment date"] 
   document.querySelector('[ct6019]').textContent = parsed.records[10].fields["CT600 filling date"]
   document.querySelector('[acc10]').textContent = parsed.records[7].fields["Accounting period end"]
   document.querySelector('[corp10]').textContent = parsed.records[7].fields["Corporation tax payment date"] 
   document.querySelector('[ct60110]').textContent = parsed.records[7].fields["CT600 filling date"]
   document.querySelector('[acc11]').textContent = parsed.records[11].fields["Accounting period end"]
   document.querySelector('[corp11]').textContent = parsed.records[11].fields["Corporation tax payment date"] 
   document.querySelector('[ct60111]').textContent = parsed.records[11].fields["CT600 filling date"]
   document.querySelector('[acc12]').textContent = parsed.records[0].fields["Accounting period end"]
   document.querySelector('[corp12]').textContent = parsed.records[0].fields["Corporation tax payment date"] 
   document.querySelector('[ct60112]').textContent = parsed.records[0].fields["CT600 filling date"]
   document.querySelector('[acc13]').innerHTML = parsed.records[13].fields["Accounting period end"] /*
   document.querySelector('[corp13]').textContent = parsed.records[13].fields["Corporation tax payment date"] 
   document.querySelector('[ct60113]').textContent = parsed.records[13].fields["CT600 filling date"] */
   document.querySelector('[acc14]').textContent = parsed.records[8].fields["Accounting period end"]
   document.querySelector('[corp14]').textContent = parsed.records[8].fields["Corporation tax payment date"] 
   document.querySelector('[ct60114]').textContent = parsed.records[8].fields["CT600 filling date"]
   document.querySelector('[acc15]').textContent = parsed.records[15].fields["Accounting period end"]
   document.querySelector('[corp15]').textContent = parsed.records[15].fields["Corporation tax payment date"] 
   document.querySelector('[ct60115]').textContent = parsed.records[15].fields["CT600 filling date"] 
 })  
  .catch(error => console.log('error', error)) 
  
  /*   API call to airtable to get Key Tax Dates - Corporation tax CT61 */
fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tblUwXubapCi1H7Fe", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)

   /* Give the values to the elements on the page from our APi call  */
   document.querySelector('[rep]').textContent = parsed.records[3].fields["Reporting period"]
   document.querySelector('[ct61]').textContent = parsed.records[3].fields["CT61 and payment deadline"]
   document.querySelector('[rep1]').textContent = parsed.records[1].fields["Reporting period"]
   document.querySelector('[ct611]').textContent = parsed.records[1].fields["CT61 and payment deadline"] 
   document.querySelector('[rep2]').textContent = parsed.records[8].fields["Reporting period"]
   document.querySelector('[ct612]').textContent = parsed.records[8].fields["CT61 and payment deadline"] 
   document.querySelector('[rep3]').textContent = parsed.records[6].fields["Reporting period"]
   document.querySelector('[ct613]').textContent = parsed.records[6].fields["CT61 and payment deadline"] 
   document.querySelector('[rep4]').textContent = parsed.records[0].fields["Reporting period"]
   document.querySelector('[ct614]').textContent = parsed.records[0].fields["CT61 and payment deadline"] 
   document.querySelector('[rep5]').textContent = parsed.records[7].fields["Reporting period"]
   document.querySelector('[ct615]').textContent = parsed.records[7].fields["CT61 and payment deadline"] 
   document.querySelector('[rep6]').textContent = parsed.records[5].fields["Reporting period"]
   document.querySelector('[ct616]').textContent = parsed.records[5].fields["CT61 and payment deadline"] 
   document.querySelector('[rep7]').textContent = parsed.records[4].fields["Reporting period"]
   document.querySelector('[ct617]').textContent = parsed.records[4].fields["CT61 and payment deadline"] 
   document.querySelector('[rep8]').textContent = parsed.records[2].fields["Reporting period"]
   document.querySelector('[ct618]').textContent = parsed.records[2].fields["CT61 and payment deadline"]   
 })  
  .catch(error => console.log('error', error)) 
  
  
  /*   API call to airtable to get Key Tax Dates - VAT registered businesses */
fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tblbumPQskHIpQx3k", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
  
   /* Give the values to the elements on the page from our APi call  */
   document.querySelector('[vat]').textContent = parsed.records[15].fields["Quarterly/monthlyVAT return period end"]
   document.querySelector('[ret]').textContent = parsed.records[15].fields["Return and payment deadline"]
  document.querySelector('[vat1]').textContent = parsed.records[8].fields["Quarterly/monthlyVAT return period end"]
   document.querySelector('[ret1]').textContent = parsed.records[8].fields["Return and payment deadline"]
  document.querySelector('[vat2]').textContent = parsed.records[13].fields["Quarterly/monthlyVAT return period end"]
   document.querySelector('[ret2]').textContent = parsed.records[13].fields["Return and payment deadline"]
  document.querySelector('[vat3]').textContent = parsed.records[10].fields["Quarterly/monthlyVAT return period end"]
   document.querySelector('[ret3]').textContent = parsed.records[10].fields["Return and payment deadline"]
  document.querySelector('[vat4]').textContent = parsed.records[14].fields["Quarterly/monthlyVAT return period end"]
   document.querySelector('[ret4]').textContent = parsed.records[14].fields["Return and payment deadline"]
  document.querySelector('[vat5]').textContent = parsed.records[1].fields["Quarterly/monthlyVAT return period end"]
   document.querySelector('[ret5]').textContent = parsed.records[1].fields["Return and payment deadline"]
  document.querySelector('[vat6]').textContent = parsed.records[12].fields["Quarterly/monthlyVAT return period end"]
   document.querySelector('[ret6]').textContent = parsed.records[12].fields["Return and payment deadline"]
  document.querySelector('[vat7]').textContent = parsed.records[4].fields["Quarterly/monthlyVAT return period end"]
   document.querySelector('[ret7]').textContent = parsed.records[4].fields["Return and payment deadline"]
  document.querySelector('[vat8]').textContent = parsed.records[5].fields["Quarterly/monthlyVAT return period end"]
   document.querySelector('[ret8]').textContent = parsed.records[5].fields["Return and payment deadline"]
  document.querySelector('[vat9]').textContent = parsed.records[3].fields["Quarterly/monthlyVAT return period end"]
   document.querySelector('[ret9]').textContent = parsed.records[3].fields["Return and payment deadline"]
  document.querySelector('[vat10]').textContent = parsed.records[6].fields["Quarterly/monthlyVAT return period end"]
   document.querySelector('[ret10]').textContent = parsed.records[6].fields["Return and payment deadline"]
  document.querySelector('[vat11]').textContent = parsed.records[0].fields["Quarterly/monthlyVAT return period end"]
   document.querySelector('[ret11]').textContent = parsed.records[0].fields["Return and payment deadline"]
  document.querySelector('[vat12]').textContent = parsed.records[11].fields["Quarterly/monthlyVAT return period end"]
   document.querySelector('[ret12]').textContent = parsed.records[11].fields["Return and payment deadline"]
  document.querySelector('[vatnote]').innerHTML = parsed.records[9].fields["Quarterly/monthlyVAT return period end"]
  document.querySelector('[vat14]').textContent = parsed.records[2].fields["Quarterly/monthlyVAT return period end"]
   document.querySelector('[ret14]').textContent = parsed.records[2].fields["Return and payment deadline"]
  document.querySelector('[vat15]').textContent = parsed.records[7].fields["Quarterly/monthlyVAT return period end"]
   document.querySelector('[ret15]').textContent = parsed.records[7].fields["Return and payment deadline"]
 })  
  .catch(error => console.log('error', error)) 
  /*****  End of Webflow push function *****/
})

/***** Hiding empty rows *****/
setTimeout(() => {
document.querySelectorAll('.deadlines_item-row').forEach((el) => {
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
}, 2500)
