import { config } from "../chat/chatConfigs.js";

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
    };
    input.checked = input.value === config.to;
  });

  inputsMessageType.forEach((input) => {
    input.onchange = (e) => {
      if (e.target.checked) config.setType(e.target.value);
    };
  });
}

export { onClickAsideOptions };
