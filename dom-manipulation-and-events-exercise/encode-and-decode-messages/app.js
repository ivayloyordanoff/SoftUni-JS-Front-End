function encodeAndDecodeMessages() {
  let encodeBtn = document.getElementsByTagName("button")[0];
  let decodeBtn = document.getElementsByTagName("button")[1];
  let encodeTextArea = document.getElementsByTagName("textarea")[0];
  let decodeTextArea = document.getElementsByTagName("textarea")[1];

  encodeBtn.addEventListener("click", encodeMessage);
  decodeBtn.addEventListener("click", decodeMessage);

  function encodeMessage() {
    let message = encodeTextArea.value;
    let newMessage = "";

    for (const char of message) {
      let newChar = String.fromCharCode(char.charCodeAt(char) + 1);
      newMessage += newChar;
    }

    decodeTextArea.value = newMessage;
    encodeTextArea.value = "";
    decodeBtn.disabled = false;
  }

  function decodeMessage() {
    let message = decodeTextArea.value;
    let newMessage = "";

    for (const char of message) {
      let newChar = String.fromCharCode(char.charCodeAt(char) - 1);
      newMessage += newChar;
    }

    decodeTextArea.value = newMessage;
    decodeBtn.disabled = true;
  }
}
