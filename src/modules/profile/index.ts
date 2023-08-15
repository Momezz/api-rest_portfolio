import { Router } from 'express';
import {
  handleAllGetProfiles,
  handleCreateProfile,
  handleDeleteProfile,
  handleGetProfile,
  handleUpdateProfile,
} from './profile.controller';

const router = Router();

router.get('/', handleAllGetProfiles);
router.get('/:id', handleGetProfile);
router.post('/', handleCreateProfile);
router.patch('/:id', handleUpdateProfile);
router.delete('/:id', handleDeleteProfile);

export default router;
