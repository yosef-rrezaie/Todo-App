import ProfilePage from "@/components/layout/templates/ProfilePage";
import { User } from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getSession } from "next-auth/react";

function Profile({ data }) {
  return <ProfilePage data={data} />;
}

export default Profile;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
      },
    };
  }

  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "failed", message: "Erorr to connecting to DB" });
  }

  const user = await User.findOne({ email: session.user.email });
  const userParse = JSON.parse(JSON.stringify(user));
  return {
    props: { data : userParse },
  };
}
