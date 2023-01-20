const MSG_TYPES = {
  message: "message",
  private_message: "private_message",
  status: "status",
};
const TO_TODOS = "Todos";

const config = {
  user: null,
  type: MSG_TYPES.message,
  to: TO_TODOS,
  setType: (type) => {
    if (config.to === TO_TODOS) {
      config.type = MSG_TYPES.message;
      return;
    }
    config.type = type;
  },
  setTo: (to) => {
    if (to === TO_TODOS) {
      config.type = MSG_TYPES.message;
    }
    config.to = to;
  },
  setUser: (user) => (config.user = user),
};

export { config, TO_TODOS };
