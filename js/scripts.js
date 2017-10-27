//backend logic:
var backendFunction = function(anyNumber) {
  var numArray = [];
    for (var i = 0; i <=anyNumber; i++) {
      numArray.push(i);
    } //numArray for-loop

    for (var iNumArray = 0; iNumArray < numArray.length; iNumArray ++) {
      if (numArray[iNumArray] === 0) {
        numArray[iNumArray] = "Beep!"
      } else if (numArray[iNumArray] === 1) {
        numArray[iNumArray] = "Boop!"
      } else if ((numArray[iNumArray]) % 3 === 0) {
        numArray[iNumArray] = "I'm sorry, Dave. I'm afraid I can't do that."
      }
    } //iNum for-loop
    return numArray;
  } //backendFunction


//frontend logic
$(document).ready(function(){
  $("#beep-boop").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#inputNum").val());
    var result = backendFunction(userInput);

    result.forEach(function(li) {
      $("#returnList").append("<li>" + li + "</li>")
      $("form")[0].reset();
      $("#returnList").submit(function() {
        $(this).remove();
      });

    });



  }); //event
}); //doc ready
