/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import {
  createStudy,
  deleteStudy,
  getAllStudys,
  getStudyById,
  updateStudy,
} from './study.services';

export async function handleAllGetStudys(req: Request, res: Response, next: NextFunction) {
  try {
    const studies = await getAllStudys();
    return res.status(200).json(studies);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function handleGetStudy(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  try {
    const study = await getStudyById(id);
    if (!study) {
      return res.status(404).json({ message: 'study not found' });
    }
    return res.status(200).json(study);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function handleCreateStudy(req: Request, res: Response, next: NextFunction) {
  const data = req.body;
  try {
    const study = await createStudy(data);
    return res.status(201).json(study);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleUpdateStudy(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const data = req.body;
  const product = await updateStudy(id, data);
  if (!product) {
    return res.status(404).json({ message: 'Study not found' });
  }
  return res.status(200).json(product);
}

export async function handleDeleteStudy(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  try {
    await deleteStudy(id);
    return res.status(200).json({ message: 'Study deleted' });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
