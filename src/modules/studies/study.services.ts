/* eslint-disable no-shadow */
import Study, { StudyDocument } from './study.model';

export function getAllStudys() {
  return Study.find();
}

export function getStudyById(id: string) {
  const study = Study.findById(id);
  return study;
}

export function createStudy(study: StudyDocument) {
  return Study.create(study);
}

export function updateStudy(id: string, study: StudyDocument) {
  const updateStudy = Study.findByIdAndUpdate(id, study, { new: true });
  return updateStudy;
}

export function deleteStudy(id: string) {
  const deleteStudy = Study.findByIdAndDelete(id);
  return deleteStudy;
}
