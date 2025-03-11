import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await connectDB();
  } catch (error) {
    console.error("Database connection error:", error);
    return res
      .status(500)
      .json({ message: "Database connection failed", error: error.message });
  }

  const { name, email, phone, subject, message_content } = req.body; // Updated key to match schema

  if (!name || !email || !phone || !subject || !message_content) {
    return res.status(400).json({
      message:
        "Missing required fields: name, email, phone, subject, or message_content",
    });
  }

  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      subject,
      message_content,
    });

    await newContact.save();

    return res.status(201).json({ success: true, data: newContact });
  } catch (err) {
    console.error("Error creating contact post:", err);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
}
