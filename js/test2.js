/*
 * Exo2
 *
 * Quand on clique sur le bouton OK
 * On doit afficher la div#message
 */
$('button').on('click',
  function(evt) {
    evt.preventDefault();
    $('#message').removeClass('hidden');
  }
);
