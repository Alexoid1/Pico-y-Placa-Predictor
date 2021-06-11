/**
 * @jest-environment jsdom
 */

import  Predictor  from '../src/index.js';

const pred1 = new Predictor('2022-01-01', 'AAA-3232', '17:00')


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



it('Caso que sea día feriado', () => {
    expect(pred1.predict()).toBe("Puedes circular es día feriado");
});