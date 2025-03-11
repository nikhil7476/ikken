import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    await connectDB();
    const contacts = await Contact.find();
    return res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    console.error("❌ Error fetching blogs:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
