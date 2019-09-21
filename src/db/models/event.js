import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: String, required: true },
    description: String,
  },
  {
    collection: 'event',
    timestamps: true,
  }
);

export default mongoose.model('event', eventSchema);
