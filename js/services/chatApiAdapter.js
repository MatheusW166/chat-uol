const baseUrl = "https://mock-api.driven.com.br/api/v6/uol";

class ChatApiAdapter {
  joinChat = (user) => {};
  getAllUsers = () => {};
  getAllMessages = async () => {
    try {
      const res = await axios.get(baseUrl + "/messages");
      return res.data;
    } catch (err) {
      console.log(`Deu ruim rapaz\n${err}`);
      return [];
    }
  };
  sendMessage = (message) => {};
  refreshStatus = (user) => {};
}

const chat = new ChatApiAdapter();

export { chat };
