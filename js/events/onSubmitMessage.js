import { trySendMessage } from "../chat/sendMessage.js";

const chatForm = document.querySelector(".chat form");
const chatInput = chatForm["user-message"];

function enterPressed(event) {
  return event.key === "Enter";
}

function insertCharAtPosition(text, char, pos) {
  return `${text.substring(0, pos)}${char}${text.substring(pos)}`;
}

function updateInputCursorPosition(chatInput, cursorIndex) {
  chatInput.setSelectionRange(cursorIndex + 1, cursorIndex + 1);
}

function updateInputValue(chatInput, key) {
  const cursorIndex = chatInput.selectionStart;
  chatInput.value = insertCharAtPosition(chatInput.value, key, cursorIndex);
  updateInputCursorPosition(chatInput, cursorIndex);
}

chatInput.onkeypress = (e) => {
  e.preventDefault();

  if (enterPressed(e)) {
    trySendMessage(chatInput);
    return;
  }

  updateInputValue(chatInput, e.key);
};

chatForm.onsubmit = (e) => {
  e.preventDefault();
  trySendMessage(chatInput);
  chatInput.focus();
};

export {};
