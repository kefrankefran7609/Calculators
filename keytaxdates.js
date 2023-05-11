
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

fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tblNRouyD9neO2iqt", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)

  /* Give the values to the elements on the page from our APi call ** 
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
/*****  End of Webflow push function *****/
})
