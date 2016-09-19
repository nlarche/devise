var readFile = require('../src/readFile');
var expect = require('chai').expect;

describe('ReadFile', function () {

    var result =  readFile('fichier');

    var liste = [
        ['AUD', 'CHF', '0.9661'],
        ['JPY', 'KRW', '13.1151'],
        ['EUR', 'CHF', '1.2053'],
        ['AUD', 'JPY', '86.0305'],
        ['EUR', 'USD', '1.2989'],
        ['JPY', 'INR', '0.6571'],
    ];
  
    expect(result.liste).to.deep.equal(liste);
    expect(result.input).to.deep.equal(['EUR', '550', 'JPY']);
    expect(result.size).to.equal('6');
});