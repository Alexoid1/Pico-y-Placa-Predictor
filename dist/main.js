(()=>{"use strict";const e=document.getElementById("butn");class t{constructor(e,t,s){this.fecha=e,this.placa=t,this.hora=s,this.semana=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"],this.diasFeriados=["01-01","02-24","02-25","04-10","05-01","05-24","07-25","08-10","10-09","11-02","11-03","12-24","12-25","12-31"]}predict(){const e=new Date(this.fecha),t=this.semana[e.getDay()],s=parseInt(this.placa[this.placa.length-1],10),a=this.fecha.slice(5);if(!/^[a-zA-Z ]{2}/g.test(this.placa)||!/(\d{3})(?!.*\d)/g.test(this.placa))return"Escriba un numero de placa válido";if(!this.fecha)return"Escoja una fecha";if(console.log(this.hora),!this.hora)return"Escoja una hora";if(this.diasFeriados.includes(a))return"Puedes circular es día feriado";{const e=parseInt(this.hora.slice(0,2),10)+parseFloat(this.hora.slice(3)/100);return(s%2!=0||"Lunes"!==t&&"Miércoles"!==t&&"Viernes"!==t)&&(s%2==0||"Martes"!==t&&"Jueves"!==t&&"Sábado"!==t)?"Puedes circular":e>=7&&e<=9.3||e>=16&&e<=19.3?`No puedes circular, el ultimo digito de tu placa es ${s} y es ${t}`:"Puedes circular"}}}e&&e.addEventListener("click",(e=>{e.preventDefault();const s=document.getElementById("exampleInputDate").value,a=document.getElementById("exampleInputPassword1").value,i=document.getElementById("exampleInputTime").value,c=document.getElementById("message"),n=new t(s,a,i);c.textContent=n.predict()}))})();