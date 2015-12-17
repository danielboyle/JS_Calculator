$(document).ready(function() {

  $("form").on("submit", function(e) {
    e.preventDefault();
    var num1 = +$("#numerator").val(),
        num2 = +$("#denominator").val(),
        oper = $("#operator").val(),
        result;

    function resetForm() {
      $("#numerator").attr("placeholder", num1).val("").focus();
      $("#denominator").attr("placeholder", num2).val("");
    };

    switch(oper) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
    }
    
    $("h1").text(result);
    resetForm();
  });
});