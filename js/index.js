$( function() {
  // class window is draggable
  $(".window").draggable({ handle: ".toolbar" });

  // class hider button hides parent div
  $(".hider").click(function(){
    $(this).parent('.toolbar').parent('.window').hide()
  }); 

  // LAUNCHER ICONS
  $("#game-launcher").click(function(){
    $("#game-window").show();
  });

  $("#start-game").click(function(){
    document.getElementById("start-game").value = "Restart";
    var iframe = $("#game-iframe");
    iframe.attr("src", iframe.data("src")); 
    iframe.show();
    document.getElementById("game-iframe").focus();
});
});

function hideDiv(divId) {
   $("#"+divId).hide();
}
// function startCubeGame() {
//   hideDiv('teaser-box');
//   // CUBE GAME GOES HERE
// }