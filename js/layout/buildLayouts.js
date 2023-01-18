function buildMessageLayout(message) {
  const { from, to, type, text, time } = message;
  return `
    <div class="message ${type}">
        <p>
            <span class="time">(${time})</span>
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

export { buildMessageLayout };
