import {
  Schema, model, Document,
} from 'mongoose';

export interface ProjectDocument extends Document {
    image: string;
    title: string;
    repositoryLink: string;
    description: string;
    tecnologias: string[];
}

const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  repositoryLink: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

const Project = model<ProjectDocument>('Project', ProjectSchema);

export default Project;
