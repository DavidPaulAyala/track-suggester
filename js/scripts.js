$(function() {
  $("button").click(function(event){
    var name = $("#name").val();
    var website = parseInt($("select#reaction").val());
    var size = $("select#size").val();
    var mobile = $("input:radio[name=mobile]:checked").val();
    var system = $("input:radio[name=os]:checked").val();
    var freeTime = $("select#time").val();

    if (website === 0) {
    $('#trackid').text("CSS/Design");
    } else if (website === 1) {
    $('#trackid').text('Java/Android');
    } else if (website > 1) {
    $('#trackid').text('C#/.Net');
    }


    $(".name").text(name);
    $("#result").show();
    event.preventDefault();

 });
});
