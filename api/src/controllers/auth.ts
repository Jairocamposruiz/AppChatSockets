import { Request, Response, Router } from 'express';
import { body } from 'express-validator';
import { generateJWT } from '../helpers/jwt';

import { createUser, login, revalidateToken, existEmail } from '../services/auth';
import { validateFields } from '../middlewares/validateFields';
import { validateJWT } from '../middlewares/validateJWT';

const router = Router();

//New Users
router.post('/new', [
  body('name', 'Name is required and need to be more than 2 characters').isString().isLength({ min: 2 }),
  body('email', 'Email is required').isEmail(),
  body('password', 'Password is required and need to be more than 6 characters').isString().isLength({ min: 6 }),
  validateFields,
], async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  try {
    const emailAlreadyExist = await existEmail(email);

    if (emailAlreadyExist) {
      return res.status(400).json({
        ok: false,
        msg: 'Email already exist',
      });
    }

    const user = await createUser({ email, password, name });
    const token = await generateJWT({
      id: user.id,
    });

    res.status(201).json({
      ok: true,
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Internal error',
    });
  }
});

//Login
router.post('/login', [
  body('email', 'Email is required').isEmail(),
  body('password', 'Password is required').isString(),
  validateFields,
], async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await login(email, password);

    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: 'Email or password incorrect',
      });
    }

    const token = await generateJWT({
      id: user.id,
    });

    res.json({
      ok: true,
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Internal error',
    });
  }
});

//Revalidate Token
router.get('/renew', [
  validateJWT,
], async (req: Request, res: Response) => {
  // @ts-ignore
  const payloadToken = req.payloadToken;

  try {
    const { user, token } = await revalidateToken(payloadToken.id);

    res.json({
      ok: true,
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Internal error',
    });
  }
});

export default router;
