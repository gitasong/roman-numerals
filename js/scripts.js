// business logic goes here
function singleDigit(number) {
  var result = "";
  if (number === 1) {
    result = "I";
  } else if (number === 5) {
    result = "V";
  } else if (number === 10) {
    result = "X";
  } else if (number === 50) {
    result = "L";
  } else if (number === 100) {
    result = "C";
  } else if (number === 500) {
    result = "D";
  } else if (number === 1000) {
    result = "M";
  };
  console.log(result);
  return result;
};

// for rank -1
function onesRank(digit) {
  var result = "";
  if (digit < 4) {
    result = "I".repeat(digit);
  } else if (digit === 4) {
    result = "IV";
  } else if (digit === 5) {
    result = "V";
  } else if (digit < 9) {
    result = "V" + "I".repeat(digit % 5);
  } else if (digit === 9) {
    result = "IX";
  } else if (digit === 10) {
    result = "X";
  };
  console.log(result);
  return result;
};

// for rank -2
function tensRank(digit) {
  var result = "";
  if (digit < 4) {
    result = "X".repeat(digit);
  } else if (digit === 4) {
    result = "XL";
  } else if (digit === 5) {
    result = "L";
  } else if (digit < 9) {
    result = "L" + "X".repeat(digit % 5);
  } else if (digit === 9) {
    result = "XC";
  } else if (digit === 10) {
    result = "C";
  };
  console.log(result);
  return result;
};

// for rank -3
function hundredsRank(digit) {
  var result = "";
  if (digit < 4) {
    result = "C".repeat(digit);
  } else if (digit === 4) {
    result = "CD";
  } else if (digit === 5) {
    result = "D";
  } else if (digit < 9) {
    result = "D" + "C".repeat(digit % 5);
  } else if (digit === 9) {
    result = "CM";
  } else if (digit === 10) {
    result = "M";
  };
  console.log(result);
  return result;
};

// for rank -4
function thousandsRank(digit) {
  var result = "";
  if (digit < 4) {
    result = "M".repeat(digit);  // X  // C
  };
  return result;
};

function multiDigit(number) {
  var numberArray = number.toString().split("");  // converts number to string, then splits string into array of digits
    // console.log(numberArray);

    if (isNaN(number) || number >= 4000) {
      alert("Please enter a number less than 4000.");
    } else if (numberArray.length === 1) {
      var onesDigit = parseInt(numberArray[0]);
        // console.log(onesDigit);

      var giantConcat = onesRank(onesDigit);

    } else if (numberArray.length === 2) {
      var onesDigit = parseInt(numberArray[1]);
        // console.log(onesDigit);
      var tensDigit = parseInt(numberArray[0]);
        // console.log(tensDigit);

      var giantConcat = tensRank(tensDigit) + onesRank(onesDigit);

    } else if (numberArray.length === 3) {
      var onesDigit = parseInt(numberArray[2]);
        // console.log(onesDigit);
      var tensDigit = parseInt(numberArray[1]);
        // console.log(tensDigit);
      var hundredsDigit = parseInt(numberArray[0]);
        // console.log(hundredsDigit);

      var giantConcat = hundredsRank(hundredsDigit) + tensRank(tensDigit) + onesRank(onesDigit);

    } else if (numberArray.length === 4) {
      var onesDigit = parseInt(numberArray[3]);
        // console.log(onesDigit);
      var tensDigit = parseInt(numberArray[2]);
        // console.log(tensDigit);
      var hundredsDigit = parseInt(numberArray[1]);
        // console.log(hundredsDigit);
      var thousandsDigit = parseInt(numberArray[0]);
        // console.log(thousandsDigit);
      var giantConcat = thousandsRank(thousandsDigit) + hundredsRank(hundredsDigit) + tensRank(tensDigit) + onesRank(onesDigit);
    };

  // console.log(giantConcat);
  return giantConcat;
};

// front-end logic goes here
$(document).ready(function() {
  $("#roman").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number-string").val());
    // console.log(number);
    // numCheck(number);
    // singleDigit(number);
    // multiSymbol(number);
    $("#result").text(multiDigit(number));
  });
});
