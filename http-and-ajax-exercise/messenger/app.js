function attachEvents() {
  const baseURL = "http://localhost:3030/jsonstore/messenger/";

  const [author, content, submit, refresh] = document.querySelectorAll("input");
  const messagesTextArea = document.getElementById("messages");

  submit.addEventListener("click", sendMessage);

  async function sendMessage() {
    const name = author.value;
    const message = content.value;

    if (name === "" || message === "") {
      return;
    }

    await fetch(baseURL, {
      method: "POST",
      body: JSON.stringify({ author: name, content: message }),
    });

    author.value = "";
    content.value = "";
  }

  refresh.addEventListener("click", getAllMessages);

  async function getAllMessages() {
    messagesTextArea.textContent = "";

    const response = await fetch(baseURL);
    const messages = await response.json();

    for (const message of Object.values(messages)) {
      messagesTextArea.textContent += `${message.author}: ${message.content}\n`;
    }

    messagesTextArea.textContent = messagesTextArea.textContent.trim();
  }
}

attachEvents();
