/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import {
  createProject,
  deleteProject,
  getAllProjects,
  getProjectById,
  updateProject,
} from './project.services';

export async function handleAllGetProjects(req: Request, res: Response, next: NextFunction) {
  try {
    const projects = await getAllProjects();
    return res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function handleGetProject(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  try {
    const project = await getProjectById(id);
    if (!project) {
      return res.status(404).json({ message: 'project not found' });
    }
    return res.status(200).json(project);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function handleCreateProject(req: Request, res: Response, next: NextFunction) {
  const data = req.body;
  try {
    const project = await createProject(data);
    return res.status(201).json(project);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleUpdateProject(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const data = req.body;
  const product = await updateProject(id, data);
  if (!product) {
    return res.status(404).json({ message: 'Project not found' });
  }
  return res.status(200).json(product);
}

export async function handleDeleteProject(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  try {
    await deleteProject(id);
    return res.status(200).json({ message: 'Project deleted' });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
