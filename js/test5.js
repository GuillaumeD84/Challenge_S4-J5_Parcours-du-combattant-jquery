/*
 * Exo5
 *
 * jQuery UI
 * Créer un slider (jQuery ui slider) de prix allant de 0 à 100€
 * Et écrire dans #result l'écart de la fourchette choisie (par exemple,
 * si le slider de prix est entre 20€ et 90€, inscrire '70€' dans #result)
 */

var app = {
  init: function() {
    app.createRangeSlider();
    app.displaySliderRange();
  },
  // Utilisation de la librarie jQuery UI pour la création d'un slider
  createRangeSlider: function() {
    // Inspiré du code à cette adressehttp://jqueryui.com/slider/#range
    $('#slider').slider({
      // On set le slider sur le mode 'range'
      range: true,
      // Valeurs min et max du slider
      min: 0,
      max:100,
      // Valeurs par défaut
      values: [0, 100],
      // Event se déclenchant lorsque l'on manipule le slider. On va s'en servir pour mettre à jour le texte à l'écran
      slide: function(event, ui) {
        var min = ui.values[0];
        var max = ui.values[1];
        var fourchette = max - min;
        var espaceDeFaconSale = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0';

        $('#result').text('-[' + min + ']- ... ' + espaceDeFaconSale + '>- ' + fourchette + ' -<' + espaceDeFaconSale + ' ... -[' + max + ']-');
      }
    });
  },
  // Affiche le texte de base à l'écran
  displaySliderRange: function() {
    var min = $('#slider').slider('values', 0);
    var max = $('#slider').slider('values', 1);
    var espaceDeFaconSale = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0';

    $('#result').text('-[' + min + ']- ... ' + espaceDeFaconSale + '>- ' + (max - min) + ' -<' + espaceDeFaconSale + ' ... -[' + max + ']-');
  }
};

document.addEventListener('DOMContentLoaded', app.init);
