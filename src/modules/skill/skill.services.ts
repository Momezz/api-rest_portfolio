/* eslint-disable no-shadow */
import Skill, { SkillDocument } from './skill.model';

export function getAllSkills() {
  return Skill.find();
}

export function getSkillById(id: string) {
  const skill = Skill.findById(id);
  return skill;
}

export function createSkill(skill: SkillDocument) {
  return Skill.create(skill);
}

export function updateSkill(id: string, skill: SkillDocument) {
  const updateSkill = Skill.findByIdAndUpdate(id, skill, { new: true });
  return updateSkill;
}

export function deleteSkill(id: string) {
  const deleteSkill = Skill.findByIdAndDelete(id);
  return deleteSkill;
}
