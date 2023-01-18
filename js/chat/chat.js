import { chat } from "../services/chatApiAdapter.js";
import {
  buildContactRadioLayout,
  buildMessageLayout,
} from "../layout/buildLayouts.js";

// Messages
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

// END messages

// Participants
function insertParticipants(participants) {
  const participantsContainer = document.querySelector("aside .contacts");
  participantsContainer.innerHTML = participants;
}

function refreshAndInsertParticipants() {
  chat
    .getAllUsers()
    .then((users) => {
      const allUsersConcat = users.reduce(
        (prev, curr) => prev + buildContactRadioLayout(curr),
        ""
      );
      insertParticipants(allUsersConcat);
    })
    .catch((err) => console.log(err));
}

refreshAndInsertParticipants();
setInterval(() => refreshAndInsertParticipants(), 10000);
// END Participants

export {};
