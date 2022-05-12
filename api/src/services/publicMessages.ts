import PublicMessage from '../models/PublicMessage';

export const getMessagesByChat = async (chatId: string) => {
  const messages = await PublicMessage.find({ chat: chatId }).sort({ createAt: 'asc' });
  return messages;
};

export const savePublicMessage = async (message: { from: string, chat: string, message: string }) => {
  try {
    const newMessage = new PublicMessage(message);
    await newMessage.save();

    return newMessage;
  } catch (error) {
    console.log(error);
    return false;
  }
}
