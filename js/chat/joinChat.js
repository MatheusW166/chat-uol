import { config } from "./chatConfigs.js";
import { chat } from "../services/chatApiAdapter.js";
import { isError } from "../errors/errors.js";
import { loadChat } from "./chat.js";

const loginScreen = document.querySelector(".login");
const loginForm = loginScreen.querySelector("form");
const loginLoading = loginScreen.querySelector(".loading");
const nameInput = loginForm["user-name"];
const chatScreen = document.querySelector(".chat");

function toggleLoading() {
  loginForm.classList.toggle("hidden");
  loginLoading.classList.toggle("hidden");
}

nameInput.oninput = () => nameInput.classList.remove("error");

loginForm.onsubmit = async (e) => {
  e.preventDefault();
  const userName = nameInput.value;

  if (!userName?.trim()) {
    nameInput.classList.add("error");
    alert("Coloque um nome válido.");
    return;
  }

  const myUser = { name: userName };
  toggleLoading();
  const response = await chat.joinChat(myUser);
  toggleLoading();

  if (isError(response)) {
    nameInput.classList.add("error");
    alert(response.error);
    return;
  }

  config.setUser(myUser);
  loginScreen.classList.add("hidden");
  chatScreen.classList.remove("hidden");
  loadChat(myUser);
};

export {};
