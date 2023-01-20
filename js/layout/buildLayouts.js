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
    <div>
      <svg
        data-test="check"
        style="cursor: pointer"
        width="13"
        height="11"
        viewBox="0 0 13 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 2L4.7 9L2 6.375"
          stroke="#28BB25"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </label>`;
}

const layoutBuilder = { buildMessageLayout, buildContactRadioLayout };

export { layoutBuilder };
