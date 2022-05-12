import Chat from '../models/Chat';

export const getChats = async () => {
  const chats = await Chat.find().sort('createAt');
  return chats;
}

export const createChat = async (chat: { name: string, icon: string }) => {
  try {
    const newChat = new Chat(chat);
    await newChat.save();

    return newChat;
  } catch (error) {
    console.log(error);
    return false;
  }
}
