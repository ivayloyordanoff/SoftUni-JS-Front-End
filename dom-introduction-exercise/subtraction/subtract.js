function subtract() {
  let num1 = document.getElementById("firstNumber").value;
  let num2 = document.getElementById("secondNumber").value;

  let subtraction = Number(num1) - Number(num2);

  let result = document.getElementById("result");

  result.textContent = subtraction;
}
