function toggle() {
  let button = document.getElementsByClassName("button")[0];
  let hiddenText = document.getElementById("extra");

  if (hiddenText.style.display === "none") {
    hiddenText.style.display = "block";
    button.textContent = "Less";
  } else {
    hiddenText.style.display = "none";
    button.textContent = "More";
  }
}
