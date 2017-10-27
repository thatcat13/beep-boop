//backend logic:
var backendFunction = function(numArray) {
  var numArray = [];
  for (var i = 0; i <=numArray; i++) {
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
} //backendFunction

//frontend logic
$(document).ready(function(){
  $("#beep-boop").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#inputNum").val());
    var result = backendFunction(userInput);

    console.log(result);
  }); //event
}); //doc ready
