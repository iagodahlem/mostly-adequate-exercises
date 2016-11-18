const _ = require('ramda');

add = _.curry((x, y) => x + y)

filter = _.curry((f, xs) => xs.filter(f))

join = _.curry((what, x) => x.join(what));

map = _.curry((f, xs) => xs.map(f));

match = _.curry((what, x) => x.match(what));

reduce = _.curry((f, a, xs) => xs.reduce(f, a));

replace = _.curry((what, replacement, x) => x.replace(what, replacement));

split = _.curry((what, x) => x.split(what));

toLowerCase = (x) => x.toLowerCase();

toUpperCase = (x) => x.toUpperCase();
