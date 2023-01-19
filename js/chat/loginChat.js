import { config } from "./chatConfigs.js";
import { chat } from "../services/chatApiAdapter.js";
import { isError } from "../errors/errors.js";
import { loadChat } from "./chat.js";

const loginScreen = document.querySelector(".login");
const chatScreen = document.querySelector(".chat");

function toggleLoginLoading() {
  const loginForm = loginScreen.querySelector("form");
  const loginLoading = loginScreen.querySelector(".loading");
  loginForm.classList.toggle("hidden");
  loginLoading.classList.toggle("hidden");
}

function isNameValid(name = "") {
  return name.trim().length > 0;
}

function addErrorClass(element) {
  element.classList.add("error");
}

function hideElement(element) {
  element.classList.add("hidden");
}

function showElement(element) {
  element.classList.remove("hidden");
}

async function tryLogin(nameInput) {
  const userName = nameInput.value;

  if (!isNameValid(userName)) {
    addErrorClass(nameInput);
    alert("Coloque um nome válido.");
    return;
  }

  const myUser = { name: userName };
  toggleLoginLoading();
  const response = await chat.joinChat(myUser);
  toggleLoginLoading();

  if (isError(response)) {
    addErrorClass(nameInput);
    alert(response.error);
    return;
  }

  config.setUser(myUser);
  hideElement(loginScreen);
  showElement(chatScreen);
  loadChat(myUser);
}

export { tryLogin };
