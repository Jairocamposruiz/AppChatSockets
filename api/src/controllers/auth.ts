import { Router } from 'express';
import { body } from 'express-validator';

import { createUser, login, revalidateToken } from '../services/auth';
import { validateFields } from '../middlewares/validateFields';
import { validateJWT } from '../middlewares/validateJWT';

const router = Router();

//New Users
router.post('/new', [
  body('name', 'Name is required and need to be more than 2 characters').isString().isLength({ min: 2 }),
  body('email', 'Email is required').isEmail(),
  body('password', 'Password is required and need to be more than 6 characters').isString().isLength({ min: 6 }),
  validateFields,
], createUser);

//Login
router.post('/login', [
  body('email', 'Email is required').isEmail(),
  body('password', 'Password is required').isString(),
  validateFields,
], login);

//Revalidate Token
router.get('/renew', [
  validateJWT,
], revalidateToken);

export default router;
