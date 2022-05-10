import { Request, Response } from 'express';

import { encryptPassword, verifyPassword } from '../helpers/encrypt';
import { generateJWT } from '../helpers/jwt';
import User from '../models/User';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;

    const existEmail = await User.findOne({ email });
    if (existEmail) {
      return res.status(400).json({
        ok: false,
        msg: 'Email already exist',
      });
    }

    const passwordEncrypted = encryptPassword(password);
    const newUser = new User({
      email,
      password: passwordEncrypted,
      name,
    });
    await newUser.save();

    const token = await generateJWT({
      id: newUser.id,
    });

    res.json({
      ok: true,
      user: newUser,
      token,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Internal error',
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const userByEmail = await User.findOne({ email });
    if (!userByEmail) {
      console.log('Fail email');
      return res.status(400).json({
        ok: false,
        msg: 'Authentication error',
      });
    }

    const isPasswordValid = verifyPassword(userByEmail.password, password);
    if (!isPasswordValid) {
      console.log('Fail password');
      return res.status(400).json({
        ok: false,
        msg: 'Authentication error',
      });
    }

    const token = await generateJWT({
      id: userByEmail.id,
    });

    res.json({
      ok: true,
      user: userByEmail,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Internal error',
    });
  }
};

export const revalidateToken = async (req: Request, res: Response) => {
  try {
    // @ts-ignore
    const payloadToken = req.payloadToken;
    const newToken = await generateJWT({ id: payloadToken.id });
    const user = await User.findById(payloadToken.id);

    res.json({
      ok: true,
      user,
      token: newToken,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Internal error',
    });
  }
};
