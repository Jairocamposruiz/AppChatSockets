import User from '../models/User';

export const connectUser = async (id: string) => {
  try {
    const user = await User.findById(id);
    if (!user) return;
    user.online = true;
    await user.save();
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const disconnectUser = async (id: string) => {
  try {
    const user = await User.findById(id);
    if (!user) return;
    user.online = false;
    await user.save();
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  const users = await User
    .find()
    .sort('-online');

  return users;
};
