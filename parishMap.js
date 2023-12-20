getParishes()

async function getParishes() {
	try{
  const res = await fetch("https://x2kl-snbk-locr.e2.xano.io/api:1LG0fN5E/parish_codes?api_key=31c2ebc8e2c0d51e64613a19d8958a9c", {
 method: 'GET',
 headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
 })
  console.log(res)
  const data = await res.json()
  console.log(data)
  const result = await updateList(data)
  } catch(error){
  console.log('error:', error);
  throw error;
  }
}

// Create dropdown items
async function updateList(data) { 
    const itemTemplate = document.querySelector('option')
    const itemList = itemTemplate.parentElement
    //mapping through items on the page
    const items = data.map(({parish_name, main_url}) => {
    const item = itemTemplate.cloneNode(true)
    item.textContent = parish_name
    item.value = main_url
    return item
    })
    itemList.append(...items)

    document.querySelector('[selectparish]').addEventListener('change', (e) => {
        if(e.value != "empty")
        location.href = e.target.value
    })
}

// Submit contact form in the footer and send the info to Xano's API
document.querySelector('input[submit]').addEventListener('click', async () => {
    if(document.querySelector('[names]').value && document.querySelector('[enquiry]').value){
    var urlcreate = new URLSearchParams()
    urlcreate.append("api_key", "20dbd770b0e57483892a10db62fff910")
    urlcreate.append("name", document.querySelector('[names]').value)
    urlcreate.append("email", document.querySelector('[email]').value)
    urlcreate.append("membership_number", document.querySelector('[number]').value)
    urlcreate.append("enquiry_type", document.querySelector('[why]').value)
    urlcreate.append("enquiry_input", document.querySelector('[enquiry]').value)
	try{
  const res = await fetch("https://x2kl-snbk-locr.e2.xano.io/api:-FuDk7v2/contact_form", {
 method: 'POST',
 headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*'
      },
      body:urlcreate
 })
  console.log(res)
  } catch(error){
  console.log('error:', error);
  throw error;
  }
} else console.log("no")
})

// redirect to bubble app when a word is search fro in the nav
document.querySelector('form[search]').addEventListener('submit', (e) => {
 e.preventDefault()
 if(document.querySelector('[searchfield]').value != "")
 location.href = "https://cumbriafhs.com/?page=search%20nav&find=" + document.querySelector('[searchfield]').value
})

document.querySelector('[searchicon]').addEventListener('click', (e) => {
    if(document.querySelector('[searchfield]').value != "")
    location.href = "https://cumbriafhs.com/?page=search%20nav&find=" + document.querySelector('[searchfield]').value
   })
