//backend logic:
var backendFunction = function(anyNumber) {
  var singleFunction = function(singleNumber) {
    if (singleNumber.length === 1) {
    var singlenumArray = [];
      for (var i = 0; i <=anyNumber; i++) {
        numArray.push(i);
    }

//this is to convert single digits into an array:
    var number = 9;
    var singleNumArray = [];
    for (var i = 0; i <=number; i++) {
      singleNumArray.push(i);
    }
    console.log(singleNumArray);





  } //numArray for-loop
    for (var iNumArray = 0; iNumArray < numArray.length; iNumArray ++) {

      if (numArray.includes(0)) {
        numArray[iNumArray] = "Beep!"
      } else if (numArray.includes(1)) {
        numArray[iNumArray] = "Boop!"
      }

      // if ((numArray[iNumArray]).includes(%3 === 0)) {
      //   numArray[iNumArray] = "I'm sorry, Dave. I'm afraid I can't do that."

    } //iNum for-loop

    return numArray;
} //backendFunction



//frontend logic
$(document).ready(function(){
  $("#beep-boop").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#inputNum").val());
    $("#returnList").empty();
    var result = backendFunction(userInput);

    result.forEach(function(li) {
      $("#returnList").append("<li>" + li + "</li>")
      $("form")[0].reset();
    });
  }); //event
}); //doc ready
