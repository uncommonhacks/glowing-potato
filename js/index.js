$( function() {
  // class window is draggable
  $(".window").draggable({ 
    handle: ".toolbar",
    stack: ".window",
    // containment: ".page-container"
   });

  // class hider button hides parent div
  $(".hider").click(function(){
    $(this).parent('.toolbar').parent('.window').hide();
  }); 

  $(".launcher-icon").click(function(){
    var launches = $(this).data("launches"); 
    $("#"+launches).removeClass('hidden');
    $("#"+launches).show();
  }); 

  $(".desktop-icon").click(function(){
    var launches = $(this).data("launches"); 
    $("#"+launches).removeClass('hidden');
    $("#"+launches).show();
  }); 

  $("#start-game").on('click touch', function(){
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

function showDiv(divId) {
  $("#"+divId).show();
}