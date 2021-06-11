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

    if (this.diasFeriados.includes(selectDay)) {
    
      return 'Puedes circular es día feriado'
    } else {
      const hour = parseInt(this.hora.slice(0, 2), 10);

      if (ultimoDig % 2 === 0 && (dia === 'Lunes' || dia === 'Miércoles' || dia === 'Viernes')) {
        if ((hour >= 7 && hour <= 9) || (hour >= 16 && hour <= 19)) {
          return `No puedes circular, el ultimo digito de tu placa es ${ultimoDig} y es ${dia}`;
        } else {
          return 'Puedes circular';
        }
      } else if (ultimoDig % 2 !== 0 && (dia === 'Martes' || dia === 'Jueves' || dia === 'Sábado')) {
        if ((hour >= 7 && hour <= 9) || (hour >= 16 && hour <= 19)) {
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

window.load = function () {  
  buton.addEventListener('click', (e) => {
  e.preventDefault();
  const f = document.getElementById('exampleInputDate').value;
  const p = document.getElementById('exampleInputPassword1').value;
  const h = document.getElementById('exampleInputTime').value;
  const m = document.getElementById('message');
  const predictor = new Predictor(f, p, h);
  m.textContent= predictor.predict
 
});    
}
export default Predictor;
