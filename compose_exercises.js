const _ = require('ramda');
const accounting = require('accounting');
require('./support');

// Dados de exemplo
const CARS = [
  { name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true },
  { name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false },
  { name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false },
  { name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false },
  { name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true },
  { name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false }
];

// Exercício 1:
// ============
// use a função _.compose() para reescrever a função abaixo. Dica: _.prop() é do tipo 'curry'.

const isLastInStock = _.compose(_.prop('in_stock'), _.last);

// Exercício 2:
// ============
// use a função _.compose(), _.prop() e _.head() para ler o nome do primeiro carro

const nameOfFirstCar = _.compose(_.prop('name'), _.head);

// Exercício 3:
// ============
// Use a função _average para refatorar averageDollarValue para ser do tipo composition
const _average = (xs) => reduce(add, 0, xs) / xs.length; // <- não mexa aqui

const averageDollarValue = _.compose(_average, map(_.prop('dollar_value')));

// Exercício 4:
// ============
// Escreva a função: sanitizeNames() usando compose para que percorra o array de carros
// e retorne uma lista dos `names` em lowercase e underscore:
// exemplo: sanitizeNames([{name: "Ferrari FF"}]) //=> ["ferrari_ff"]

const _underscore = replace(/\W+/g, '_'); //<-- não mexa aqui, apenas a use

const sanitizeNames = map(_.compose(_underscore, toLowerCase, _.prop('name')));

// Bonus 1:
// ============
// Refatore availablePrices usando compose.

const formatPrice = _.compose(accounting.formatMoney, _.prop('dollar_value'));

const availablePrices = _.compose(
  join(', '),
  map(formatPrice),
  filter(_.prop('in_stock'))
);

// Bonus 2:
// ============
// Refatore no estilo pointfree. Dica: você pode usar a função _.flip()

const append = _.flip(_.concat);

const fastestCar = _.compose(
  append(' is the fastest'),
  _.prop('name'), _.last,
  _.sortBy(_.prop('horsepower'))
);

module.exports = {
  CARS: CARS,
  isLastInStock: isLastInStock,
  nameOfFirstCar: nameOfFirstCar,
  fastestCar: fastestCar,
  averageDollarValue: averageDollarValue,
  availablePrices: availablePrices,
  sanitizeNames: sanitizeNames
};
