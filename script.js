const calcText = document.getElementById("calc-screen-text");
const operation = [];
let parenthesesCount = 0;

function display(elementToDisplay) {
  calcText.textContent += elementToDisplay;
  operation.push(elementToDisplay);
}

function displayParentheses() {
  if (parenthesesCount === 0) {
    display("(");
    parenthesesCount++;
  } else {
    display(")");
    parenthesesCount = 0;
  }
}

function formatOperation() {
  for (let i = 0; i < operation.length; i++) {
    switch (operation[i]) {
      case "−":
        operation[i] = "-";
        break;
      case "×":
        operation[i] = "*";
        break;
      case "÷":
        operation[i] = "/";
        break;
      default:
        operation[i] = operation[i];
    }
  }
  return operation.join("");
}

function calculate() {
  try {
    const resolvedOperation = math.evaluate(formatOperation());
    calcText.textContent = resolvedOperation;
    operation.length = 0;
    operation.push(calcText.textContent);
  } catch (error) {
    calcText.textContent = "Syntax Error";
  }
}

function clearScreen() {
  calcText.textContent = "";
  operation.length = 0;
}

function backspace() {
  calcText.textContent = calcText.textContent.slice(0, -1);
  operation.pop();
}

function toNegative() {
  const numberToConvert = operation.pop();
  if (Number(numberToConvert)) {
    operation.push(numberToConvert * -1);
  } else {
    operation.push(numberToConvert);
  }
  calcText.textContent = operation.join("");
}
