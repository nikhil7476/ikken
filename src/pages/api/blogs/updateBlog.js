import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  await connectDB();

  const {
    slug,
    author,
    tag,
    title,
    date,
    quote,
    excerpt,
    content,
    image,
    imageWidth,
    imageHeight,
  } = req.body;

  if (!slug) {
    return res.status(400).json({ message: "Missing required field: slug" });
  }

  try {
    const updatedBlog = await Blog.findOneAndUpdate(
      { slug },
      {
        ...(author !== undefined && { author }),
        ...(tag !== undefined && { tag }),
        ...(title !== undefined && { title }),
        ...(date !== undefined && { date }),
        ...(quote !== undefined && { quote }),
        ...(excerpt !== undefined && { excerpt }),
        ...(content !== undefined && { content }),
        ...(image !== undefined && { image }),
        ...(imageWidth !== undefined && { imageWidth: Number(imageWidth) }),
        ...(imageHeight !== undefined && { imageHeight: Number(imageHeight) }),
      },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    return res.status(200).json({ success: true, data: updatedBlog });
  } catch (err) {
    console.error("Error updating blog post:", err);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
}
