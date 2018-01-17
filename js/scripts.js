$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var inputText = $("#input").val();
    var inputArray = inputText.split("");
    for (var i=0 ; i < inputArray.length ; i++) {
      if (inputArray[i] === 'a' || inputArray[i] === 'e' || inputArray[i] === 'i' || inputArray[i] === 'o' || inputArray[i] === 'u') {
        inputArray[i] = '-'
      }
    }
    var output = inputArray.join('');
    console.log(output);
    $("#output").append(output);
  });
});
