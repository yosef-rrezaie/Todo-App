import HomePage from "@/components/layout/templates/HomePage";
import { User } from "@/models/User";
import sortTodos from "@/utils/sortTodos";
import { getSession } from "next-auth/react";

export default function Home({ data }) {
  return <HomePage data={data} />;
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
      },
    };
  }

  const user = await User.findOne({ email: session.user.email });
  const userParse = JSON.parse(JSON.stringify(user));
  const data = sortTodos(userParse.todos);
  return {
    props: { data },
  };
}
