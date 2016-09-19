var fs = require('fs');

var checkFormatInput =  require('./checkFile').checkFormatInput;
var checkFormatSize =  require('./checkFile').checkFormatSize;
var checkFormatList =  require('./checkFile').checkFormatList;

/**
 * Lecture du fichier
 */
function readFile(file) {
    
    var array = fs.readFileSync(file).toString().split("\n");

    var input;
    var size = 0;
    var liste = [];
    
    // Parse et control
    array.forEach(function (item, i) {
        switch (i) {
            case 0:
                checkFormatInput(item);
                input = (item.split(';'));
                break;
            case 1:
                checkFormatSize(item);
                size = item;
                break;
            default:
                checkFormatList(item);
                liste.push(item.split(';'));
                break;
        }
    });

    return {
        input: input,
        size: size,
        liste: liste,
    };

}


module.exports = readFile;