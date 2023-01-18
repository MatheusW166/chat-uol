import { chat } from "../services/chatApiAdapter.js";
import { buildMessageLayout } from "../layout/buildLayouts.js";

async function refreshAndInsertMessages() {
  const container = document.querySelector(".messages-container");
  const messages = await chat.getAllMessages();
  const list = messages.reduce(
    (prev, curr) => prev + buildMessageLayout(curr),
    ""
  );
  container.innerHTML = list;
}

export { refreshAndInsertMessages };
