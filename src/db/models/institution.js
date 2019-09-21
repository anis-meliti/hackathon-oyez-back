import mongoose from 'mongoose';

const institutionSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    location: { type: String, required: true },
    rating: String,
    review: String,
    tags: String,
    description: String,
    link: String,
    visite: Number,
  },
  {
    collection: 'institutions',
    timestamps: true,
  }
);

export default mongoose.model('institution', institutionSchema);
