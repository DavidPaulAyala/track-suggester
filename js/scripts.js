$(function() {
  $("button").click(function(event){
    var name = $("#name").val();
    var website = parseInt($("select#style").val());
    var size = parseInt($("select#size").val());
    var mobile = parseInt($("input:radio[name=mobile]:checked").val());
    var system = $("input:radio[name=os]:checked").val();
    var freeTime = parseInt($("select#time").val());

    var track = "TEST";



    $(".name").text(name);
    $("#trackid").text(track);
    $("#result").show();
    event.preventDefault();

  });
});
