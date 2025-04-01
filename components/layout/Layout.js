import Link from "next/link";
import { VscListSelection } from "react-icons/vsc";
import { CiSquarePlus } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { FiLogOut } from "react-icons/fi";

function Layout({ children }) {
  const { status } = useSession();

  function logoutHandler() {
    signOut();
  }

  return (
    <div className="container">
      <header>
        <p>555 Todo App</p>
        {status === "authenticated" ? (
          <button onClick={logoutHandler}>
            Logout <FiLogOut />
          </button>
        ) : null}
      </header>
      <div className="container--main">
        <aside>
          <p>Welcome</p>
          <ul>
            <li>
              <VscListSelection />
              <Link href="/">Todos</Link>
            </li>
            <li>
              <CiSquarePlus />
              <Link href="/add-todo">Add Todos</Link>
            </li>
            <li>
              <CgProfile />
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
        </aside>
        <section>{children}</section>
      </div>
    </div>
  );
}

export default Layout;
