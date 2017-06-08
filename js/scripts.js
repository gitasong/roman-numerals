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

function onesRank(digit) {
  var result = "";
  // var primitives = [[1, "I"], [2, "II"], [3, "III"], [4, "IV"], [5, "V"], [6, "VI"], [7, "VII"], [8, "VIII"], [9, "IX"], [10, "X"]];

// for rank -1
  if (digit < 4) {
    result = "I".repeat(digit);  // X  // C
  } else if (digit === 4) {
    result = "IV";  // XL  // CD
  } else if (digit === 5) {
    result = "V";  // L  // D
  } else if (digit < 9) {
    result = "V" + "I".repeat(digit % 5);  // LX  //  DC
  } else if (digit === 9) {
    result = "IX";  // XC  // CM
  } else if (digit === 10) {
    result = "X";
  };
  console.log(result);
  return result;
};

function tensRank(digit) {
  // for rank -2
  var result = "";
  if (digit < 4) {
    result = "X".repeat(digit);  // X  // C
  } else if (digit === 4) {
    result = "XL";  // XL  // CD
  } else if (digit === 5) {
    result = "L";  // L  // D
  } else if (digit < 9) {
    result = "L" + "X".repeat(digit % 5);  // LX  //  DC
  } else if (digit === 9) {
    result = "XC";  // XC  // CM
  } else if (digit === 10) {
    result = "C";
  };
  console.log(result);
  return result;
};

function hundredsRank(digit) {
// for rank -3
  var result = "";
  if (digit < 4) {
    result = "C".repeat(digit);  // X  // C
  } else if (digit === 4) {
    result = "CD";  // XL  // CD
  } else if (digit === 5) {
    result = "D";  // L  // D
  } else if (digit < 9) {
    result = "D" + "C".repeat(digit % 5);  // LX  //  DC
  } else if (digit === 9) {
    result = "CM";  // XC  // CM
  } else if (digit === 10) {
    result = "M";
  };
  console.log(result);
  return result;
};

function thousandsRank(digit) {
  // for rank -4
  var result = "";
  if (digit < 4) {
    result = "M".repeat(digit);  // X  // C
  };
  return result;
};

function multiDigit(number) {
  // var concatRoman = [];
  var numberArray = number.toString().split("");  // converts number to string, then splits string into array of digits
    console.log(numberArray);
  // for (digit = 0; digit <= numberArray.length; digit += 1) {  // looping through digits of number in array
    // concatRoman += multiSymbol(parseInt(numberArray[digit]));  // concatenating Roman equivalents of each digit
    // console.log(concatRoman);
    var onesDigit = parseInt(numberArray[3]);
      console.log(onesDigit);
    var tensDigit = parseInt(numberArray[2]);
      console.log(tensDigit);
    var hundredsDigit = parseInt(numberArray[1]);
      console.log(hundredsDigit);
    var thousandsDigit = parseInt(numberArray[0]);
      console.log(thousandsDigit);
    var giantConcat = thousandsRank(thousandsDigit) + hundredsRank(hundredsDigit) + tensRank(tensDigit) + onesRank(onesDigit);
  // };
  console.log(giantConcat);
  return giantConcat;
};

// numberArray.length - (numberArray.index + 1)
// -(numberArray.index + 1)
// nunberArray[-1] * 1
// numberArray[-2] * 10
// numberArray[-3] * 100
// numberArray[-4] * 1000



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
