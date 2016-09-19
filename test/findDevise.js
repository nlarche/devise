var findDevise = require('../src/findDevise');
var expect = require('chai').expect;

describe('FindDevise', function () {

    var liste = [
        ['AUD', 'CHF', 0.9661],
        ['JPY', 'KRW', 13.1151],
        ['EUR', 'CHF', 1.2053],
        ['AUD', 'JPY', 86.0305],
        ['EUR', 'USD', 1.2989],
        ['JPY', 'INR', 0.6571],
    ];

    var queue = findDevise([], liste, 'EUR', 'JPY');


    var result = [
        {
            start: 'EUR',
            end: 'CHF',
            taux: 1.2053
        },
        {
            start: 'AUD',
            end: 'CHF',
            taux: 1.0351
        },
        {
            start: 'AUD',
            end: 'JPY',
            taux: 86.0305
        }];

    expect(result).to.deep.equal(queue);
});