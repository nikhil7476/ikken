import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    author: { type: String, required: true },
    tag: { type: [String], default: [] },
    title: { type: String, required: true },
    slug: { type: String, unique: true, required: true },
    date: { type: Date, default: Date.now },
    quote: { type: String },
    excerpt: { type: String },
    content: { type: String, required: true },
    image: { type: String },
    imageWidth: { type: Number },
    imageHeight: { type: Number },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
