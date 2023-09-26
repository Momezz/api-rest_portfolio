import {
  Schema, model, Document,
} from 'mongoose';
import { SkillType } from './skill.types';

export interface SkillDocument extends Document {
  id: String,
  ability: SkillType,
  level: Number,
  image: String,
  classAbility: String,
  description: String
}

const SkillSchema = new Schema({
  ability: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  image: {
    type: String,
    required: true,
  },
  classAbility: {
    type: String,
    enum: ['TECHNICAL', 'SOFT'],
    required: true,
  },
  description: {
    type: String,
    maxlength: 100,
  },
}, {
  timestamps: true,
  versionKey: false,
});

const Skill = model<SkillDocument>('Skill', SkillSchema);

export default Skill;
