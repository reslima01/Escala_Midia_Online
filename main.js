
const months=[
'Janeiro','Fevereiro','Março','Abril','Maio','Junho',
'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'
]

function loadMonths(){

const select=document.getElementById('month-select')

months.forEach((m,i)=>{

const op=document.createElement('option')
op.value=i
op.textContent=m

select.appendChild(op)

})

}

document.addEventListener('DOMContentLoaded',()=>{

loadMonths()

const today=new Date()

document.getElementById('month-select').value=today.getMonth()
document.getElementById('year-input').value=today.getFullYear()

})
