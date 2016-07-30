$( function() {
  // class window is draggable
  $(".window").draggable({ handle: ".toolbar" });

  // class hider button hides parent div
  $(".hider").click(function(){
    $(this).parent('.toolbar').parent('.window').hide()
  }); 
});

function hideDiv(divId) {
   $("#"+divId).hide();
}
// function startCubeGame() {
//   hideDiv('teaser-box');
//   // CUBE GAME GOES HERE
// }