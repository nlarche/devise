var args = process.argv.slice(2);

var readFile = require('./src/readFile');
var findDevise = require('./src/findDevise');
var calcul = require('./src/calcul');

var file = readFile('fichier');

var input = file.input; // START;VALUE;END
var liste = file.liste;

queue = findDevise([], liste, input[0], input[2]);

var result = calcul(input[1], queue);

console.log(result);
