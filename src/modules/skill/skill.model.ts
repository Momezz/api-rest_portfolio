import {
  Schema, model, Document,
} from 'mongoose';
import { SkillType } from './skill.types';

export interface SkillDocument extends Document {
  id: String,
  ability: SkillType,
  classAbility: String,
  image: String,
}

const SkillSchema = new Schema({
  ability: {
    type: String,
    required: true,
  },

  classAbility: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

const Skill = model<SkillDocument>('Skill', SkillSchema);

export default Skill;
