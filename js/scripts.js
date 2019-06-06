$(function(){
  $("#heightform").submit(function(event){
    var height = parseInt($("input#heightInput").val());
    $(".lowheight, .mediumheight, .highheight").removeClass("highlightedRide");
    if (height > 60){
      $(".highheight").addClass("highlightedRide");
      $(".mediumheight").addClass("highlightedRide");
      if(height < 70){
      $(".lowheight").addClass("highlightedRide");
      }
    } else {
      $(".lowheight").addClass("highlightedRide");
    }
    event.preventDefault();
  });
});
