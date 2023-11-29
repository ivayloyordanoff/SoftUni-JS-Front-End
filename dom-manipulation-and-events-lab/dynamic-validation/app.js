function validate() {
  document.getElementById("email").addEventListener("change", onChange);

  function onChange(e) {
    let pattern = /[a-z]+@[a-z]+\.[a-z]+/g;
    let element = e.currentTarget;

    if (!pattern.test(element.value)) {
      element.classList.add("error");
    } else {
      element.classList.remove("error");
    }
  }
}
