var calcul = require('../src/calcul');
var assert = require('assert');

describe('Calcul', function () {

    var result = calcul('550', [{ taux: 1.2053 }, { taux: 1.0351 }, { taux: 86.0305 }]);    

    assert.equal(59033, result);
});