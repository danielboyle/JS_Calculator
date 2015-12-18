function $(id_selector) {
  return document.getElementById(id_selector);
}

window.onload = function() {
  $("calculator").onsubmit = function(e) {
    e.preventDefault();
    var numerator = $("numerator"),
        denominator = $("denominator"),
        num1 = +numerator.value,
        num2 = +denominator.value,
        oper = $("operator").value,
        result;

    function resetForm() {
      numerator.setAttribute("placeholder", num1);
      numerator.value = null;
      numerator.focus()
      denominator.setAttribute("placeholder", num2);
      denominator.value = null;
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

    $("result").innerHTML = result;
    resetForm();
  };
};
