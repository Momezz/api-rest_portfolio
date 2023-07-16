import { Router } from 'express';
import {
  handleAllGetProjects,
  handleCreateProject,
  handleDeleteProject,
  handleGetProject,
  handleUpdateProject,
} from './project.controller';

const router = Router();

router.get('/', handleAllGetProjects);
router.get('/:id', handleGetProject);
router.post('/', handleCreateProject);
router.patch('/:id', handleUpdateProject);
router.delete('/:id', handleDeleteProject);

export default router;
