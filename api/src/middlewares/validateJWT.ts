import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { config } from '../config';

export const validateJWT = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('x-token');

    if (!token) {
      return res.status(401).json({
        ok: false,
        msg: 'JWT is required',
      });
    }

    const secret = config.app.secretJWT;

    if (!secret) {
      console.log('SECRET_JWT environment variable is required');
      return res.status(500).json({
        ok: false,
        msg: 'Internal Error',
      });
    }

    // @ts-ignore
    req.payloadToken = jwt.verify(token, secret);

    next();
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'JWT is invalid',
    });
  }
};
