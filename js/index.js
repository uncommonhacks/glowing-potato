$( function() {
  // class draggable is draggable
  $( ".draggable" ).draggable();

  // class hider button hides parent div
  $(".hider").click(function(){
    $(this).parents('div').hide()
  }); 
});

function hideDiv(divId) {
   $("#"+divId).hide();
}
// function startCubeGame() {
//   hideDiv('teaser-box');
//   // CUBE GAME GOES HERE
// }