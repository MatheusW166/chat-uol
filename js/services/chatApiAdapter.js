const baseUrl = "https://mock-api.driven.com.br/api/v6/uol";

const chat = {
  joinChat: async (user) => {
    try {
      const res = await axios.post(baseUrl + "/participants", { ...user });
      return res.data;
    } catch (err) {
      if (err.response.status == 400) {
        return -1;
      }
      console.log(`Deu ruim no joinChat rapaz\n${err}`);
      return {};
    }
  },
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
