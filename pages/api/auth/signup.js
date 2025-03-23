import { User } from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  if (req.method !== "POST") return;

  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "failed", message: "Erorr to connecting to DB" });
  }

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ status: "failed", message: "Invalid data" });
  }

  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return res
      .status(422)
      .json({ status: "failed", message: "User exists already !" });
  }

  const hashedpassword = await hashPassword(password);
  const newUser = await User.create({ email: email, password: hashedpassword });
  res
    .status(201)
    .json({ status: "succcess", message: "Created user!", data: newUser });
}
