const buton = document.getElementById('butn');


class Predictor {
  constructor(fecha, placa, hora){
    this.fecha=fecha;
    this.placa=placa;
    this.hora=hora;
    this.semana=[

      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo',
    ];
    this.diasFeriados = [
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
      '12-31',
    ];
  }
  predict(){
    
    const lafecha = new Date(this.fecha);
    const dia = this.semana[lafecha.getDay()];
    const ultimoDig = parseInt(this.placa[this.placa.length - 1], 10);
    const selectDay = this.fecha.slice(5);
    const regex=/^[a-zA-Z ]{2}/g
    const regex2=/(\d{3})(?!.*\d)/g

    if(!regex.test(this.placa)||!regex2.test(this.placa)){
      return 'Escriba un numero de placa válido';
    }

    if(!this.fecha){
      return 'Escoja una fecha';
    }

    if(!this.hora){
      return 'Escoja una hora';
    }

    if (this.diasFeriados.includes(selectDay)) {
    
      return 'Puedes circular es día feriado'
    } else {
      const hour = parseInt(this.hora.slice(0, 2), 10);
      const minu = parseFloat(this.hora.slice(3)/100);
      const sumHour=hour+minu
      
      if (ultimoDig % 2 === 0 && (dia === 'Lunes' || dia === 'Miércoles' || dia === 'Viernes')) {
        if ((sumHour >= 7 && sumHour <= 9.30) || (sumHour >= 16 && sumHour <= 19.30)) {
          return `No puedes circular, el ultimo digito de tu placa es ${ultimoDig} y es ${dia}`;
        } else {
          return 'Puedes circular';
        }
      } else if (ultimoDig % 2 !== 0 && (dia === 'Martes' || dia === 'Jueves' || dia === 'Sábado')) {
        if ((sumHour >= 7 && sumHour <= 9.30) || (sumHour >= 16 && sumHour <= 19.30)) {
          return `No puedes circular, el ultimo digito de tu placa es ${ultimoDig} y es ${dia}`;
        } else {
          return 'Puedes circular';
        }
      } else {
        return 'Puedes circular';
      }
    }

  }
}

if(buton){
  buton.addEventListener('click', (e) => {
    e.preventDefault();
    const f = document.getElementById('exampleInputDate').value;
    const p = document.getElementById('exampleInputPassword1').value;
    const h = document.getElementById('exampleInputTime').value;
    const m = document.getElementById('message');
    const predictor = new Predictor(f, p, h);
    m.textContent= predictor.predict()
    
  });    
}
export default Predictor
