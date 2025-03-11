import mongoose from "mongoose";

const UserDataSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    subject: { type: String, required: true },
    message_content: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.UserData ||
  mongoose.model("UserData", UserDataSchema);
