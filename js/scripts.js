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

function multiSymbol(number) {
  var result = "";
  var primitives = [[1, "I"], [2, "II"], [3, "III"], [4, "IV"], [5, "V"], [6, "VI"], [7, "VII"], [8, "VIII"], [9, "IX"], [10, "X"]];
  // var numberArray = number.toString().split("");
  //   console.log(numberArray);
  if (number < 4) {
    result = "I".repeat(number);
  } else if (number === 4) {
    result = "IV";
  } else if (number === 5) {
    result = "V";
  } else if (number < 9) {
    result = "V" + "I".repeat(number % 5);
  } else if (number === 9) {
    result = "IX";
  }
  return result;
};



// front-end logic goes here
$(document).ready(function() {
  $("#roman").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number-string").val());
    console.log(number);
    // numCheck(number);
    // singleDigit(number);
    // multiSymbol(number);
    $("#result").text(multiSymbol(number));
  });
});
