let a = parseFloat(prompt("Enter the first number:"));
let b = parseFloat(prompt("Enter the second number:"));
let operator = prompt("Enter the operator (+, -, *, /):");

switch (operator) {
  case '+':
    console.log(`Result is ${a+b}`);
    break;
  case '-':
    console.log(`Result is ${a - b}`);
    break;
  case '*':
    console.log(`Result is ${a * b}`);
    break;
  case '/':
    if (b == 0) {
        console.log("Cannot divide by zero.");
    } else {
        console.log(`Result is ${a / b}`);
    }
    break;
  default:
    console.log("Invalid operator entered.");
}