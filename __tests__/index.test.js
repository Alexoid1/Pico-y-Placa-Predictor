/**
 * @jest-environment jsdom
 */

import Predictor from '../src/index.js';

const pred0 = new Predictor('2022-12-25', 'AAA-3232', '17:00');
const pred1 = new Predictor('2022-01-01', 'AAA-3232', '17:00');
const pred2 = new Predictor('2022-01-05', 'AAA-3232', '17:00');
const pred3 = new Predictor('2022-01-05', 'AAA-3232', '21:00');
const pred4 = new Predictor('2022-01-04', 'AAA-3232', '17:00');
const pred5 = new Predictor('2022-01-05', 'AAA-3232', '05:00');
const pred6 = new Predictor('2022-01-04', 'AAA-3233', '17:00');
const pred7 = new Predictor('2022-01-04', 'AAA-3233', '22:00');
const pred8 = new Predictor('2022-01-04', 'AAA-3233', '05:00');
const pred9 = new Predictor('2022-01-04', 'AAA-3233', '06:59');
const pred10 = new Predictor('2022-01-04', 'AAA-3233', '07:00');
const pred11 = new Predictor('2022-01-04', 'AAA-3233', '09:30');
const pred12 = new Predictor('2022-01-04', 'AAA-3233', '09:31');
const pred13 = new Predictor('2022-01-04', 'AAA-3233', '19:30');
const pred14 = new Predictor('2022-01-04', 'AAA-3233', '19:31');
const pred15 = new Predictor('2021-06-13', 'AAA-3233', '17:20');
const pred16 = new Predictor('2021-06-13', '', '17:20');
const pred17 = new Predictor('2021-06-13', 'ASASDSD', '17:20');
const pred18 = new Predictor('2021-06-13', '1231231', '17:20');
const pred19 = new Predictor('2021-06-13', 're43', '17:20');
const pred20 = new Predictor('', 'AAA-3233', '17:20');
const pred21 = new Predictor('2021-06-13', 'AAA-3233', '');

it('Caso que sea día feriado de navidad', () => {
  expect(pred0.predict()).toBe('Puedes circular es día feriado');
});

it('Caso que sea día feriado de año nuevo', () => {
  expect(pred1.predict()).toBe('Puedes circular es día feriado');
});

it('Caso día miercoles, ultimo numero de placa es 2', () => {
  expect(pred2.predict()).toBe('No puedes circular, el ultimo digito de tu placa es 2 y es Miércoles');
});

it('Caso día pico y placa hora 21:00 pm', () => {
  expect(pred3.predict()).toBe('Puedes circular');
});

it('Caso día martes, ultimo numero de placa es 2', () => {
  expect(pred4.predict()).toBe('Puedes circular');
});

it('Caso día pico y placa hora 05:00 am de la mañana', () => {
  expect(pred5.predict()).toBe('Puedes circular');
});

it('Caso día martes, ultimo numero de placa es 3', () => {
  expect(pred6.predict()).toBe('No puedes circular, el ultimo digito de tu placa es 3 y es Martes');
});

it('Caso día martes pico y placa, hora 22:00pm de la noche', () => {
  expect(pred7.predict()).toBe('Puedes circular');
});

it('Caso día martes pico y placa, hora 05:00am de la mañana', () => {
  expect(pred8.predict()).toBe('Puedes circular');
});

it('Caso día martes pico y placa, hora 06:59am de la mañana', () => {
  expect(pred9.predict()).toBe('Puedes circular');
});

it('Caso día martes pico y placa, hora 07:00am de la mañana', () => {
  expect(pred10.predict()).toBe('No puedes circular, el ultimo digito de tu placa es 3 y es Martes');
});

it('Caso día martes pico y placa, hora 09:30am de la mañana', () => {
  expect(pred11.predict()).toBe('No puedes circular, el ultimo digito de tu placa es 3 y es Martes');
});

it('Caso día martes pico y placa, hora 09:31am de la mañana', () => {
  expect(pred12.predict()).toBe('Puedes circular');
});

it('Caso día martes pico y placa, hora 19:30am de la mañana', () => {
  expect(pred13.predict()).toBe('No puedes circular, el ultimo digito de tu placa es 3 y es Martes');
});

it('Caso día martes pico y placa, hora 19:31am de la mañana', () => {
  expect(pred14.predict()).toBe('Puedes circular');
});

it('Caso día domingo', () => {
  expect(pred15.predict()).toBe('Puedes circular');
});

it('Caso no escribe numero de placa', () => {
  expect(pred16.predict()).toBe('Escriba un numero de placa válido');
});

it('Caso escriba solo letras como numero de placa', () => {
  expect(pred17.predict()).toBe('Escriba un numero de placa válido');
});

it('Caso escriba solo numeros como numero de placa', () => {
  expect(pred18.predict()).toBe('Escriba un numero de placa válido');
});

it('Caso escriba caracteres insuficientes para un numero de placa', () => {
  expect(pred19.predict()).toBe('Escriba un numero de placa válido');
});

it('Caso no escriba la fecha', () => {
  expect(pred20.predict()).toBe('Escoja una fecha');
});

it('Caso no escriba la fecha', () => {
  expect(pred21.predict()).toBe('Escoja una hora');
});