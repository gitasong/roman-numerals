// business logic goes here
var romans = [[1, "I"], [5, "V"], [10, "X"], [50, "L"], [100, "C"], [500, "D"], [1000, "M"]];

function numCheck(number) {
  if (isNaN(number)) {
    alert("Please enter a number.");
  };
};

function singleDigit(number) {
  var result = "";
  if (number === 1) {
    result = "I";
  } else if (number === 5) {
    result = "V";
  };
  return result;
};


// front-end logic goes here
$(document).ready(function() {
  $("#roman").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number-string").val());
    console.log(number);
    numCheck(number);
    singleDigit(number);
    $("#result").text(singleDigit(number));
  });
});
