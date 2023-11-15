document.querySelector('input[type="radio"][value="uk"]').checked = true

document.querySelector('[openmaindropdown]').addEventListener('click', () => {
  document.querySelector('[maindropdown]').classList.toggle('show')
  document.querySelector('[maindropdownarrow]').classList.toggle('show')
  document.querySelector('[countrydropdown]').classList.remove('show')
  document.querySelector('[seconddropdownarrow]').classList.remove('show')
  document.querySelector('.nav_top-second-dropdown-menu').classList.remove('show')
  document.querySelector('[change]').textContent = "Change"
})

document.querySelector('[closedropdown]').addEventListener('click', () => {
  document.querySelector('[maindropdown]').classList.remove('show')
  document.querySelector('[maindropdownarrow]').classList.remove('show')
  document.querySelector('[countrydropdown]').classList.remove('show')
  document.querySelector('[seconddropdownarrow]').classList.remove('show')
  document.querySelector('.nav_top-second-dropdown-menu').classList.remove('show')
  document.querySelector('[change]').textContent = "Change"
})

var click = 0
document.querySelector('[opencountrydropdown]').addEventListener('click', () => {
  click++ 
  document.querySelector('[countrydropdown]').classList.toggle('show')
  document.querySelector('[seconddropdownarrow]').classList.toggle('show')
  document.querySelector('.nav_top-second-dropdown-menu').classList.toggle('show')
  if(click == 1) document.querySelector('[change]').textContent = "Hide"
  if(click == 2) {
    document.querySelector('[change]').textContent = "Change"
    click = 0
  }
})

// Changing country
 document.querySelectorAll('[radioflag]').forEach(el => {
  el.addEventListener('change', (e) => {
  const parent = document.querySelector('input[radioflag]:checked').closest('.radio-button')
  document.querySelector('[country]').textContent = parent.querySelector('.radio-label').textContent
  document.querySelector('[flag]').src = parent.querySelector('.nav_top-flag').src
  document.querySelector('[flag]').srcset = parent.querySelector('.nav_top-flag').srcset
  /*
  document.querySelectorAll('.nav_top-dropdown-type').forEach(els => {
    els.style.display = "none"
  })
  document.querySelectorAll(`[${e.target.value}]`).forEach(els => {
    els.style.display = "flex"
  })*/
  })
}) 

// Selecting a user type
document.querySelectorAll('.nav_top-dropdown-type').forEach(el => {
  el.addEventListener('click', (e) => {
    console.log(e.target)
  if(!e.target.classList.contains('is-active')){  
  document.querySelectorAll('.nav_top-dropdown-type').forEach(els => {
    els.classList.remove('is-active')
  })
  e.target.classList.add('is-active')
  document.querySelector('[investortype]').textContent = e.target.querySelector('.text-weight-semibold').textContent
  document.querySelector('[maindropdown]').classList.remove('show')
  document.querySelector('[maindropdownarrow]').classList.remove('show')
  document.querySelector('[countrydropdown]').classList.remove('show')
  document.querySelector('[seconddropdownarrow]').classList.remove('show')
  document.querySelector('.nav_top-second-dropdown-menu').classList.remove('show')
  document.querySelector('[change]').textContent = "Change"
  }
  })
})
