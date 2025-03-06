import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }

  try {
    await connectDB(); // Connect to MongoDB

    const {
      date,
      authorName,
      category,
      tags,
      title,
      metaDescription,
      excerpt,
      content,
      featuredImage,
      imageWidth,
      imageHeight,
      slug,
      quote,
    } = req.body;

    // Validate required fields
    if (!title || !content || !slug || !category || !authorName) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    // Create a new blog document
    const newBlog = new Blog({
      date: date || new Date(),
      authorName,
      category,
      tags: tags || [],
      title,
      metaDescription,
      excerpt,
      content,
      featuredImage,
      imageWidth,
      imageHeight,
      slug,
      quote,
    });

    await newBlog.save(); // Save to the database

    return res
      .status(201)
      .json({
        success: true,
        message: "Blog uploaded successfully",
        data: newBlog,
      });
  } catch (error) {
    console.error("Error uploading blog:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
}
