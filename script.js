function addBrackets() {
  let display = document.getElementsByName("display")[0];
  let value = display.value;
  let len = value.length;

  if (len === 0 || value[len - 1] === "+" || value[len - 1] === "-" || value[len - 1] === "*" || value[len - 1] === "/" || value[len - 1] === "(") {
    display.value += "(";
  } else if (value[len - 1] === ")" || !isNaN(value[len - 1])) {
    let brackets = 0;
    for (let i = 0; i < len; i++) {
      if (value[i] === "(") {
        brackets++;
      } else if (value[i] === ")") {
        brackets--;
      }
    }
    if (brackets > 0) {
      display.value += ")";
    }
  }
}