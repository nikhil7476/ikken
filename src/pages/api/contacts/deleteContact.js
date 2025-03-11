import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }

  try {
    await connectDB();

    const { email } = req.query;
    if (!email) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Email is required to delete a contact",
        });
    }

    const deletedContact = await Contact.findOneAndDelete({ email });

    if (!deletedContact) {
      return res
        .status(404)
        .json({ success: false, message: "Contact details not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Contact details deleted successfully" });
  } catch (error) {
    console.error("Error deleting contact detail:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
}
