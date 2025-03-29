import { User } from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  session: { strategy: "jwt" },
  Providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;

        try {
          await connectDB();
        } catch (error) {
          console.log(error);
          throw new Error("Erorr to connecting to DB");
        }

        if (!email || !password) {
          throw new Error("Invalid data");
        }

        const user = await User.findOne({ email: email });
        if (!user) throw new Error("User doesnt exist");
        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error("Username or Password is uncorrect");
        return { email };
      },
    }),
  ],
};
export default NextAuth(authOptions);
