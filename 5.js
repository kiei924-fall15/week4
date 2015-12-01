// This code runs when the page loads
$(function() {

  $("#do-something").on("click", function(event) {
    event.preventDefault();
    console.log("YAY!");
  });

  $("#do-something").on("mouseover", function(event) {
    event.preventDefault();
    console.log("BOO!");
  });


})