import { Router } from 'express';
import {
  handleAllGetMessages,
  handleCreateMessage,
  handleDeleteMessage,
  handleGetMessage,
  handleUpdateMessage,
} from './message.controller';

const router = Router();

router.get('/', handleAllGetMessages);
router.get('/:id', handleGetMessage);
router.post('/', handleCreateMessage);
router.patch('/:id', handleUpdateMessage);
router.delete('/:id', handleDeleteMessage);

export default router;
