//backend logic:

$(document).ready(function(){
  $("#beep-boop").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#inputNum").val());
    // var numberGame = function(userInput) {
      var numToArray = function(userInput) {
        var numArray = [0];
          for (var i = 0; i <=userInput; i++) {
            numArray.push(i);
            console.log(numArray);
        // for (var iNumArray = 0; iNumArray < numArray.length; iNumArray ++) {
        //   if (numArray[iNumArray] === 0) {
        //     numArray[iNumArray] = "Beep!"
        //   } else if (numArray[iNumArray] === 1) {
        //     numArray[iNumArray] = "Boop!"
        //   } else if ((numArray[iNumArray]) % 3 === 0) {
        //     numArray[iNumArray] = "I'm sorry, Dave. I'm afraid I can't do that."
        //   }
        // } //iNum for-loop
      } //numArray for-loop
  } //numToArray
// } //numberGame

//frontend logic:

    // var result = numberGame(userInput);



  }); //event
}); //doc ready
