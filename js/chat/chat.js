import { chat } from "../services/chatApiAdapter.js";
import { buildMessageLayout } from "../layout/buildLayouts.js";

function insertMessagesAndScrollBottom(messages, scroll = true) {
  const container = document.querySelector(".messages-container");
  container.innerHTML = messages;
  if (scroll) window.scrollTo(0, document.body.scrollHeight);
}

function refreshAndInsertMessages(scroll) {
  chat
    .getAllMessages()
    .then((messages) => {
      const allMessagesConcat = messages.reduce(
        (prev, curr) => prev + buildMessageLayout(curr),
        ""
      );
      insertMessagesAndScrollBottom(allMessagesConcat, scroll);
    })
    .catch((err) => console.log(err));
}

refreshAndInsertMessages();
setInterval(() => refreshAndInsertMessages(false), 3000);

export {};
