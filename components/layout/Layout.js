import Link from "next/link";
import { VscListSelection } from "react-icons/vsc";
import { CiSquarePlus } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

function Layout({ children }) {
  return (
    <div className="container">
      <header>
        <p>555 Todo App</p>
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
