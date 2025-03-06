import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    date: { type: Date, default: Date.now },
    authorName: { type: String, required: true },
    category: { type: String, required: true },
    tags: { type: [String], default: [] },
    title: { type: String, required: true },
    metaDescription: { type: String },
    excerpt: { type: String },
    content: { type: String, required: true },
    featuredImage: { type: String },
    imageWidth: { type: Number },
    imageHeight: { type: Number },
    slug: { type: String, required: true, unique: true },
    quote: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
