import {
  messagesRefreshSchedule,
  participantsRefreshSchedule,
} from "./chat/chat.js";

await messagesRefreshSchedule();
await participantsRefreshSchedule();

export {};
