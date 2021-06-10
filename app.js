const buton=document.getElementById('butn');

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

let diasFeriados=['01-01', '02-24', '02-25', '04-10', '05-01', '05-24', '07-25', '08-10', '10-09', '11-02', '11-03', '12-24', '12-25', '12-31']
    
function Predictor(){
    let fecha=document.getElementById('exampleInputDate').value;
    let placa=document.getElementById('exampleInputPassword1').value; 
    let hora=document.getElementById('exampleInputTime').value;  
    let lafecha=new Date(fecha);
    let mes=meses[lafecha.getMonth()];
    let diaNum=lafecha.getDate() + 1
    let dia=semana[lafecha.getDay()];
    let ultimoDig=placa[placa.length -1];
    let selectDay=fecha.slice(5)
    if(diasFeriados.includes(selectDay)){
        
        console.log('puedes circular')
    }else{
        console.log('hoy no puedes circular')
    }
    // if(ultimoDig==='2'||ultimoDig==='6'||ultimoDig==='8'||ultimoDig==='0'&& dia==='Lunes'||dia==='Miercoles'||dia==='Viernes'){
    //     console.log('hoy no puedes circular')
    // }else{
    //     console.log('puedes circular')
    // }

}

buton.addEventListener('click',(e)=>{
    e.preventDefault()
    new Predictor()
})
