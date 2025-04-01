import { User } from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "failed", message: "Erorr to connecting to DB" });
  }

  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res
      .status(404)
      .json({ status: "failed", message: "User doesnt exist!" });
  }

  if (req.method === "POST") {
    const { name, lastName, password } = req.body;
    const isValid = await verifyPassword(password, user.password);
    if (!isValid) {
      return res
        .status(422)
        .json({ status: "failed", message: "password is incorrect!" });
    }

    user.name = name;
    user.lastName = lastName;
    await user.save();
    return res
      .status(200)
      .json({ status: "success", message: "profile details changed!" });
  }
}
