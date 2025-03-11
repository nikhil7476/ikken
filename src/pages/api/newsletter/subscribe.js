import connectDB from "@/lib/mongodb";
import Subscriber from "@/models/Subscriber";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  await connectDB();

  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  try {
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(409).json({ message: "Email Already Subscribed !!" });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    return res
      .status(201)
      .json({ message: "Email Subscribed Successfully !!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
}
