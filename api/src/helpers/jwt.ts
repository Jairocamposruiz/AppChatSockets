import jwt from 'jsonwebtoken';

import { config } from '../config';

export const generateJWT = (payload: { [key: string]: string | number }) => {
  const secret = config.app.secretJWT;
  if (!secret) throw new Error('There is not SECRET_JWT environment variable');

  return new Promise((resolve, reject) => {
    jwt.sign(payload, secret, {
      expiresIn: '24h',
    }, (error, token) => {
      if (error) {
        console.log(error);
        reject('Error JWT can not be generated');
      }
      resolve(token);
    });
  });
};

export const verifyJWT = (token: string) => {
  const secret = config.app.secretJWT;
  if (!secret) throw new Error('There is not SECRET_JWT environment variable');

  try {
    // @ts-ignore
    const { id } = jwt.verify(token, secret);
    return [true, id];
  } catch (error) {
    return [false, null];
  }
};
