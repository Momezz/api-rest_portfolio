import {
  Schema, model, Document,
} from 'mongoose';

export interface StudyDocument extends Document {
    obtainedTitle: String,
    image: String,
    endingYear: Number,
    institute: String
  }

const StudySchema = new Schema({
  obtainedTitle: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  endingYear: {
    type: String,
    required: true,
  },
  institute: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

const Study = model<StudyDocument>('Study', StudySchema);

export default Study;
