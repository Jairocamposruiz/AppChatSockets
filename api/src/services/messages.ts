import Message from '../models/Message';

export const getMessagesByUser = async (idUser: string, messagesFrom: string) => {

  const messages = await Message.find({
    $or: [
      { from: idUser, to: messagesFrom },
      { from: messagesFrom, to: idUser },
    ],
  })
    .sort({ createdAt: 'asc' });

  return messages;
};

export const saveMessage = async (message: { from: string, to: string, message: string } ) => {
  try {
    const newMessage = new Message(message);
    await newMessage.save();

    return newMessage;
  } catch (error) {
    console.log(error);
    return false;
  }
}
