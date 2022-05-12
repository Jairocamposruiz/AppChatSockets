import { encryptPassword, verifyPassword } from '../helpers/encrypt';
import { generateJWT } from '../helpers/jwt';
import User from '../models/User';

export const existEmail = async (email: string): Promise<Boolean> => {
  const userByEmail = await User.findOne({ email });
  return !!userByEmail;
};

export const existName = async (name: string): Promise<Boolean> => {
  const userByName = await User.findOne({ name });
  return !!userByName;
}

export const createUser = async ({
  password,
  name,
}: { password: string, name: string }) => {
  const passwordEncrypted = encryptPassword(password);
  const newUser = new User({
    password: passwordEncrypted,
    name: name,
  });
  await newUser.save();

  return newUser;
};

export const login = async (name: string, password: string) => {
  const userByName = await User.findOne({ name: name });
  if (!userByName) return null;

  const isPasswordValid = verifyPassword(userByName.password, password);
  if (!isPasswordValid) return null;

  return userByName;
};

export const revalidateToken = async (payloadToken: any) => {
  const newToken = await generateJWT({ id: payloadToken.id });
  const user = await User.findById(payloadToken.id);

  return { user, token: newToken };
};
