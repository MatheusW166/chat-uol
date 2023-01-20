import { config, MSG_TYPES, TO_TODOS } from "../chat/chatConfigs.js";

function getMessageTypeDescription(type) {
  if (type === MSG_TYPES.private_message) {
    return "reservadamente";
  }
  return "público";
}

const toType = document.querySelector(".submission-form .to-type");
function setMessageSettingsDescription({ to, type }) {
  if (to === TO_TODOS) {
    toType.classList.add("hidden");
    return;
  }
  toType.classList.remove("hidden");
  toType.innerHTML = `Enviando para ${to} (${getMessageTypeDescription(type)})`;
}

function onClickAsideOptions() {
  const inputsMessageTo = document.querySelectorAll(
    "aside .options:nth-of-type(1) .radio-container input"
  );
  const inputsMessageType = document.querySelectorAll(
    "aside .options:nth-of-type(2) .radio-container input"
  );

  inputsMessageTo.forEach((input) => {
    input.onchange = (e) => {
      if (e.target.checked) config.setTo(e.target.value);
      setMessageSettingsDescription({ to: e.target.value, type: config.type });
    };
    input.checked = input.value === config.to;
  });

  inputsMessageType.forEach((input) => {
    input.onchange = (e) => {
      if (e.target.checked) config.setType(e.target.value);
      setMessageSettingsDescription({ to: config.to, type: e.target.value });
    };
    input.checked = input.value === config.type;
  });
}

export { onClickAsideOptions };
