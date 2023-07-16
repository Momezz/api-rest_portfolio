import {
  Schema, model, Document,
} from 'mongoose';

export interface ProjectDocument extends Document {
  images?: Array<String>,
  title: string;
  repositoryLink: string;
  pageLink: string;
  description: string;
  technologies: Array<String>,
}

const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
  },
  repositoryLink: {
    type: String,
    required: true,
  },
  pageLink: {
    type: String,
    requires: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: {
    type: Array,
  },
}, {
  timestamps: true,
  versionKey: false,
});

const Project = model<ProjectDocument>('Project', ProjectSchema);

export default Project;
