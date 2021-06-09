const buton=document.getElementById('butn');
const h = document.getElementById("hour");
const m = document.getElementById("minute");
const s = document.getElementById("seconds");
let semana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado"
];
 
let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];
    
function Predictor(){
    let fecha=document.getElementById('exampleInputEmail1').value;
    let placa=document.getElementById('exampleInputPassword1').value;   
    let lafecha=new Date(fecha);
    let mes=meses[lafecha.getMonth()];
    let diaNum=lafecha.getDate() + 1
    let dia=semana[lafecha.getDay()];
    let ultimoDig=placa[placa.length -1];
    console.log(diaNum)
    // if(diaNum===){

    // }
    if(ultimoDig==='2'||ultimoDig==='6'||ultimoDig==='8'||ultimoDig==='0'&& dia==='Lunes'||dia==='Miercoles'||dia==='Viernes'){
        console.log('hoy no puedes circular')
    }else{
        console.log('puedes circular')
    }

}

buton.addEventListener('click',(e)=>{
    e.preventDefault()
    new Predictor()
})

function Reloj(){
    let time = new Date();
    
}

var id=setInterval(reloj, 1000);