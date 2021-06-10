const buton = document.getElementById('butn');

const semana = [

  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo',
];

const diasFeriados = [
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

function Predictor() {
  const fecha = document.getElementById('exampleInputDate').value;
  const placa = document.getElementById('exampleInputPassword1').value;
  const hora = document.getElementById('exampleInputTime').value;
  const message = document.getElementById('message');
  const lafecha = new Date(fecha);
  const dia = semana[lafecha.getDay()];
  const ultimoDig = parseInt(placa[placa.length - 1], 10);
  const selectDay = fecha.slice(5);

  if (diasFeriados.includes(selectDay)) {
    message.textContent = 'Puedes circular es día feriado';
  } else {
    const hour = parseInt(hora.slice(0, 2), 10);

    if (ultimoDig % 2 === 0 && (dia === 'Lunes' || dia === 'Miércoles' || dia === 'Viernes')) {
      if ((hour >= 7 && hour <= 9) || (hour >= 16 && hour <= 19)) {
        message.textContent = `No puedes circular, el ultimo digito de tu placa es ${ultimoDig} y es ${dia}`;
      } else {
        message.textContent = 'Puedes circular';
      }
    } else if (ultimoDig % 2 !== 0 && (dia === 'Martes' || dia === 'Jueves' || dia === 'Sábado')) {
      if ((hour >= 7 && hour <= 9) || (hour >= 16 && hour <= 19)) {
        message.textContent = `No puedes circular, el ultimo digito de tu placa es ${ultimoDig} y es ${dia}`;
      } else {
        message.textContent = 'Puedes circular';
      }
    } else {
      message.textContent = 'Puedes circular';
    }
  }
}

buton.addEventListener('click', (e) => {
  e.preventDefault();
  const predictor = new Predictor();
  return predictor;
});
