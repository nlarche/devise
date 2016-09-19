var assert = require('assert');
var checkFormatInput = require('../src/checkFile').checkFormatInput;
var checkFormatSize = require('../src/checkFile').checkFormatSize;
var checkFormatList = require('../src/checkFile').checkFormatList;

describe('checkFile', function () {


    describe('checkFormatInput', function () {

        checkFormatInput('AAA;000.0;AAA');

        try {
             checkFormatInput('AAA,000.0,AAA');
        } catch (error) {
            assert.equal('Error: Input Format incorrect "AAA,000.0,AAA"', error);
        }
    });

    describe('checkFormatSize', function () {

        checkFormatSize(100);

         try {
             checkFormatSize('AAA,000.0,AAA');
        } catch (error) {
            assert.equal('Error: Size Format incorrect "AAA,000.0,AAA"', error);
        }
    });

    describe('checkFormatList', function () {

        checkFormatList('AAA;AAA;000.0');

         try {
             checkFormatList('AAA;000.0;AAA');
        } catch (error) {
            assert.equal('Error: List Format incorrect "AAA;000.0;AAA"', error);
        }
    });
});