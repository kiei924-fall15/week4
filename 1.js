// This code runs when the page loads
$(function() {

  // Write a function that yells (e.g. TACOS!!!!!)
  var yell = function(string) {
    // change this so it works
    // .toUpperCase() is a built-in function
    return string.toUpperCase() + "!!!!!!!!!!!!!!";
  }
  
  window.alert(yell("tacos"));
  window.alert(yell("bacon"));
  window.alert(yell("snickers"));
})