import { Router } from 'express';
import {
  handleAllGetSkills,
  handleCreateSkill,
  handleDeleteSkill,
  handleGetSkill,
  handleUpdateSkill,
} from './skill.controller';

const router = Router();

router.get('/', handleAllGetSkills);
router.get('/:id', handleGetSkill);
router.post('/', handleCreateSkill);
router.patch('/:id', handleUpdateSkill);
router.delete('/:id', handleDeleteSkill);

export default router;
