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

fetch("https://api.airtable.com/v0/apphKFqKdClqcgF26/tblUJeRe8ao2unR2m", requestOptions)
  .then(response => response.text())
  .then(data =>  { 
  const parsed = JSON.parse(data)
  console.log(parsed)
  /* Give the values to the elements on the page from our APi call */
   document.querySelector('[class1title]').textContent = parsed.records[0].fields["Class 1 (Employees)"]
   document.querySelector('[class1employee]').textContent = parsed.records[0].fields.Employee
   document.querySelector('[class1employer]').textContent = parsed.records[0].fields.Employer
   document.querySelector('[class2title]').textContent = parsed.records[0].fields["Class 2 (Self employed)"]
   document.querySelector('[class2from]').textContent = parsed.records[0].fields["Year from"]
   document.querySelector('[class2to]').textContent = parsed.records[0].fields["Year to"]  
   document.querySelector('[flat]').textContent = parsed.records[13].fields["Class 2 (Self employed)"]
   document.querySelector('[flat21-22]').textContent = parsed.records[13].fields["Year from"]
   document.querySelector('[flat22-23]').textContent = parsed.records[13].fields["Year to"]
   document.querySelector('[small]').textContent = parsed.records[11].fields["Class 2 (Self employed)"]
   document.querySelector('[small21-22]').textContent = parsed.records[11].fields["Year from"]
   document.querySelector('[small22-23]').textContent = parsed.records[11].fields["Year to"]
   document.querySelector('[class3]').textContent = parsed.records[2].fields["Class 2 (Self employed)"]
   document.querySelector('[flat2]').textContent = parsed.records[12].fields["Class 2 (Self employed)"]
   document.querySelector('[flat221-22]').textContent = parsed.records[12].fields["Year from"]
   document.querySelector('[flat222-23]').textContent = parsed.records[12].fields["Year to"]
   document.querySelector('[profit1]').textContent = parsed.records[16].fields["Class 2 (Self employed)"]
   document.querySelector('[profit121-22]').textContent = parsed.records[16].fields["Year from"]
   document.querySelector('[profit122-23]').textContent = parsed.records[16].fields["Year to"]
   document.querySelector('[class3a]').textContent = parsed.records[7].fields["Class 2 (Self employed)"]
   document.querySelector('[vary]').textContent = parsed.records[10].fields["Class 2 (Self employed)"]
   document.querySelector('[class4]').textContent = parsed.records[1].fields["Class 2 (Self employed)"]
   document.querySelector('[profit2]').textContent = parsed.records[4].fields["Class 2 (Self employed)"]
   document.querySelector('[profit3]').textContent = parsed.records[6].fields["Class 2 (Self employed)"]
   document.querySelector('[profit321-22]').textContent = parsed.records[6].fields["Year from"]
   document.querySelector('[profit322-23]').textContent = parsed.records[6].fields["Year to"]
   document.querySelector('[main]').textContent = parsed.records[9].fields["Class 1 (Employees)"]
   document.querySelector('[mainemployee]').textContent = parsed.records[9].fields.Employee
   document.querySelector('[mainemployer]').textContent = parsed.records[9].fields.Employer
   document.querySelector('[nonic1]').textContent = parsed.records[8].fields["Class 1 (Employees)"]
   document.querySelector('[nonic1employee]').textContent = parsed.records[8].fields.Employee
   document.querySelector('[nonic1employer]').textContent = parsed.records[8].fields.Employer
   /*
   document.querySelector('[nonic2]').textContent = parsed.records[7].fields["Class 1 (Employees)"]
   document.querySelector('[nonic2employee]').textContent = parsed.records[7].fields.Employee
   document.querySelector('[nonic2employer]').textContent = parsed.records[7].fields.Employer
  */
  document.querySelector('[mainrate]').textContent = parsed.records[5].fields["Class 1 (Employees)"]
   document.querySelector('[mainrateemployee]').textContent = parsed.records[5].fields.Employee
   document.querySelector('[mainrateemployer]').textContent = parsed.records[5].fields.Employer
   document.querySelector('[earnings]').textContent = parsed.records[14].fields["Class 1 (Employees)"]
   document.querySelector('[earningsemployee]').textContent = parsed.records[14].fields.Employee
   document.querySelector('[earningsemployer]').textContent = parsed.records[14].fields.Employer
   document.querySelector('[employment]').textContent = parsed.records[3].fields["Class 1 (Employees)"]
   document.querySelector('[employmentemployee]').textContent = parsed.records[3].fields.Employee
   document.querySelector('[employmentemployer]').textContent = parsed.records[3].fields.Employer
   document.querySelector('[note]').innerHTML = parsed.records[15].fields.Notes
   
  })
  .catch(error => console.log('error', error))  

/***** Hiding rows that don't receive content from Airtbale *****/
setTimeout(() => {
document.querySelectorAll('.tax-data_table-row').forEach((el) => {
var children = el.children
function isNodeEmpty(node) {
  return !node.textContent.trim(); 	
}
// Check if all children are empty
const allChildrenEmpty = Array.from(children).every(isNodeEmpty);
if(allChildrenEmpty){
	el.classList.add('hide')
}
console.log(allChildrenEmpty)
})

const rows = document.querySelectorAll('.tax-data_table-row:not(.hide):not(.is--first-row)').forEach((element, index) => {
    if (index % 2 === 0) {
      element.style.background = "#FFFFFF"
    } else {
      element.classList.add('color-bg') = "rgba(110, 200, 87, .2)"
    }
  });
}, 1000)
})
/*****  End of Webflow push function *****/
