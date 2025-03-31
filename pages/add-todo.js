import AddTodoPage from "@/components/layout/templates/AddTodoPage";
import { getSession } from "next-auth/react";
import React from "react";

function AddTodo({ session }) {
  return <AddTodoPage session={session} />;
}

export default AddTodo;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  return {
    props: { session },
  };
}
