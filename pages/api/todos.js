import { User } from "@/models/User";
import connectDB from "@/utils/connectDB";
import sortTodos from "@/utils/sortTodos";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "failed", message: "Erorr to connecting to DB" });
  }

  // const session = await getSession({ req });
  // if (!session) {
  //   return res
  //     .status(401)
  //     .json({ status: "failed", message: "You are not logged in!" });
  // }

  const user = await User.findOne({ email: req.body.email });
  if (req.method === "POST") {
    const { title, status } = req.body;
    if (!title || !status) {
      return res
        .status(422)
        .json({ status: "failed", message: "Invalid data!" });
    }
    user.todos.push({ title, status });
    await user.save();
    return res.status(201).json({ status: "success", message: "Todo created" });
  } else if (req.method === "GET") {
    const sortedData = sortTodos(user.todos);
    res.status(200).json({ status: "success", data: { todos: sortedData } });
  }
}
