import { Request, Response } from 'express';
import { Router } from 'express';
import { param } from 'express-validator';

import { getMessagesByChat } from '../services/publicMessages';
import { validateFields } from '../middlewares/validateFields';
import { validateJWT } from '../middlewares/validateJWT';

const router = Router();

router.get('/:chat', [
  validateJWT,
  param('chat', 'The param chat need to be a mongoId').isMongoId(),
  validateFields,
], async (req: Request, res: Response) => {
  const chat = req.params.chat;

  try {
    const messages = await getMessagesByChat(chat);

    res.json({
      ok: true,
      messages,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Internal Error',
    });
  }
});

export default router;
