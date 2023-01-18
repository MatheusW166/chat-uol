const config = {
  type: "message",
  to: "Todos",
  setType: (type) => (config.type = type),
  setTo: (to) => (config.to = to),
};

export { config };
