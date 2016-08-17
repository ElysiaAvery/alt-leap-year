//Business Logic

var leapYear = function(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

//User Interface Logic

$(document).ready(function() {
  $("#input form").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var output = leapYear(year);
    $("#output").text(output);
  });

  $("#reset").click(function(event) {
    $("#output").hide();
  });

});
