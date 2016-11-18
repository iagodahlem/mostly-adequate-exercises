const _ = require('ramda');
require('./support')

// Exercício 1
//==============
// Refatore essa função, removendo todos argumentos para `aplicação parcial`

const words = split(' ')

// Exercício 1a
//==============
// Use a função `map` para fazer com que a função `word` funcione
// em um array de strings.

const sentences = map(words);


// Exercício 2
//==============
// Refatore essa função, removendo todos argumentos para `aplicação parcial`

const filterQs = filter(match(/q/i))


// Exercício 3
//==============
// Use a função auxiliar `_keepHighest` para refatorar a função `max` para
// não referenciar nenhum argumento

// NÃO ALTERE ESSA FUNÇÃO:
const _keepHighest = (x,y) => x >= y ? x : y;

// REFATORE ESSA:
const max = reduce(_keepHighest, 0)

// Bonus 1:
// ============
// encapsule a função array slice para se tornar funcional e do tipo 'curry'.
// //[1,2,3].slice(0, 2)

const slice = _.curry((start, end, xs) => xs.slice(start, end));


// Bonus 2:
// ============
// use a função acima slice, para definir a função 'take'
// para que ela retorne 'n' elementos. Faça ela ser 'curry' também.

const take = slice(0)


module.exports = {
  words: words,
  sentences: sentences,
  filterQs: filterQs,
  max: max,
  slice: slice,
  take: take
};
