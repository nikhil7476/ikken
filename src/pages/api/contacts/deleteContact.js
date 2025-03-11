import connectDB from "@/lib/mongodb";
import UserData from "@/models/UserData";

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
          message: "Email is required to delete a User details",
        });
    }

    const deletedUserData = await UserData.findOneAndDelete({ email });

    if (!deletedUserData) {
      return res
        .status(404)
        .json({ success: false, message: "User details not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "User details deleted successfully" });
  } catch (error) {
    console.error("Error deleting user details:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
}
