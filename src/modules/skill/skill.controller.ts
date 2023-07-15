/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import {
  createSkill,
  deleteSkill,
  getAllSkills,
  getSkillById,
  updateSkill,
} from './skill.services';

export async function handleAllGetSkills(req: Request, res: Response, next: NextFunction) {
  try {
    const skills = await getAllSkills();
    return res.status(200).json(skills);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function handleGetSkill(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  try {
    const skill = await getSkillById(id);
    if (!skill) {
      return res.status(404).json({ message: 'skill not found' });
    }
    return res.status(200).json(skill);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function handleCreateSkill(req: Request, res: Response, next: NextFunction) {
  const data = req.body;
  try {
    const skill = await createSkill(data);
    return res.status(201).json(skill);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleUpdateSkill(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const data = req.body;
  const product = await updateSkill(id, data);
  if (!product) {
    return res.status(404).json({ message: 'Skill not found' });
  }
  return res.status(200).json(product);
}

export async function handleDeleteSkill(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  try {
    await deleteSkill(id);
    return res.status(200).json({ message: 'Skill deleted' });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
