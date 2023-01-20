import { chat } from "../services/chatApiAdapter.js";
import { layoutBuilder } from "../layout/buildLayouts.js";
import { onClickAsideOptions } from "../events/index.js";
import { isError } from "../errors/errors.js";
import { config } from "./chatConfigs.js";

// Messages
const MESSAGE_REFRESH_INTERVAL = 3 * 1000;
function insertMessagesAndScrollBottom(messages, scroll = true) {
  const container = document.querySelector(".messages-container");
  container.innerHTML = messages;
  if (scroll) window.scrollTo(0, document.body.scrollHeight);
}

async function refreshAndInsertMessages(scroll) {
  const messages = await chat.getAllMessages(config.user);
  const allMessagesConcat = messages.reduce(
    (prev, curr) => prev + layoutBuilder.buildMessageLayout(curr),
    ""
  );
  insertMessagesAndScrollBottom(allMessagesConcat, scroll);
}

function messagesRefreshSchedule() {
  refreshAndInsertMessages();
  setInterval(() => refreshAndInsertMessages(false), MESSAGE_REFRESH_INTERVAL);
}
// END messages

// Participants
const PARTICIPANTS_REFRESH_INTERVAL = 10 * 1000;
function insertParticipants(participants) {
  const participantsContainer = document.querySelector("aside .contacts");
  participantsContainer.innerHTML = participants;
}

async function refreshAndInsertParticipants() {
  const users = await chat.getAllUsers();
  const allUsersConcat = users.reduce(
    (prev, curr) => prev + layoutBuilder.buildContactRadioLayout(curr),
    ""
  );
  insertParticipants(allUsersConcat);
  onClickAsideOptions();
}

function participantsRefreshSchedule() {
  refreshAndInsertParticipants();
  setInterval(
    () => refreshAndInsertParticipants(),
    PARTICIPANTS_REFRESH_INTERVAL
  );
}
// END Participants

// Keep conection
const KEEP_CONECTION_INTERVAL = 5 * 1000;
async function keepConection(user) {
  const res = await chat.refreshStatus(user);
  if (isError(res)) {
    alert("Você foi desconectado do chat, saindo...");
    window.location.reload();
  }
}

function keepConectionSchedule(user) {
  keepConection(user);
  setInterval(() => keepConection(user), KEEP_CONECTION_INTERVAL);
}
// END Keep conection

function loadChat(user) {
  participantsRefreshSchedule();
  messagesRefreshSchedule();
  keepConectionSchedule(user);
}

export { loadChat, refreshAndInsertMessages };
