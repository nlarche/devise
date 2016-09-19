// @input : montant initial
// @queue : liste des taux
function calcul(input, queue) {

    var result = input;

    queue.forEach(function calc(item) {
        // arondi 4 
        result = (result * item.taux).toFixed(4);        
    });

    // arondi entier 
    result = (result * 1).toFixed(0);
    return result;
}

module.exports = calcul;