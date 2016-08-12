$(function() {
  $("button").click(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var website = parseInt($("#style").val());
    var size = parseInt($("#size").val());
    var mobile = parseInt($("input:radio[name=mobile]:checked").val());
    var system = $("input:radio[name=os]:checked").val();
    var freeTime = parseInt($("#time").val());
    var track = "notenoughinfo";

    $(".name").text(name);
    $("#trackid").text(track);
    $("#result").show();

  });
});
