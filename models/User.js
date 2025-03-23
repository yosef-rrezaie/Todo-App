import { model, models, Schema } from "mongoose";
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: String,
  lastName: String,
  todos: [{ title: String, status: String }],
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
});

export const User = models.User || model("User", userSchema);

