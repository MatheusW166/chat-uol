const baseUrl = "https://mock-api.driven.com.br/api/v6/uol";

class ChatApiAdapter {
  joinChat = (user) => {};
  getAllUsers = async () => {
    try {
      const res = await axios.get(baseUrl + "/participants");
      return res.data;
    } catch (err) {
      console.log(`Deu ruim no getAllUsers rapaz\n${err}`);
      return [];
    }
  };
  getAllMessages = async () => {
    try {
      const res = await axios.get(baseUrl + "/messages");
      return res.data;
    } catch (err) {
      console.log(`Deu ruim no getAllMessages rapaz\n${err}`);
      return [];
    }
  };
  sendMessage = (message) => {};
  refreshStatus = (user) => {};
}

const chat = new ChatApiAdapter();

export { chat };
