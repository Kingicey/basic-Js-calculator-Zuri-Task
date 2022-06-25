let num1 = parseFloat(prompt("Enter first number: "));

let num2 = parseFloat(prompt("Enter second number: "));

let operator = prompt("Choose operator: +, -, /, *...");

if (operator === "+") {
  result = num1 + num2;
  console.log(`${num1} ${operator} ${num2} equals ${result}`);
} else if (operator === "-") {
  result = num1 - num2;
  console.log(`${num1} ${operator} ${num2} equals ${result}`);
} else if (operator === "*") {
  result = num1 * num2;
  console.log(`${num1} ${operator} ${num2} equals ${result}`);
} else if (operator === "/") {
  result = num1 / num2;
  console.log(`${num1} ${operator} ${num2} equals ${result}`);
} else {
  console.log("Enter valid operator");
}
