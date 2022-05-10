import { encryptPassword, verifyPassword } from '../helpers/encrypt';
import { generateJWT } from '../helpers/jwt';
import User from '../models/User';

export const existEmail = async (email: string): Promise<Boolean> => {
  const userByEmail = await User.findOne({ email });
  return !!userByEmail;
};

export const createUser = async ({
  email,
  password,
  name,
}: { email: string, password: string, name: string }) => {
  const passwordEncrypted = encryptPassword(password);
  const newUser = new User({
    email,
    password: passwordEncrypted,
    name,
  });
  await newUser.save();

  return newUser;
};

export const login = async (email: string, password: string) => {
  const userByEmail = await User.findOne({ email });
  if (!userByEmail) return null;

  const isPasswordValid = verifyPassword(userByEmail.password, password);
  if (!isPasswordValid) return null;

  return userByEmail;
};

export const revalidateToken = async (payloadToken: any) => {
  const newToken = await generateJWT({ id: payloadToken.id });
  const user = await User.findById(payloadToken.id);

  return { user, token: newToken };
};
