$(function() {
  $("button").click(function(event){
    var name = $("#name").val();
    var website = parseInt($("select#reaction").val());
    var size = parseInt($("select#size").val());
    var mobile = parseInt($("input:radio[name=mobile]:checked").val());
    var system = $("input:radio[name=os]:checked").val();
    var freeTime = parseInt($("select#time").val());

    if (website + freeTime <= 0) {
    $('#trackid').text('CSS/Design');
    } else if (website > 0 & mobile >= 1) {
    $('#trackid').text('Java/Android');
    } else if (website > 0 & size >= 1 & mobile <1) {
    $('#trackid').text('C#/.Net');
    }

    $(".name").text(name);
    $("#result").show();
    event.preventDefault();

 });
});
