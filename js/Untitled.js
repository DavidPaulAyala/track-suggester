$(document).ready(function(){



  $("#questions form").submit(function(event) {
    var humanInput = parseInt($("select#human").val());
    var forceInput = parseInt($("select#force").val());
    var goodevilInput = parseInt($("select#goodevil").val());
    var weaponInput = parseInt($("select#weapon").val());

    var charMatch = "Nerf Herder";

    if (humanInput === 1 && goodevilInput === 0) {
      if (forceInput === 0) {
        charMatch = "Yoda";
      }
      else if (weaponInput === 0) {
        charMatch = "Chewbacca";
      }
      else if (weaponInput === 3) {
        charMatch = "R2D2";
      }
      else if (weaponInput === 5) {
        charMatch = "C3PO";
      }
    }

    else if (humanInput === 0){
      if (forceInput === 0) {
        if (goodevilInput === 1) {
          charMatch = "Darth Vader";
        }
        else {
          charMatch = "Luke Skywalker";
        }
      }
      else {
        if (goodevilInput === 1) {
          charMatch = "Boba Fett";
        }
        else {
          charMatch = "Han Solo or Pricess Leia";
        }
      }
    }


    $("#swchar").text(charMatch);
    $("#formresponse").show();
    event.preventDefault();
  });

  $("#reset").click(function(event) {
    $("#formresponse").hide();
  });

});
