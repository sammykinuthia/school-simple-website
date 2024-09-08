import React from "react";

const NavBar = () => {
  return (
    <div className="nav-parent w-full container">
      <nav className="nav flex w-full justify-between items-center ">
        <a className="brand" href="/">
          Brandname
        </a>
        <ul className="flex items-center gap-1">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        {/* actions */}
        <div className="flex items-center justify-between">
          <a className="text-accent btn" href="#">
            Login
          </a>
          <a
            className="btn bg-accent text-white flex justify-between items-center "
            href="#"
          >
            JOIN US
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="ml"
            >
              <path
                fill="currentColor"
                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.042-.018a.75.75 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06"
              />
            </svg>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
