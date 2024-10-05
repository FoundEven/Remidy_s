import { Link, useLocation } from "react-router-dom";

const Nav = ({ isVisible }) => {
  const currentPage = useLocation().pathname;

  return (
    <nav
      className={
        isVisible ? "flex border border-black bg-emerald-100 p-2" : "hidden border border-black lg:block bg-emerald-100 p-2"
      }
    >
      <ul
        id="navbar"
        className="flex flex-col items-center gap-3 lg:gap-0 lg:flex-row justify-evenly text-neutral-950 text-3xl lg:text-xl font-medium w-full"
      >
        <li
          className={
            currentPage === "/"
              ? "text-neutral-950"
              : "hover:text-neutral-950 duration-200"
          }
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={
            currentPage === "/categories/Comics"
              ? "text-neutral-950"
              : "hover:text-neutral-950 duration-200"
          }
        >
          <Link to="/Skincare">Skincare</Link>
        </li>
        <li
          className={
            currentPage === "/categories/Board-Games"
              ? "text-neutral-950"
              : "hover:text-neutral-950 duration-200"
          }
        >
          <Link to="/Bodycare">Bodycare</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
