document.querySelector('input[type="radio"][value="uk"]').checked = true

//Open nav main dropdown
document.querySelector('[openmaindropdown]').addEventListener('click', () => {
  document.querySelector('[maindropdown]').classList.toggle('show')
  document.querySelector('[maindropdownarrow]').classList.toggle('show')
})

//Close nav main dropdown
document.querySelector('[closedropdown]').addEventListener('click', () => {
  document.querySelector('[maindropdown]').classList.remove('show')
  document.querySelector('[maindropdownarrow]').classList.remove('show')
  document.querySelector('[locationdropdowncontent]').classList.remove('show') 
  document.querySelector('[usertypedropdowncontent]').classList.remove('show') 
})

document.querySelector('[locationtoggle]').addEventListener('click', () => {
  document.querySelector('[locationdropdowncontent]').classList.toggle('show') 
})

document.querySelector('[usertypetoggle]').addEventListener('click', () => {
  document.querySelector('[usertypedropdowncontent]').classList.toggle('show') 
})



// Changing country
document.querySelectorAll('[radioflag]').forEach(el => {
  el.addEventListener('change', (e) => {
  if(!e.target.classList.contains('is-active')){
    document.querySelectorAll('.radio-button').forEach(els => {
    els.classList.remove('is-active')
    })  
  e.target.parentElement.classList.add('is-active')
  document.querySelectorAll('[flag]').forEach(el => {
  el.src = e.target.nextElementSibling.src
})
document.querySelectorAll('[flag]').forEach(el => {
  el.srcset = e.target.nextElementSibling.srcset
})
    document.querySelector('[country]').textContent = e.target.parentElement.lastChild.textContent
  }
  })
})

// Selecting a user type
document.querySelectorAll('.nav_top-dropdown-type').forEach(el => {
  el.addEventListener('click', (e) => {
  if(!e.target.classList.contains('is-active')){  
  document.querySelectorAll('.nav_top-dropdown-type').forEach(els => {
    els.classList.remove('is-active')
  })
  e.target.classList.add('is-active')
  document.querySelector('[investortype]').textContent = e.target.querySelector('[usertype]').textContent
  }
  })
})
