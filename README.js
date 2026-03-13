const monthNames = [
'Janeiro','Fevereiro','Março','Abril','Maio','Junho',
'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'
];

let allDates = [];

function getWeekDaysInMonth(year, month, dayOfWeek){

const dates=[];
const date=new Date(year,month,1);

while(date.getMonth()===month){

if(date.getDay()===dayOfWeek){
dates.push(new Date(date));
}

date.setDate(date.getDate()+1);

}

return dates;

}

function formatDate(date){

const day=date.getDate().toString().padStart(2,'0');
const month=(date.getMonth()+1).toString().padStart(2,'0');

return `${day}/${month}`;

}

function getDayName(date){

const days=[
'Domingo','Segunda-feira','Terça-feira',
'Quarta-feira','Quinta-feira','Sexta-feira','Sábado'
];

return days[date.getDay()];

}

function createScheduleItem(date){

const formattedDate=formatDate(date);
const dayName=getDayName(date);

return `

<div class="schedule-item">

<div class="date-header">
${dayName} - ${formattedDate}
</div>

<div class="function-row">
<span class="function-label">Nome do Evento:</span>
<input type="text" class="person-name">
</div>

<div class="function-row">
<span class="function-label">Mídia Culto:</span>
<input type="text" class="person-name">
</div>

<div class="function-row">
<span class="function-label">Transmissão:</span>
<input type="text" class="person-name">
</div>

<div class="function-row">
<span class="function-label">Rede Social:</span>
<input type="text" class="person-name">
</div>

<div class="function-row">
<span class="function-label">Treinamento:</span>
<input type="text" class="person-name">
</div>

</div>

`;

}

function generateSchedule(){

const year=parseInt(document.getElementById('year-input').value);
const month=parseInt(document.getElementById('month-select').value);

if(isNaN(year)||isNaN(month)) return;

const title=document.getElementById('month-year-title');
title.textContent=`${monthNames[month]} ${year}`;

const sundays=getWeekDaysInMonth(year,month,0);

allDates=sundays;

const container=document.getElementById('schedule-container');

let html='';

allDates.forEach(date=>{
html+=createScheduleItem(date);
});

container.innerHTML=html;

}

document.addEventListener('DOMContentLoaded',()=>{

const today=new Date();

document.getElementById('month-select').value=today.getMonth();
document.getElementById('year-input').value=today.getFullYear();

generateSchedule();

document.getElementById('month-select')
.addEventListener('change',generateSchedule);

document.getElementById('year-input')
.addEventListener('change',generateSchedule);

});
