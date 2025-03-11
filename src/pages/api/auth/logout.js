export default function handler(req, res) {
  if (req.method === "POST") {
    res.setHeader(
      "Set-Cookie",
      "token=; Max-Age=0; Path=/; HttpOnly; SameSite=Strict"
    );
    res.status(200).json({ success: true, message: "Logged out successfully" });
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
