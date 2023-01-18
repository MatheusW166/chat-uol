const baseUrl = "https://mock-api.driven.com.br/api/v6/uol";

const chat = {
  joinChat: (user) => {},
  refreshStatus: (user) => {},
  getAllUsers: async () => {
    try {
      const res = await axios.get(baseUrl + "/participants");
      return res.data;
    } catch (err) {
      console.log(`Deu ruim no getAllUsers rapaz\n${err}`);
      return [];
    }
  },
  getAllMessages: async () => {
    try {
      const res = await axios.get(baseUrl + "/messages");
      return res.data;
    } catch (err) {
      console.log(`Deu ruim no getAllMessages rapaz\n${err}`);
      return [];
    }
  },
  sendMessage: (message) => {},
};

export { chat };
