const inputs=document.querySelectorAll(".input");inputs.forEach(e=>{e.value="0",e.addEventListener("change",t=>{""===t.path[0].value&&(e.value="0")})}),document.querySelector("#calculate").addEventListener("click",e=>{e.preventDefault();var t=document.querySelector("#start").value,o=document.querySelector("#vat").value,n=document.querySelector("#rate").value,r=.2;"5"===n&&(r=.05),"add"===o?(document.querySelector("#vatAmount").textContent=(t*r).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),document.querySelector("#total").textContent=(+t*+r+ +t).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),document.querySelector("#resultName").textContent="Total including VAT:"):(document.querySelector("#total").textContent=(t/(1+r)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),document.querySelector("#vatAmount").textContent=(+t-+t/(+r+1)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),document.querySelector("#resultName").textContent="Total excluding VAT:")});
