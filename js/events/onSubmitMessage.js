import { trySendMessage } from "../chat/sendMessage.js";

const chatForm = document.querySelector(".chat form");
const chatInput = chatForm["user-message"];

function enterPressed(event) {
  return event.key === "Enter";
}

chatInput.onkeypress = (e) => {
  e.preventDefault();

  if (enterPressed(e)) {
    trySendMessage(chatInput);
    return;
  }

  chatInput.value += e.key;
};

chatForm.onsubmit = (e) => {
  e.preventDefault();
  trySendMessage(chatInput);
};

export {};
