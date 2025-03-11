import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  await connectDB();

  const { name, email, phone, subject, message_body } = req.body;

  if (!name || !email || !phone || !subject || !message_body) {
    return res.status(400).json({
      message:
        "Missing required fields: name, email, phone, subject, or message_body",
    });
  }

  try {
    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      return res
        .status(409)
        .json({ message: "Email already exists. Please use a unique email." });
    }

    const newContact = new Contact({
      name,
      email,
      phone,
      subject,
      message_body,
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
