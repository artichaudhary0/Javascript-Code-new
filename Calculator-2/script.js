const buttons = [
  "C",
  "1",
  "2",
  "3",
  "+",
  "4",
  "5",
  "6",
  "-",
  "7",
  "8",
  "9",
  "*",
  "/",
  "0",
  ".",
  "=",
];

function clearScreen() {
  const display = document.getElementById("display");
  display.value = "";
}

function appendChild(value) {
  const display = document.getElementById("display");
  if (value === "=") {
    try {
      display.value = evaluate(display.value);
    } catch (error) {}
  } else if (value === "C") {
    display.value = "";
  } else {
    display.value += value;
  }
}

function evaluate(expression) {
  expression = expression.replace(`\s+/g`, "");
  let result = 0;
  let operator = "+";
  let currentNumber = "";

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    123;
    if (/\d/.test(char) || char === ".") {
      currentNumber += char; // build current no.
    } else if (["+", "-", "*", "/", "%"].includes(char)) {
      if (currentNumber) {
        result = performOpertion(result, parseFloat(currentNumber), operator);
        currentNumber = ""; // reset
      }
      operator = char;
    }
  }
  if (currentNumber) {
    result = performOpertion(result, parseFloat(currentNumber), operator);
  }
  return result;
}

function performOpertion(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "error";
  }
}

function createBurtton(value) {
  const button = document.createElement("button");
  button.textContent = value;
  button.addEventListener("click", () => appendChild(value));
  return button;
}

function setCalucalor() {
  const buttonContainer = document.getElementById("button");

  buttons.forEach((value) => {
    const button = createBurtton(value);
    buttonContainer.appendChild(button);
  });
}

setCalucalor();
