$( function() {
  $( ".draggable" ).draggable();
} );
function hideDiv(divId) {
   $("#"+divId).hide();
}
function startCubeGame() {
  hideDiv('teaser-box');
  // CUBE GAME GOES HERE
}