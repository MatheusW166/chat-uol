const config = {
  user: null,
  type: "message",
  to: "Todos",
  setType: (type) => (config.type = type),
  setTo: (to) => (config.to = to),
  setUser: (user) => (config.user = user),
};

export { config };
