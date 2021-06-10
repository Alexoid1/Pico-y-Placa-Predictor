const buton=document.getElementById('butn');

let semana = [
    
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
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

let diasFeriados=[
    '01-01', 
    '02-24', 
    '02-25', 
    '04-10', 
    '05-01', 
    '05-24', 
    '07-25', 
    '08-10', 
    '10-09', 
    '11-02', 
    '11-03', 
    '12-24', 
    '12-25', 
    '12-31'
]
    
function Predictor(){
    let fecha=document.getElementById('exampleInputDate').value;
    let placa=document.getElementById('exampleInputPassword1').value; 
    let hora=document.getElementById('exampleInputTime').value;  
    let lafecha=new Date(fecha);
    let mes=meses[lafecha.getMonth()];
    let diaNum=lafecha.getDate() + 1
    let dia=semana[lafecha.getDay()];
    let ultimoDig=parseInt(placa[placa.length -1]);
    let selectDay=fecha.slice(5)
    if(diasFeriados.includes(selectDay)){
        
        console.log(`puedes circular es dia feriado`)
        
    }else{
        
        let hour=parseInt(hora.slice(0,2));
        console.log(ultimoDig,hour,dia)
        if(ultimoDig%2===0 && (dia==="Lunes"||dia==="Miércoles"||dia==="Viernes")){
            
            if((hour>=7 && hour<=9) || (hour>=16 && hour<=19) ){
                console.log(`No puedes circular, el ultimo digito de tu placa es ${ultimoDig} y es ${dia}`)
            }else{
                console.log('puedes circular')
            }
        }else if(ultimoDig%2!==0 && (dia==="Martes"||dia==="Jueves"||dia==="Sábado")){
            if((hour>=7 && hour<=9) || (hour>=16 && hour<=19) ){
                console.log(`No puedes circular, el ultimo digito de tu placa es ${ultimoDig} y es ${dia}`)
            }else{
                console.log('puedes circular')
            }
        }else{
            console.log('puedes circular')
        }
    }
    
    

}

buton.addEventListener('click',(e)=>{
    e.preventDefault()
    new Predictor()
})
