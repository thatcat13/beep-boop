//backend logic:
var beepBoop = function(anyNumber) {
  var numArray = [];
    for (var i = 0; i <=anyNumber; i++) {
      numArray.push(i);
    }

    for (var i = 1; i < numArray.length; i++) {
      if (numArray[i] % 3 === 0) {
        numArray[i] = "I'm sorry, Dave. I'm afraid I can't do that."
      }
    }

    var stringArray = numArray.map(function(x) {
      return x.toString();

    });

    for (var i = 0; i < stringArray.length; i++) {
      if (stringArray[i].includes("0") {
        stringArray[i] = "Beep!";
      } else if (stringArray[i].includes("1") {
        stringArray[i] = "Boop!";
      }
    }
    return stringArray;
} //backendFunction



// frontend logic
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
