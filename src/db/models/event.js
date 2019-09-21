import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: Date, required: true },
    description: String
  },
  {
    collection: "events",
    timestamps: true
  }
);

export default mongoose.model("event", eventSchema);