import connectDB from "@/lib/mongodb";
import UserData from "@/models/UserData";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    await connectDB();
    const userDatas = await UserData.find();
    return res.status(200).json({ success: true, data: userDatas });
  } catch (error) {
    console.error("❌ Error fetching user details:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
