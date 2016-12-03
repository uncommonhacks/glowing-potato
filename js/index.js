$( function() {

  // bring intro window to front
  $('#intro-window').css('z-index', 160);
  $('#words-window').css('z-index', 100);
  $('#supporter-window').css('z-index', 150);
  //TO BE USED FOR RANDOM BACKGROUND
  var colors = ["#EC5958", "#8BCFB7", "#69BAE8", "#F06498", "#B357A1", "#C1A9D2", "#91B0DC"];
  var num = Math.floor(Math.random() * 7);
  document.body.style.background = colors[num];
  
  if ($(window).width() >= 768) {
    $(".window").draggable({ 
      // class window is draggable
      handle: ".toolbar",
      stack: ".window",
      distance: 0,
      containment: "window"
    });
  }

  // class hider button hides parent div
  $(".hider").click(function(){
    $(this).parent('.toolbar').parent('.window').hide();
  }); 

  $(".launcher-icon").click(function(){
    var launches = $(this).data("launches"); 
    if (launches === 'trail-window') {
      showTrail();
    }
    $("#"+launches).removeClass('hidden');
    $("#"+launches).css('z-index', 400);
    $("#"+launches).show();
  }); 

  $(".desktop-icon").click(function(){
    var launches = $(this).data("launches");
    $("#"+launches).removeClass('hidden');
    $("#"+launches).css('z-index', 300);
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

function showTrail() {
  var iframe = $("#trail-iframe");
  iframe.attr("src", iframe.data("src"));
  iframe.show();
  document.getElementById("trail-iframe").focus();
}


