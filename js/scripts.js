//backend logic:
var beepBoop = function(anyNumber) {
  var numArray = [];
    for (var i = 0; i <= anyNumber; i++) {
      numArray.push(i);
    }

    for (var iNumArray = 0; iNumArray < numArray.length; iNumArray ++) {
      if (numArray[iNumArray] % 3 === 0) {
        numArray[iNumArray] = "I'm sorry, Dave. I'm afraid I can't do that."
      }
    }
    var stringArray = numArray.map(function(x) {
      return x.toString();
    });

    for (var iStrArray = 0; iStrArray < stringArray.length; iStrArray ++) {
      if (stringArray[iStrArray] = "0") {
        numArray[iStrArray] = "Beep!"
      } else if (stringArray[iStrArray] = "1") {
        numArray[iNumArray] = "Boop!"
      }
    }
    return stringArray;
} //backendFunction



//frontend logic
$(document).ready(function(){
  $("#beep-boop").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#inputNum").val());
    $("#returnList").empty();
    var result = beepBoop(userInput);

    result.forEach(function(li) {
      $("#returnList").append("<li>" + li + "</li>")
      $("form")[0].reset();
    });
  }); //event
}); //doc ready
