function buildMessageLayout(message) {
  const { from, to, type, text, time } = message;
  return `
    <div class="message ${type}">
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
  return `
  <label class="clickable">
    <input value="${name}" type="radio" name="radio-contact" />
    <ion-icon name="person-circle"></ion-icon>
    <span>${name}</span>
    <object data="img/checkmark.svg"></object>
  </label>`;
}

const layoutBuilder = { buildMessageLayout, buildContactRadioLayout };

export { layoutBuilder };
