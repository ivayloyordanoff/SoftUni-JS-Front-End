function solve() {
  let input = document.getElementById("text").value.toLowerCase().split(" ");
  let currentCase = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");

  if (currentCase === "Camel Case") {
    result.textContent += input.shift();
    for (let word of input) {
      word = word.split("");
      for (let char of word) {
        result.textContent += char.toUpperCase();
        word.shift();
        break;
      }
      result.textContent += word.join("");
    }
  } else if (currentCase === "Pascal Case") {
    for (let word of input) {
      word = word.split("");
      for (let char of word) {
        result.textContent += char.toUpperCase();
        word.shift();
        break;
      }
      result.textContent += word.join("");
    }
  } else {
    result.textContent = "Error!";
  }
}
