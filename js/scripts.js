$(function() {
  $("button").click(function(event){
    var name = $("#name").val();
    var website = $("select#style").val();
    var size = $("select#size").val();
    var mobile = $("input:radio[name=mobile]:checked").val();
    var system = $("input:radio[name=os]:checked").val();
    var freeTime = $("select#time").val();

    if (website === "look" && freeTime !== "games" && "size" !== "large") {
      $('#trackid').text("CSS/Design");
    } else if (size === "large" && freeTime !== "games" && website !== "look") {
      $('#trackid').text("C#/.Net");
    } else if (mobile === "yes" && freeTime === "busy" && website !== "look" && website !== perform) {
      $('#trackid').text("Java/Android");
    }




    $(".name").text(name);
    $("#result").show();
    event.preventDefault();

  });
});
