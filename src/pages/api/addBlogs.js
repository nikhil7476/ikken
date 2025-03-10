import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  await connectDB();

  const {
    author,
    tag,
    title,
    slug,
    date,
    quote,
    excerpt,
    content,
    image,
    imageWidth,
    imageHeight,
  } = req.body;

  if (!author || !title || !slug || !content) {
    return res.status(400).json({
      message: "Missing required fields: author, title, slug, or content",
    });
  }

  try {
    const existingBlog = await Blog.findOne({ slug });
    if (existingBlog) {
      return res
        .status(409)
        .json({ message: "Slug already exists. Please use a unique slug." });
    }

    const newBlog = new Blog({
      author,
      tag: tag || [],
      title,
      slug,
      date: date ? new Date(date) : undefined,
      quote,
      excerpt,
      content,
      image,
      imageWidth: imageWidth ? Number(imageWidth) : undefined,
      imageHeight: imageHeight ? Number(imageHeight) : undefined,
    });

    await newBlog.save();

    return res.status(201).json({ success: true, data: newBlog });
  } catch (err) {
    console.error("Error creating blog post:", err);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
}
