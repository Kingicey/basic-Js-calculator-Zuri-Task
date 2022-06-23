num1 = prompt("Enter first number: ");

num2 = prompt("Enter second number: ");

operator = prompt("Choose operator: +, -, /, *...");

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
