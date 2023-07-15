import {
  Schema, model, Document,
} from 'mongoose';

export interface SkillDocument extends Document {
  id: String,
  nameTechnology: String,
  image: String,
}

const SkillSchema = new Schema({
  nameTechnology: {
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
