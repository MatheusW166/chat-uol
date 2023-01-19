import { logIn } from "../chat/loginChat.js";

const loginForm = document.querySelector(".login form");
const nameInput = loginForm.querySelector("input");

nameInput.oninput = () => nameInput.classList.remove("error");

loginForm.onsubmit = async (e) => {
  e.preventDefault();
  logIn(nameInput);
};
