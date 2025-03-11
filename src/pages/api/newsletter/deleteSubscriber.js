import connectDB from "@/lib/mongodb";
import Subscriber from "@/models/Subscriber";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  await connectDB();

  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  try {
    const deletedSubscriber = await Subscriber.findOneAndDelete({ email });

    if (!deletedSubscriber) {
      return res
        .status(404)
        .json({ message: "Email not found in the subscription list" });
    }

    return res.status(200).json({ message: "Email unsubscribed successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
}
