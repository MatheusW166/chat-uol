import { chat } from "../services/chatApiAdapter.js";
import {
  buildContactRadioLayout,
  buildMessageLayout,
} from "../layout/buildLayouts.js";
import { onClickAsideOptions } from "../events/index.js";

// Messages
function insertMessagesAndScrollBottom(messages, scroll = true) {
  const container = document.querySelector(".messages-container");
  container.innerHTML = messages;
  if (scroll) window.scrollTo(0, document.body.scrollHeight);
}

async function refreshAndInsertMessages(scroll) {
  const messages = await chat.getAllMessages();
  const allMessagesConcat = messages.reduce(
    (prev, curr) => prev + buildMessageLayout(curr),
    ""
  );
  insertMessagesAndScrollBottom(allMessagesConcat, scroll);
}

function messagesRefreshSchedule() {
  refreshAndInsertMessages();
  setInterval(() => refreshAndInsertMessages(false), 3000);
}
// END messages

// Participants
function insertParticipants(participants) {
  const participantsContainer = document.querySelector("aside .contacts");
  participantsContainer.innerHTML = participants;
}

async function refreshAndInsertParticipants() {
  const users = await chat.getAllUsers();
  const allUsersConcat = users.reduce(
    (prev, curr) => prev + buildContactRadioLayout(curr),
    ""
  );
  insertParticipants(allUsersConcat);
  onClickAsideOptions();
}

function participantsRefreshSchedule() {
  refreshAndInsertParticipants();
  setInterval(() => refreshAndInsertParticipants(), 10000);
}
// END Participants

export { participantsRefreshSchedule, messagesRefreshSchedule };
