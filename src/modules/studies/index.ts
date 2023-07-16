import { Router } from 'express';
import {
  handleAllGetStudys,
  handleCreateStudy,
  handleDeleteStudy,
  handleGetStudy,
  handleUpdateStudy,
} from './study.controller';

const router = Router();

router.get('/', handleAllGetStudys);
router.get('/:id', handleGetStudy);
router.post('/', handleCreateStudy);
router.patch('/:id', handleUpdateStudy);
router.delete('/:id', handleDeleteStudy);

export default router;
