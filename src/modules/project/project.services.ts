/* eslint-disable no-shadow */
import Project, { ProjectDocument } from './project.model';

export function getAllProjects() {
  return Project.find();
}

export function getProjectById(id: string) {
  const project = Project.findById(id);
  return project;
}

export function createProject(project: ProjectDocument) {
  return Project.create(project);
}

export function updateProject(id: string, project: ProjectDocument) {
  const updateProject = Project.findByIdAndUpdate(id, project, { new: true });
  return updateProject;
}

export function deleteProject(id: string) {
  const deleteProject = Project.findByIdAndDelete(id);
  return deleteProject;
}
