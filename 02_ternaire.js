
/**
 * retourne la valeur la plus grande des deux paramètres
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */
function ternaire(a , b) {

    return a>b? a:b;
}

console.log(ternaire(Infinity, -Infinity));

module.exports = ternaire;