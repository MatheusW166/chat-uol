import { config } from "./chatConfigs.js";
import { refreshAndInsertMessages } from "./chat.js";
import { chat } from "../services/chatApiAdapter.js";
import { isError } from "../errors/errors.js";

function buildMessage(messageText, settings) {
  const { user, to, type } = settings;
  if (!user?.name) return {};
  return {
    from: user.name,
    to: to,
    text: messageText,
    type: type,
  };
}

function cleanInput(input) {
  input.value = "";
}

async function trySendMessage(chatInput) {
  const messageText = chatInput.value?.trim();
  cleanInput(chatInput);

  if (!messageText) {
    return;
  }
  const message = buildMessage(messageText, config);
  const res = await chat.sendMessage(message);

  if (isError(res)) {
    window.location.reload();
    return;
  }

  refreshAndInsertMessages();
}

export { trySendMessage };
