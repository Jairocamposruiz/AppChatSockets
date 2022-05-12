import PublicMessage from '../models/PublicMessage';

export const getMessagesByChat = async (chatId: string) => {
  const messages = await PublicMessage.find({ to: chatId })
    .sort({ createAt: 'asc' })
    .populate('from', ['name']);
  return messages;
};

export const savePublicMessage = async (message: { from: { name: string, uid: string }, chat: string, message: string }) => {
  try {
    const newMessage = new PublicMessage({
      from: message.from.uid,
      to: message.chat,
      message: message.message
    });
    await newMessage.save();
    return {
      to: newMessage.to,
      from: {
        uid: message.from.uid,
        name: message.from.name
      },
      message: newMessage.message,
      _id: newMessage._id,
      createdAt: new Date(),
    };
  } catch (error) {
    console.log(error);
    return false;
  }
}
