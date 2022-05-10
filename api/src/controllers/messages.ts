import { Request, Response } from 'express';
import { Router } from 'express';
import { param } from 'express-validator';

import { getMessagesByUser } from '../services/messages';
import { validateFields } from '../middlewares/validateFields';
import { validateJWT } from '../middlewares/validateJWT';

const router = Router();

//Get Messages by User
router.get('/:from', [
  validateJWT,
  param('from', 'The param from need to be a mongoID').isMongoId(),
  validateFields,
], async (req: Request, res: Response) => {
  // @ts-ignore
  const idUser = req.payloadToken.id;
  const messagesFrom = req.params.from;

  try {
    const messages = await getMessagesByUser(idUser, messagesFrom);

    res.json({
      ok: true,
      messages,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Internal Error',
    });
  }
});

export default router;
