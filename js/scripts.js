//Business logic

function beepBoop(input) {
  let inputArray = [];
  for (var i = 0; i <= input; i++) {
    inputArray.push(i);
  }
  let counterArray = inputArray.map(String);
  let finalArray = inputArray.map(String);
  counterArray.map(function (element) {
    for (var i = 0; i <= element.length; i++) {
      if (element[i] === "3") {
        finalArray[element] = "Won't you be my neighbor?";
        console.log(finalArray);
      }
      else if (element[i] === "1" && !(/[2]/g.test(element)) && !(/[3]/g.test(element))) {
        finalArray[element] = "Beep!";
      }
      else if (element[i] === "2" && !(/[3]/g.test(element))) {
        finalArray[element] = "Boop!";
      }
      else if (element[i] === "1" && (/[2]/g.test(element)) && !(/[3]/g.test(element))) {
        finalArray[element] = "Boop!";
      }
      else { }
    }
  });
  return finalArray;
}

// UI Logic
$(document).ready(function () {
  $("#submit-form").submit(function (event) {
    console.log(beepBoop(5));
    let testNum = [];
    testNum = beepBoop(5);
    $("#output").empty();
    $("#output").text("Hello " + $("input#username").val().charAt(0).toUpperCase() + $("input#username").val().slice(1) + " check this out this nonsense... \n" + beepBoop($("input#input-number").val()));
    $('#input-number').val('');
    event.preventDefault();
    console.log(testArray);
  });
});