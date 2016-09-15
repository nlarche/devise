/**
 * queue : Liste des devises trouvées pour le calcul
 * liste : Liste des devises fournies en entrée
 * start : devise de départ / current
 * end : devise final
 */
function findDevise(queue, liste, start, end) {
    for (var i = 0; i < liste.length; i++) {

        var item = liste[i]

        if (!item) {
            break;
        }

        // trouvé
        if (item[1] === end) {
            push(queue, item, true);
            break;
        }

        // start sens positif
        if (item[0] === start) {
            push(queue, item, true);
            var _liste = liste.filter(filterListe)
            // appel récursif avec la liste filtrée et le nouveau départ
            // départ === fin du couple courant
            queue = findDevise(queue, _liste, item[1], end)
        }

        // fin sens négatif
        if (item[1] === start) {
            push(queue, item, false);
            var _liste = liste.filter(filterListe)
            // appel récursif avec la liste filtrée et le nouveau départ
            // départ === debut du couple courant
            queue = findDevise(queue, _liste, item[0], end)
        }
    }

    // Filtre de l'élément trouvé
    function filterListe(current) {
        return start !== current[1];
    }


    return queue;
}

/**
 * Ajout de l'élement s'il n'existe pas dans la liste;
 * */
function push(queue, item, sens) {  

    var exist = queue.filter(function find(elem) {
        return item[0] === elem.start && item[1] === elem.end
    })

    if (exist.length === 0) {
        queue.push({
            start: item[0],
            end: item[1],
            // taux ou inverse du taux
            taux: sens ? item[2] : (1 / item[2]).toFixed(4)
        });
    }
}

module.exports = findDevise;