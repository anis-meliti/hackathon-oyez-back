import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    login: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: String,
    studyField: String,
    role: { type: String, default: 'client' },
  },
  {
    collection: 'users',
    timestamps: true,
  }
);

export default mongoose.model('user', userSchema);
