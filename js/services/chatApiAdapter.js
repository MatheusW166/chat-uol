import { getError } from "../errors/errors.js";

const baseUrl = "https://mock-api.driven.com.br/api/v6/uol";

const chat = {
  joinChat: async (user) => {
    try {
      const res = await axios.post(baseUrl + "/participants", { ...user });
      return res.data;
    } catch (err) {
      return getError(err.response.status);
    }
  },
  refreshStatus: async (user) => {
    try {
      const res = await axios.post(baseUrl + "/status", { ...user });
      return res.data;
    } catch (err) {
      return getError(err.response.status);
    }
  },
  getAllUsers: async () => {
    try {
      const res = await axios.get(baseUrl + "/participants");
      return res.data;
    } catch (err) {
      return getError(err.response.status);
    }
  },
  getAllMessages: async () => {
    try {
      const res = await axios.get(baseUrl + "/messages");
      return res.data;
    } catch (err) {
      return getError(err.response.status);
    }
  },
  sendMessage: async (message) => {
    try {
      const res = await axios.post(baseUrl + "/messages", { ...message });
      return res.data;
    } catch (err) {
      return getError(err.response.status);
    }
  },
};

export { chat };
