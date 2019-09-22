import mongoose from 'mongoose';

const institutionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    rating: String,
    review: String,
    tags: [String],
    description: String,
    url: String,
    visite: Number,
    user: String,
    logo: String,
    phone: String,
  },
  {
    collection: 'institutions',
    timestamps: true,
  }
);

export default mongoose.model('institution', institutionSchema);
