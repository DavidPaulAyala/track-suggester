$(function() {
  $("button").click(function(event){
    event.preventDefault();
    var name = $("#name").val();


    $(".name").text(name);



    $("#result").show();

  });
});
