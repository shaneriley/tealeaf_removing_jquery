function $(id_selector) {
  return document.getElementById(id_selector);
}

window.onload = function() {
  $("calculator").onsubmit = function(e) {
    var numerator = +$("numerator").value,
        denominator = +$("denominator").value,
        operator = $("operator").value,
        result = 0;

    e.preventDefault();

    if (operator === "+") {
      result = numerator + denominator;
    }
    if (operator === "-") {
      result = numerator - denominator;
    }
    if (operator === "*") {
      result = numerator * denominator;
    }
    if (operator === "/") {
      result = numerator / denominator;
    }

    $("result").innerHTML = result;
  };
};
