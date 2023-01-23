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

const CLASS_CHECKED = "checked";
function unCheckAll(elements) {
  elements.forEach((e) => e.classList.remove(CLASS_CHECKED));
}
function addCheckClass(element) {
  element.classList.add(CLASS_CHECKED);
}
function hasCheckedClass(element) {
  return Array.from(element.classList).includes(CLASS_CHECKED);
}
function convertType(type) {
  if (type === "Reservadamente") {
    return "private_message";
  }
  return "message";
}
function getSpanInnerHtmlFromParent(parent) {
  return parent.querySelector("span").innerHTML;
}

function onClickAsideOptions() {
  const optionsMessageTo = document.querySelectorAll(
    "aside .options:nth-of-type(1) .radio-container .option"
  );
  const optionsMessageType = document.querySelectorAll(
    "aside .options:nth-of-type(2) .radio-container .option"
  );

  optionsMessageTo.forEach((option) => {
    option.onclick = (e) => {
      const element = e.currentTarget;
      const to = getSpanInnerHtmlFromParent(element);
      if (hasCheckedClass(element)) return;
      unCheckAll(optionsMessageTo);
      addCheckClass(element);
      config.setTo(to);
      setMessageSettingsDescription({ to: to, type: config.type });
    };
    if (config.to === getSpanInnerHtmlFromParent(option)) {
      unCheckAll(optionsMessageTo);
      addCheckClass(option);
    }
  });

  optionsMessageType.forEach((option) => {
    option.onclick = (e) => {
      const element = e.currentTarget;
      const type = convertType(getSpanInnerHtmlFromParent(element));
      if (hasCheckedClass(element)) return;
      unCheckAll(optionsMessageType);
      addCheckClass(element);
      config.setType(type);
      setMessageSettingsDescription({ to: config.to, type: type });
    };
    if (config.type === convertType(getSpanInnerHtmlFromParent(option))) {
      unCheckAll(optionsMessageType);
      addCheckClass(option);
    }
  });
}

export { onClickAsideOptions };
