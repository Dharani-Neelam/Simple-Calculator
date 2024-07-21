function calc(btn) {
  let btnTitle = btn.innerHTML;

  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);
  let c = 0;
  if (btnTitle == "+") {
    c = a + b;
  } else if (btnTitle == "-") {
    c = a - b;
  } else if (btnTitle == "*") {
    c = a * b;
  } else if (btnTitle == "/") {
    c = a / b;
  } else if (btnTitle == "**") {
    c = a ** b;
  } else if (btnTitle == "%") {
    c = a % b;
  }

  document.getElementById("c").value = c;
}
