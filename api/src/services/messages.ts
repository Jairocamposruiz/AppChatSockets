import Message from '../models/Message';

export const getMessagesByUser = async (idUser: string, messagesFrom: string) => {
  const messages = await Message.find({
    $or: [
      { from: idUser, to: messagesFrom },
      { from: messagesFrom, to: idUser },
    ],
  })
    .sort({ createdAt: 'asc' })
    .populate('from', ['name']);
  return messages;
};

export const saveMessage = async (message: { from: { name: string, uid: string }, to: string, message: string }) => {
  try {
    const newMessage = new Message({
      from: message.from.uid,
      to: message.to,
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
};
