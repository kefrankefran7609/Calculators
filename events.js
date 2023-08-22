console.log("hey events")

window.onload = async () => {  
		Wized.request.await("Load user only", (response) => { 
				if(response.status == 200){
        document.querySelectorAll('[showloggedin]').forEach((el) => {        
        el.style.display = "block"  
        })
        document.querySelectorAll('[hideloggedin]').forEach((el) => {        
        el.style.display = "none"
        })
        } else{
         document.querySelectorAll('[showloggedin]').forEach((el) => {        
        el.style.display = "none"  
        })
        document.querySelectorAll('[hideloggedin]').forEach((el) => {        
        el.style.display = "block"
        })
        }
    })    
}

var currentPage = document.querySelector('[currentpage]')
var nextPage = document.querySelector('[nextpage]')
var prevPage = document.querySelector('[prevpage]')
var categories = ["default"]
var towns = ["default"]
var orderBy
var sortingField
var priceMax
var priceMin
var dateTill
var dateFrom
var search
var pageNumber = 1
var nextPage = 2
var prevPage = null
const price_min = document.querySelector('[pricemin]')
const price_max = document.querySelector('[pricemax]')
const date_till = document.querySelector('[datetill]')
const date_from = document.querySelector('[datefrom]')
const sorts = document.querySelectorAll('[sort]')
const checkboxesTowns = document.querySelectorAll('input[towns]')
const checkboxesCategories = document.querySelectorAll('input[categories]')
searchInput = document.querySelector('[search]')

/* Initial items load */
filterItems(categories, towns, orderBy, sortingField, priceMin, priceMax, 1)

document.querySelector('[resetall]').addEventListener('click', () => {
  searchInput.value= ""
  search = ""
  categories = ["default"]
  towns = ["default"]
  priceMin = undefined
  priceMax = undefined
  price_min.value = ""
  price_max.value = ""
  orderBy = undefined
  sortingField = undefined
  document.querySelectorAll('[input]').forEach((input) => {
    input.nextElementSibling.classList.remove('active')
   })
  filterItems(categories, towns, orderBy, sortingField, priceMin, priceMax, 1, search, dateFrom, dateTill)
  document.querySelectorAll('.checkbox_input').forEach((el) => {
    el.classList.remove('w--redirected-checked')
  })
})

document.querySelector('[resetoptions]').addEventListener('click', () => {
  categories = ["default"]
  filterItems(categories, towns, orderBy, sortingField, priceMin, priceMax, 1, search, dateFrom, dateTill)
  document.querySelectorAll('.checkbox_input.categories').forEach((el) => {
    el.classList.remove('w--redirected-checked')
  })
})

document.querySelector('[resettowns]').addEventListener('click', () => {
  towns = ["default"]
  filterItems(categories, towns, orderBy, sortingField, priceMin, priceMax, 1, search, dateFrom, dateTill)
  document.querySelectorAll('.checkbox_input.towns').forEach((el) => {
    el.classList.remove('w--redirected-checked')
})
})

document.querySelector('[nextpage]').addEventListener('click', () => {
  pageNumber = nextPage
  filterItems(categories, towns, orderBy, sortingField, priceMin, priceMax, pageNumber, search, dateFrom, dateTill)
})

document.querySelector('[prevpage]').addEventListener('click', () => {
  pageNumber = prevPage
  filterItems(categories, towns, orderBy, sortingField, priceMin, priceMax, pageNumber, search, dateFrom, dateTill)
})

document.querySelector('[rangereset]').addEventListener('click', () => {
  priceMin = undefined
  priceMax = undefined
  price_min.value = ""
  price_max.value = ""
  document.querySelectorAll('[input]').forEach((input) => {
    input.nextElementSibling.classList.remove('active')
   })
  filterItems(categories, towns, orderBy, sortingField, priceMin, priceMax, 1, search, dateFrom, dateTill)
})

document.querySelector('[pricebutton]').addEventListener('click', () => {
  if(price_min.value || price_max.value){
  priceMin = price_min.value
  priceMax = price_max.value
  filterItems(categories, towns, orderBy, sortingField, priceMin, priceMax, 1, search, dateFrom, dateTill)
  }
})

document.querySelector('[datebutton]').addEventListener('click', () => {
  if(date_till.value || date_from.value){
  dateFrom = date_from.value
  dateTill = date_till.value
  filterItems(categories, towns, orderBy, sortingField, priceMin, priceMax, 1, search, dateFrom, dateTill)
  }
})

sorts.forEach((el, index) => {
    el.addEventListener('click', (e) => {
    sorts.forEach(sort => sort.classList.remove('gradient-bg'))  
    sorts[index].classList.add('gradient-bg')
    orderBy = e.target.attributes.sort.textContent.split('-')[1]
    sortingField = e.target.attributes.sort.textContent.split('-')[0]
    filterItems(categories, towns, orderBy, sortingField, priceMin, priceMax, 1, search, dateFrom, dateTill)
  })
})

document.querySelectorAll('input[towns]').forEach((field) => {
	field.addEventListener('change', () => {
    townsChecked = Array.from(Array.from(checkboxesTowns).filter((checkbox) =>   checkbox.checked).map((check) => check.id)) 
    if(townsChecked.length == 0){
      towns = ["default"]
    } else {
      towns = []
      towns.push(townsChecked)}
  filterItems(categories, towns, orderBy, sortingField, priceMin, priceMax, 1, search, dateFrom, dateTill)
}) })

document.querySelectorAll('input[categories]').forEach((field) => {
	field.addEventListener('change', () => {
  categoriesChecked = Array.from(Array.from(checkboxesCategories).filter((checkbox) =>   checkbox.checked).map((check) => check.id)) 
  if(categoriesChecked.length == 0){
    categories = ["default"]
  } else {
    categories = []
    categories.push(categoriesChecked)}
  filterItems(categories, towns, orderBy, sortingField, priceMin, priceMax, 1, search, dateFrom, dateTill)
}) })

searchInput.addEventListener('keyup', (e) => {
    console.log(e.target.value)
    search = e.target.value
    filterItems(categories, towns, orderBy, sortingField, priceMin, priceMax, 1, search, dateFrom, dateTill)
})


async function filterItems(categories, towns, orderBy, sortingField, priceMin, priceMax, pageNumber, search, dateFrom, dateTill) {
	try{
  const res = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:J2qjdVBc/events?itemsPerPage=4" + "&pageNumber=" + pageNumber +
  (orderBy != undefined ? "&orderBy=" + orderBy : "&orderBy=asc") + (sortingField != undefined ? "&sortingField=" + sortingField : "&sortingField=id") +
  (categories == "" || categories == undefined || categories == [] || categories == null ? "" : "&categories=" + categories ) + 
  (towns == "" || towns == undefined || towns == [] || towns == null ? "" : "&towns=" + towns ) + 
  (priceMin != undefined ? "&priceMin=" + priceMin : "") + (priceMax != undefined ? "&priceMax=" + priceMax : "") +
  (dateFrom != undefined ? "&dateFrom=" + dateFrom : "") + (dateTill != undefined ? "&dateTill=" + dateTill : "") +
  (search == "" || search == undefined ? "" : "&search=" + search ), {
 method: 'GET',
 headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
 })
 console.log(categories)
 console.log(towns)
  console.log(res)
  const data = await res.json()
  console.log(data)
  const result = await updateList(data) ;  
  } catch(error){
  console.log('error:', error);
  throw error;
  }
}

async function updateList(data) { 
	  await Wized.data.setVariable("paginationData", data.items) 
    currentPage.textContent = data.curPage
    document.querySelector('[totalpages]').textContent = data.pageTotal + " pages"
    document.querySelector('[itemstotal]').textContent = data.itemsTotal
    document.querySelector('[numberofitemsonpage]').textContent = data.itemsReceived
    nextPage = data.nextPage
    prevPage = data.prevPage
    document.querySelector('[nextpage]').style.display = nextPage === null ? "none" : "flex"
    document.querySelector('[prevpage]').style.display = prevPage === null ? "none" : "flex"    
    document.querySelector('[noresultwrapper]').style.display = data.itemsReceived = 0 ? "flex" : "none"
    document.querySelector('[pagination]').style.display = data.itemsReceived = 0 ? "none" : "flex"
    setTimeout(() => {
      document.querySelector('[loaderwrapper]').style.display = "none"
      document.querySelector('[loadingcontent]').classList.add('show')     
    }, 500)

}


/***** Animation on input label *****/
document.querySelectorAll('[input]').forEach((input) => {
	input.addEventListener('focus', () => {
  input.nextElementSibling.classList.add('active')
 })
 
 input.addEventListener('focusout', () => {
 	if(input.value == ""){
  input.nextElementSibling.classList.remove('active')
  }
 })
 })
