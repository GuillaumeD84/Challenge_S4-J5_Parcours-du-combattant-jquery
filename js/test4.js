/*
 * Exo4
 *
 * Voici une suite mathématique, où :
 * - le premier élément est 0
 * - le deuxième élément est 1
 * - où chaque élément suivant de la liste est égal à la somme des deux éléménts précédents
 *
 * Exemples :
 * suite(0) = 0
 * suite(1) = 1
 * suite(2) = 1
 * suite(3) = 2
 * suite(4) = 3
 * suite(5) = 5
 * suite(6) = 8
 * suite(7) = 13
 * suite(8) = 21
 * suite(9) = 34
 * suite(10) = 55
 * suite(11) = 89
 * suite(12) = 154
 *
 * Le but : développer la fonction suite.
 *
 * BONUS: Tester en console de taper : suite(40).
 *        La console mettra un peu de temps à répondre.
 *        En tapant suite(50), vous risquez de faire surchauffer Chrome.
 *
 *        Développer la fonction suite en réduisant au minimum
 *        le nombre de calcul, en gardant en mémoire les résultats
 *        des calculs déjà effectués dans un objet indexé par le nombre.
 *        Grâce à cela, on pourra faire un suite(250) sans trembler.
 */

// Cerveau de l'opération
var resultsMemory = [
  {suiteNumber: 0, suiteResult: 0},
  {suiteNumber: 1, suiteResult: 1},
  {suiteNumber: 2, suiteResult: 1}
];


function suite(int) {
  // On retournera cette variable qui contiendra le résultat de la suite demandée
  var sequenceResult;

  // On test et récupère le résultat de la suite(int) s'il éxiste déjà
  var existingSequence = $.map(resultsMemory, function(val) {
    if(val.suiteNumber === int) return val;
  });

  // S'il éxiste dans notre mémoire on se contente de le copier dans la var 'sequenceResult'
  if (existingSequence.length > 0) {
    console.log('\nLa suite ' + int + ' à déjà été calculée ça tombe bien !');
    sequenceResult = existingSequence[0].suiteResult;
  }
  // Entrer dans ce 'else' signifie que la séquence recherchée est inconnue
  else {
    // On récupère les deux dernières suites connues qui nous servirons de point de départ
    var last2Sequences = resultsMemory.slice(-2);

    // On se créé deux 'array' qui contiennent les informations de nos deux dernières séquences connues. On s'en servira pour effectuer tout nos calculs
    var beforeLastSequence = [last2Sequences[0].suiteNumber, last2Sequences[0].suiteResult];
    var lastSequence = [last2Sequences[1].suiteNumber, last2Sequences[1].suiteResult];

    // Une variable temporaire pour pouvoir transférer des données entre les deux séquences du style : temp=A, A=B et B=temp
    var tempValue;

    console.log('\nSéquences connues :    Avant dernière =', beforeLastSequence, '     Dernière =', lastSequence);

    // On démarre le calcul de la suite par push la suite(n+1) dans la mémoire et à partir de la on fait les calculs nécessaires pour obtenir tous les résultats d'une suite de Fibonacci jusqu'à atteindre notre 'int'
    for (var i = lastSequence[0] + 1; i <= int; i++) {
      resultsMemory.push({suiteNumber: i, suiteResult: beforeLastSequence[1] + lastSequence[1]});

      tempValue = beforeLastSequence[1];
      beforeLastSequence[1] = lastSequence[1];
      lastSequence[1] += tempValue;
    }

    sequenceResult = lastSequence[1];
  }

  console.log('Résultat de la suite ' + int + ' : ' + sequenceResult);
  return sequenceResult;
}






/*
 * Tests
 */
var container = document.getElementById('container');
if (
  suite(0) === 0
  && suite(1) === 1
  && suite(2) === 1
  && suite(3) === 2
  && suite(4) === 3
  && suite(5) === 5
  && suite(6) === 8
  && suite(7) === 13
  && suite(8) === 21
  && suite(9) === 34
  && suite(10) === 55
  && suite(11) === 89
  && suite(12) === 144
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}
