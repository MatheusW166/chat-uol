import { chat } from "../services/chatApiAdapter.js";
import { buildMessageLayout } from "../layout/buildLayouts.js";

function insertMessagesAndScrollBottom(messages) {
  const container = document.querySelector(".messages-container");
  container.innerHTML = messages;
  window.scrollTo(0, document.body.scrollHeight);
}

async function refreshAndInsertMessages() {
  const messages = await chat.getAllMessages();
  const list = messages.reduce(
    (prev, curr) => prev + buildMessageLayout(curr),
    ""
  );
  insertMessagesAndScrollBottom(list);
}

export { refreshAndInsertMessages };
