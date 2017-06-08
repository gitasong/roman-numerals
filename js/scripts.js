// business logic goes here
if (isNaN(number) === true) {
  alert("Please enter a number.");
}



// front-end logic goes here
$(document).ready(function() {
  $("#roman").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number-string").val());
    console.log(number);


  });
});
