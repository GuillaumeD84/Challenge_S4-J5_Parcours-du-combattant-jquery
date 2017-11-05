/*
 * Exo3
 *
 * Ecouter le clavier, et inscrire dans #container le nombre de touches appuyés
 * BONUS: la touche entrée compte pour +10
 */
$(document).keypress(jeCompteEtJoctroie1PointQueJinscrisDansLeContainerQuandTuAppuisSurUneToucheDeTonClavierMaisLaToucheEntreeDonne10PointsetPasQunSeulPoint);

var points = 0;
var pointsCounter = $('#container');

pointsCounter.text('Tu as ' + points + ' points !');

function jeCompteEtJoctroie1PointQueJinscrisDansLeContainerQuandTuAppuisSurUneToucheDeTonClavierMaisLaToucheEntreeDonne10PointsetPasQunSeulPoint(evt) {
  if (evt.key === 'Enter') points += 10;
  else points++;
  pointsCounter.text('Tu as ' + points + ' points !');
}
