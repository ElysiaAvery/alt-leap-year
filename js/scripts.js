//Business Logic

var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

//User Interface Logic

$(document).ready(function() {
  $("#input form").submit(function(event) {
    var year = parseInt($("input#year").val());
    var output = leapYear(year);

    $(".year").text(year);

    if (!output) {
      $(".output").text("is not");
    } else {
      $(".output").text("is");
    }

    $("#output").show();
    event.preventDefault();
  });

  $("#reset").click(function(event) {
    $("#output").hide();
  });

});
