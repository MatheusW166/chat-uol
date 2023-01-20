import { config } from "../chat/chatConfigs.js";

function buildMessageLayout(message) {
  const { from, to, type, text, time } = message;
  return `
    <div data-test="message" class="message ${type}">
        <p>
            <span class="time">(${time.substring(0, 5)})</span>
            <span class="user">${from}</span>
            ${getToAndToPrefix(type, to)}
            ${text}
        </p>
    </div>
  `;
}

function getToAndToPrefix(type, to) {
  let prefix = "para";
  if (type === "status") {
    return "";
  }
  if (type === "private_message") {
    prefix = "reservadamente para";
  }
  return `
    <span class="to-prefix">${prefix}</span>
    <span class="to">${to}:</span>
    `;
}

function buildContactRadioLayout(user) {
  const { name } = user;
  if (name === config.user?.name) return "";
  return `
  <label data-test="participant" class="clickable">
    <input value="${name}" type="radio" name="radio-contact" />
    <ion-icon name="person-circle"></ion-icon>
    <span>${name}</span>
    <ion-icon data-test="check" name="checkmark"></ion-icon>
  </label>`;
}

const layoutBuilder = { buildMessageLayout, buildContactRadioLayout };

export { layoutBuilder };
